import { Menu } from "@headlessui/react"
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined"
import clsx from "clsx"
import type { FC } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { KytePublication } from "src/types"
import { showNotification } from "@mantine/notifications"

interface Props {
    publication: KytePublication
}

const Permalink: FC<Props> = ({ publication }) => {
    return (
        <CopyToClipboard
            text={`${location.origin}/posts/${publication?.id}`}
            onCopy={() => {
                showNotification({
                    title: "Default notification",
                    message: "Copied to clipboard !",
                })
            }}
        >
            <Menu.Item
                as="div"
                className={({ active }) =>
                    clsx(
                        { "dropdown-active": active },
                        "block px-4 py-1.5 text-sm m-2 rounded-lg cursor-pointer"
                    )
                }
            >
                <div className="flex items-center space-x-2">
                    <FileCopyOutlinedIcon className="w-4 h-4" />
                    <div>Permalink</div>
                </div>
            </Menu.Item>
        </CopyToClipboard>
    )
}

export default Permalink
