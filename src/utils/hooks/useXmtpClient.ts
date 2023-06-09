import { Client } from "@xmtp/xmtp-js"
import {
    APP_NAME,
    APP_VERSION,
    KONNEKTR_KEYS,
    XMTP_ENV,
} from "@constants/index"
import { useCallback, useEffect, useState } from "react"
import { useAppStore } from "src/store/app"
import { useMessageStore } from "src/store/message"
import { useSigner } from "wagmi"
import { AudioCodec } from "@codecs/Audio"
import { GifCodec } from "@codecs/Gif"
import { ImageCodec } from "@codecs/Image"
import { ReplyCodec } from "@codecs/Reply"
import { StickerCodec } from "@codecs/Sticker"
import { VideoCodec } from "@codecs/Video"
import { DocumentCodec } from "@codecs/Document"
import { ReactionCodec } from "@codecs/Reaction"
import { VoiceCodec } from "@codecs/Voice"

const ENCODING = "binary"

const buildLocalStorageKey = (walletAddress: string) =>
    `xmtp:${XMTP_ENV}:keys:${walletAddress}`

// Decoding keys
const loadKeys = (walletAddress: string): Uint8Array | null => {
    const val = localStorage.getItem(buildLocalStorageKey(walletAddress))
    return val ? Buffer.from(val, ENCODING) : null
}

// Encoding keys
const storeKeys = (walletAddress: string, keys: Uint8Array) => {
    localStorage.setItem(
        buildLocalStorageKey(walletAddress),
        Buffer.from(keys).toString(ENCODING)
    )
}

// Removing Keys
const wipeKeys = (walletAddress: string) => {
    localStorage.removeItem(buildLocalStorageKey(walletAddress))
}

const useXmtpClient = () => {
    const { currentProfile } = useAppStore()
    const { data: signer, isLoading } = useSigner()
    const { client, setClient } = useMessageStore()
    const [awaitingXmtpAuth, setAwaitingXmtpAuth] = useState<boolean>()

    useEffect(() => {
        const initXmtpClient = async (cacheOnly: boolean = false) => {
            if (signer && !client && currentProfile) {
                let keys = loadKeys(await signer.getAddress())
                // if key is not present in local storage
                if (!keys) {
                    if (cacheOnly) {
                        return
                    }
                    setAwaitingXmtpAuth(true)
                    keys = await Client.getKeys(signer, {
                        env: XMTP_ENV,
                        appVersion: APP_NAME + "/" + APP_VERSION,
                    })
                    storeKeys(await signer.getAddress(), keys)
                }

                const xmtp = await Client.create(null, {
                    env: XMTP_ENV,
                    appVersion: APP_NAME + "/" + APP_VERSION,
                    privateKeyOverride: keys,
                    codecs: [
                        new AudioCodec(),
                        new GifCodec(),
                        new ImageCodec(),
                        new ReplyCodec(),
                        new StickerCodec(),
                        new VideoCodec(),
                        new VoiceCodec(),
                        new DocumentCodec(),
                        new ReactionCodec(),
                    ],
                })

                setClient(xmtp)
                setAwaitingXmtpAuth(false)
            } else {
                setAwaitingXmtpAuth(false)
            }
        }

        initXmtpClient()

        if (!signer || !currentProfile) {
            setClient(undefined)
        }
    }, [signer, currentProfile])

    return {
        client: client,
        loading: isLoading || awaitingXmtpAuth,
    }
}

export const useDisconnectXmtp = () => {
    const { data: signer } = useSigner()
    const client = useMessageStore((state) => state.client)
    const setClient = useMessageStore((state) => state.setClient)

    const disconnect = useCallback(async () => {
        if (signer) {
            wipeKeys(await signer.getAddress())
        }

        if (client) {
            // eslint-disable-next-line unicorn/no-useless-undefined
            setClient(undefined)
        }

        localStorage.removeItem(KONNEKTR_KEYS.MESSAGE_STORE)
    }, [signer, client])

    return disconnect
}

export default useXmtpClient
