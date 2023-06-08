import Loader from "@components/Shared/Loader"
import { Tooltip } from "@/src/components/UI/Tooltip"
import humanize from "@lib/humanize"
import nFormatter from "@lib/nFormatter"
import dynamic from "next/dynamic"
import type { FC } from "react"
import { useEffect, useState } from "react"
import { KytePublication } from "src/types"
import { ElectedMirror } from "@lens/generated"
import collect from "@assets/collect.svg"
import { IoMailOutline } from "react-icons/io5"
import { MdOutlineBookmarkBorder } from "react-icons/md"
import { TbShare2 } from "react-icons/tb"
import { FiLink } from "react-icons/fi"

interface Props {
    publication: KytePublication
    isFullPublication: boolean
    electedMirror?: ElectedMirror
}

const Share = () => {
    return (
        <>
            <div className=" flex items-center ">
                <button
                    aria-label="Collect"
                    className="focus:scale-90 transition-all"
                >
                    <div className="pt-1.5  ">
                        <div className="dropdown dropdown-left md:dropdown-right">
                            <label tabIndex={0} className="">
                                <div className=" cursor-pointer flex  text-[#F97878]">
                                    <div className="transition ease-in-out active:scale-95 flex items-center gap-">
                                        <TbShare2
                                            color="#83B08C"
                                            size={"1.4em"}
                                        />
                                    </div>
                                </div>
                            </label>
                            <ul
                                tabIndex={0}
                                className="dropdown-content menu  p-2 shadow-lg bg-white text-black rounded-box w-72 xs320:w-64 mt-4 xs320:-mr-14 md900:-mr-0 xs320:mt-8 md900:mt-4
                                 md:ml-2 py-2 font-semibold text-sm "
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
                </button>
            </div>
        </>
    )
}

export default Share
