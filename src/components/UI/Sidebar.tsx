import Link from "next/link"
import { HiHome, HiBell, HiBookmark } from "react-icons/hi"
import { BsFire, BsFillPersonFill } from "react-icons/bs"
import { TbMessage } from "react-icons/tb"
import { IconType } from "react-icons"
import logo from "@assets/logo.png"
import user from "@assets/user.png"
import { useRouter } from "next/router"
import { ReactNode, memo, useEffect, useState } from "react"
import Image from "next/image"
import clsx from "clsx"
import { RiSettings5Fill } from "react-icons/ri"
import { AiOutlinePlusCircle } from "react-icons/ai"
import { TbBellFilled } from "react-icons/tb"
import useSidebarStore from "@/src/store/sidebarStore"

interface Paths {
    path: string
    title: string
    icon: IconType
    isActive: boolean
}

const paths: Paths[] = [
    { path: "/", title: "Home", icon: HiHome, isActive: false },
    {
        path: "/explore",
        title: "Explore",
        icon: BsFire,
        isActive: false,
    },
    {
        path: "/notifications",
        title: "Notifications",
        icon: HiBell,
        isActive: false,
    },
    {
        path: "/saved",
        title: "Saved",
        icon: HiBookmark,
        isActive: false,
    },
    {
        path: "/myprofile",
        title: "My Profile",
        icon: BsFillPersonFill,
        isActive: false,
    },
    {
        path: "/messages",
        title: "Messages",
        icon: TbMessage,
        isActive: true,
    },
]

const Sidebar = () => {
    // const [toggleSidebar, setToggleSidebar] = useState<boolean>(false)
    const router = useRouter()
    const { toggleSidebar, setToggleSidebar } = useSidebarStore()

    useEffect(() => {
        setToggleSidebar(
            router.pathname === "/messages" ||
                router.pathname.startsWith("/messages/")
                ? false
                : true
        )
    }, [router.asPath])

    const links = paths.map(({ path, title, icon: Icon }) => (
        <Link
            key={path}
            className={clsx(
                router.asPath === path
                    ? "text-white bg-clip-text "
                    : " text-textSidebar ",
                toggleSidebar && "justify-center -3",
                " flex items-center justify-start text-lg font-semibold my-7"
            )}
            href={path}
        >
            <Icon
                size={"1.5em"}
                color={`${router.asPath === path && "text-white"}`}
            />
            {!toggleSidebar && <span className=" ml-3">{title}</span>}
        </Link>
    ))

    return (
        <>
            <div className="drawer drawer-mobile hidden md:block fixed left-0 z-10">
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer-2"
                        className="drawer-overlay"
                    ></label>
                    <div
                        className={clsx(
                            toggleSidebar
                                ? " w-20 md:w-24 items-center "
                                : " md:w-72 lg:w-80 items-start pl-10",
                            " bg-bgSidebar menu p-4 bg-bgDefault border-r border-base-100 text-base-content items-start  drawer drawer-mobile  "
                        )}
                    >
                        <div
                            className={clsx(toggleSidebar && " px-2 ", "py-2")}
                        >
                            <div className=" flex items-center justify-center font-semibold cursor-pointer">
                                <Image
                                    src={logo}
                                    alt="logo"
                                    className={clsx(!toggleSidebar && "mr-3")}
                                />
                                {!toggleSidebar && (
                                    <span className=" text-5xl text-white ">
                                        Kyte
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className=" mt-10 ">
                            <div>{links}</div>
                            <label
                                htmlFor="my-modal"
                                className={clsx(
                                    " text-textSidebar  cursor-pointer",
                                    " gap-3 items-center justify-start",
                                    " flex items-center justify-start text-lg font-semibold my-7"
                                )}
                            >
                                <AiOutlinePlusCircle size={"1.5em"} />{" "}
                                {!toggleSidebar && <span> Create Post</span>}
                            </label>
                        </div>

                        <div className=" mt-auto w-full  ">
                            <div
                                className={clsx(
                                    toggleSidebar && "justify-center",
                                    "flex items-center gap-2 w-full"
                                )}
                            >
                                <Image src={user} alt="user" />
                                {!toggleSidebar && (
                                    <div className=" flex items-center justify-between w-full">
                                        <div className="ml-2 w-full">
                                            <h3 className=" font-semibold text-lg text-white">
                                                Lorem Ipsum
                                            </h3>
                                            <p className=" text-sm text-gray-400 font-semibold ">
                                                @lorem.ipsum
                                            </p>
                                        </div>
                                        <div className=" ml-3 flex items-center gap-2">
                                            <TbBellFilled
                                                size={"1.5em"}
                                                color="#B0B0B0"
                                            />
                                            <RiSettings5Fill
                                                size={"1.5em"}
                                                color="#B0B0B0"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(Sidebar)
