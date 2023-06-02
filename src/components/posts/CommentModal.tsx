import React, { Fragment, useState } from "react"
import { Button, Dialog } from "@material-tailwind/react"
import { BsFiletypeGif } from "react-icons/bs"
import { TbPhotoPlus } from "react-icons/tb"
import { ImAttachment } from "react-icons/im"
import { HiOutlineEmojiHappy } from "react-icons/hi"
import { RxCross1 } from "react-icons/rx"
import Image from "next/image"
import pfp from "@assets/user.png"
import pfp2 from "@assets/pfp2.png"
import clsx from "clsx"
import { AiOutlineMessage } from "react-icons/ai"
import type { DialogProps } from "@material-tailwind/react"

interface Props {
    open: boolean
    handleOpen: () => void
    commentCount?: number | string | boolean
}

const CommentModal: React.FC<Props> = ({ open, handleOpen, commentCount }) => {
    const [comment, setComment] = useState<string>("")

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(event.target.value)
        adjustTextareaHeight(event.target)
    }

    const adjustTextareaHeight = (textarea: HTMLTextAreaElement) => {
        textarea.style.height = "auto"
        textarea.style.height = `${textarea.scrollHeight}px`
    }

    return (
        <Fragment>
            <div
                onClick={handleOpen}
                className="transition ease-in-out active:scale-95"
            >
                <label
                    htmlFor="my-modal-2"
                    className="cursor-pointer flex items-center justify-start"
                >
                    <AiOutlineMessage size={"1.4em"} />
                    <span className=" font-semibold">&nbsp;{commentCount}</span>
                </label>
            </div>

            <Dialog
                dismiss={{
                    outsidePress: false,
                }}
                open={open}
                handler={handleOpen}
            >
                <div className=" relative flex flex-col  items-start justify-start gap-3 p-5 px-10 mt-3 ">
                    <div
                        className=" absolute top-3 right-4 transition ease-in-out active:scale-95 cursor-pointer"
                        onClick={handleOpen}
                    >
                        <RxCross1 size={"1.4em"} />
                    </div>
                    {/* demo post */}
                    <div className=" relative  pb-6 ">
                        <div className="flex items-start gap-5">
                            <div className=" h-[70%] z-10 absolute border-r px-3 top-14 -mt-1 "></div>

                            <Image width={52} src={pfp2} alt="user" />
                            <div>
                                <h3 className=" font-semibold">Lorem Ipsum</h3>
                                <div className=" flex items-center font-semibold">
                                    <span className=" text-sm text-gray-400">
                                        @lorem.ipsum
                                    </span>
                                </div>
                                <p className="  pt-4 text-s tracking-wide">
                                    Sed ut perspiciatis unde omnis iste na,
                                    error sit voluptatem accusanti dolorog
                                    laudantium, tota rem, eaque ipsa qn ab illo
                                    invee veritatis et quasi architect beatae
                                    vae dicta so.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className=" -mt-1 w-full flex items-start justify-between">
                        <Image width={52} src={pfp} alt="pfp" />
                        <div className=" w-full">
                            <div className="flex flex-col justify-between items-start w-full">
                                <div className=" flex items-start ml-5 text-sm tracking-wide">
                                    <span className=" text-lightGratText1 font-normal">
                                        replying to
                                    </span>
                                    &nbsp;
                                    <span className=" text-lightGreen font-normal">
                                        @lorem.ipsum
                                    </span>
                                </div>
                                <textarea
                                    placeholder=" Add your comment!"
                                    className=" text-justify resize-none  scrollbar-hide  text-black focus:text-black textarea textarea-ghost bg-white focus:bg-white outline-none border-0 focus:outline-none w-full text-lg "
                                    // type="text"
                                    name=""
                                    id=""
                                    value={comment}
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
                                <BsFiletypeGif color="#83B08C" size={"1.2em"} />
                            </div>
                            <div className=" transition ease-in-out active:scale-95 cursor-pointer">
                                <TbPhotoPlus color="#83B08C" size={"1.3em"} />
                            </div>
                            <div className=" transition ease-in-out active:scale-95 cursor-pointer">
                                <HiOutlineEmojiHappy
                                    color="#83B08C"
                                    size={"1.3em"}
                                />
                            </div>
                            <div className=" transition ease-in-out active:scale-95 cursor-pointer">
                                <ImAttachment color="#83B08C" size={"1.18em"} />
                            </div>
                        </div>
                        <button className=" normal-case btn w-32 bg-lightGreen hover:bg-lightGreen2 border-0 text-white rounded-full">
                            Reply
                        </button>
                    </div>
                </div>
            </Dialog>
        </Fragment>
    )
}

export default CommentModal

{
    /* <div className="modal-box max-w-3xl  bg-white p-0 m-0 ">
    <label
        id="modal-1"
        htmlFor="my-modal"
        className="btn bg-white hover:bg-gray-100 text-black btn-sm btn-circle border-0 absolute right-4 top-3"
    >
    </label>

</div> */
}
