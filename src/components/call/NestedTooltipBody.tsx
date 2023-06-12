import { CheckRounded } from "@mui/icons-material"
import React, { memo } from "react"

interface NestedTooltipBodyProps {
    audioDevices: InputDeviceInfo[]
    selectedAudioDevice: MediaDeviceInfo | undefined
    setMicDevice: (device: MediaDeviceInfo) => void
}

const NestedTooltipBody = ({
    audioDevices,
    selectedAudioDevice,
    setMicDevice,
}: NestedTooltipBodyProps) => {
    return (
        <div className="p-2 flex items-center flex-col">
            <div className="w-full">
                {audioDevices?.map((audioDevice) => (
                    <button
                        className="flex items-center w-full py-1.5 rounded text-sm text-sideBarLink transition-all duration-300 hover:opacity-50 text-start"
                        key={audioDevice?.deviceId}
                        onClick={() => {
                            setMicDevice(audioDevice)
                        }}
                    >
                        <span className="text-sideBarLink line-clamp-3 max-w-[225px] text-start">
                            {audioDevice?.label}
                        </span>
                        {audioDevice?.deviceId ===
                            selectedAudioDevice?.deviceId && (
                            <CheckRounded className="text-activeDot" />
                        )}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default memo(NestedTooltipBody)
