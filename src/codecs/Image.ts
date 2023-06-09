import { ContentTypeId, ContentCodec, EncodedContent } from '@xmtp/xmtp-js'

// xmtp.org/image
//
// This content type is used for a image content represented by a string
export const ContentTypeImage = new ContentTypeId({
  authorityId: 'xmtp.org',
  typeId: 'image',
  versionMajor: 1,
  versionMinor: 0,
})

export enum Encoding {
  utf8 = 'UTF-8',
}

export class ImageCodec implements ContentCodec<string> {
  get contentType(): ContentTypeId {
    return ContentTypeImage
  }

  encode(content: string): EncodedContent {
    return {
      type: ContentTypeImage,
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
