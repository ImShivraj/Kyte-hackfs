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

interface Props {
    publication: KytePublication
}

const PublicationMenu: FC<Props> = ({ publication }) => {
    const currentProfile = useAppStore((state) => state.currentProfile)
    const iconClassName = "w-[15px] sm:w-[18px]"

    return (
        <Menu as="div" className="relative">
            <Menu.Button
                className="p-1.5 rounded-full hover:bg-gray-300 hover:bg-opacity-20"
                onClick={(event: any) => {
                    event.stopPropagation()
                }}
                aria-label="More"
            >
                <MoreVertOutlinedIcon
                    className={clsx("text-sideBarLink", iconClassName)}
                />
            </Menu.Button>
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
