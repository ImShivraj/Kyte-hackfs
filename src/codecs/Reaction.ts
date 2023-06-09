import { ContentCodec, ContentTypeId, EncodedContent } from "@xmtp/xmtp-js"
import { CodecRegistry } from "@xmtp/xmtp-js/dist/types/src/MessageContent"

export const ContentTypeReaction = new ContentTypeId({
    authorityId: "xmtp.org",
    typeId: "reaction",
    versionMajor: 1,
    versionMinor: 0,
})

export type Reaction = {
    messageId: string
    senderAddress: string
    messageContent: string
    contentTypeId: string
    reaction: string
}

export class ReactionCodec implements ContentCodec<Reaction> {
    get contentType(): ContentTypeId {
        return ContentTypeReaction
    }

    encode(content: Reaction, registry: CodecRegistry): EncodedContent {
        return {
            type: ContentTypeReaction,
            parameters: {
                messageId: content.messageId,
                senderAddress: content.senderAddress,
                messageContent: content.messageContent,
                contentTypeId: content.contentTypeId,
            },
            content: new TextEncoder().encode(content.reaction),
        }
    }

    decode(content: EncodedContent, registry: CodecRegistry): Reaction {
        return {
            messageId: content.parameters.messageId,
            senderAddress: content.parameters.senderAddress,
            messageContent: content.parameters.messageContent,
            contentTypeId: content.parameters.contentTypeId,
            reaction: new TextDecoder().decode(content.content),
        }
    }
}
