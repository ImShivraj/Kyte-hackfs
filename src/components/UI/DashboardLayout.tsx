import { ReactNode, memo, useEffect, useState } from "react"
import Sidebar from "./Sidebar"
import { useRouter } from "next/router"
import clsx from "clsx"

const DashboardLayout = ({ children }: { children: ReactNode }) => {
    const router = useRouter()
    return (
        <div className="  relative flex justify-between">
            <div className=" ">
                <Sidebar />
            </div>
            <div
                className={clsx(
                    router.asPath.startsWith("/messages/") ||
                        router.pathname === "/messages"
                        ? " w-full ml-24"
                        : "md:w-8/12",
                    "m-auto z-20 mb-0"
                )}
            >
                {children}
            </div>
        </div>
    )
}

export default memo(DashboardLayout)
