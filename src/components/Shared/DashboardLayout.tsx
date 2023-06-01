import { ReactNode, memo, useEffect, useState } from "react"
import { useRouter } from "next/router"
import clsx from "clsx"
import BottomNavigation from "./BottomNavigation"
import { BiPlus } from "react-icons/bi"
import Sidebar from "./Sidebar"

const DashboardLayout = ({ children }: { children: ReactNode }) => {
    const router = useRouter()

    const isMessagesPage =
        router.asPath.startsWith("/messages/") ||
        router.pathname === "/messages"
    return (
        // xl1450:w-[350px]
        <div className=" grid grid-cols-12  relative bg-red-30 bg-blue-30">
            <div className=" cursor-pointer transition ease-in-out active:scale-95 z-50 fixed bottom-24 right-5 w-auto md850:hidden block ">
                <div className=" bg-lightGreen rounded-full p-4">
                    <BiPlus size={"2.2em"} color="white" />
                </div>
            </div>
            <div className="z-50 fixed bottom-0 w-full md900:hidden block ">
                <BottomNavigation />
            </div>
            <div
                className={clsx(
                    isMessagesPage &&
                        "  xl1450:col-span-1 md1000:col-span-1 md1050:col-span-1 bg-red-30 ",
                    " bg-green-40  md850:col-span-2 md900:col-span-1 md1000:col-span-3 md1050:col-span-3  xl1450:col-span-2 md900:w-full col-span-3 bg-pink-30 hidden md850:block "
                )}
            >
                <Sidebar />
            </div>
            <div
                className={clsx(
                    isMessagesPage
                        ? "xl1450:w-full md900:w-full md1000:col-span-11 md1050:col-span-11 md1050:pl-0 xl1450:pl-0  "
                        : "xl1450:w-full w-full",
                    " m-auto z-20 mb-0  xs320:col-span-12  md800:col-span-12 md850:col-span-12 md900:col-span-11  md950:col-span-11 md1000:col-span-9 md1050:col-span-9  xl1450:col-span-10 bg-purple-30  max-h-screen md1050:pl-3 xl1450:pl-8"
                )}
            >
                {children}
            </div>
        </div>
    )
}

export default memo(DashboardLayout)
