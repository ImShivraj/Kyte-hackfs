import {
    AddRounded,
    DeleteOutlineRounded,
    Attachment,
    OpenInFullRounded,
    CloseRounded,
} from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { useMessageStore } from "@store/message"
import clsx from "clsx"
import "plyr-react/plyr.css"
import "react-h5-audio-player/lib/styles.css"
import { Web3Storage } from "web3.storage"

import { ChangeEvent, useEffect, useRef, useState } from "react"
import { ContentTypeAudio } from "@codecs/Audio"
import { ContentTypeImage } from "@codecs/Image"
import { ContentTypeVideo } from "@codecs/Video"

type Props = {
    sendXmtpMessage: (
        message: string | Reply,
        contentType?: ContentTypeId,
        contentFallback?: string
    ) => Promise<boolean>
    setSendingXmtpMessage: (
        sendingXmtpMessage: ContentTypeId | undefined
    ) => void
    replyingMessage: DecodedMessage | null
}

interface FileMetadata {
    name: string
    size: number
    type: string
}

import { showNotification } from "@mantine/notifications"
import {
    MAX_MESSAGE_FILE_SIZE_BYTES,
    MAX_TOTAL_MESSAGE_FILES_SIZE_BYTES,
} from "@constants/index"
import MessageFileSendPreview from "./MessageFileSendPreview"
import MessageFileSendPreviewShort from "./MessageFileSendPreviewShort"
import { ContentTypeId, DecodedMessage } from "@xmtp/xmtp-js"
import { ContentTypeReply, Reply } from "@codecs/Reply"
import { ContentTypeDocument } from "@codecs/Document"
import isValidMessageFileType from "../utils/isValidMessageFileType"

const FileSendViewModal = ({
    sendXmtpMessage,
    setSendingXmtpMessage,
    replyingMessage,
}: Props) => {
    const {
        selectedFiles,
        setSelectedFiles,
        uploadingFiles,
        setUploadingFiles,
    } = useMessageStore()

    const [selectedFileIndex, setSelectedFileIndex] = useState<number | null>(
        null
    )
    const [uploadingFileIndex, setUploadingFileIndex] = useState<number | null>(
        null
    )
    const [isMinimized, setIsMinimized] = useState<boolean>(false)

    const [stylesState, setStylesState] = useState("hidden")
    const fileAddBtnRef = useRef(null)

    const [uploadProgress, setUploadProgress] = useState(0)

    useEffect(() => {
        if (!selectedFiles || selectedFiles?.length === 0) {
            setTimeout(() => {
                setStylesState("opacity-0 top-0 bottom-[-1000px]")
            }, 300)
            setTimeout(() => {
                setStylesState("hidden")
            }, 900)
            setSelectedFileIndex(null)
        } else if (
            selectedFiles &&
            selectedFiles?.length > 0 &&
            selectedFileIndex === null
        ) {
            setStylesState("opacity-0 bottom-[-1000px]")
            setTimeout(() => {
                setStylesState("opacity-100 top-0 bottom-0")
            }, 300)
            setSelectedFileIndex(0)
        }
    }, [selectedFiles])

    const storeWithProgress = async (files: File[]) => {
        const onRootCidReady = (cid: string) => {
            // console.log("uploading files with cid:", cid)
        }

        const totalSize = files.map((f) => f.size).reduce((a, b) => a + b, 0)
        let uploaded = 0

        const onStoredChunk = (size: number) => {
            uploaded += size
            const pct = 100 * (uploaded / totalSize)
            setUploadProgress(Number(pct.toFixed(2)))
        }

        const client = new Web3Storage({
            token: process?.env?.NEXT_PUBLIC_WEB3_STORAGE_API_KEY || "",
        })

        return client.put(files, { onRootCidReady, onStoredChunk })
    }

    const handleUploadFiles = async () => {
        for (let index = 0; index < selectedFiles?.length; index++) {
            setUploadProgress(0)
            setUploadingFiles(true)
            setUploadingFileIndex(index)

            const fileMetadata: FileMetadata = {
                name: selectedFiles[index]?.name,
                size: selectedFiles[index]?.size,
                type: selectedFiles[index]?.type,
            }

            // console.log({ fileMetadata })

            const blob = new Blob([JSON.stringify(fileMetadata)], {
                type: "application/json",
            })

            const fileToUpload = new File(
                [selectedFiles[index]],
                selectedFiles[index]?.type.split("/")[0] === "application" ||
                selectedFiles[index]?.type.split("/")[0] === "text"
                    ? "document"
                    : selectedFiles[index]?.type.split("/")[0],
                {
                    type: selectedFiles[index].type,
                }
            )

            const files = [fileToUpload, new File([blob], "metadata.json")]

            const cid = await storeWithProgress(files)

            switch (selectedFiles[index]?.type?.split("/")[0]) {
                case "image":
                    setSendingXmtpMessage(ContentTypeImage)

                    if (replyingMessage) {
                        const reply: Reply = {
                            messageContent: cid,
                            replyContent: replyingMessage?.content,
                            replyContentTypeId:
                                replyingMessage?.contentType?.typeId,
                            replyMessageId: replyingMessage?.id,
                            replySenderAddress: replyingMessage?.senderAddress,
                            messageContentTypeId: ContentTypeImage?.typeId,
                        }

                        await sendXmtpMessage(reply, ContentTypeReply, cid)
                    } else {
                        await sendXmtpMessage(cid, ContentTypeImage, cid)
                    }

                    setSendingXmtpMessage(undefined)
                    setUploadingFiles(false)
                    setUploadProgress(0)
                    break
                case "video":
                    setSendingXmtpMessage(ContentTypeVideo)

                    if (replyingMessage) {
                        const reply: Reply = {
                            messageContent: cid,
                            replyContent: replyingMessage?.content,
                            replyContentTypeId:
                                replyingMessage?.contentType?.typeId,
                            replyMessageId: replyingMessage?.id,
                            replySenderAddress: replyingMessage?.senderAddress,
                            messageContentTypeId: ContentTypeVideo?.typeId,
                        }

                        await sendXmtpMessage(reply, ContentTypeReply, cid)
                    } else {
                        await sendXmtpMessage(cid, ContentTypeVideo, cid)
                    }

                    setSendingXmtpMessage(undefined)
                    setUploadingFiles(false)
                    setUploadProgress(0)
                    break
                case "audio":
                    setSendingXmtpMessage(ContentTypeAudio)

                    if (replyingMessage) {
                        const reply: Reply = {
                            messageContent: cid,
                            replyContent: replyingMessage?.content,
                            replyContentTypeId:
                                replyingMessage?.contentType?.typeId,
                            replyMessageId: replyingMessage?.id,
                            replySenderAddress: replyingMessage?.senderAddress,
                            messageContentTypeId: ContentTypeAudio?.typeId,
                        }

                        await sendXmtpMessage(reply, ContentTypeReply, cid)
                    } else {
                        await sendXmtpMessage(cid, ContentTypeAudio, cid)
                    }
                    setSendingXmtpMessage(undefined)
                    setUploadingFiles(false)
                    setUploadProgress(0)
                    break
                case "application":
                    setSendingXmtpMessage(ContentTypeDocument)

                    if (replyingMessage) {
                        const reply: Reply = {
                            messageContent: cid,
                            replyContent: replyingMessage?.content,
                            replyContentTypeId:
                                replyingMessage?.contentType?.typeId,
                            replyMessageId: replyingMessage?.id,
                            replySenderAddress: replyingMessage?.senderAddress,
                            messageContentTypeId: ContentTypeDocument?.typeId,
                        }

                        await sendXmtpMessage(reply, ContentTypeReply, cid)
                    } else {
                        await sendXmtpMessage(cid, ContentTypeDocument, cid)
                    }
                    setSendingXmtpMessage(undefined)
                    setUploadingFiles(false)
                    setUploadProgress(0)
                    break

                case "text":
                    setSendingXmtpMessage(ContentTypeDocument)

                    if (replyingMessage) {
                        const reply: Reply = {
                            messageContent: cid,
                            replyContent: replyingMessage?.content,
                            replyContentTypeId:
                                replyingMessage?.contentType?.typeId,
                            replyMessageId: replyingMessage?.id,
                            replySenderAddress: replyingMessage?.senderAddress,
                            messageContentTypeId: ContentTypeDocument?.typeId,
                        }

                        await sendXmtpMessage(reply, ContentTypeReply, cid)
                    } else {
                        await sendXmtpMessage(cid, ContentTypeDocument, cid)
                    }
                    setSendingXmtpMessage(undefined)
                    setUploadingFiles(false)
                    setUploadProgress(0)
                    break
                default:
                    break
            }
        }
    }

    const getNumFilesRemaining = () => {
        return (
            selectedFiles?.length -
            (uploadingFileIndex !== null ? uploadingFileIndex : 0) -
            (!uploadingFiles && uploadingFileIndex !== null ? 1 : 0)
        )
    }

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        setUploadingFileIndex(null)

        if (event?.target?.files) {
            if (
                event?.target?.files?.length > 0 &&
                selectedFiles?.length <= 10 &&
                event?.target?.files?.length < 10
            ) {
                // show notification if the total fize size has exceeded
                const totalSize = Array.from(event?.target?.files).reduce(
                    (total: number, current: File) => total + current.size,
                    0
                )

                if (totalSize > MAX_TOTAL_MESSAGE_FILES_SIZE_BYTES) {
                    showNotification({
                        title: "User notification",
                        message: "Max total file size is 100 MB !",
                        autoClose: 2500,
                        styles: () => ({
                            root: {
                                zIndex: 1000000000,
                                width: "300px",
                                padding: "12.5px 5px 20px 22px",
                                "&::before": {
                                    backgroundColor: "#F20505",
                                },
                            },
                        }),
                    })
                }

                // show notification that fize type is wrong
                for (let i = 0; i < event?.target?.files?.length; i++) {
                    if (!isValidMessageFileType(event?.target?.files[i])) {
                        showNotification({
                            title: "User notification",
                            message: "Incorrect file type !",
                            autoClose: 2500,
                            styles: () => ({
                                root: {
                                    zIndex: 1000000000,
                                    width: "300px",
                                    padding: "12.5px 5px 20px 22px",
                                    "&::before": {
                                        backgroundColor: "#F20505",
                                    },
                                },
                            }),
                        })
                        break
                    }

                    if (
                        event?.target?.files[i]?.size >
                        MAX_MESSAGE_FILE_SIZE_BYTES
                    ) {
                        showNotification({
                            title: "User notification",
                            message: "Max file size is 15 MB !",
                            autoClose: 2500,
                            styles: () => ({
                                root: {
                                    zIndex: 1000000000,
                                    width: "300px",
                                    padding: "12.5px 5px 20px 22px",
                                    "&::before": {
                                        backgroundColor: "#F20505",
                                    },
                                },
                            }),
                        })
                        break
                    }
                }

                const filteredFiles = Array.from(event.target?.files).filter(
                    (file: File) => {
                        let isFileLoaded = false

                        for (let i = 0; i < selectedFiles?.length; i++) {
                            if (selectedFiles[i]?.name === file?.name) {
                                isFileLoaded = true
                                break
                            }
                        }

                        return (
                            !isFileLoaded &&
                            isValidMessageFileType(file) &&
                            file?.size <= MAX_MESSAGE_FILE_SIZE_BYTES
                        )
                    }
                )

                if (filteredFiles.length > 0) {
                    setSelectedFiles([...selectedFiles, ...filteredFiles])
                }
            } // Checking if max 10 files are selected
            else if (event?.target?.files?.length > 10) {
                showNotification({
                    title: "User notification",
                    message: "Max 10 files can be sent at a time !",
                    autoClose: 2500,
                    styles: () => ({
                        root: {
                            zIndex: 1000000000,
                            width: "300px",
                            padding: "12.5px 5px 20px 22px",
                            "&::before": {
                                backgroundColor: "#F20505",
                            },
                        },
                    }),
                })
            }
        }
    }

    useEffect(() => {
        if (uploadingFiles) {
            setIsMinimized(true)
        }
    }, [uploadingFiles])

    return (
        <div
            className={clsx(
                stylesState,
                isMinimized
                    ? "left-[0.85rem] right-auto top-auto bottom-[6rem] pb-0"
                    : "left-0 right-0 top-0 bottom-0 pb-2.5",
                "bg-white transition-all duration-500 absolute m-auto h-fit z-50 max-w-[600px] rounded-[10px] overflow-hidden shadow-xl border border-black border-opacity-5 text-black"
            )}
        >
            <div className="m-auto flex flex-col gap-2.5 h-fit w-full relative">
                {!isMinimized &&
                !uploadingFiles &&
                uploadingFileIndex !== null &&
                uploadingFileIndex >= 0 ? (
                    <button
                        className="absolute top-0 right-0 m-auto z-20 bg-badgeRed1 border border-white border-opacity-5 bg-opacity-100 backdrop-blur p-[8px] rounded-bl-[10px]"
                        style={{
                            boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.5)",
                        }}
                        onClick={() => {
                            setSelectedFiles([])
                            setUploadingFileIndex(null)
                        }}
                    >
                        <CloseRounded className="text-white" fontSize="small" />
                    </button>
                ) : (
                    <button
                        className="absolute top-0 right-0 m-auto z-20 bg-black border border-white border-opacity-5 bg-opacity-20 backdrop-blur p-[8px] rounded-bl-[10px]"
                        style={{
                            boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.5)",
                        }}
                        onClick={() => setIsMinimized(!isMinimized)}
                    >
                        <OpenInFullRounded
                            className="text-white"
                            fontSize="small"
                        />
                    </button>
                )}

                {selectedFileIndex !== null && selectedFiles?.length > 0 ? (
                    <MessageFileSendPreview
                        selectedFileIndex={selectedFileIndex}
                        uploadingFileIndex={uploadingFileIndex}
                        isMinimized={isMinimized}
                        uploadProgress={uploadProgress}
                        uploadingFiles={uploadingFiles}
                    />
                ) : (
                    <div className="w-full h-[377px] bg-[#e5e7eb] flex items-center justify-center">
                        <Attachment
                            className="text-white"
                            style={{ fontSize: "150px" }}
                        />
                    </div>
                )}

                <div className="flex items-center justify-between px-2.5">
                    <div className="flex items-center gap-1">
                        <MessageFileSendPreviewShort
                            selectedFileIndex={selectedFileIndex}
                            setSelectedFileIndex={setSelectedFileIndex}
                            isMinimized={isMinimized}
                            uploadingFileIndex={uploadingFileIndex}
                            uploadProgress={uploadProgress}
                            uploadingFiles={uploadingFiles}
                        />

                        <IconButton
                            aria-label="add"
                            className={clsx(
                                isMinimized
                                    ? "w-0 opacity-0"
                                    : "w-[50px] opacity-100",
                                " text-white h-[50px] transition-all duration-500 overflow-hidden"
                            )}
                            onClick={() => {
                                if (!isMinimized) {
                                    // @ts-ignore
                                    fileAddBtnRef?.current.click()
                                }
                            }}
                            style={{
                                backgroundColor: "rgb(67, 100, 117, .1)",
                                borderRadius: "6px",
                            }}
                        >
                            <AddRounded
                                fontSize="medium"
                                className="text-sideBarLink"
                            />
                        </IconButton>

                        <input
                            id="add"
                            type="file"
                            ref={fileAddBtnRef}
                            style={{ display: "none" }}
                            accept={`image/*, audio/*, video/*, application/*, text/* `}
                            disabled={uploadingFiles}
                            multiple
                            onClick={() => {
                                if (
                                    !uploadingFiles &&
                                    uploadingFileIndex !== null &&
                                    uploadingFileIndex >= 0
                                ) {
                                    setSelectedFiles([])
                                    setUploadingFileIndex(null)
                                }
                            }}
                            onChange={handleInput}
                        />
                    </div>
                    <div
                        className={clsx(
                            isMinimized ? "w-0" : "w-fit",
                            "flex items-center overflow-hidden transition-all duration-500"
                        )}
                    >
                        <button
                            aria-label="delete"
                            disabled={uploadingFileIndex !== null}
                            onClick={() => {
                                setSelectedFiles(
                                    selectedFiles.filter(
                                        (_: File, index: number) =>
                                            index !== selectedFileIndex
                                    )
                                )

                                if (
                                    selectedFiles?.length !== 1 &&
                                    selectedFileIndex ===
                                        selectedFiles?.length - 1
                                ) {
                                    setSelectedFileIndex(selectedFileIndex - 1)
                                }
                            }}
                            className={clsx(
                                uploadingFileIndex !== null || uploadingFiles
                                    ? "text-sideBarLink"
                                    : "bg-badgeRed1 text-white",
                                "relative max-h-[60px]  min-w-[60px] max-w-[60px] p-[17px] flex justify-center items-center transition-all duration-300 ml-2.5 rounded-full border-black border-opacity-5 shadow cursor-pointer"
                            )}
                        >
                            <DeleteOutlineRounded />
                        </button>

                        <button
                            aria-label="send"
                            disabled={uploadingFiles}
                            onClick={handleUploadFiles}
                            className="relative max-h-[60px] text-white min-w-[60px] max-w-[60px] p-[17px] flex justify-center items-center from-text_gradient1 to-text_gradient2 bg-gradient-to-br transition-all duration-300 ml-2.5 rounded-full border-black border-opacity-5 shadow cursor-pointer"
                        >
                            {uploadingFiles ? (
                                <div className="loading-dots flex">
                                    <div className="loading-dots--dot"></div>
                                    <div className="loading-dots--dot"></div>
                                    <div className="loading-dots--dot"></div>
                                </div>
                            ) : (
                                <svg
                                    width="25"
                                    height="25"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="relative left-[1.5px]"
                                >
                                    <path
                                        d="M18.0703 8.50916L9.51026 4.22916C3.76026 1.34916 1.40026 3.70916 4.28026 9.45916L5.15026 11.1992C5.40026 11.7092 5.40026 12.2992 5.15026 12.8092L4.28026 14.5392C1.40026 20.2892 3.75026 22.6492 9.51026 19.7692L18.0703 15.4892C21.9103 13.5692 21.9103 10.4292 18.0703 8.50916ZM14.8403 12.7492H9.44026C9.03026 12.7492 8.69026 12.4092 8.69026 11.9992C8.69026 11.5892 9.03026 11.2492 9.44026 11.2492H14.8403C15.2503 11.2492 15.5903 11.5892 15.5903 11.9992C15.5903 12.4092 15.2503 12.7492 14.8403 12.7492Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            )}
                            {getNumFilesRemaining() === 0 ? null : (
                                <span
                                    className="absolute right-0 bottom-0 bg-white rounded-full text-black  flex items-center justify-center shadow border border-black border-opacity-5"
                                    style={{
                                        height: "22.5px",
                                        width: "22.5px",
                                    }}
                                >
                                    {getNumFilesRemaining()}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FileSendViewModal
