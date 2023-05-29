import { Menu } from "@headlessui/react"
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined"
import clsx from "clsx"
//@ts-ignore
import { useHidePublicationMutation } from "lens"
import { useRouter } from "next/router"
import type { FC } from "react"
import { KytePublication } from "src/types"

interface Props {
    publication: KytePublication
}

const Delete: FC<Props> = ({ publication }) => {
    const { pathname, push } = useRouter()
    const [hidePost] = useHidePublicationMutation({
        onCompleted: () => {
            pathname === "/posts/[id]" ? push("/") : location.reload()
        },
    })

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
                if (confirm("Are you sure you want to delete?")) {
                    hidePost({
                        variables: {
                            request: { publicationId: publication?.id },
                        },
                    })
                }
            }}
        >
            <div className="flex items-center space-x-2">
                <DeleteOutlineOutlinedIcon className="w-4 h-4" />
                <div>Delete</div>
            </div>
        </Menu.Item>
    )
}

export default Delete
