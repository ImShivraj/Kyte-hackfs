import { ContentTypeId, ContentCodec, EncodedContent } from '@xmtp/xmtp-js'

// xmtp.org/gif
//
// This content type is used for a gif content represented by a simple string
export const ContentTypeGif = new ContentTypeId({
  authorityId: 'xmtp.org',
  typeId: 'gif',
  versionMajor: 1,
  versionMinor: 0,
})

export enum Encoding {
  utf8 = 'UTF-8',
}

export class GifCodec implements ContentCodec<string> {
  get contentType(): ContentTypeId {
    return ContentTypeGif
  }

  encode(content: string): EncodedContent {
    return {
      type: ContentTypeGif,
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
