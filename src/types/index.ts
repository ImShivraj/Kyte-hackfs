// @ts-ignore
import type { Comment, Mirror, Post } from "lens"

export type KytePublication = Post & Mirror & Comment

export interface KyteAttachment {
    item: string
    type: string
    altTag: string
}
export interface NewKyteAttachment
    extends Omit<KyteAttachment, "item"> {
    id: string
    item?: string
    previewItem?: string
}

export interface FileMetadata {
    name: string
    size: number
    type: string
}

export interface EmbedLink {
    title: null | string
    description: null | string
    site: null | string
    url: null | string
    favicon: string
    thumbnail: null | string
    isSquare: null | string
    html: null | string
}
