import MenuTransition from "@components/Shared/MenuTransition"
import { Menu } from "@headlessui/react"
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined"
import clsx from "clsx"
import type { FC } from "react"
import { useAppStore } from "src/store/app"

import Delete from "./Delete"
import Embed from "./Embed"
import Permalink from "./Permalink"
import Report from "./Report"
import { KytePublication } from "src/types"
import { RxExclamationTriangle } from "react-icons/rx"
import { MdOutlineTranslate } from "react-icons/md"
import { BiDotsVerticalRounded } from "react-icons/bi"

interface Props {
    publication: KytePublication
}

const PublicationMenu: FC<Props> = ({ publication }) => {
    const currentProfile = useAppStore((state) => state.currentProfile)
    const iconClassName = "w-[15px] sm:w-[18px]"

    return (
        <Menu as="div" className="relative">
            {/* <Menu.Button
                className="p-1.5 rounded-full hover:bg-gray-300 hover:bg-opacity-20"
                onClick={(event: any) => {
                    event.stopPropagation()
                }}
                aria-label="More"
            >
                <MoreVertOutlinedIcon
                    className={clsx("text-sideBarLink", iconClassName)}
                />
            </Menu.Button> */}
            <div className=" absolute top-1.5 right-0 -mt-1.5">
                <div className=" dropdown dropdown-bottom dropdown-end">
                    <label tabIndex={0} className=" cursor-pointer">
                        <BiDotsVerticalRounded size={"1.5em"} color="black" />
                    </label>
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu p-2 shadow-md bg-white rounded-box w-52 -mt-6 py-2 font-semibold text-sm  "
                    >
                        <div className=" py-2 px-4 flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-md transition ease-in-out active:scale-95">
                            <MdOutlineTranslate size={"1.5em"} />
                            <span>Translate Post</span>
                        </div>
                        <div className="py-2 px-4 flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-md transition ease-in-out active:scale-95">
                            <RxExclamationTriangle size={"1.5em"} />
                            <span>Report Post</span>
                        </div>
                    </ul>
                </div>
            </div>
            <MenuTransition>
                <Menu.Items
                    static
                    className="absolute right-0 mt-1 w-max bg-white rounded-xl border shadow-sm focus:outline-none z-[5]"
                >
                    {currentProfile?.id === publication?.profile?.id ? (
                        <Delete publication={publication} />
                    ) : (
                        <Report publication={publication} />
                    )}
                    <Embed publication={publication} />
                    <Permalink publication={publication} />
                </Menu.Items>
            </MenuTransition>
        </Menu>
    )
}

export default PublicationMenu
