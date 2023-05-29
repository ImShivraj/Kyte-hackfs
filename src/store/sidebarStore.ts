import { create } from "zustand"

type SidebarStore = {
    toggleSidebar: boolean
    setToggleSidebar: (isOpen: boolean) => void
}

const useSidebarStore = create<SidebarStore>((set) => ({
    toggleSidebar: false,
    setToggleSidebar: (isOpen) => set(() => ({ toggleSidebar: !isOpen })),
}))

export default useSidebarStore
