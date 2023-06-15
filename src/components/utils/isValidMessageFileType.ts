import {
    ALLOWED_IMAGE_TYPES,
    ALLOWED_AUDIO_TYPES,
    ALLOWED_VIDEO_TYPES,
    ALLOWED_DOCUMENT_TYPES,
} from "@constants/index"

const isValidMessageFileType = (
    file: File,
    category: "audio" | "video" | "image" | "document" | null = null
): boolean => {
    if (category) {
        switch (category) {
            case "image":
                return ALLOWED_IMAGE_TYPES.includes(file?.type)

            case "video":
                return ALLOWED_VIDEO_TYPES.includes(file?.type)

            case "audio":
                return ALLOWED_AUDIO_TYPES.includes(file?.type)

            case "document":
                return ALLOWED_DOCUMENT_TYPES.includes(file?.type)

            default:
                return false
        }
    } else {
        return ALLOWED_IMAGE_TYPES.concat(
            ALLOWED_AUDIO_TYPES,
            ALLOWED_VIDEO_TYPES,
            ALLOWED_DOCUMENT_TYPES
        ).includes(file?.type)
    }
}

export default isValidMessageFileType
