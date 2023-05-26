import packageJson from "../../package.json"

// Localstorage keys
export const KONNEKTR_KEYS = {
    KONNEKTR_STORE: "konnektr.store",
    TRANSACTION_STORE: "transaction.store",
    TIMELINE_STORE: "timeline.store",
    MESSAGE_STORE: "message.store",
    SELECTED_LOCALE: "selected.locale",
}

export const IPFS_GATEWAY = "https://lens.infura-ipfs.io/ipfs/"

//todo -> change to another url
export const MEDIA_PROXY_URL = "https://media.lenster.xyz"

export const AVATAR = "avatar"

export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000"

export const XMTP_ENV =
    process.env.NEXT_PUBLIC_ENVIRONMENT === "mainnet" ? "production" : "dev"

export const APP_NAME = "Konnektr"

export const APP_VERSION = packageJson.version

export const XMTP_PREFIX = "lens.dev/dm"
export const SCROLL_THRESHOLD = 0.99

export const HANDLE_SUFFIX = ".lens"

export const LENSPROTOCOL_HANDLE = "lensprotocol"

export const ERROR_MESSAGE = "Something went wrong!"

export const POLYGONSCAN_URL = "https://polygonscan.com"

export const SIGN_WALLET = "Please sign in your wallet."

export const RARIBLE_URL = "https://rarible.com"

export const STATIC_ASSETS_URL = "https://assets.lenster.xyz"
export const STATIC_IMAGES_URL = `${STATIC_ASSETS_URL}/images`

export const ALLOWED_IMAGE_TYPES = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/gif",
]
export const ALLOWED_AUDIO_TYPES = [
    "audio/mpeg",
    "audio/wav",
    "audio/mp3",
    "audio/aac",
    "audio/ogg",
    "audio/webm",
    "audio/flac",
]

export const ALLOWED_VIDEO_TYPES = [
    "video/mp4",
    "video/mpeg",
    "video/ogg",
    "video/webm",
    "video/quicktime",
]

export const ALLOWED_DOCUMENT_TYPES = [
    "application/pdf",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "text/csv",
]
export const ATTACHMENT = "attachment"

export const COVER = "cover"

export const MESSAGE_PAGE_LIMIT = 15

export const MAX_MESSAGE_FILE_SIZE_BYTES = 15000000
export const MAX_TOTAL_MESSAGE_FILES_SIZE_BYTES = 100000000
export const MAX_MESSAGE_FILE_SIZE_DROPZONE = 15 * 1024 ** 2
export const MAX_TOTAL_MESSAGE_FILES_SIZE_DROPZONE = 100 * 1024 ** 2

export const AUDIO_BG_COlORS = [
    "#9313F8",
    "#14D690",
    "#008FFF",
    "#FE06C7",
    "#14D6D6",
]
