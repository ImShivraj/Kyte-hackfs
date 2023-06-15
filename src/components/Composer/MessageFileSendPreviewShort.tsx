import { CircularProgress } from "@mui/material"
import { useMessageStore } from "@store/message"
import clsx from "clsx"
import React, { Dispatch, SetStateAction } from "react"
import {
    InsertPhotoRounded,
    VideocamRounded,
    HeadphonesRounded,
    CheckRounded,
    CalendarViewMonthRounded,
} from "@mui/icons-material"

// @ts-ignore
import VideoThumbnail from "react-video-thumbnail"
import { InsertDriveFileRounded } from "@mui/icons-material"
import getColorIndex from "../utils/getColorIndex"

type Props = {
    setSelectedFileIndex: Dispatch<SetStateAction<number | null>>
    selectedFileIndex: number | null
    isMinimized: boolean
    uploadingFileIndex: number | null
    uploadProgress: number
    uploadingFiles: boolean
}

const MessageFileSendPreviewShort = ({
    selectedFileIndex,
    setSelectedFileIndex,
    isMinimized,
    uploadingFileIndex,
    uploadProgress,
    uploadingFiles,
}: Props) => {
    const { selectedFiles } = useMessageStore()
    return (
        <div className="flex items-center gap-1 flex-1 sm:max-w-[376.5px] sm500:max-w-[267px] sm400:max-w-[162px] max-w-[132.5px] overflow-y-scroll scrollbar-hide">
            {selectedFiles.map((file: File, index: number) => (
                <div
                    className="flex items-center flex-col gap-0.5 cursor-pointer"
                    key={file?.name}
                    onClick={() => {
                        if (!isMinimized) {
                            setSelectedFileIndex(index)
                        }
                    }}
                >
                    {file?.type?.split("/")[0] === "image" ? (
                        <div className="relative min-h-[50px] min-w-[50px] w-[50px] h-[50px] rounded-md overflow-hidden shadow-xl border border-black border-opacity-5">
                            <img
                                className="w-full h-full object-cover"
                                src={URL.createObjectURL(file)}
                            />
                            {!(
                                uploadingFileIndex !== null &&
                                index <= uploadingFileIndex
                            ) && (
                                <InsertPhotoRounded className="absolute z-10 top-0 bottom-0 text-white right-0 left-0 m-auto opacity-50" />
                            )}

                            {/* Loading */}
                            {uploadingFiles && uploadingFileIndex === index ? (
                                <div className="absolute w-full h-full bg-black backdrop-blur-[1px] bg-opacity-20 flex items-center justify-center top-0 bottom-0 left-0 right-0 m-auto">
                                    <CircularProgress
                                        classes={{
                                            root: "text-white",
                                            circle: clsx("bg-white text-white"),
                                        }}
                                        variant={
                                            uploadProgress === 0
                                                ? "indeterminate"
                                                : "determinate"
                                        }
                                        size={27.5}
                                        thickness={2.25}
                                        value={
                                            uploadProgress > 100
                                                ? 100
                                                : uploadProgress
                                        }
                                    />
                                </div>
                            ) : uploadingFileIndex !== null &&
                              index <= uploadingFileIndex ? (
                                <div className="absolute w-full h-full bg-black bg-opacity-20 flex items-center justify-center top-0 bottom-0 left-0 right-0 m-auto">
                                    <span className="bg-callModalGradient2 w-[30px] h-[30px] flex items-center justify-center rounded-full bg-opacity-20 absolute top-0 right-0 bottom-0 left-0 m-auto">
                                        <CheckRounded className="text-callModalGradient2" />
                                    </span>
                                </div>
                            ) : null}
                        </div>
                    ) : file?.type?.split("/")[0] === "video" ? (
                        <div className="relative min-h-[50px] min-w-[50px] w-[50px] h-[50px] rounded-md overflow-hidden shadow-xl border border-black border-opacity-5">
                            <VideoThumbnail
                                videoUrl={URL.createObjectURL(file)}
                            />

                            {!(
                                uploadingFileIndex !== null &&
                                index <= uploadingFileIndex
                            ) && (
                                <VideocamRounded className="absolute z-10 top-0 bottom-0 text-white right-0 left-0 m-auto opacity-50" />
                            )}

                            {/* Loading */}
                            {uploadingFiles && uploadingFileIndex === index ? (
                                <div className="absolute w-full h-full bg-black backdrop-blur-[1px] bg-opacity-20 flex items-center justify-center top-0 bottom-0 left-0 right-0 m-auto">
                                    <CircularProgress
                                        classes={{
                                            root: "text-white",
                                            circle: clsx("bg-white text-white"),
                                        }}
                                        variant={
                                            uploadProgress === 0
                                                ? "indeterminate"
                                                : "determinate"
                                        }
                                        size={27.5}
                                        thickness={2.25}
                                        value={
                                            uploadProgress > 100
                                                ? 100
                                                : uploadProgress
                                        }
                                    />
                                </div>
                            ) : uploadingFileIndex !== null &&
                              index <= uploadingFileIndex ? (
                                <div className="absolute w-full h-full bg-black bg-opacity-20 flex items-center justify-center top-0 bottom-0 left-0 right-0 m-auto">
                                    <span className="bg-callModalGradient2 w-[30px] h-[30px] flex items-center justify-center rounded-full bg-opacity-20 absolute top-0 right-0 bottom-0 left-0 m-auto">
                                        <CheckRounded className="text-callModalGradient2" />
                                    </span>
                                </div>
                            ) : null}
                        </div>
                    ) : file?.type?.split("/")[0] === "audio" ? (
                        <div
                            className="relative min-h-[50px] min-w-[50px] w-[50px] h-[50px] rounded-md overflow-hidden shadow-xl border border-black border-opacity-5"
                            style={{
                                backgroundColor: getColorIndex(
                                    selectedFiles,
                                    file,
                                    "audio"
                                ),
                            }}
                        >
                            {!(
                                uploadingFileIndex !== null &&
                                index <= uploadingFileIndex
                            ) && (
                                <HeadphonesRounded className="absolute z-10 top-0 bottom-0 text-white right-0 left-0 m-auto opacity-75" />
                            )}

                            {uploadingFiles && uploadingFileIndex === index ? (
                                <div className="absolute w-full h-full bg-black backdrop-blur-[1px] bg-opacity-20 flex items-center justify-center top-0 bottom-0 left-0 right-0 m-auto">
                                    <CircularProgress
                                        classes={{
                                            root: "text-white",
                                            circle: clsx("bg-white text-white"),
                                        }}
                                        variant={
                                            uploadProgress === 0
                                                ? "indeterminate"
                                                : "determinate"
                                        }
                                        size={27.5}
                                        thickness={2.25}
                                        value={
                                            uploadProgress > 100
                                                ? 100
                                                : uploadProgress
                                        }
                                    />
                                </div>
                            ) : uploadingFileIndex !== null &&
                              index <= uploadingFileIndex ? (
                                <div className="absolute w-full h-full bg-black bg-opacity-20 flex items-center justify-center top-0 bottom-0 left-0 right-0 m-auto">
                                    <span className="bg-callModalGradient2 w-[30px] h-[30px] flex items-center justify-center rounded-full bg-opacity-20 absolute top-0 right-0 bottom-0 left-0 m-auto">
                                        <CheckRounded className="text-callModalGradient2" />
                                    </span>
                                </div>
                            ) : null}
                        </div>
                    ) : file?.type?.split("/")[1] === "pdf" ? (
                        <div className="relative min-h-[50px] min-w-[50px] w-[50px] h-[50px] rounded-md overflow-hidden shadow-xl border border-black border-opacity-5">
                            <InsertDriveFileRounded
                                className="text-[#F20505]"
                                style={{ fontSize: "50px" }}
                            />
                            <span className="absolute z-10 text-[11px] top-1 bottom-0 font-medium text-white right-0 left-0 m-auto w-fit h-fit">
                                PDF
                            </span>

                            {/* Loading */}
                            {uploadingFiles && uploadingFileIndex === index ? (
                                <div className="absolute w-full h-full bg-black backdrop-blur-[1px] bg-opacity-20 flex items-center justify-center top-0 bottom-0 left-0 right-0 m-auto">
                                    <CircularProgress
                                        classes={{
                                            root: "text-white",
                                            circle: clsx("bg-white text-white"),
                                        }}
                                        variant={
                                            uploadProgress === 0
                                                ? "indeterminate"
                                                : "determinate"
                                        }
                                        size={27.5}
                                        thickness={2.25}
                                        value={
                                            uploadProgress > 100
                                                ? 100
                                                : uploadProgress
                                        }
                                    />
                                </div>
                            ) : uploadingFileIndex !== null &&
                              index <= uploadingFileIndex ? (
                                <div className="absolute w-full h-full bg-black bg-opacity-20 flex items-center justify-center top-0 bottom-0 left-0 right-0 m-auto">
                                    <span className="bg-callModalGradient2 w-[30px] h-[30px] flex items-center justify-center rounded-full bg-opacity-20 absolute top-0 right-0 bottom-0 left-0 m-auto">
                                        <CheckRounded className="text-callModalGradient2" />
                                    </span>
                                </div>
                            ) : null}
                        </div>
                    ) : file?.type?.split("/")[1] === "csv" ? (
                        <div className="relative min-h-[50px] min-w-[50px] w-[50px] h-[50px] rounded-md overflow-hidden shadow-xl border border-black border-opacity-5">
                            <InsertDriveFileRounded
                                className="text-sideBarLink"
                                style={{ fontSize: "50px" }}
                            />
                            <span className="absolute z-10 text-[11px] top-1 bottom-0 font-medium text-white right-0 left-0 m-auto w-fit h-fit">
                                CSV
                            </span>

                            {/* Loading */}
                            {uploadingFiles && uploadingFileIndex === index ? (
                                <div className="absolute w-full h-full bg-black backdrop-blur-[1px] bg-opacity-20 flex items-center justify-center top-0 bottom-0 left-0 right-0 m-auto">
                                    <CircularProgress
                                        classes={{
                                            root: "text-white",
                                            circle: clsx("bg-white text-white"),
                                        }}
                                        variant={
                                            uploadProgress === 0
                                                ? "indeterminate"
                                                : "determinate"
                                        }
                                        size={27.5}
                                        thickness={2.25}
                                        value={
                                            uploadProgress > 100
                                                ? 100
                                                : uploadProgress
                                        }
                                    />
                                </div>
                            ) : uploadingFileIndex !== null &&
                              index <= uploadingFileIndex ? (
                                <div className="absolute w-full h-full bg-black bg-opacity-20 flex items-center justify-center top-0 bottom-0 left-0 right-0 m-auto">
                                    <span className="bg-callModalGradient2 w-[30px] h-[30px] flex items-center justify-center rounded-full bg-opacity-20 absolute top-0 right-0 bottom-0 left-0 m-auto">
                                        <CheckRounded className="text-callModalGradient2" />
                                    </span>
                                </div>
                            ) : null}
                        </div>
                    ) : file?.type?.split("/")[1] === "vnd.ms-excel" ? (
                        <div className="relative min-h-[50px] min-w-[50px] w-[50px] h-[50px] rounded-md overflow-hidden shadow-xl border border-black border-opacity-5">
                            <InsertDriveFileRounded
                                className="text-[#008FFF]"
                                style={{ fontSize: "50px" }}
                            />
                            <span className="absolute z-10 top-1 bottom-0 font-medium text-white right-0 left-0 m-auto w-fit h-fit">
                                <CalendarViewMonthRounded fontSize="small" />
                            </span>

                            {/* Loading */}
                            {uploadingFiles && uploadingFileIndex === index ? (
                                <div className="absolute w-full h-full bg-black backdrop-blur-[1px] bg-opacity-20 flex items-center justify-center top-0 bottom-0 left-0 right-0 m-auto">
                                    <CircularProgress
                                        classes={{
                                            root: "text-white",
                                            circle: clsx("bg-white text-white"),
                                        }}
                                        variant={
                                            uploadProgress === 0
                                                ? "indeterminate"
                                                : "determinate"
                                        }
                                        size={27.5}
                                        thickness={2.25}
                                        value={
                                            uploadProgress > 100
                                                ? 100
                                                : uploadProgress
                                        }
                                    />
                                </div>
                            ) : uploadingFileIndex !== null &&
                              index <= uploadingFileIndex ? (
                                <div className="absolute w-full h-full bg-black bg-opacity-20 flex items-center justify-center top-0 bottom-0 left-0 right-0 m-auto">
                                    <span className="bg-callModalGradient2 w-[30px] h-[30px] flex items-center justify-center rounded-full bg-opacity-20 absolute top-0 right-0 bottom-0 left-0 m-auto">
                                        <CheckRounded className="text-callModalGradient2" />
                                    </span>
                                </div>
                            ) : null}
                        </div>
                    ) : file?.type?.split("/")[1] ===
                      "vnd.openxmlformats-officedocument.spreadsheetml.sheet" ? (
                        <div className="relative min-h-[50px] min-w-[50px] w-[50px] h-[50px] rounded-md overflow-hidden shadow-xl border border-black border-opacity-5">
                            <InsertDriveFileRounded
                                className="text-[#008FFF]"
                                style={{ fontSize: "50px" }}
                            />
                            <span className="absolute z-10 top-1 bottom-0 font-medium text-white right-0 left-0 m-auto w-fit h-fit">
                                <CalendarViewMonthRounded fontSize="small" />
                            </span>

                            {/* Loading */}
                            {uploadingFiles && uploadingFileIndex === index ? (
                                <div className="absolute w-full h-full bg-black backdrop-blur-[1px] bg-opacity-20 flex items-center justify-center top-0 bottom-0 left-0 right-0 m-auto">
                                    <CircularProgress
                                        classes={{
                                            root: "text-white",
                                            circle: clsx("bg-white text-white"),
                                        }}
                                        variant={
                                            uploadProgress === 0
                                                ? "indeterminate"
                                                : "determinate"
                                        }
                                        size={27.5}
                                        thickness={2.25}
                                        value={
                                            uploadProgress > 100
                                                ? 100
                                                : uploadProgress
                                        }
                                    />
                                </div>
                            ) : uploadingFileIndex !== null &&
                              index <= uploadingFileIndex ? (
                                <div className="absolute w-full h-full bg-black bg-opacity-20 flex items-center justify-center top-0 bottom-0 left-0 right-0 m-auto">
                                    <span className="bg-callModalGradient2 w-[30px] h-[30px] flex items-center justify-center rounded-full bg-opacity-20 absolute top-0 right-0 bottom-0 left-0 m-auto">
                                        <CheckRounded className="text-callModalGradient2" />
                                    </span>
                                </div>
                            ) : null}
                        </div>
                    ) : (
                        <></>
                    )}
                    <div
                        className={clsx(
                            !isMinimized && selectedFileIndex === index
                                ? "w-full"
                                : "w-0",
                            "relative from-text_gradient1 to-text_gradient2 bg-gradient-to-br transition-all duration-500 h-1.5 rounded"
                        )}
                    />
                </div>
            ))}
        </div>
    )
}

export default MessageFileSendPreviewShort
