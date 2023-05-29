import axios from "axios"
import { KyteAttachment } from "src/types"
import { v4 as uuid } from "uuid"

/**
 *
 * @param data - Data to upload to IPFS
 * @returns attachment array
 */
const uploadToIPFS = async (data: any): Promise<KyteAttachment[]> => {
    try {
        return []
    } catch {
        return []
    }
}

/**
 *
 * @param file - File object
 * @returns attachment or null
 */
export const uploadFileToIPFS = async (
    file: File
): Promise<KyteAttachment | null> => {
    try {
        return null
    } catch {
        return null
    }
}

export default uploadToIPFS
