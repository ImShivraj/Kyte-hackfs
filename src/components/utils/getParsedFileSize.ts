const units = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

const getParsedFileSize = (bytes: number, points: number = 2) => {
    if (Math.abs(bytes) < 1024) return bytes + " B"

    let power = -1
    let r = 10 ** points

    do {
        bytes = bytes / 1024
        power++
    } while (
        Math.round(Math.abs(bytes) * r) / r >= 1024 &&
        power < units.length - 1
    )

    return bytes.toFixed(points) + " " + units[power]
}

export default getParsedFileSize
