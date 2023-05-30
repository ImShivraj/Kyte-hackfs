import { ReactNode, memo, useEffect, useState } from "react"
import Sidebar from "./Sidebar"
import { useRouter } from "next/router"
import clsx from "clsx"
import SidebarMobile from "./SidebarMobile"

const DashboardLayout = ({ children }: { children: ReactNode }) => {
    const router = useRouter()
    return (
        // xl1450:w-[350px]
        <div className=" grid grid-cols-12 relative bg-red-30">
            <div className="xl1450:col-span-2  md900:w-20 col-span-3 bg-pink-30 hidden md850:block ">
                <Sidebar />
            </div>
            <div className="z-50 fixed bottom-0 w-full md850:hidden block ">
                <SidebarMobile />
            </div>
            <div
                className={clsx(
                    router.asPath.startsWith("/messages/") ||
                        router.pathname === "/messages"
                        ? "xl1450:w-full md900:w-full  "
                        : "xl1450:w-full w-full",
                    // md900:w-full md900:bg-red-300
                    " m-auto z-20 mb-0 bg-green-30 xs320:col-span-12  md800:col-span-12 md900:col-span-9 xl1450:col-span-10 col-span-9"
                )}
            >
                {children}
            </div>
        </div>
    )
}

export default memo(DashboardLayout)
