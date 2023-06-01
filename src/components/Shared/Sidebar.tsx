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
                color={`${router.asPath === path && "text-white"}`}
            />
            {!toggleSidebar && (
                <span className={clsx( router.asPath === path &&  "text-white", "md850:hidden md1000:inline ml-3")}>{title}</span>
            )}
        </Link>
    ))

    return (
        <>
            <div
                className={clsx(
                    isMessagesPage && "  flex justify-self-center items-center",
                    toggleSidebar
                        ? "items-center md1000:w-24 w-20 md900:w-24 md1050:w-24 xl1450:w-20 "
                        : " items-start ",
                    "md900:w-24 md1000:w-[260px] md1050:w-[95%]  md11200:w-[270px] md1300:w-[280px] md1400:w-[250px] xl1450:w-[95%]  md850:w-20 bg-bgSidebar menu p-4 bg-bgDefault border-r border-base-100 text-base-content items-start drawe h-full z-50 md850:items-center md1000:items-start xs320:hidden md900:flex "
                )}
            >
                <div className="">
                    <div className={clsx(toggleSidebar && " px-2 ", "py-2")}>
                        <div
                            className={clsx(
                                isMessagesPage && "md1050:pl-0",
                                "md850:pl-3 md900:pl-0 md1000:pl-6  md1050:pl-6 xl1450:pl-10 flex items-center justify-center font-semibold cursor-pointer"
                            )}
                        >
                            <Image
                                src={logo}
                                alt="logo"
                                className={clsx(!toggleSidebar && "mr-3")}
                            />
                            {!toggleSidebar && (
                                <span className="md850:hidden md1000:inline text-5xl text-white ">
                                    Kyte
                                </span>
                            )}
                        </div>
                    </div>
                    <div className=" mt-14 ">
                        <div
                            className={clsx(
                                isMessagesPage && "md1000:pl-0 xl1450:pl-0",
                                "md850:pl-3 md900:pl-1.5 md1000:pl-6  md1050:pl-6 xl1450:pl-10"
                            )}
                        >
                            {links}
                        </div>
                        <label
                            htmlFor="my-modal"
                            className={clsx(
                                isMessagesPage &&
                                    "md850:pl-3 md900:pl-1.5 md1000:pl-6  md1050:pl-7 xl1450:pl-3.5",
                                " text-textSidebar  cursor-pointer",
                                " gap-3 items-center justify-start",
                                " flex items-center justify-start text-lg font-semibold my-7 md850:pl-3 md900:pl-1.5 md1000:pl-6  md1050:pl-6 xl1450:pl-10"
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
                            toggleSidebar && "justify-center",
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
        </>
    )
}

export default Sidebar
