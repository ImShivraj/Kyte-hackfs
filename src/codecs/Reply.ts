import { ContentCodec, ContentTypeId, EncodedContent } from "@xmtp/xmtp-js"
import { CodecRegistry } from "@xmtp/xmtp-js/dist/types/src/MessageContent"

export const ContentTypeReply = new ContentTypeId({
    authorityId: "xmtp.org",
    typeId: "reply",
    versionMajor: 1,
    versionMinor: 0,
})

export type Reply = {
    replyContentTypeId: string
    messageContentTypeId: string
    replyContent: string
    replyMessageId: string
    replySenderAddress: string
    messageContent: string
}

export class ReplyCodec implements ContentCodec<Reply> {
    get contentType(): ContentTypeId {
        return ContentTypeReply
    }

    encode(content: Reply, registry: CodecRegistry): EncodedContent {
        return {
            type: ContentTypeReply,
            parameters: {
                replyContentTypeId: content.replyContentTypeId,
                replyContent: content.replyContent,
                replyMessageId: content.replyMessageId,
                replySenderAddress: content.replySenderAddress,
                messageContentTypeId: content.messageContentTypeId
            },
            content: new TextEncoder().encode(content.messageContent),
        }
    }

    decode(content: EncodedContent, registry: CodecRegistry): Reply {
        return {
            replyContentTypeId: content.parameters.replyContentTypeId,
            replyContent: content.parameters.replyContent,
            replyMessageId: content.parameters.replyMessageId,
            replySenderAddress: content.parameters.replySenderAddress,
            messageContentTypeId: content.parameters.messageContentTypeId,
            messageContent: new TextDecoder().decode(content.content),
        }
    }
}
