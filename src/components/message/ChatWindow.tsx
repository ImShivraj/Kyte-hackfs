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
import useSendMessage from "../utils/hooks/useSendMessage"
import { ContentTypeId, DecodedMessage } from "@xmtp/xmtp-js"
import Composer from "./Composer"
import FileSendViewModal from "../Composer/FileSendViewModal"
import ImageFiewModal from "../Composer/ImageFiewModal"

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
    { selectedConversationKey = "" }: MessageProps,
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
    const { setCallerName, setCallerProfilePic } = useCallStore()
    const [sendingXmtpMessage, setSendingXmtpMessage] = useState<
        ContentTypeId | undefined
    >()
    const [imageInView, setImageInView] = useState<string>("")
    const [imageViewOpened, setImageViewOpened] = useState<boolean>(false)

    const [replyingMessage, setReplyingMessage] =
        useState<DecodedMessage | null>(null)

    const [message, setMessage] = useState<string>("")

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

    const isAddrConvoKey = is0xAddress(selectedConversationKey)

    const selectedProfile = useMessageStore((state: MessageState) =>
        state.messageProfiles.get(selectedConversationKey)
    )

    const { selectedConversation, missingXmtpAuth } = useGetConversation(
        selectedConversationKey,
        selectedProfile
    )

    const { sendMessage: sendXmtpMessage } =
        useSendMessage(selectedConversation)

    return (
        <div className="  relative ">
            <div className=" flex w-full justify-between items-center border- py-3 -mt-3 xs320:py-5 xs320:px-3 md800:px-0 ">
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
                    <button className=" bg-black p-2.5 active:scale-95 ease-in-out rounded-full opacity-50">
                        <HiVideoCamera size={"1.3em"} color="white" />
                    </button>
                </div>
            </div>
            <div
                ref={containerRef}
                onScroll={handleScroll}
                className="  relative mt- chat-wallpaper  max-h-[90vh] h-[90vh] overflow-auto scrollbar-hide rounded-2xl  border xs320:pb-6"
            >
                <div className=" flex flex-col gap-5 justify-end mt-auto overflow-scrollscrollbar-hide  p-4  xs230:pb-28 md800:pb-16 bg-transparent backdrop-blur-md backdrop-opacity-50">
                    <div className=" flex justify-start items-start gap-4 max-w-md ">
                        <Image
                            className=" min-w-[50px]"
                            src={user}
                            alt="user"
                        />
                        <p className=" relative mt-4 bg-white px-5 py-3 text-sm tracking-wide rounded-xl rounded-tl-none shadow-md pb-8 pt-4">
                            Lorem ipsum dolor sit, amet.
                            <span className=" absolute right-3 bottom-2 text-xs text-gray-400  ">
                                00:00
                            </span>
                        </p>
                    </div>
                    <div className=" flex justify-start items-start gap-4 max-w-md  ">
                        <Image
                            className=" min-w-[50px]"
                            src={user}
                            alt="user"
                        />
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
                        <Image
                            className=" min-w-[50px]"
                            src={user}
                            alt="user"
                        />
                        <p className=" relative mt-4 bg-white px-5 py-3 text-sm tracking-wide rounded-xl rounded-tl-none shadow-md pb-8 pt-4">
                            Lorem ipsum dolor sit, amet.
                            <span className=" absolute right-3 bottom-2 text-xs text-gray-400  ">
                                00:00
                            </span>
                        </p>
                    </div>
                    <div className=" flex justify-start items-start gap-4 max-w-md  ">
                        <Image
                            className=" min-w-[50px]"
                            src={user}
                            alt="user"
                        />
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

            <div className=" absolute md800:bottom-3 xs320:bottom-16 xs320:mb-2 md800:mb-0  w-full z-[500]">
                <Composer
                    conversationKey={selectedConversationKey}
                    sendXmtpMessage={sendXmtpMessage}
                    disabledInput={missingXmtpAuth ?? false}
                    sendingXmtpMessage={sendingXmtpMessage}
                    setSendingXmtpMessage={setSendingXmtpMessage}
                    replyingMessage={replyingMessage}
                    setReplyingMessage={setReplyingMessage}
                    selectedProfile={selectedProfile}
                />
                <FileSendViewModal
                    sendXmtpMessage={sendXmtpMessage}
                    setSendingXmtpMessage={setSendingXmtpMessage}
                    replyingMessage={replyingMessage}
                />
                <ImageFiewModal
                    imageInView={imageInView}
                    imageViewOpened={imageViewOpened}
                    setImageViewOpened={setImageViewOpened}
                />
            </div>
        </div>
    )
}

export default ChatWindow
