import { showNotification } from "@mantine/notifications"
import { ClipboardEvent, Dispatch, FC, SetStateAction, useRef } from "react"
import { useEffect, useState } from "react"
import EmojiPicker from "emoji-picker-react"
import { Popover } from "@mantine/core"
import {
    CloseRounded,
    DeleteOutlineRounded,
    EmojiEmotionsOutlined,
    GifBoxOutlined,
    KeyboardDoubleArrowRightRounded,
    MicRounded,
    FiberManualRecordRounded,
} from "@mui/icons-material"
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
import { GrAttachment } from "react-icons/gr"
import { FaRegPaperPlane } from "react-icons/fa"
import { BsFillMicFill } from "react-icons/bs"
import { HiOutlineEmojiHappy } from "react-icons/hi"
import { RxDoubleArrowRight } from "react-icons/rx"

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
                className="absolute bottom-0 h-fit w-full flex items-center justify-between pr-2 box-border"
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
                                <CloseRounded
                                    fontSize="inherit"
                                    className="text-sideBarLink"
                                />
                            ) : (
                                <KeyboardDoubleArrowRightRounded
                                    fontSize="inherit"
                                    className="text-sideBarLink"
                                />
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
                                        <EmojiEmotionsOutlined className="text-[40px] text-sideBarLink" />
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
                                            <EmojiEmotionsOutlined className="text-[40px] text-sideBarLink" />
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
                                        <GifBoxOutlined className="text-[40px] text-sideBarLink" />
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
                                        <svg
                                            viewBox="0 0 24 24"
                                            height="20"
                                            width="20"
                                            preserveAspectRatio="xMidYMid meet"
                                            version="1.1"
                                            x="0px"
                                            y="0px"
                                            enableBackground="new 0 0 24 24"
                                            stroke="#436475"
                                            fill="#436475"
                                        >
                                            <path
                                                stroke="10px"
                                                d="M21.799,10.183c-0.002-0.184-0.003-0.373-0.008-0.548c-0.02-0.768-0.065-1.348-0.173-1.939 c-0.124-0.682-0.328-1.296-0.624-1.87c-0.301-0.587-0.695-1.124-1.171-1.594c-0.473-0.469-1.016-0.859-1.614-1.159 c-0.576-0.291-1.196-0.493-1.887-0.615c-0.59-0.106-1.174-0.15-1.961-0.171c-0.318-0.008-3.607-0.012-4.631,0 c-0.798,0.02-1.383,0.064-1.975,0.17C7.066,2.58,6.446,2.781,5.867,3.073c-0.596,0.299-1.139,0.69-1.614,1.16 C3.78,4.7,3.386,5.236,3.082,5.826C2.788,6.398,2.584,7.012,2.459,7.694C2.352,8.285,2.307,8.88,2.286,9.635 C2.278,9.912,2.27,12.517,2.27,12.517c0,0.52,0.008,1.647,0.016,1.925c0.02,0.755,0.066,1.349,0.172,1.938 c0.126,0.687,0.33,1.3,0.624,1.871c0.303,0.59,0.698,1.126,1.173,1.595c0.473,0.469,1.017,0.859,1.614,1.159 c0.578,0.291,1.197,0.492,1.887,0.615c0.085,0.015,0.171,0.029,0.259,0.041c0.479,0.068,0.833,0.087,1.633,0.108 c0.035,0.001,2.118-0.024,2.578-0.035c1.667-0.04,3.261-0.684,4.487-1.811c1.128-1.038,2.129-1.972,2.928-2.737 c1.242-1.19,1.99-2.806,2.097-4.528l0.066-1.052c0.001-0.296,0.001-0.499,0.001-0.668C21.806,10.915,21.8,10.2,21.799,10.183z  M18.604,16.103c-0.79,0.757-1.784,1.684-2.906,2.716c-0.588,0.541-1.292,0.919-2.044,1.154c0.051-0.143,0.116-0.276,0.145-0.433 c0.042-0.234,0.06-0.461,0.067-0.74c0.003-0.105,0.009-0.789,0.009-0.789c0.013-0.483,0.042-0.865,0.107-1.22 c0.069-0.379,0.179-0.709,0.336-1.016c0.16-0.311,0.369-0.595,0.621-0.844c0.254-0.252,0.542-0.458,0.859-0.617 c0.314-0.158,0.65-0.268,1.037-0.337c0.359-0.064,0.733-0.093,1.253-0.106c0,0,0.383,0.001,0.701-0.003 c0.301-0.008,0.523-0.025,0.755-0.066c0.186-0.034,0.348-0.105,0.515-0.169C19.806,14.568,19.311,15.425,18.604,16.103z  M20.267,11.346c-0.028,0.15-0.063,0.263-0.111,0.356c-0.06,0.116-0.128,0.211-0.208,0.29c-0.088,0.087-0.187,0.158-0.296,0.213 s-0.228,0.094-0.371,0.119c-0.141,0.025-0.298,0.037-0.52,0.043c-0.309,0.004-0.687,0.004-0.687,0.004 c-0.613,0.016-1.053,0.049-1.502,0.129c-0.527,0.094-1.002,0.249-1.447,0.473c-0.457,0.229-0.875,0.529-1.241,0.891 c-0.363,0.358-0.667,0.771-0.9,1.224C12.757,15.53,12.6,16,12.505,16.522c-0.081,0.447-0.116,0.895-0.131,1.461 c0,0-0.006,0.684-0.008,0.777c-0.006,0.208-0.018,0.37-0.043,0.511c-0.025,0.136-0.063,0.251-0.117,0.356 c-0.056,0.108-0.127,0.206-0.213,0.291c-0.088,0.087-0.187,0.158-0.296,0.213c-0.072,0.036-0.168,0.063-0.37,0.098 c-0.027,0.005-0.25,0.027-0.448,0.031c-0.021,0-1.157,0.01-1.192,0.009c-0.742-0.019-1.263-0.046-1.668-0.126 c-0.551-0.098-1.031-0.254-1.477-0.479c-0.457-0.229-0.871-0.527-1.233-0.885c-0.363-0.358-0.663-0.766-0.894-1.215 c-0.225-0.436-0.382-0.909-0.482-1.453c-0.09-0.495-0.13-1.025-0.149-1.71c-0.007-0.266-0.011-0.543-0.012-0.847 C3.769,13.262,3.777,9.94,3.784,9.675c0.02-0.685,0.061-1.214,0.151-1.712c0.098-0.54,0.256-1.012,0.481-1.45 C4.647,6.064,4.946,5.657,5.308,5.3c0.363-0.36,0.777-0.657,1.233-0.886c0.447-0.225,0.927-0.382,1.477-0.479 c0.503-0.09,1.022-0.129,1.74-0.149c1.008-0.012,4.26-0.008,4.561,0c0.717,0.019,1.236,0.058,1.737,0.148 c0.552,0.098,1.032,0.254,1.476,0.478c0.458,0.23,0.872,0.527,1.234,0.885c0.364,0.359,0.663,0.766,0.892,1.213 c0.228,0.441,0.385,0.913,0.482,1.453c0.091,0.499,0.131,1.013,0.15,1.712c0.008,0.271,0.014,1.098,0.014,1.235 C20.299,11.085,20.289,11.226,20.267,11.346z"
                                            ></path>
                                        </svg>
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

                    {/* <TextField
                        id="composer-message-field"
                        multiline
                        maxRows={4}
                        placeholder={
                            isRecording || iconsExpanded ? "" : "Message.."
                        }
                        style={{ boxShadow: "none" }}
                        value={message}
                        disabled={disabledInput || isRecording}
                        onKeyDown={handleKeyDown}
                        onKeyUp={handleKeyUp}
                        onPaste={handlePaste}
                        onChange={(event) => {
                            if (
                                shiftEnterPressed ||
                                event?.target?.value?.replace(message, "") !==
                                    "\n"
                            ) {
                                setMessage(event.target.value)
                            }
                        }}
                        classes={{
                            root: "composer-message-field",
                        }}
                        className={clsx(
                            !!!message && "max-h-[55px]",
                            "z-10 bg-white ml-0 w-[80%] p-0 flex-1 sm:h-full h-full placeholder:text-gray-400 placeholder:font-light rounded-full rounded-l-none text-black font-normal shadow-none focus:shadow-none outline-none focus:outline-none border-none focus:border-none"
                        )}
                    /> */}
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
                        multiline
                        maxRows={4}
                        placeholder={
                            isRecording || iconsExpanded ? "" : "Message.."
                        }
                        style={{ boxShadow: "none" }}
                        value={message}
                        disabled={disabledInput || isRecording}
                        onKeyDown={handleKeyDown}
                        onKeyUp={handleKeyUp}
                        onPaste={handlePaste}
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
                        classes={{
                            root: "composer-message-field",
                        }}
                    />

                    {isRecording ? (
                        <div className="flex items-center gap-[4px] h-full bg-white  z-10 pr-[20px]">
                            <span className="text-sideBarLink font-medium min-w-[65px]">
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
                        "flex items-center relative transition-all duration-300"
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
                            "absolute top-0 bottom-0 m-auto h-fit w-fit max-h-[50px] min-w-[50px] max-w-[50px] sm:min-w-[60px] sm:max-w-[60px] sm:min-h-[60px] sm:max-h-[60px] p-[17px] flex justify-center items-center bg-badgeRed1 transition-all duration-300 ml-2.5 text-white rounded-full border-black border-opacity-5 shadow cursor-pointer overflow-hidden"
                        )}
                    >
                        <span className="max-w-[25px] max-h-[25px]">
                            <DeleteOutlineRounded
                                style={{ fontSize: "25px" }}
                            />
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
                            <button className=" cursor-pointer  btn rounded-2xl">
                                <BsFillMicFill
                                    className=" cursor-pointer  text-gray-400"
                                    size={"1.5em"}
                                    color="white"
                                />
                            </button>
                        ) : (
                            <button className=" cursor-pointer  btn rounded-2xl">
                                <FaRegPaperPlane
                                    className=" cursor-pointer  text-gray-400"
                                    size={"1.5em"}
                                    color="white"
                                />
                            </button>
                        )}
                    </button>
                </div>
                {/* <div className="px-3 absolute flex items-center justify-between bottom-2 mt-5 mb-2  w-full">
                    <RxDoubleArrowRight
                        className=" cursor-pointer absolute bottom-3.5 left-10 text-gray-400"
                        size={"1.5em"}
                        color="black"
                    />
                    <HiOutlineEmojiHappy
                        className=" cursor-pointer absolute bottom-3.5 left-[4.5rem] text-gray-400"
                        size={"1.5em"}
                        color="black"
                    />

                    <textarea
                        placeholder=" What's Happening?"
                        className=" border-0 max-h-48 pl-24 pr-12 py-3.5 p-4 w-11/12 text-justify resize-none  scrollbar-hide  text-black focus:text-black textarea rounded-xl textarea-ghost bg-white focus:bg-white outline-none focus:outline-none text-base md:text-lg shadow-xl focus-within:shadow-lg in-h-16"
                        // type="text"
                        name=""
                        id=""
                        // value={message}
                        // onChange={handleChange}
                        rows={1}
                    />
                    <GrAttachment
                        className=" cursor-pointer absolute bottom-3.5 right-28 text-gray-400"
                        size={"1.5em"}
                        color="black"
                    />
                    <div className=" absolute bottom-0 right-5">
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
                </div> */}
            </form>
        </div>
    )
}

export default Composer
