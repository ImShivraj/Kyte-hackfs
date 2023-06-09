import type { DecodedMessage } from "@xmtp/xmtp-js"

const getUniqueMessages = (msgObj: DecodedMessage[]): DecodedMessage[] => {
    // creating a map of id : item
    // get the values out of the map
    const uniqueMessages = [
        ...Array.from(
            new Map(msgObj.map((item) => [item["id"], item])).values()
        ),
    ]
    uniqueMessages.sort((a, b) => {
        return (b.sent?.getTime() ?? 0) - (a.sent?.getTime() ?? 0)
    })

    return uniqueMessages ?? []
}

export default getUniqueMessages
