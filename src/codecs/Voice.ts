import { ContentTypeId, ContentCodec, EncodedContent } from '@xmtp/xmtp-js'

// xmtp.org/voice
//
// This content type is used for a voice message content represented by a simple string
export const ContentTypeVoice = new ContentTypeId({
  authorityId: 'xmtp.org',
  typeId: 'voice',
  versionMajor: 1,
  versionMinor: 0,
})

export enum Encoding {
  utf8 = 'UTF-8',
}

export class VoiceCodec implements ContentCodec<string> {
  get contentType(): ContentTypeId {
    return ContentTypeVoice
  }

  encode(content: string): EncodedContent {
    return {
      type: ContentTypeVoice,
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
