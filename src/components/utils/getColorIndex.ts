import { AUDIO_BG_COlORS } from "@constants/index"

export const getColorIndex = (
    files: File[],
    file: File,
    fileType: "audio" | "video" | "image"
): string => {
    const filteredFiles = files.filter(
        (item) => item?.type.split("/")[0] === fileType
    )

    return AUDIO_BG_COlORS[
        filteredFiles.indexOf(file) % AUDIO_BG_COlORS?.length
    ]
}

export default getColorIndex
