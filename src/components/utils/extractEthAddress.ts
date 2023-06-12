const extractEthAddress = (str: string) => {
    const regex = /(0x[a-fA-F0-9]{40})/g
    const matches = str.match(regex)
    if (matches && matches.length > 0) {
        return matches[0]
    }
    return ""
}

export default extractEthAddress
