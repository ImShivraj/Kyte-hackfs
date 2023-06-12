import { CloseRounded } from "@mui/icons-material"
// import { CloseRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material"
import clsx from "clsx"
import type { FC, ReactNode } from "react"
import { Fragment, useState } from "react"
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react"

interface Props {
    icon?: ReactNode
    title: ReactNode
    size?: "sm" | "md" | "lg"
    show: boolean
    children: ReactNode[] | ReactNode
    onClose?: () => void
}

export const Modal: FC<Props> = ({
    icon,
    title,
    size = "sm",
    show,
    children,
    onClose,
}) => {
    return (
        <>
            <Fragment>
                <Dialog
                    className={clsx(
                        { "sm:max-w-5xl": size === "lg" },
                        { "sm:max-w-3xl": size === "md" },
                        { "sm:max-w-lg": size === "sm" },
                        "inline-block align-bottom bg-white text-left shadow-xl transform transition-all sm:my-8 sm:align-middle w-full rounded-xl"
                    )}
                    size={size}
                    open={show}
                    handler={() => onClose?.()}
                >
                    <div>
                        <div className="flex justify-between items-center py-3.5 px-5 divider">
                            <div className="flex items-center  font-bold">
                                {icon}
                                <p className="text-[16px] font-semibold text-black max-w-xs text-center ml-2">
                                    {title}
                                </p>
                            </div>

                            {onClose ? (
                                <IconButton
                                    aria-label="delete"
                                    className="p-1 text-sideBarLink rounded-full hover:bg-badgeRed1 transition-all"
                                    onClick={onClose}
                                    style={{
                                        backgroundColor:
                                            "rgb(67, 100, 117, .1)",
                                    }}
                                >
                                    <CloseRounded fontSize="small" />
                                </IconButton>
                            ) : null}
                        </div>
                        {children}
                    </div>
                </Dialog>
            </Fragment>
            {/* 
            <Transition.Root show={show} as={Fragment}>
                <Dialog
                    as="div"
                    className="overflow-y-hidden fixed inset-0 z-50 backdrop-blur-[2px]"
                    onClose={() => onClose?.()}
                >
                    <div className="flex justify-center items-center p-4 min-h-screen text-center sm:block sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-100"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>
                        <span
                            className="hidden sm:inline-block sm:h-screen sm:align-middle"
                            aria-hidden="true"
                        />
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-100"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-100"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        ></Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root> */}
        </>
    )
}
