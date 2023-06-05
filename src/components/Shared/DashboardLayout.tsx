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
            <div className="z-[500] fixed bottom-0 w-full md900:hidden block ">
                <BottomNavigation />
            </div>
            <div
                className={clsx(
                    isMessagesPage &&
                        "md1000:col-span-1  lg1100:col-span-1  md1050:col-span-1  lg1150:col-span-1  lg1200:col-span-1  lg1250:col-span-1  lg1300:col-span-1 md1000:w-max  lg1100:w-max  md1050:w-max  lg1150:w-max  lg1200:w-max  lg1250:w-max  lg1300:w-max xl1450:w-max   ",
                    " bg-green-40  md850:col-span-2 md900:col-span-1 md1000:col-span-3 md1050:col-span-3  xl1450:col-span-2 md900:w-full col-span-3 bg-pink-30 hidden md850:block "
                )}
            >
                <Sidebar />
            </div>
            <div
                className={clsx(
                    isMessagesPage
                        ? `relative xl1450:bg-green-40 md900:col-span-12 md1000:col-span-12 lg1100:col-span-12 md1050:col-span-12 lg1150:col-span-12 lg1200:col-span-12 lg1250:col-span-12 lg1300:col-span-12 xl1450:col-span-12
                        md1000:pl-20  lg1100:pl-20  md1050:pl-20  lg1150:pl-20  lg1200:pl-20  lg1250:pl-20  lg1300:pl-20  xl1450:pl-20  
                        md900:w-full md1000:w-full lg1100:w-full md1050:w-full lg1150:w-full lg1200:w-full lg1250:w-full lg1300:w-full xl1450:w-full 
                        `
                        : "xl1450:w-full w-full  md900:pl-8 md900:pr-3 md1000:pl-0 md1000:pr-0",
                    " m-auto z-50 mb-0  xs320:col-span-12  md800:col-span-12 md850:col-span-12 md900:col-span-11  md950:col-span-11 md1000:col-span-9 md1050:col-span-9  xl1450:col-span-10 bg-purple-30  max-h-screen md1050:pl-3 xl1450:pl-8"
                )}
            >
                {children}
            </div>
        </div>
    )
}

export default memo(DashboardLayout)
