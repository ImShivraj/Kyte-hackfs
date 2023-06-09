import { ContentTypeId, ContentCodec, EncodedContent } from '@xmtp/xmtp-js'

// xmtp.org/video
//
// This content type is used for a video content represented by a string
export const ContentTypeVideo = new ContentTypeId({
  authorityId: 'xmtp.org',
  typeId: 'video',
  versionMajor: 1,
  versionMinor: 0,
})

export enum Encoding {
  utf8 = 'UTF-8',
}

export class VideoCodec implements ContentCodec<string> {
  get contentType(): ContentTypeId {
    return ContentTypeVideo
  }

  encode(content: string): EncodedContent {
    return {
      type: ContentTypeVideo,
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
