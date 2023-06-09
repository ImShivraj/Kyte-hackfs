import { ContentTypeId, ContentCodec, EncodedContent } from '@xmtp/xmtp-js'

// xmtp.org/audio
//
// This content type is used for a audio content represented by a simple string
export const ContentTypeAudio = new ContentTypeId({
  authorityId: 'xmtp.org',
  typeId: 'audio',
  versionMajor: 1,
  versionMinor: 0,
})

export enum Encoding {
  utf8 = 'UTF-8',
}

export class AudioCodec implements ContentCodec<string> {
  get contentType(): ContentTypeId {
    return ContentTypeAudio
  }

  encode(content: string): EncodedContent {
    return {
      type: ContentTypeAudio,
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
