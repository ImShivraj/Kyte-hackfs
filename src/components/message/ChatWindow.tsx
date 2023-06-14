import Image from "next/image"
import { GrAttachment } from "react-icons/gr"
import { FaRegPaperPlane } from "react-icons/fa"
import { HiOutlineEmojiHappy, HiVideoCamera } from "react-icons/hi"
import { BsFillMicFill } from "react-icons/bs"
import { RxDoubleArrowRight } from "react-icons/rx"
import { MdWifiCalling3 } from "react-icons/md"
import user from "@assets/user.png"
import { useEffect, useRef, useState } from "react"
import { useCallStore } from "@/src/store/call"
import { is0xAddress } from "../utils/matchers/is0xAddress"
import { useModalStore } from "@/src/store/modal"
import UserPreview from "../Shared/UserPreview"
import useGetConversation from "@components/utils/hooks/useGetConversation"
import { MessageState, useMessageStore } from "@/src/store/message"
import { KeyboardArrowLeftRounded, Verified } from "@mui/icons-material"
import { useRouter } from "next/router"
import WalletAvatar from "./WalletAvatar"
import { Skeleton } from "@mui/material"
import isVerified from "@/src/lib/isVerified"
import GradientIcon from "../utils/GradientIcon"
import { Profile } from "@/src/graphql/generated"
import Tippy from "@tippyjs/react"
import UserProfilePreview from "../Shared/UserProfilePreview"

interface MessageProps {
    selectedConversationKey?: string
}

interface Props {
    profile: Profile
    showBio?: boolean
    showFollow?: boolean
    followStatusLoading?: boolean
    isFollowing?: boolean
    isBig?: boolean
    linkToProfile?: boolean
    showStatus?: boolean
    showUserPreview?: boolean
    timestamp?: Date | string
}

function ChatWindow(
    { selectedConversationKey }: MessageProps,
    {
        profile,
        showBio = false,
        showFollow = false,
        followStatusLoading = false,
        isFollowing = false,
        isBig = false,
        linkToProfile = true,
        showStatus = false,
        showUserPreview = true,
        timestamp = "",
    }: Props
) {
    const [message, setMessage] = useState<string>("")
    const { setCallerName, setCallerProfilePic } = useCallStore()

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value)
        adjustTextareaHeight(event.target)
    }

    const adjustTextareaHeight = (textarea: HTMLTextAreaElement) => {
        textarea.style.height = "auto"
        textarea.style.height = `${textarea.scrollHeight}px`
    }

    const { setShowCallModal } = useModalStore()

    const containerRef = useRef<HTMLDivElement>(null)
    const [isUserScrolling, setIsUserScrolling] = useState(false)

    useEffect(() => {
        const container = containerRef.current
        if (container) {
            // Scroll to the bottom on initial render
            container.scrollTop = container.scrollHeight
        }
    }, [])

    const handleScroll = () => {
        const container = containerRef.current
        if (container) {
            const { scrollTop, clientHeight, scrollHeight } = container
            const isScrolledToBottom = scrollTop + clientHeight >= scrollHeight

            if (isScrolledToBottom) {
                // User is at the bottom, not actively scrolling
                setIsUserScrolling(false)
            } else {
                // User is scrolling up
                setIsUserScrolling(true)
            }
        }
    }

    return (
        <div className="  relative ">
            <div className=" flex w-full justify-between items-center border- py-3 -mt-3 ">
                <UserProfilePreview
                    name={"Kushagra Sarathe"}
                    username={"kushagra"}
                    followers={999}
                    following={999}
                    isVerified={true}
                />

                <div className=" flex items-center gap-2">
                    <button
                        onClick={() => {
                            // setCallerName(
                            //     isAddrConvoKey
                            //         ? selectedConversationKey
                            //         : selectedProfile?.name ||
                            //               selectedProfile?.handle
                            // )

                            // setCallerProfilePic(
                            //     isAddrConvoKey
                            //         ? "ADDRESS"
                            //         : getAvatar(selectedProfile)
                            // )
                            // login()
                            setShowCallModal(true)
                        }}
                        className=" bg-black p-2.5 active:scale-95 ease-in-out rounded-full"
                    >
                        <MdWifiCalling3 size={"1.3em"} color="white" />
                    </button>
                    <button className=" bg-black p-2.5 active:scale-95 ease-in-out rounded-full">
                        <HiVideoCamera size={"1.3em"} color="white" />
                    </button>
                </div>
            </div>
            <div
                ref={containerRef}
                onScroll={handleScroll}
                className="  relative mt- chat-wallpaper  max-h-[90vh] h-[90vh] overflow-auto scrollbar-hide rounded3xl rounded-t-none border "
            >
                <div className=" flex flex-col justify-end mt-auto overflow-scrollscrollbar-hide  p-4  pb-24 bg-transparent backdrop-blur-md backdrop-opacity-50">
                    <div className=" flex justify-start items-start gap-4 max-w-md ">
                        <Image src={user} alt="user" />
                        <p className=" relative mt-4 bg-white px-5 py-3 text-sm tracking-wide rounded-xl rounded-tl-none shadow-md pb-8 pt-4">
                            Lorem ipsum dolor sit, amet.
                            <span className=" absolute right-3 bottom-2 text-xs text-gray-400  ">
                                00:00
                            </span>
                        </p>
                    </div>
                    <div className=" flex justify-start items-start gap-4 max-w-md  ">
                        <Image src={user} alt="user" />
                        <p className=" relative mt-4 bg-white px-5 py-3 text-sm tracking-wide rounded-xl rounded-tl-none shadow-md pb-8 pt-4">
                            Sed ut perspiciatis unde omnis iste na, error sit
                            voluptatem accusanti dolorog laudantium, totam rem,
                            eaque ipsa qn ab illo na, error sit voluptatem
                            accusanti dolorog laudantium, ipsum
                            <span className=" absolute right-3 bottom-2 text-xs text-gray-400  ">
                                00:00
                            </span>
                        </p>
                    </div>
                    <div className=" flex justify-start items-start gap-4 max-w-sm ml-auto bg ">
                        <p className=" relative mt-4 bg-[#E0EDE4] px-5 py-3 text-sm tracking-wide rounded-xl rounded-tl-none shadow-md pb-8 pt-4">
                            Sed ut perspiciatis unde omnis iste na, error sit
                            voluptatem accusanti dolorog laudantium, totam rem,
                            eaque ipsa qn ab illo na, error sit voluptatem
                            accusanti dolorog laudantium, ipsum
                            <span className=" absolute right-3 bottom-2 text-xs text-gray-400  ">
                                00:00
                            </span>
                        </p>
                    </div>
                    <div className=" flex justify-start items-start gap-4 max-w-md ">
                        <Image src={user} alt="user" />
                        <p className=" relative mt-4 bg-white px-5 py-3 text-sm tracking-wide rounded-xl rounded-tl-none shadow-md pb-8 pt-4">
                            Lorem ipsum dolor sit, amet.
                            <span className=" absolute right-3 bottom-2 text-xs text-gray-400  ">
                                00:00
                            </span>
                        </p>
                    </div>
                    <div className=" flex justify-start items-start gap-4 max-w-md  ">
                        <Image src={user} alt="user" />
                        <p className=" relative mt-4 bg-white px-5 py-3 text-sm tracking-wide rounded-xl rounded-tl-none shadow-md pb-8 pt-4">
                            Sed ut perspiciatis unde omnis iste na, error sit
                            voluptatem accusanti dolorog laudantium, totam rem,
                            eaque ipsa qn ab illo na, error sit voluptatem
                            accusanti dolorog laudantium, ipsum
                            <span className=" absolute right-3 bottom-2 text-xs text-gray-400  ">
                                00:00
                            </span>
                        </p>
                    </div>
                    <div className=" flex justify-start items-start gap-4 max-w-sm ml-auto bg ">
                        <p className=" relative mt-4 bg-[#E0EDE4] px-5 py-3 text-sm tracking-wide rounded-xl rounded-tl-none shadow-md pb-8 pt-4">
                            Sed ut perspiciatis unde omnis iste na, error sit
                            voluptatem accusanti dolorog laudantium, totam rem,
                            eaque ipsa qn ab illo na, error sit voluptatem
                            accusanti dolorog laudantium, ipsum
                            <span className=" absolute right-3 bottom-2 text-xs text-gray-400  ">
                                00:00
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="px-3 absolute flex items-center justify-between bottom-2 mt-5 mb-2  w-full">
                <RxDoubleArrowRight
                    className=" cursor-pointer absolute top-3.5 left-10 text-gray-400"
                    size={"1.5em"}
                    color="black"
                />
                <HiOutlineEmojiHappy
                    className=" cursor-pointer absolute top-3.5 left-[4.5rem] text-gray-400"
                    size={"1.5em"}
                    color="black"
                />

                <textarea
                    placeholder=" What's Happening?"
                    className=" max-h-48 pl-24 pr-8 py-3.5 p-4 w-11/12 text-justify resize-none  scrollbar-hide  text-black focus:text-black textarea textarea-ghost bg-white focus:bg-white outline-none border-0 focus:outline-none text-base md:text-lg shadow-lg focus-within:shadow-lg in-h-16"
                    // type="text"
                    name=""
                    id=""
                    value={message}
                    onChange={handleChange}
                    rows={1}
                />
                <GrAttachment
                    className=" cursor-pointer absolute top-3.5 right-28 text-gray-400"
                    size={"1.5em"}
                    color="black"
                />
                {message && (
                    <button className=" cursor-pointer  btn rounded-2xl">
                        <FaRegPaperPlane
                            className=" cursor-pointer  text-gray-400"
                            size={"1.5em"}
                            color="white"
                        />
                    </button>
                )}
                {!message && (
                    <button className=" cursor-pointer  btn rounded-2xl">
                        <BsFillMicFill
                            className=" cursor-pointer  text-gray-400"
                            size={"1.5em"}
                            color="white"
                        />
                    </button>
                )}
            </div>
        </div>
    )
}

export default ChatWindow
