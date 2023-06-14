import { parseConversationKey } from "@lib/conversationKey"
import { Client } from "@xmtp/xmtp-js"
import { XMTP_ENV } from "@constants/index"
import { useEffect, useState } from "react"
import { useAppStore } from "@store/app"
import { useMessageStore } from "@store/message"
import { Profile } from "@gql/generated"
import { is0xAddress } from "../matchers/is0xAddress"

const useGetConversation = (conversationKey: string, profile?: Profile) => {
    const isAddrConvoKey = is0xAddress(conversationKey)

    const client = useMessageStore((state) => state.client)

    const selectedConversation = useMessageStore((state) =>
        state.conversations.get(conversationKey)
    )
    const addConversation = useMessageStore((state) => state.addConversation)

    const currentProfile = useAppStore((state) => state.currentProfile)

    const [missingXmtpAuth, setMissingXmtpAuth] = useState<boolean>()

    const reset = () => {
        setMissingXmtpAuth(false)
    }

    useEffect(() => {
        if ((!isAddrConvoKey && !profile) || !client) {
            return
        }

        if (selectedConversation) {
            setMissingXmtpAuth(false)
            return
        }
        const createNewConversation = async () => {
            const conversationId = isAddrConvoKey
                ? undefined
                : parseConversationKey(conversationKey)?.conversationId

            const canMessage = await Client.canMessage(
                isAddrConvoKey ? conversationKey : profile?.ownedBy,
                {
                    env: XMTP_ENV,
                }
            )
            setMissingXmtpAuth(!canMessage)

            if (!isAddrConvoKey && (!canMessage || !conversationId)) {
                return
            }
            const conversation =
                !isAddrConvoKey && conversationId
                    ? await client.conversations.newConversation(
                          profile?.ownedBy,
                          {
                              conversationId,
                              metadata: {},
                          }
                      )
                    : await client.conversations.newConversation(
                          conversationKey
                      )

            addConversation(conversationKey, conversation)
        }
        createNewConversation()
    }, [profile, selectedConversation, conversationKey, client])

    useEffect(() => {
        if (!currentProfile) {
            reset()
        }
    }, [currentProfile])

    return {
        selectedConversation,
        missingXmtpAuth,
    }
}

export default useGetConversation
