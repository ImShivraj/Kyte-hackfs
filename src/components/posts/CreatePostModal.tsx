import { BsFiletypeGif } from "react-icons/bs"
import { TbPhotoPlus } from "react-icons/tb"
import { ImAttachment } from "react-icons/im"
import { HiOutlineEmojiHappy } from "react-icons/hi"
import { RxCross1 } from "react-icons/rx"
import Image from "next/image"
import pfp from "@assets/user.png"
import clsx from "clsx"
import { Fragment, useState } from "react"
import { Dialog, DialogBody } from "@material-tailwind/react"

import * as React from "react"
import { Carousel, IconButton } from "@material-tailwind/react"
import { AiOutlinePlusCircle } from "react-icons/ai"
interface Props {
    toggleSidebar: boolean
    isMessagesPage: boolean
}

export default function CreatePostModal({
    toggleSidebar,
    isMessagesPage,
}: Props) {
    const [post, setPost] = useState<string>("")
    const [open, setOpen] = useState(false)

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPost(event.target.value)
        adjustTextareaHeight(event.target)
    }

    const adjustTextareaHeight = (textarea: HTMLTextAreaElement) => {
        textarea.style.height = "auto"
        textarea.style.height = `${textarea.scFrollHeight}px`
    }

    const handleOpen = () => setOpen(!open)

    return (
        <div className=" p-0 m-0 ">
            <div
                onClick={handleOpen}
                className={clsx(
                    isMessagesPage && " ml-0 md1000:-ml-6",
                    // "md850:pl-3 md900:pl-1.5 md1000:pl-6  md1050:pl-7 xl1450:pl-8",
                    " text-textSidebar  cursor-pointer",
                    " gap-3 items-center justify-start",
                    " flex items-center justify-start text-lg font-semibold my-7 md850:pl-3 md900:pl-1.5 md1000:pl-6  md1050:pl-6 xl1450:pl-5"
                )}
            >
                <AiOutlinePlusCircle size={"1.5em"} />{" "}
                {!toggleSidebar && (
                    <span className=" md850:hidden md1000:inline">
                        Create Post
                    </span>
                )}
            </div>
            <Fragment>
                <Dialog
                    dismiss={{
                        outsidePress: false,
                    }}
                    className=" absolute top-20 p-3 "
                    size="md"
                    open={open}
                    handler={handleOpen}
                >
                    <DialogBody className="  relative ">
                        <div
                            onClick={handleOpen}
                            className=" z-[100] absolute right-0 top-0 hover:bg-lightGray rounded-full p-3 cursor-pointer transition-all ease-in-out active:scale-95"
                        >
                            <RxCross1 size={"1.4em"} />
                        </div>

                        <div className=" flex flex-col  items-start justify-start gap-3 mt-6 ">
                            <div className=" w-full flex items-start justify-between">
                                <Image width={52} src={pfp} alt="pfp" />{" "}
                                <div className=" w-full">
                                    <div className="flex justify-between items-start w-full">
                                        <textarea
                                            placeholder=" What's Happening?"
                                            className=" text-justify resize-none  scrollbar-hide  text-black focus:text-black textarea textarea-ghost bg-white focus:bg-white outline-none border-0 focus:outline-none w-full text-lg "
                                            // type="text"
                                            name=""
                                            id=""
                                            value={post}
                                            onChange={handleChange}
                                            rows={2}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className=" flex justify-between w-full items-center mt-2 ">
                                <div
                                    className={clsx(
                                        " flex justify-around gap-4 ",
                                        "w-1/6"
                                    )}
                                >
                                    <div className=" transition ease-in-out active:scale-95 cursor-pointer">
                                        <BsFiletypeGif
                                            color="#83B08C"
                                            size={"1.2em"}
                                        />
                                    </div>
                                    <div className=" transition ease-in-out active:scale-95 cursor-pointer">
                                        <TbPhotoPlus
                                            color="#83B08C"
                                            size={"1.3em"}
                                        />
                                    </div>
                                    <div className=" transition ease-in-out active:scale-95 cursor-pointer">
                                        <HiOutlineEmojiHappy
                                            color="#83B08C"
                                            size={"1.3em"}
                                        />
                                    </div>
                                    <div className=" transition ease-in-out active:scale-95 cursor-pointer">
                                        <ImAttachment
                                            color="#83B08C"
                                            size={"1.18em"}
                                        />
                                    </div>
                                </div>
                                <button className=" normal-case btn w-32 bg-lightGreen hover:bg-lightGreen2 border-0 text-white rounded-full">
                                    Post
                                </button>
                            </div>
                        </div>
                    </DialogBody>
                </Dialog>
            </Fragment>
        </div>
    )
}
