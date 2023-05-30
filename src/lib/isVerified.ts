import { mainnetVerified, testnetVerified } from "@constants/verified"

/**
 *
 * @param id - Profile id
 * @returns is verified or not
 */
const isVerified = (id: string): boolean => mainnetVerified.includes(id)

export default isVerified
