import React from "react"
import { useMessageStore } from "@store/message"

import {
    CalendarViewMonthRounded,
    HeadphonesRounded,
    InsertDriveFileRounded,
} from "@mui/icons-material"
import AudioPlayer from "react-h5-audio-player"
import { CircularProgress } from "@mui/material"
import clsx from "clsx"
import getColorIndex from "@components/utils/getColorIndex"
import getParsedFileSize from "@components/utils/getParsedFileSize"

type Props = {
    selectedFileIndex: number
    uploadingFileIndex: number | null
    isMinimized: boolean
    uploadProgress: number
    uploadingFiles: boolean
}

const MessageFileSendPreview = ({
    selectedFileIndex,
    uploadingFileIndex,
    isMinimized,
    uploadProgress,
    uploadingFiles,
}: Props) => {
    const { selectedFiles } = useMessageStore()

    return (
        <div
            className={clsx(
                isMinimized ? "h-0" : "h-[377px] absolute top-0",
                "relative w-full transition-all duration-500 overflow-hidden shadow"
            )}
        >
            {selectedFiles[selectedFileIndex]?.type.split("/")[0] ===
            "image" ? (
                <img
                    className="w-full h-full object-cover"
                    src={URL.createObjectURL(selectedFiles[selectedFileIndex])}
                />
            ) : selectedFiles[selectedFileIndex]?.type.split("/")[0] ===
              "video" ? (
                <div className="absolute w-full h-full">
                    <video
                        src={URL.createObjectURL(
                            selectedFiles[selectedFileIndex]
                        )}
                        controls
                        className="w-full h-full object-cover"
                    />
                </div>
            ) : selectedFiles[selectedFileIndex]?.type.split("/")[0] ===
              "audio" ? (
                <div
                    className="absolute w-full h-full bg-opacity-100 flex flex-col items-center justify-center px-10 gap-5"
                    style={{
                        backgroundColor: getColorIndex(
                            selectedFiles,
                            selectedFiles[selectedFileIndex],
                            "audio"
                        ),
                    }}
                >
                    <div className="flex flex-col items-center justify-center">
                        <HeadphonesRounded
                            className="text-white text-opacity-50"
                            style={{ fontSize: "100px" }}
                        />
                        <div className="whitespace-nowrap relative text-container-scroll max-w-[500px]">
                            <span className="text-white text-opacity-100">
                                {selectedFiles[selectedFileIndex]?.name}
                            </span>
                            <div className="text-container-fader fader-left"></div>
                            <div className="text-container-fader fader-right"></div>
                        </div>
                    </div>
                    <AudioPlayer
                        src={URL.createObjectURL(
                            selectedFiles[selectedFileIndex]
                        )}
                        autoPlay={false}
                        autoPlayAfterSrcChange={false}
                    />
                </div>
            ) : selectedFiles[selectedFileIndex]?.type.split("/")[1] ===
              "pdf" ? (
                <div
                    className="absolute w-full h-full bg-opacity-100 flex flex-col items-center justify-center px-10 gap-5"
                    style={{
                        backgroundColor: getColorIndex(
                            selectedFiles,
                            selectedFiles[selectedFileIndex],
                            "audio"
                        ),
                    }}
                >
                    <div className="flex flex-col items-center justify-center">
                        <div className="relative min-w-[75px] min-h-[75px]">
                            <InsertDriveFileRounded
                                className="text-[#F20505] absolute top-0 bottom-0 right-0 left-0 m-auto"
                                style={{ fontSize: "75px" }}
                            />
                            <span className="absolute z-10 text-sm top-1 bottom-0 font-medium text-white right-0 left-0 m-auto w-fit h-fit">
                                PDF
                            </span>
                        </div>
                        <div className="whitespace-nowrap relative text-container-scroll max-w-[500px]">
                            <span className="text-sideBarLink text-opacity-60">
                                {selectedFiles[selectedFileIndex]?.name}
                            </span>
                        </div>
                        <span className="text-sideBarLink mt-1">
                            {getParsedFileSize(
                                selectedFiles[selectedFileIndex]?.size
                            )}
                            , PDF File
                        </span>
                    </div>
                </div>
            ) : selectedFiles[selectedFileIndex]?.type.split("/")[1] ===
              "csv" ? (
                <div
                    className="absolute w-full h-full bg-opacity-100 flex flex-col items-center justify-center px-10 gap-5"
                    style={{
                        backgroundColor: getColorIndex(
                            selectedFiles,
                            selectedFiles[selectedFileIndex],
                            "audio"
                        ),
                    }}
                >
                    <div className="flex flex-col items-center justify-center">
                        <div className="relative min-w-[75px] min-h-[75px]">
                            <InsertDriveFileRounded
                                className="text-sideBarLink absolute top-0 bottom-0 right-0 left-0 m-auto"
                                style={{ fontSize: "75px" }}
                            />
                            <span className="absolute z-10 text-sm top-1 bottom-0 font-medium text-white right-0 left-0 m-auto w-fit h-fit">
                                CSV
                            </span>
                        </div>
                        <div className="whitespace-nowrap relative text-container-scroll max-w-[500px]">
                            <span className="text-sideBarLink text-opacity-60">
                                {selectedFiles[selectedFileIndex]?.name}
                            </span>
                        </div>
                        <span className="text-sideBarLink mt-1">
                            {getParsedFileSize(
                                selectedFiles[selectedFileIndex]?.size
                            )}
                            , PDF File
                        </span>
                    </div>
                </div>
            ) : selectedFiles[selectedFileIndex]?.type.split("/")[1] ===
              "vnd.openxmlformats-officedocument.spreadsheetml.sheet" ? (
                <div
                    className="absolute w-full h-full bg-opacity-100 flex flex-col items-center justify-center px-10 gap-5"
                    style={{
                        backgroundColor: getColorIndex(
                            selectedFiles,
                            selectedFiles[selectedFileIndex],
                            "audio"
                        ),
                    }}
                >
                    <div className="flex flex-col items-center justify-center">
                        <div className="relative min-w-[75px] min-h-[75px]">
                            <InsertDriveFileRounded
                                className="text-[#008FFF] absolute top-0 bottom-0 right-0 left-0 m-auto"
                                style={{ fontSize: "75px" }}
                            />
                            <span className="absolute z-10 text-sm top-1 bottom-0 font-medium text-white right-0 left-0 m-auto w-fit h-fit">
                                <CalendarViewMonthRounded fontSize="small" />
                            </span>
                        </div>
                        <div className="whitespace-nowrap relative text-container-scroll max-w-[500px]">
                            <span className="text-sideBarLink text-opacity-60">
                                {selectedFiles[selectedFileIndex]?.name}
                            </span>
                        </div>
                        <span className="text-sideBarLink mt-1">
                            {getParsedFileSize(
                                selectedFiles[selectedFileIndex]?.size
                            )}
                            , XLSX File
                        </span>
                    </div>
                </div>
            ) : selectedFiles[selectedFileIndex]?.type.split("/")[1] ===
              "vnd.ms-excel" ? (
                <div
                    className="absolute w-full h-fultext-container-scrolll bg-opacity-100 flex flex-col items-center justify-center px-10 gap-5"
                    style={{
                        backgroundColor: getColorIndex(
                            selectedFiles,
                            selectedFiles[selectedFileIndex],
                            "audio"
                        ),
                    }}
                >
                    <div className="flex flex-col items-center justify-center">
                        <div className="relative min-w-[75px] min-h-[75px]">
                            <InsertDriveFileRounded
                                className="text-[#008FFF] absolute top-0 bottom-0 right-0 left-0 m-auto"
                                style={{ fontSize: "75px" }}
                            />
                            <span className="absolute z-10 text-sm top-1 bottom-0 font-medium text-white right-0 left-0 m-auto w-fit h-fit">
                                <CalendarViewMonthRounded fontSize="small" />
                            </span>
                        </div>
                        <div className="whitespace-nowrap relative text-container-scroll max-w-[500px]">
                            <span className="text-sideBarLink text-opacity-60">
                                {selectedFiles[selectedFileIndex]?.name}
                            </span>
                        </div>
                        <span className="text-sideBarLink mt-1">
                            {getParsedFileSize(
                                selectedFiles[selectedFileIndex]?.size
                            )}
                            , XLS File
                        </span>
                    </div>
                </div>
            ) : (
                <></>
            )}

            {uploadingFiles && uploadingFileIndex === selectedFileIndex && (
                <div className="absolute w-full h-full bg-black backdrop-blur-[1px] bg-opacity-20 flex items-center justify-center top-0 bottom-0 left-0 right-0 m-auto">
                    <div className="relative w-[58px] h-[58px]">
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
                            size={60}
                            thickness={2.25}
                            value={uploadProgress > 100 ? 100 : uploadProgress}
                        />

                        <span className="text-white absolute flex items-center justify-center top-0 right-0 bottom-0 left-0 m-auto text-sm">
                            {uploadProgress > 100 ? "100" : uploadProgress}%
                        </span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MessageFileSendPreview
