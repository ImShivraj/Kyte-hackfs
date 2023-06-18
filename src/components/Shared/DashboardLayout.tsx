import { ReactNode, memo, useEffect, useState } from "react"
import { useRouter } from "next/router"
import clsx from "clsx"
import BottomNavigation from "./BottomNavigation"
import { BiPlus } from "react-icons/bi"
import Sidebar from "./Sidebar"
import { usePolybase } from "@polybase/react"
import { useAppStore } from "@/src/store/app"
import { useAccount } from "wagmi"

const DashboardLayout = ({ children }: { children: ReactNode }) => {
    const router = useRouter()
    const { address, isConnected } = useAccount()

    const isMessagesPage =
        router.asPath.startsWith("/messages/") ||
        router.pathname === "/messages"

    const { userName, setUserName } = useAppStore()

    const polybase = usePolybase()

    const getRecord = async (address: string) => {
        const record = await polybase.collection('KyteUsers').record(address).get()

        const { data } = record

        if (data?.id && data?.owner) {
            setUserName(data?.owner)
        }

        console.log({ owner: data?.owner })
    }


    useEffect(() => {
        if (isConnected) {
            getRecord(address)
        }

    }, [isConnected])

    return (
        // xl1450:w-[350px]
        <div className=" grid grid-cols-12  relative bg-red-30 bg-blue-30">
            <div
                className={clsx(isMessagesPage && 'hidden',
                    "cursor-pointer transition ease-in-out active:scale-95 z-50 fixed bottom-24 right-5 w-auto md850:hidden block "
                )}
            >
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
                    `md900:col-span-1 md1000:col-span-1  md1050:col-span-1 lg1100:col-span-1 lg1200:col-span-1 lg1300:col-span-1 lg1350:col-span-1 xl1400:col-span-1 xl1450:col-span-1 xl1500:col-span-1 xl1600:col-span-1 xl1700:col-span-1 xl1800:col-span-1 xl1900:col-span-1 
                        md900:w-full md1000:w-full md1050:w-full lg1100:w-full lg1200:w-full lg1300:w-full lg1350:w-full xl1400:w-full xl1450:w-full xl1500:w-full xl1600:w-full xl1700:w-full xl1800:w-full xl1900:w-full `,
                    // "md1000:col-span-1  lg1100:col-span-1  md1050:col-span-1  lg1150:col-span-1  lg1200:col-span-1  lg1250:col-span-1  lg1300:col-span-1 md1000:w-max  lg1100:w-max  md1050:w-max  lg1150:w-max  lg1200:w-max  lg1250:w-max  lg1300:w-max xl1450:w-max   ",
                    " bg-green-40  md850:col-span-2 md900:col-span-1 md1000:col-span-3 md1050:col-span-3  xl1450:col-span-2 md900:w-full col-span-3 bg-pink-30 hidden md850:block "
                )}
            >
                <Sidebar />
            </div>
            <div
                className={clsx(
                    isMessagesPage &&
                    `md900:col-start-3 md1000:col-start-3 md1050:col-start-3 lg1100:col-start-3 lg1200:col-start-3 lg1300:col-start-3 lg1350:col-start-3 xl1400:col-start-3 xl1450:col-start-3 xl1500:col-start-3 xl1600:col-start-3 xl1700:col-start-3 xl1800:col-start-3 xl1900:col-start-3 md900:col-span-11
                        md900:fixed md1000:fixed md1050:fixed lg1100:fixed lg1200:fixed lg1300:fixed lg1350:fixed xl1400:fixed xl1450:fixed xl1500:fixed xl1600:fixed xl1700:fixed xl1800:fixed xl1900:fixed 
                        md900:w-11/12 md1000:w-11/12 md1050:w-11/12 lg1100:w-11/12 lg1200:w-11/12 lg1300:w-11/12 lg1350:w-11/12 xl1400:w-11/12 xl1450:w-11/12 xl1500:w-11/12 xl1600:w-11/12 xl1700:w-11/12 xl1800:w-11/12 xl1900:w-11/12     md900:right-0 md1000:right-0 md1050:right-0 lg1100:right-0 lg1200:right-0 lg1300:right-0 lg1350:right-0 xl1400:right-0 xl1450:right-0 xl1500:right-0 xl1600:right-0 xl1700:right-0 xl1800:right-0 xl1900:right-0       md1000:col-span-11 md1050:col-span-11 lg1100:col-span-11 lg1200:col-span-11 lg1300:col-span-11 lg1350:col-span-11 xl1400:col-span-11 xl1450:col-span-11 xl1500:col-span-11 xl1600:col-span-11 xl1700:col-span-11 xl1800:col-span-11 xl1900:col-span-11 `,
                    "xl1450:w-full w-full  md900:pl-8 md900:pr-3 md1000:pl-0 md1000:pr-0",
                    " m-auto z-50 mb-0  xs320:col-span-12  md800:col-span-12 md850:col-span-12 md900:col-span-11  md950:col-span-11 md1000:col-span-9 md1050:col-span-9  xl1450:col-span-10 bg-purple-30  max-h-screen md1050:pl-3 xl1450:pl-8"
                )}
            >
                {children}
            </div>
        </div>
    )
}

export default memo(DashboardLayout)
