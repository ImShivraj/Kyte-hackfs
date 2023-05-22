import Link from "next/link";
import { HiHome, HiBell, HiBookmark } from "react-icons/hi";
import { BsFire, BsFillPersonFill } from "react-icons/bs";
import { RiSettings2Fill } from "react-icons/ri";
import { TbMessage } from "react-icons/tb";
import { IconType } from "react-icons";
import logo from "../../assets/logo.png";
import user from "../../assets/user.png";
import { useRouter } from "next/router";
import { ReactNode, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import ProfileOverview from "../message/ProfileOverview";

interface Paths {
  path: string;
  title: string;
  icon: IconType;
  isActive: boolean;
}

const paths: Paths[] = [
  { path: "/dashboard", title: "Home", icon: HiHome, isActive: false },
  {
    path: "/dashboard/trending",
    title: "Trending",
    icon: BsFire,
    isActive: false,
  },
  {
    path: "/dashboard/notifications",
    title: "Notifications",
    icon: HiBell,
    isActive: false,
  },
  {
    path: "/dashboard/saved",
    title: "Saved",
    icon: HiBookmark,
    isActive: false,
  },
  {
    path: "/dashboard/myprofile",
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
];

export default function Sidebar({ children }: { children: ReactNode }) {
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(true);
  const router = useRouter();

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
  ));

  return (
    <div className="drawer drawer-mobile ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      {/* navigation */}
      <div className="drawer-content w-full flex items-start justify-between  ">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden ml-auto btn-sm text-xs md:text-base md:btn-md"
        >
          Open drawer
        </label>
        {/* children */}
        <div className=" flex justify-end bg-green-30 w-full">{children}</div>
      </div>

      {/* sidebar */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <div
          className={clsx(
            toggleSidebar ? " w-20 md:w-24" : " md:w-72 lg:w-80",
            " bg-bgSidebar menu p-4 bg-bgDefault border-r border-base-100 text-base-content items-center "
          )}
        >
          <div
            className={clsx(toggleSidebar && " px-2 ", "py-2")}
            onClick={() => setToggleSidebar((prev) => !prev)}
          >
            <div
              // href={"/dashboard"}
              className=" flex items-center justify-center font-semibold cursor-pointer"
            >
              <Image
                src={logo}
                alt="logo"
                className={clsx(!toggleSidebar && "mr-3")}
              />
              {!toggleSidebar && (
                <span className=" text-5xl text-white ">Kyte</span>
              )}
            </div>
          </div>
          <div className=" mt-10 ">{links}</div>
          {/* <div
            className={clsx(
              toggleSidebar ? "text-white bg-clip-text " : " text-textSidebar ",
              toggleSidebar && "justify-center mx-auto",
              " flex items-center justify-start text-lg font-semibold my-1   bg-transparent active:bg-bgSidebar"
            )}
            onClick={() => setToggleSidebar((prev) => !prev)}
          >
            <RiSettings2Fill size={"1.4em"} color={`"text-white"}`} />
            {!toggleSidebar && <span className=" mx-2 ">Minimize </span>}
          </div> */}

          <div className=" mt-auto">
            <Image src={user} alt="user" />
          </div>
        </div>
      </div>
    </div>
  );
}
