import React, { useState } from "react"
import { AiOutlineMessage, AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { HiArrowsUpDown, HiBookmark } from "react-icons/hi2"
import { MdOutlineBookmarkBorder } from "react-icons/md"

import { FiLink } from "react-icons/fi"
import { IoMailOutline } from "react-icons/io5"
import clsx from "clsx"
import CommentModal from "./CommentModal"

function PostActions() {
    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(!open)

    return (
        <div className=" mt-4 flex justify-between max-w-md mr-auto">
            <div className="  flex  text-[#6996EF]">
                <CommentModal
                    open={open}
                    handleOpen={handleOpen}
                    commentCount={999}
                />
            </div>

            <div className=" cursor-pointer flex  text-[#B581C8]">
                <div className="transition ease-in-out active:scale-95">
                    <HiArrowsUpDown size={"1.4em"} />
                </div>
                <span className=" font-semibold">&nbsp;999</span>
            </div>
            <div className=" cursor-pointer flex  text-[#FF54B1]">
                <div className="transition ease-in-out active:scale-95">
                    <AiOutlineHeart size={"1.4em"} />
                </div>
                <span className=" font-semibold">&nbsp;999</span>
            </div>

            <div className="dropdown dropdown-right">
                <label tabIndex={0} className="">
                    <div className=" cursor-pointer flex  text-[#F97878]">
                        <div className="transition ease-in-out active:scale-95">
                            <MdOutlineBookmarkBorder size={"1.4em"} />
                        </div>
                        <span className=" font-semibold">&nbsp;999</span>
                    </div>
                </label>
                <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow-md bg-white rounded-box w-72 mt-4 ml-2 py-2 font-semibold text-sm "
                >
                    <div className=" py-2 px-4 flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-md transition ease-in-out active:scale-95">
                        <FiLink size={"1.5em"} />
                        <span>Copy link to Post</span>
                    </div>
                    <div className="py-2 px-4 flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-md transition ease-in-out active:scale-95">
                        <IoMailOutline size={"1.5em"} />
                        <span>Send via Xmtp Message</span>
                    </div>
                    <div className="py-2 px-4 flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-md transition ease-in-out active:scale-95">
                        <MdOutlineBookmarkBorder size={"1.5em"} />
                        <span>Bookmark Post</span>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default PostActions
