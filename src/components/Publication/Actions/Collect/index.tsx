import Loader from "@components/Shared/Loader"
import { Tooltip } from "@components/UI/Tooltip"
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
import { FiLink } from "react-icons/fi"

interface Props {
    publication: KytePublication
    isFullPublication: boolean
    electedMirror?: ElectedMirror
}

const Collect: FC<Props> = ({
    publication,
    isFullPublication,
    electedMirror,
}) => {
    const [count, setCount] = useState(0)
    const [showCollectModal, setShowCollectModal] = useState(false)
    const isFreeCollect =
        publication?.collectModule.__typename === "FreeCollectModuleSettings"
    const isUnknownCollect =
        publication?.collectModule.__typename === "UnknownCollectModuleSettings"
    const isMirror = publication.__typename === "Mirror"
    const hasCollected = isMirror
        ? publication?.mirrorOf?.hasCollectedByMe
        : publication?.hasCollectedByMe

    useEffect(() => {
        if (
            publication?.mirrorOf?.stats?.totalAmountOfCollects ||
            publication?.stats?.totalAmountOfCollects
        ) {
            setCount(
                publication.__typename === "Mirror"
                    ? publication?.mirrorOf?.stats?.totalAmountOfCollects
                    : publication?.stats?.totalAmountOfCollects
            )
        }
    }, [publication])

    const iconClassName = isFullPublication
        ? "w-[17px] sm:w-[20px]"
        : "w-[15px] sm:w-[18px]"

    return (
        <>
            <div className=" flex items-center ">
                <button
                    onClick={() => {
                        setShowCollectModal(true)
                    }}
                    aria-label="Collect"
                    className="focus:scale-90 transition-all"
                >
                    <div className="pt-1.5  ">
                        {/* <Tooltip
                            placement="top"
                            content={
                                count > 0
                                    ? `${humanize(count)} Collects`
                                    : "Collect"
                            }
                            withDelay
                        >
                            {hasCollected ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="w-[15px] sm:w-[18px]"
                                >
                                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-[15px] sm:w-[18px]"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                    ></path>
                                </svg>
                            )}
                        </Tooltip> */}
                        <div className="dropdown dropdown-left md:dropdown-right">
                            <label tabIndex={0} className="">
                                <div className=" cursor-pointer flex  text-[#F97878]">
                                    <div className="transition ease-in-out active:scale-95 flex items-center gap-">
                                        <MdOutlineBookmarkBorder
                                            size={"1.4em"}
                                        />
                                        {count > 0 && !isFullPublication && (
                                            <span className=" font-semibold">
                                                &nbsp;
                                                {nFormatter(count)}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </label>
                            <ul
                                tabIndex={0}
                                className="dropdown-content menu  p-2 shadow-md bg-white text-black rounded-box w-72 mt-4 md:ml-2 py-2 font-semibold text-sm "
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

export default Collect
