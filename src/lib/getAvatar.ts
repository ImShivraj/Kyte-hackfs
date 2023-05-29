import { ZERO_ADDRESS } from "@constants/index"

import getIPFSLink from "./getIPFSLink"
import getStampFyiURL from "./getStampFyiURL"

/**
 *
 * @param profile - Profile object
 * @param isCdn - To passthrough image proxy
 * @returns avatar image url
 */

const getAvatar = (profile: any): string => {
    const result = getIPFSLink(
        profile?.picture?.original?.url ??
            profile?.picture?.uri ??
            getStampFyiURL(profile?.ownedBy ?? ZERO_ADDRESS)
    )
    return result
}

export default getAvatar
