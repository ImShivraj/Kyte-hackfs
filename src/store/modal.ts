import { KytePublication } from "src/types"
import { create } from "zustand"
interface ModalState {
    showAuthModal: boolean
    setShowAuthModal: (showAuthModal: boolean) => void
    showReportModal: boolean
    reportPublication: KytePublication | null
    reportConfig: any
    setShowReportModal: (
        showReportModal: boolean,
        reportPublication: KytePublication | null,
        reportConfig?: any
    ) => void
    showStatusModal: boolean
    setShowStatusModal: (showStatusModal: boolean) => void
    showAddStickerModal: boolean
    setShowAddStickerModal: (showStatusModal: boolean) => void
    showSwitchModal: boolean
    setShowSwitchModal: (showStatusModal: boolean) => void
    showCallModal: boolean
    setShowCallModal: (showStatusModal: boolean) => void
}

export const useModalStore = create<ModalState>()((set) => ({
    showAuthModal: false,
    setShowAuthModal: (showAuthModal) => set(() => ({ showAuthModal })),
    showReportModal: false,
    reportPublication: null,
    reportConfig: null,
    setShowReportModal: (showReportModal, reportPublication, reportConfig) =>
        set(() => ({
            showReportModal,
            reportPublication,
            reportConfig,
        })),
    showStatusModal: false,
    setShowStatusModal: (showStatusModal) => set(() => ({ showStatusModal })),
    showAddStickerModal: false,
    setShowAddStickerModal: (showAddStickerModal) =>
        set(() => ({ showAddStickerModal })),
    showSwitchModal: false,
    setShowSwitchModal: (showSwitchModal) => set(() => ({ showSwitchModal })),
    showCallModal: false,
    setShowCallModal: (showCallModal) => set(() => ({ showCallModal })),
    reset: () =>
        set((state) => {
            return {
                ...state,
                showAuthModal: false,
                showReportModal: false,
                reportPublication: null,
                reportConfig: null,
                showStatusModal: false,
                showAddStickerModal: false,
                showSwitchModal: false,
            }
        }),
}))
