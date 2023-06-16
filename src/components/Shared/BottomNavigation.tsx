import React from "react"
import { HiHome, HiBell, HiBookmark } from "react-icons/hi"
import { BsFire, BsFillPersonFill } from "react-icons/bs"
import { paths } from "./Sidebar"
import Link from "next/link"
import useSidebarStore from "@/src/store/sidebarStore"
import clsx from "clsx"
import { useRouter } from "next/router"

import home_active from "@/src/assets/nav_icons/home.png"
import home_inactive from "@/src/assets/nav_icons/home_active.png"
import explore_active from "@/src/assets/nav_icons/explore.png"
import explore_inactive from "@/src/assets/nav_icons/explore_active.png"
import communities_active from "@/src/assets/nav_icons/communities.png"
import communities_inactive from "@/src/assets/nav_icons/communities.png"
import quests_active from "@/src/assets/nav_icons/quests.png"
import quests_inactive from "@/src/assets/nav_icons/quests.png"
import myprofile_active from "@/src/assets/nav_icons/myprofile.png"
import myprofile_inactive from "@/src/assets/nav_icons/myprofile_active.png"
import messages_active from "@/src/assets/nav_icons/messages.png"
import messages_inactive from "@/src/assets/nav_icons/messages_active.png"
import Image from "next/image"

function BottomNavigation() {
    const { toggleSidebar, setToggleSidebar } = useSidebarStore()
    const router = useRouter()
    const links = paths.map(({ path, title, icon: Icon, img }) => (
        <Link
            key={path}
            className={clsx(
                router.asPath === path
                    ? "text-white bg-clip-text "
                    : " text-textSidebar ",
                // toggleSidebar && "justify-center -3",
                " flex items-center justify-start text-lg font-semibold my-4 "
            )}
            href={path}
        >
            {router.asPath === path ? (
                <div className=" flex items-center justify-center flex-col w-full gap-y-2">
                    <Image src={img.inActive} alt="nav_icon" />
                    <div className=" w-5 bg-lightGreen h-1 rounded-full " />
                </div>
            ) : (
                <div className=" mb-2">
                    <Image src={img.active} alt="nav_icon" />
                </div>
            )}

            {/* <Icon
                size={"1.5em"}
                color={`${router.asPath === path && "text-white"}`}
            /> */}
            {/* {!toggleSidebar && <span className=" ml-3">{title}</span>} */}
        </Link>
    ))

    return (
        <div className=" flex bg-bgSidebar pt-2 text-white justify-evenly gap-4">
            {links}
        </div>
    )
}

export default BottomNavigation
