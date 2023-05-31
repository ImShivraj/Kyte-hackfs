import { ReactNode, memo, useEffect, useState } from "react"
import Sidebar from "./Sidebar"
import { useRouter } from "next/router"
import clsx from "clsx"
import SidebarMobile from "./SidebarMobile"
import { BiPlus } from "react-icons/bi"

const DashboardLayout = ({ children }: { children: ReactNode }) => {
    const router = useRouter()
    return (
        // xl1450:w-[350px]
        <div className=" grid grid-cols-12 relative bg-red-30">
            <div className="xl1450:col-span-2 md850:col-span-1 md900:col-span-3 md900:w-16 col-span-3 bg-pink-30 hidden md850:block ">
                <Sidebar />
            </div>
            <div className=" cursor-pointer transition ease-in-out active:scale-95 z-50 fixed bottom-24 right-5 w-auto md850:hidden block ">
                <div className=" bg-lightGreen rounded-full p-4">
                    <BiPlus size={"2.2em"} color="white" />
                </div>
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
                    " m-auto z-20 mb-0 bg-green-30 xs320:col-span-12  md800:col-span-12 md850:col-span-11 md900:col-span-9 xl1450:col-span-10 col-span-9"
                )}
            >
                {children}
            </div>
        </div>
    )
}

export default memo(DashboardLayout)
