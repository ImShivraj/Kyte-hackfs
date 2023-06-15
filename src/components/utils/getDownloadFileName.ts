const getDownloadFileName = (date: Date): string => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1 // add 1 to get 1-12 instead of 0-11
    const day = date.getDate()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day
        .toString()
        .padStart(2, "0")} at ${hours.toString().padStart(2, "0")}.${minutes
        .toString()
        .padStart(2, "0")}.${seconds.toString().padStart(2, "0")}`

    return formattedDate
}

export default getDownloadFileName
