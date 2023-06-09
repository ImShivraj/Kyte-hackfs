import { ContentTypeId, ContentCodec, EncodedContent } from '@xmtp/xmtp-js'

// xmtp.org/sticker
//
// This content type is used for a sticker content represented by a string
export const ContentTypeSticker = new ContentTypeId({
  authorityId: 'xmtp.org',
  typeId: 'sticker',
  versionMajor: 1,
  versionMinor: 0,
})

export enum Encoding {
  utf8 = 'UTF-8',
}

export class StickerCodec implements ContentCodec<string> {
  get contentType(): ContentTypeId {
    return ContentTypeSticker
  }

  encode(content: string): EncodedContent {
    return {
      type: ContentTypeSticker,
      parameters: { encoding: Encoding.utf8 },
      content: new TextEncoder().encode(content),
    }
  }

  decode(content: EncodedContent): string {
    const encoding = content.parameters.encoding
    if (encoding && encoding !== Encoding.utf8) {
      throw new Error(`unrecognized encoding ${encoding}`)
    }
    return new TextDecoder().decode(content.content)
  }
}
