import clsx from "clsx"
import React, { FC } from "react"
import { IconType } from "react-icons"

interface Props {
    title: string
    icon: IconType
    rounded: boolean
    onClick?: () => void
}

const IconButton: FC<Props> = ({ title, icon: IconType, rounded }) => {
    return (
        <button
            type="button"
            className={clsx(
                rounded === true ? "rounded-full" : "rounded-md ",
                "my-3 bg-lightGreen hover:bg-lightGreen active:bg-lightGreen px-14  border-0 btn  flex items-center justify-center gap-2 "
            )}
        >
            <IconType size={"1.5em"} />
            <span className="text-white  font-[600]  leading-[20px]">
                {title}
            </span>
        </button>
    )
}

export default IconButton
