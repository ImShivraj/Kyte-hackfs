import { AUDIO_BG_COlORS } from "@constants/index"
import getAvatar from "@lib/getAvatar"
import { useAppStore } from "@store/app"
import clsx from "clsx"
import React from "react"
import "plyr-react/plyr.css"
import Plyr from "plyr-react"
import { MicRounded } from "@mui/icons-material"
import { CircularProgress } from "@mui/material"

type Props = {
    isUploadingVoice: boolean
    voiceUploadProgress: number
    src: string
}

const VoiceRecordEmbedPreview = ({
    isUploadingVoice,
    voiceUploadProgress,
    src,
}: Props) => {
    const { currentProfile } = useAppStore()

    const color = AUDIO_BG_COlORS[Math.floor(Math.random() * 5)]

    return (
        <div
            className={clsx(
                isUploadingVoice ? "h-[112px] top-[-7.5rem] opacity-100" : "h-0 top-0 opacity-0",
                "absolute bg-bgCover z-10 w-full rounded-[10px] transition-all duration-500 border border-black shadow border-opacity-5 overflow-hidden flex items-center justify-center px-[10px] sm500:px-[30px]"
            )}
        >
            <div className="relative h-[85px] w-full rounded-[10px] shadow  bg-white flex items-center gap-1.5 cursor-pointer pl-[20px] pr-[50px]">
                <div
                    className={clsx("absolute h-full left-0 rounded-l-[10px]")}
                    style={{ backgroundColor: color, width: "8px" }}
                />
                <div className="relative w-[57.5px] h-[57.5px] ">
                    <img
                        className="w-full min-w-[57.5px] h-full absolute rounded-full object-cover border border-black border-opacity-5 shadow z-10"
                        src={getAvatar(currentProfile)}
                    />
                    <MicRounded
                        className={clsx(
                            "p-1 absolute -right-1 bottom-0 bg-white rounded-full border border-black border-opacity-10 shadow z-10"
                        )}
                        style={{ fontSize: "24px", color }}
                    />

                    <CircularProgress
                        variant={
                            voiceUploadProgress === 0
                                ? "indeterminate"
                                : "determinate"
                        }
                        className="absolute top-0 bottom-0 right-0 left-10 m-auto"
                        classes={{
                            root: "absolute left-[-6px]",
                        }}
                        style={{ color }}
                        thickness={2.5}
                        size={70}
                        value={voiceUploadProgress}
                    />
                </div>
                <div
                    className={`audio-message-${color?.slice(
                        1
                    )} voice-preview flex-1`}
                >
                    <Plyr
                        muted={true}
                        source={{
                            type: "audio",
                            sources: [
                                {
                                    src,
                                    provider: "html5",
                                },
                            ],
                        }}
                        options={{
                            controls: ["play", "progress", "current-time"],
                            settings: [],
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default VoiceRecordEmbedPreview
