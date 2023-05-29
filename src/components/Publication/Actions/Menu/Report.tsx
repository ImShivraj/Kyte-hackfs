import { Menu } from "@headlessui/react"
import GppMaybeOutlinedIcon from "@mui/icons-material/GppMaybeOutlined"
import clsx from "clsx"
import type { FC } from "react"
import { useGlobalModalStateStore } from "@store/modal"
import { KonnektrPublication } from "src/types"

interface Props {
    publication: KonnektrPublication
}

const Report: FC<Props> = ({ publication }) => {
    const setShowReportModal = useGlobalModalStateStore(
        (state) => state.setShowReportModal
    )

    return (
        <Menu.Item
            as="div"
            className={({ active }) =>
                clsx(
                    { "dropdown-active": active },
                    "block px-4 py-1.5 text-sm text-red-500 m-2 rounded-lg cursor-pointer"
                )
            }
            onClick={(event: any) => {
                event.stopPropagation()
                setShowReportModal(true, publication)
            }}
        >
            <div className="flex items-center space-x-2">
                <GppMaybeOutlinedIcon className="w-4 h-4" />
                <div>Report Post</div>
            </div>
        </Menu.Item>
    )
}

export default Report
