import { Reaction } from "@codecs/Reaction"
import { Reply } from "@codecs/Reply"
import type { ContentTypeId, Conversation } from "@xmtp/xmtp-js"
import { useCallback } from "react"

const useSendMessage = (conversation?: Conversation) => {
    const sendMessage = useCallback(
        async (
            message: string | Reply | Reaction,
            contentType?: ContentTypeId,
            contentFallback?: string
        ): Promise<boolean> => {
            if (!conversation) {
                return false
            }
            try {
                await conversation.send(message, {
                    contentType,
                    contentFallback,
                })
            } catch (error) {
                console.log({ error })
                return false
            }
            return true
        },
        [conversation]
    )

    return { sendMessage }
}

export default useSendMessage
