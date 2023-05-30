import { Menu } from "@headlessui/react"
import CodeIcon from "@mui/icons-material/Code"
import clsx from "clsx"
import type { FC } from "react"
import { KytePublication } from "src/types"

interface Props {
    publication: KytePublication
}

const Embed: FC<Props> = ({ publication }) => {
    return (
        <Menu.Item
            as="a"
            className={({ active }) =>
                clsx(
                    { "dropdown-active": active },
                    "block px-4 py-1.5 text-sm m-2 rounded-lg cursor-pointer"
                )
            }
            onClick={(event: any) => {
                event.stopPropagation()
            }}
            href={`https://embed.withlens.app/?url=${publication?.id}`}
            target="_blank"
        >
            <div className="flex items-center space-x-2">
                <CodeIcon className="w-4 h-4" />
                <div>Embed</div>
            </div>
        </Menu.Item>
    )
}

export default Embed
