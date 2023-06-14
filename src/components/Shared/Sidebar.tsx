import Link from "next/link"
import { HiHome, HiBell, HiBookmark } from "react-icons/hi"
import { BsFire, BsFillPersonFill } from "react-icons/bs"
import { TbMessage } from "react-icons/tb"
import { IconType } from "react-icons"
import logo from "@assets/logo.png"
import user from "@assets/user.png"
import { useRouter } from "next/router"
import { useEffect } from "react"
import Image from "next/image"
import clsx from "clsx"
import { RiSettings5Fill } from "react-icons/ri"
import { AiOutlinePlusCircle } from "react-icons/ai"
import { TbBellFilled } from "react-icons/tb"
import useSidebarStore from "@/src/store/sidebarStore"
import AccountDropdown from "./AccountDropdown"
import { useAppStore } from "@/src/store/app"

interface Paths {
    path: string
    title: string
    icon: IconType
    isActive: boolean
}

export const paths: Paths[] = [
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
    const { currentProfile } = useAppStore()
    const isMessagesPage =
        router.asPath.startsWith("/messages/") ||
        router.pathname === "/messages"

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
                isMessagesPage
                    ? "text-white bg-clip-text "
                    : " text-textSidebar ",
                toggleSidebar && "justify-center -3",
                " flex items-center justify-start text-lg font-semibold my-7"
            )}
            href={path}
        >
            <Icon
                size={"1.5em"}
                color={`${router.asPath === path ? "white" : "#696b6d"}`}
            />
            {!toggleSidebar && (
                <span
                    className={clsx(
                        router.asPath === path && "text-white",
                        "md850:hidden md1000:inline ml-3"
                    )}
                >
                    {title}
                </span>
            )}
        </Link>
    ))

    return (
        <>
            <div
                className={clsx(
                    isMessagesPage &&
                        `md900:pl-[30px] md1000:pl-[30px] md1050:pl-[30px] lg1100:pl-[30px] lg1200:pl-[30px] lg1300:pl-[30px] lg1350:pl-[30px] xl1400:pl-[30px] xl1450:pl-[30px] xl1500:pl-[30px] xl1600:pl-[30px] xl1700:pl-[30px] xl1800:pl-[30px] xl1900:pl-[30px]  md900:w-[100px] md1000:w-[99.9px] md1050:w-[99.9px] lg1100:w-[100px] lg1200:w-[100px] lg1300:w-[100px] lg1350:w-[100px] xl1400:w-[100px] xl1450:w-[99.9px] xl1500:w-[100px] xl1600:w-[100px] xl1700:w-[100px] xl1800:w-[100px] xl1900:w-[100px] md850:w-20 bg-bgSidebar menu p-4 bg-bgDefault border-r border-base-100 text-base-content md850:items-center md1000:items-center h-screen z-[500]

                        fixed
                        `,
                    // " fixed  left-0 xl1400: flex justify-self-center items-center",
                    // toggleSidebar
                    //     ? "items-center  xl1450:pl-0 md1000:w-24 lg1100:w-24 md1050:w-24 lg1150:w-24 lg1200:w-24 lg1250:w-24 lg1300:w-24 xl1450:w-24  w-24 "
                    //     : " items-start ",
                    "md900:pl-[30px] md100:pl-0 md900:w-[100px] md1000:w-[260px] md1050:w-[95%]  md11200:w-[270px] md1300:w-[280px] md1400:w-[250px] xl1450:w-[95%]  md850:w-20 bg-bgSidebar menu p-4 bg-bgDefault border-r border-base-100 text-base-content items-start drawe  md850:items-center md1000:items-start xs320:hidden md900:flex h-screen z-[500]"
                )}
            >
                <div className="">
                    <div
                        className={clsx(
                            toggleSidebar && ""
                            // " px-2 ", "py-2"
                        )}
                    >
                        <div
                            className={clsx(
                                isMessagesPage && " mx-auto md1000:-ml-8",
                                //  "md1050:pl-0 xl1450:pl-5",
                                "md850:pl-3 md900:pl-0 md1000:pl-6  md1050:pl-6 xl1450:pl-5 flex items-center justify-center font-semibold cursor-pointer"
                            )}
                        >
                            <Image
                                src={logo}
                                alt="logo"
                                className={clsx(
                                    !toggleSidebar && "" //"mr-3"
                                )}
                            />
                            {!toggleSidebar && (
                                <span className="md850:hidden md1000:inline text-5xl text-white ">
                                    Kyte
                                </span>
                            )}
                        </div>
                    </div>
                    <div className=" mt-14 bg-green-30 ">
                        <div
                            className={clsx(
                                isMessagesPage && " -ml-2 md1000:-ml-8",
                                // "md1000:pl-0 xl1450:pl-5"
                                "md850:pl-3 md900:pl-1.5 md1000:pl-6  md1050:pl-6 xl1450:pl-5"
                            )}
                        >
                            {links}
                        </div>
                        <label
                            htmlFor="my-modal"
                            className={clsx(
                                isMessagesPage && " ml-0 md1000:-ml-6",
                                // "md850:pl-3 md900:pl-1.5 md1000:pl-6  md1050:pl-7 xl1450:pl-8",
                                " text-textSidebar  cursor-pointer",
                                " gap-3 items-center justify-start",
                                " flex items-center justify-start text-lg font-semibold my-7 md850:pl-3 md900:pl-1.5 md1000:pl-6  md1050:pl-6 xl1450:pl-5"
                            )}
                        >
                            <AiOutlinePlusCircle size={"1.5em"} />{" "}
                            {!toggleSidebar && (
                                <span className=" md850:hidden md1000:inline">
                                    Create Post
                                </span>
                            )}
                        </label>
                    </div>
                </div>
                <div className=" mt-auto w-full md1050:w-11/12 md1050:mx-auto xl1400:w-full bg-green-30  ">
                    <div
                        className={clsx(
                            toggleSidebar && "", // "justify-center xl1450:pl-5"
                            "flex items-center justify-center w-full bg-green-00"
                        )}
                    >
                        <Image
                            className=" w-10 md900:mr-4 md1000:mr-2"
                            src={user}
                            alt="user"
                        />
                        {!toggleSidebar && (
                            <div className=" md850:hidden md1000:flex flex items-center justify-between w-full ">
                                <div className="ml-2 w-full">
                                    <h3 className=" font-semibold md900:text-base md1000:text-sm md1050:text-base   text-white">
                                        Lorem Ipsum
                                    </h3>
                                    <p className=" text-sm text-gray-400 font-semibold ">
                                        @lorem.ipsum
                                    </p>
                                </div>
                                <div className=" ml-0 flex flex-wra items-center gap-2">
                                    <TbBellFilled
                                        size={"1.5em"}
                                        color="#B0B0B0"
                                    />

                                    <AccountDropdown />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
