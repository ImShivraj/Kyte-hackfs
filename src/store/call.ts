import { create } from "zustand"

export interface CallState {
    callerName: string | null
    setCallerName: (callerName: string) => void
    callerProfilePic: string | "ADDRESS" | null
    setCallerProfilePic: (callerProfilePic: string) => void

    reset: () => void
}

export const useCallStore = create<CallState>()((set) => ({
    callerName: null,
    setCallerName: (callerName) => set(() => ({ callerName })),
    callerProfilePic: null,
    setCallerProfilePic: (callerProfilePic) =>
        set(() => ({ callerProfilePic })),
    reset: () =>
        set((state) => {
            return {
                ...state,
                callerName: null,
                callerProfilePic: null,
            }
        }),
}))
