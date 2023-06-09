import { KONNEKTR_KEYS } from "@constants/index"

const resetAuthData = () => {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
    localStorage.removeItem(KONNEKTR_KEYS.KONNEKTR_STORE)
    localStorage.removeItem(KONNEKTR_KEYS.TRANSACTION_STORE)
    localStorage.removeItem(KONNEKTR_KEYS.TIMELINE_STORE)
    localStorage.removeItem(KONNEKTR_KEYS.MESSAGE_STORE)
}

export default resetAuthData
