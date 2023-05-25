// @ts-ignore
import type { Comment, Mirror, Post } from "lens"

export type KonnektrPublication = Post & Mirror & Comment

export interface KonnektrAttachment {
    item: string
    type: string
    altTag: string
}
export interface NewKonnektrAttachment
    extends Omit<KonnektrAttachment, "item"> {
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
