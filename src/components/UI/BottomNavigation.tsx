import React from "react"
import { HiHome, HiBell, HiBookmark } from "react-icons/hi"
import { BsFire, BsFillPersonFill } from "react-icons/bs"
import { paths } from "./Sidebar"
import Link from "next/link"
import useSidebarStore from "@/src/store/sidebarStore"
import clsx from "clsx"
import { useRouter } from "next/router"

function BottomNavigation() {
    const { toggleSidebar, setToggleSidebar } = useSidebarStore()
    const router = useRouter()
    const links = paths.map(({ path, title, icon: Icon }) => (
        <Link
            key={path}
            className={clsx(
                router.asPath === path
                    ? "text-white bg-clip-text "
                    : " text-textSidebar ",
                // toggleSidebar && "justify-center -3",
                " flex items-center justify-start text-lg font-semibold my-4"
            )}
            href={path}
        >
            <Icon
                size={"1.5em"}
                color={`${router.asPath === path && "text-white"}`}
            />
            {/* {!toggleSidebar && <span className=" ml-3">{title}</span>} */}
        </Link>
    ))

    return (
        <div className=" flex bg-bgSidebar py-2 text-white justify-evenly gap-4">
            {links}
        </div>
    )
}

export default BottomNavigation
