import { create } from "zustand"
import { persist } from "zustand/middleware"
import { KONNEKTR_KEYS } from "@constants/index"
import { Profile } from "@lens/generated"

export interface AppState {
    profiles: Profile[] | []
    setProfiles: (profiles: Profile[]) => void
    currentProfile: Profile | null
    setCurrentProfile: (currentProfile: Profile | null) => void
    userSigNonce: number
    setUserSigNonce: (userSigNonce: number) => void
    userName: string | null
    setUserName: (userName: string | null) => void
    reset: () => void
}

export const useAppStore = create<AppState>()((set) => ({
    profiles: [],
    setProfiles: (profiles) => set(() => ({ profiles })),
    currentProfile: null,
    setCurrentProfile: (currentProfile) => set(() => ({ currentProfile })),
    userSigNonce: 0,
    setUserSigNonce: (userSigNonce) => set(() => ({ userSigNonce })),
    userName: null,
    setUserName: (userName: string | null) => set(() => ({ userName })),
    reset: () => set(() => ({ profiles: [], currentProfile: null })),
}))

interface AppPersistState {
    profileId: string | null
    setProfileId: (profileId: string | null) => void
    reset: () => void
}

export const useAppPersistStore = create<AppPersistState>()(
    persist(
        (set) => ({
            profileId: null,
            setProfileId: (profileId) => set(() => ({ profileId })),
            reset: () => set(() => ({ profileId: null })),
        }),
        {
            name: KONNEKTR_KEYS.KONNEKTR_STORE,
        }
    )
)
