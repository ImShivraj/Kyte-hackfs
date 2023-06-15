import { showNotification } from "@mantine/notifications"
import { ClipboardEvent, Dispatch, FC, SetStateAction, useRef } from "react"
import { useEffect, useState } from "react"
import EmojiPicker from "emoji-picker-react"
import { Popover } from "@mantine/core"
import { FiberManualRecordRounded } from "@mui/icons-material"
import GifSelector from "@components/Composer/Actions/Giphy/GifSelector"
import { IconButton, TextField } from "@mui/material"
import { ContentTypeId, DecodedMessage } from "@xmtp/xmtp-js"
import { ContentTypeVoice } from "@codecs/Voice"
import MessageLinkEmbedPreview from "@components/Composer/MessageLinkEmbedPreview"
import clsx from "clsx"
import StickerSelector from "@components/Composer/Actions/StickerSelector"
// @ts-ignore
import MicRecorder from "mic-recorder-to-mp3"
import { Web3Storage } from "web3.storage"
import MessageAttachments from "@components/Composer/MessageAttachments"
import formatVoiceTimer from "@components/utils/formatVoiceTimer"
import { useAppStore } from "@store/app"
import { FileMetadata } from "src/types"
import VoiceRecordEmbedPreview from "@components/Composer/VoiceRecordEmbedPreview"
import ReplyContentPreview from "@components/Composer/ReplyContentPreview"
import { Profile } from "@gql/generated"
import { ContentTypeReply, Reply } from "@codecs/Reply"
import { useMessageStore } from "@store/message"
import { ContentTypeText } from "@codecs/Text"
import { ContentTypeReaction } from "@codecs/Reaction"
import getDownloadFileName from "../utils/getDownloadFileName"
import { FaRegPaperPlane } from "react-icons/fa"
import { BsFillMicFill } from "react-icons/bs"
import { MdOutlineEmojiEmotions } from "react-icons/md"
import { RiFileGifLine } from "react-icons/ri"
import { RxCross2 } from "react-icons/rx"
import {
    MdDeleteOutline,
    MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md"
import { LuSticker } from "react-icons/lu"

const recorder = new MicRecorder({
    bitRate: 356,
})

interface Props {
    sendXmtpMessage: (
        message: string | Reply,
        contentType?: ContentTypeId,
        contentFallback?: string
    ) => Promise<boolean>
    conversationKey: string
    disabledInput: boolean
    sendingXmtpMessage: ContentTypeId | undefined
    setSendingXmtpMessage: (
        sendingXmtpMessage: ContentTypeId | undefined
    ) => void
    replyingMessage: DecodedMessage | null
    setReplyingMessage: Dispatch<SetStateAction<DecodedMessage | null>>
    selectedProfile: Profile | undefined
}

const Composer: FC<Props> = ({
    sendXmtpMessage,
    conversationKey,
    disabledInput,
    sendingXmtpMessage,
    setSendingXmtpMessage,
    replyingMessage,
    setReplyingMessage,
    selectedProfile,
}) => {
    const [message, setMessage] = useState<string>("")
    const [iconsExpanded, setIconsExpanded] = useState(false)
    const { currentProfile } = useAppStore()
    const { selectedFiles, setSelectedFiles } = useMessageStore()
    const [shiftEnterPressed, setShiftEnterPressed] = useState(false)

    const gifBtnRef = useRef(null)
    const stickerBtnRef = useRef(null)

    const canSendMessage =
        !disabledInput && !sendingXmtpMessage && message.length > 0

    // Voice recording
    const [voiceUrl, setVoiceUrl] = useState("")
    const [isRecording, setIsRecording] = useState(false)
    const [elapsedRecordingTime, setElapsedRecordingTime] = useState(0)
    const [voiceUploadProgress, setVoiceUploadProgress] = useState(0)
    const [isUploadingVoice, setIsUploadingVoice] = useState(false)

    const adjustTextareaHeight = (textarea: HTMLTextAreaElement) => {
        textarea.style.height = "auto"
        textarea.style.height = `${textarea.scrollHeight}px`
    }

    const storeWithProgress = async (files: File[]) => {
        const onRootCidReady = (cid: string) => {
            // console.log("uploading files with cid:", cid)
        }

        const totalSize = files.map((f) => f.size).reduce((a, b) => a + b, 0)
        let uploaded = 0

        const onStoredChunk = (size: number) => {
            uploaded += size
            const pct = 100 * (uploaded / totalSize)
            setVoiceUploadProgress(Number(pct.toFixed(2)))
        }

        const client = new Web3Storage({
            token: process?.env?.NEXT_PUBLIC_WEB3_STORAGE_API_KEY || "",
        })

        return client.put(files, { onRootCidReady, onStoredChunk })
    }

    const startRecording = () => {
        recorder
            .start()
            .then(() => {
                setVoiceUrl("")
                setIsRecording(true)
                setIconsExpanded(false)
            })
            .catch((e: any) => {
                console.error(e)
            })
    }

    const stopRecording = () => {
        setIsRecording(false)
        setElapsedRecordingTime(0)

        recorder
            .stop()
            .getMp3()
            .then(async ([buffer, blob]: [any, Blob]) => {
                const file = new File(
                    buffer,
                    `${currentProfile?.name} Voice ` +
                        getDownloadFileName(new Date()) +
                        ".mp3",
                    {
                        type: blob.type,
                        lastModified: Date.now(),
                    }
                )

                const fileMetadata: FileMetadata = {
                    name: file?.name,
                    size: file?.size,
                    type: file?.type,
                }
                const createdBlob = new Blob([JSON.stringify(fileMetadata)], {
                    type: "application/json",
                })

                const fileToUpload = new File([file], "voice", {
                    type: file?.type,
                })

                const files = [
                    fileToUpload,
                    new File([createdBlob], "metadata.json"),
                ]

                setVoiceUrl(URL.createObjectURL(file))

                setIsUploadingVoice(true)
                const cid = await storeWithProgress(files)
                setIsUploadingVoice(false)

                setSendingXmtpMessage(ContentTypeVoice)

                if (replyingMessage) {
                    const reply: Reply = {
                        messageContent: cid,
                        replyContent: replyingMessage?.content,
                        replyContentTypeId:
                            replyingMessage?.contentType?.typeId,
                        replyMessageId: replyingMessage?.id,
                        replySenderAddress: replyingMessage?.senderAddress,
                        messageContentTypeId: ContentTypeVoice?.typeId,
                    }

                    await sendXmtpMessage(reply, ContentTypeReply, cid)
                } else {
                    await sendXmtpMessage(cid, ContentTypeVoice, cid)
                }

                setSendingXmtpMessage(undefined)

                setVoiceUploadProgress(0)
            })
            .catch((e: any) => {
                alert("We could not retrieve your message")
                console.log(e)
            })
    }

    const deleteRecording = () => {
        setIsRecording(false)
        setElapsedRecordingTime(0)

        recorder.stop()
    }

    const handleSend = async () => {
        if (!canSendMessage) {
            return
        }
        setSendingXmtpMessage(ContentTypeText)

        if (replyingMessage) {
            const reply: Reply = {
                messageContent: message,
                replyContent: replyingMessage?.content,
                replyContentTypeId: replyingMessage?.contentType?.typeId,
                replyMessageId: replyingMessage?.id,
                replySenderAddress: replyingMessage?.senderAddress,
                messageContentTypeId: ContentTypeText?.typeId,
            }

            const sent = await sendXmtpMessage(reply, ContentTypeReply, message)

            if (sent) {
                setMessage("")
            } else {
                showNotification({
                    title: "Default notification",
                    message: "Error sendingXmtpMessage message",
                })
            }
            setSendingXmtpMessage(undefined)
        } else {
            const sent = await sendXmtpMessage(message)

            if (sent) {
                setMessage("")
            } else {
                showNotification({
                    title: "Default notification",
                    message: "Error sendingXmtpMessage message",
                })
            }
            setSendingXmtpMessage(undefined)
        }
    }

    // Recording Timer
    useEffect(() => {
        let intervalId: NodeJS.Timer

        if (isRecording) {
            intervalId = setInterval(() => {
                setElapsedRecordingTime((time) => time + 1.44)
            }, 10)
        }

        return () => clearInterval(intervalId)
    }, [isRecording])

    useEffect(() => {
        setMessage("")
    }, [conversationKey])

    const handleKeyDown = (event: { key: string; shiftKey: boolean }) => {
        if (event.key === "Enter") {
            if (event.shiftKey) {
                setShiftEnterPressed(true)
            } else {
                handleSend()
            }
        }
    }

    const handleKeyUp = (event: { key: string; shiftKey: boolean }) => {
        if (event.key === "Shift" || event.key === "Enter") {
            setShiftEnterPressed(false)
        }
    }

    const handlePaste = (event: ClipboardEvent<HTMLDivElement>) => {
        const items = event.clipboardData.items
        for (let i = 0; i < items.length; i++) {
            const item = items[i]
            if (item.type.indexOf("image") !== -1) {
                const blob = item.getAsFile()
                if (blob) {
                    const file = new File([blob], "pasted-image.png", {
                        type: "image/png",
                    })

                    setSelectedFiles([...selectedFiles, file])
                }
            }
        }
    }

    return (
        // <div className="sticky lg:relative bottom-[0px] sm:bottom-[0px] lg:bottom-[-4px] w-[97%] h-fit min-h-[50px] max-h-[7em]">
        <div className="sticky lg:relative bottom-[0px] sm:bottom-[0px] bg-purple-0 w-full lg:bottom-[-4px] h-fit min-h-[50px] max-h-[7em]">
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                }}
                className="absolute bottom-0 h-fit w-full flex items-end justify-between pr-2 box-border"
            >
                <div className=" ml-4 relative flex items-center justify-start h-fit w-full rounded-2xl full border-black border-opacity-5 shadow bg-white py-1">
                    {!replyingMessage && (
                        <MessageLinkEmbedPreview message={message} />
                    )}
                    <VoiceRecordEmbedPreview
                        isUploadingVoice={isUploadingVoice}
                        voiceUploadProgress={voiceUploadProgress}
                        src={voiceUrl}
                    />

                    <ReplyContentPreview
                        replyingMessage={replyingMessage}
                        setReplyingMessage={setReplyingMessage}
                        selectedProfile={selectedProfile}
                        sendingXmtpMessage={sendingXmtpMessage}
                        isUploadingVoice={isUploadingVoice}
                    />
                    <div className="flex items-center z-10 pl-2 h-fit mt-auto mb-[8px] rounded[10px] rounded-r-none">
                        <IconButton
                            aria-label="expand"
                            className="text-[40px]"
                            onClick={() => {
                                if (!isRecording) {
                                    setIconsExpanded(!iconsExpanded)
                                }
                            }}
                        >
                            {iconsExpanded ? (
                                <RxCross2 color="#181A1E" />
                            ) : (
                                <MdOutlineKeyboardDoubleArrowRight color="#181A1E" />
                            )}
                        </IconButton>
                        <div className="sm500:block hidden">
                            <Popover
                                width="full"
                                position="top"
                                shadow="md"
                                classNames={{
                                    dropdown:
                                        "border-none padding-0 shadow-none rounded-none bg-transparent",
                                }}
                                disabled={disabledInput}
                            >
                                <Popover.Target>
                                    <IconButton aria-label="emoji">
                                        <MdOutlineEmojiEmotions color="#181A1E" />
                                    </IconButton>
                                </Popover.Target>
                                <Popover.Dropdown className="px-0 sm400:px-[16px]">
                                    <EmojiPicker
                                        onEmojiClick={(event) => {
                                            setMessage(message + event.emoji)
                                        }}
                                    />
                                </Popover.Dropdown>
                            </Popover>
                        </div>
                        <div
                            className={clsx(
                                iconsExpanded
                                    ? "opacity-100 sm500:w-[76px] w-[110px]"
                                    : "opacity-0 w-0",

                                "flex items-center transition-all duration-500 overflow-hidden"
                            )}
                        >
                            <div className="block sm500:hidden">
                                <Popover
                                    width="full"
                                    position="top"
                                    shadow="md"
                                    classNames={{
                                        dropdown:
                                            "border-none padding-0 shadow-none rounded-none bg-transparent",
                                    }}
                                    disabled={disabledInput}
                                >
                                    <Popover.Target>
                                        <IconButton aria-label="emoji">
                                            <MdOutlineEmojiEmotions color="#181A1E" />
                                        </IconButton>
                                    </Popover.Target>
                                    <Popover.Dropdown className="px-0 sm400:px-[16px]">
                                        <EmojiPicker
                                            onEmojiClick={(event) => {
                                                setMessage(
                                                    message + event.emoji
                                                )
                                            }}
                                        />
                                    </Popover.Dropdown>
                                </Popover>
                            </div>
                            <Popover
                                position="top"
                                width="full"
                                shadow="md"
                                classNames={{
                                    dropdown:
                                        "border-none pr-0 shadow-none rounded-none bg-transparent",
                                }}
                                disabled={disabledInput}
                            >
                                <Popover.Target>
                                    <IconButton
                                        aria-label="emoji"
                                        ref={gifBtnRef}
                                    >
                                        <RiFileGifLine
                                            size={"1em"}
                                            color="#181A1E"
                                        />
                                    </IconButton>
                                </Popover.Target>
                                <Popover.Dropdown className="px-0 sm400:px-[16px] z-20">
                                    <GifSelector
                                        onClose={() => {
                                            if (gifBtnRef !== null) {
                                                // @ts-ignore
                                                gifBtnRef?.current.click()
                                            }
                                        }}
                                        sendXmtpMessage={sendXmtpMessage}
                                        setSendingXmtpMessage={
                                            setSendingXmtpMessage
                                        }
                                        replyingMessage={replyingMessage}
                                    />
                                </Popover.Dropdown>
                            </Popover>
                            <Popover
                                position="top"
                                width="full"
                                shadow="md"
                                classNames={{
                                    dropdown:
                                        "border-none pr-0 shadow-none rounded-none bg-transparent",
                                }}
                                disabled={disabledInput}
                            >
                                <Popover.Target>
                                    <IconButton
                                        aria-label="emoji"
                                        ref={stickerBtnRef}
                                    >
                                        <LuSticker color="#181A1E" />
                                    </IconButton>
                                </Popover.Target>
                                <Popover.Dropdown className="px-0 sm400:px-[16px] z-20">
                                    <StickerSelector
                                        onClose={() => {
                                            if (stickerBtnRef !== null) {
                                                // @ts-ignore
                                                stickerBtnRef?.current.click()
                                            }
                                        }}
                                        sendXmtpMessage={sendXmtpMessage}
                                        setSendingXmtpMessage={
                                            setSendingXmtpMessage
                                        }
                                        replyingMessage={replyingMessage}
                                    />
                                </Popover.Dropdown>
                            </Popover>
                        </div>
                    </div>

                    <textarea
                        className={clsx(
                            !!!message && "max-h-32",
                            "z-10 bg-white max-h-32  placeholder:text-gray-400 placeholder:font-light rounded-none ",
                            " border-0  pl24 pr-12 py-3.5 p-4 w-11/12 text-justify resize-none  scrollbar-hide  text-black focus:text-black textarea textarea-ghost bg-white bgindigo-400 mr-3 focus:bg-white outline-none focus:outline-none text-base md:text-lg shadow-xl focus-within:shadow-lg in-h-16 "
                        )}
                        // type="text"
                        // value={message}
                        // onChange={handleChange}
                        rows={1}
                        id="composer-message-field"
                        // multiline
                        // maxRows={4}
                        placeholder={
                            isRecording || iconsExpanded ? "" : "Message.."
                        }
                        style={{ boxShadow: "none" }}
                        value={message}
                        disabled={disabledInput || isRecording}
                        onKeyDown={handleKeyDown}
                        onKeyUp={handleKeyUp}
                        onPaste={() => handlePaste}
                        onChange={(event) => {
                            if (
                                shiftEnterPressed ||
                                event?.target?.value?.replace(message, "") !==
                                    "\n"
                            ) {
                                setMessage(event.target.value)
                                adjustTextareaHeight(event.target)
                            }
                        }}
                    />

                    {isRecording ? (
                        <div className="flex items-center gap-[4px] h-full bg-white  z-10 pr-[20px]">
                            <span className="text-black font-medium min-w-[65px]">
                                {formatVoiceTimer(elapsedRecordingTime)}
                            </span>
                            <FiberManualRecordRounded
                                className="recording-circle text-badgeRed1"
                                style={{ width: "1.15rem", height: "1.15rem" }}
                            />
                        </div>
                    ) : (
                        <div className=" h-auto px-2 mr-1 w-auto">
                            <MessageAttachments
                                messageAttachmensDisabled={
                                    disabledInput ?? false
                                }
                            />
                        </div>
                    )}
                </div>
                <div
                    className={clsx(
                        isRecording ? "w-[175px]" : "sm:w-[80px] w-[70px]",
                        "  flex items-center relative transition-all duration-300 mb-8"
                    )}
                >
                    <button
                        aria-label="send"
                        disabled={!isRecording || disabledInput}
                        onClick={deleteRecording}
                        className={clsx(
                            isRecording
                                ? "sm:right-[67.5px] right-[55px] opacity-100"
                                : "right-0 opacity-0",
                            // max-h-[50px] min-w-[50px] max-w-[50px] sm:min-w-[60px] sm:max-w-[60px] sm:min-h-[60px] sm:max-h-[60px] p-[17px]
                            "absolute top-0 bottom-0 m-auto h-5 w-12  transition-all duration-300 ml-2.5 text-white rounded-full border-black border-opacity-5 shadow cursor-pointer overflow-hidden btn  border-0 bg-red-500 hover:bg-red-600 active:bg-red-600 focus:bg-red-600 "
                        )}
                    >
                        <span className="max-w-[25px] max-h-[25px]">
                            <MdDeleteOutline color="white" size={"1.9em"} />
                        </span>
                    </button>
                    <button
                        aria-label="send"
                        disabled={
                            (message?.trim().length !== 0 && !canSendMessage) ||
                            disabledInput
                        }
                        onClick={
                            message?.length === 0
                                ? !isRecording
                                    ? () => {
                                          startRecording()
                                      }
                                    : () => {
                                          stopRecording()
                                      }
                                : handleSend
                        }
                        className="absolute z-10 right-0 top-0 bottom-0 m-auto h-fit w-fit max-h-[50px] min-w-[50px] max-w-[50px] sm:max-h-[60px] sm:min-w-[60px] sm:max-w-[60px] p-[17px] flex justify-center items-center from-text_gradient1 to-text_gradient2 bg-gradient-to-br transition-all duration-300 ml-2.5 text-white rounded-full border-black border-opacity-5 shadow cursor-pointer "
                    >
                        {sendingXmtpMessage &&
                        sendingXmtpMessage !== ContentTypeReaction ? (
                            <div className="loading-dots flex">
                                <div className="loading-dots--dot"></div>
                                <div className="loading-dots--dot"></div>
                                <div className="loading-dots--dot"></div>
                            </div>
                        ) : message?.length === 0 && !isRecording ? (
                            <div className=" cursor-pointer  btn rounded-2xl">
                                <BsFillMicFill
                                    className=" cursor-pointer  text-gray-400"
                                    size={"1.5em"}
                                    color="white"
                                />
                            </div>
                        ) : (
                            <div className=" cursor-pointer  btn rounded-2xl">
                                <FaRegPaperPlane
                                    className=" cursor-pointer  text-gray-400"
                                    size={"1.5em"}
                                    color="white"
                                />
                            </div>
                        )}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Composer
