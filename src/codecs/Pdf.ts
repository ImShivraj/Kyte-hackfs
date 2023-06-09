import { ContentTypeId, ContentCodec, EncodedContent } from '@xmtp/xmtp-js'

// xmtp.org/pdf
//
// This content type is used for a pdf content represented by a string
export const ContentTypePdf = new ContentTypeId({
  authorityId: 'xmtp.org',
  typeId: 'pdf',
  versionMajor: 1,
  versionMinor: 0,
})

export enum Encoding {
  utf8 = 'UTF-8',
}

export class PdfCodec implements ContentCodec<string> {
  get contentType(): ContentTypeId {
    return ContentTypePdf
  }

  encode(content: string): EncodedContent {
    return {
      type: ContentTypePdf,
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
