import { useModalStore } from "@/src/store/modal"
import React, { forwardRef } from "react"
import Login from "@components/Shared/Login"
import { Fragment, useState } from "react"
import { Dialog, DialogHeader, DialogBody } from "@material-tailwind/react"
import { RxCross1 } from "react-icons/rx"

const LoginModal = () => {
    const { setShowAuthModal, showAuthModal } = useModalStore()

    const handleOpen = () => setShowAuthModal(!showAuthModal)

    return (
        <Fragment>
            <button
                onClick={handleOpen}
                type="button"
                className="px-[27.5px] h-full flex items-center justify-center gap-2 w-full"
            >
                <img
                    src="/lens-white-1.png"
                    alt=""
                    className="w-[1.5rem] h-[1.5rem]"
                />
                <span className="text-white font-semibold leading-[20px]">
                    Sign-In
                </span>
            </button>
            <Dialog
                dismiss={{
                    outsidePress: false,
                }}
                open={showAuthModal}
                size="sm"
                handler={handleOpen}
            >
                <DialogHeader>
                    <div className="  w-full h-[60px] min-h-[60px] border-b-[1px] border-b-line flex items-center justify-between px-5  box-border">
                        <div className="flex items-center justify-start gap-2">
                            <img
                                src="/kyte_black_logo.png"
                                alt=""
                                className="w-[30px]"
                            />
                            <h1 className="text-[1.4rem] font-bold text-sideBarLink">
                                Please Login
                            </h1>
                        </div>
                        <div
                            onClick={handleOpen}
                            className=" active:scale-95 ease-in-out bg-opacity-10 bg-lightGray rounded-full transition-all w-[35px] h-[35px] flex items-center justify-center cursor-pointer p-2"
                        >
                            <RxCross1 size={"1em"} />
                        </div>
                    </div>
                </DialogHeader>
                <DialogBody>
                    <div className=" ">
                        <Login closeModal={handleOpen} />
                    </div>
                </DialogBody>
            </Dialog>
        </Fragment>
    )
}

export default LoginModal
