import {
    styled,
    Tooltip,
    tooltipClasses,
    TooltipProps,
    Zoom,
} from "@mui/material"

import {
    ArrowForwardIosRounded,
    MicNoneRounded,
    CheckRounded,
} from "@mui/icons-material"
import { Dispatch, memo, SetStateAction } from "react"
import clsx from "clsx"
import NestedTooltipBody from "./NestedTooltipBody"

const LightTooltip = styled(
    ({ className, placement, ...props }: TooltipProps) => (
        <Tooltip
            {...props}
            classes={{ popper: className }}
            TransitionComponent={Zoom}
            placement={placement}
        />
    )
)(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
        color: "#436475",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, .1)",
        fontSize: 11,
        border: "1px solid rgb(67, 100, 117, 0.25)",
        borderRadius: "8px",
    },
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.white,
    },
}))

type Props = {
    audioDevices: InputDeviceInfo[]
    selectedAudioDevice: MediaDeviceInfo | undefined
    setMicDevice: (device: MediaDeviceInfo) => void
    isMicEnabled: boolean
    setIsMicEnabled: Dispatch<SetStateAction<boolean>>
}

const MicTooltipBody = ({
    audioDevices,
    selectedAudioDevice,
    setMicDevice,
    isMicEnabled,
    setIsMicEnabled,
}: Props) => {
    return (
        <div className="py-2 flex items-center flex-col">
            <div className="w-full">
                <LightTooltip
                    TransitionComponent={Zoom}
                    title={
                        <NestedTooltipBody
                            audioDevices={audioDevices}
                            selectedAudioDevice={selectedAudioDevice}
                            setMicDevice={setMicDevice}
                        />
                    }
                    placement="right"
                    className="mics-tooltip-body"
                >
                    <button className="flex items-center justify-between gap-1.5 w-full py-1.5 px-4 rounded text-sm text-sideBarLink transition-all duration-300 hover:opacity-50">
                        <MicNoneRounded className="text-sideBarLink" />
                        <span className="whitespace-nowrap text-sideBarLink">
                            {selectedAudioDevice
                                ? selectedAudioDevice?.label.slice(0, 18)
                                : "Select Audio Device"}
                            ...
                        </span>
                        <ArrowForwardIosRounded
                            className="text-sideBarLink"
                            style={{
                                fontSize: "14px",
                            }}
                        />
                    </button>
                </LightTooltip>
            </div>
            <div className="w-full h-[.5px] bg-sideBarLink bg-opacity-25 rounded my-2" />
            <button
                className={clsx(
                    isMicEnabled ? "text-badgeRed1" : "text-activeDot",
                    "py-1 px-4 text-sm w-full hover:opacity-50 transition-all duration-300 text-start"
                )}
                onClick={() => setIsMicEnabled(!isMicEnabled)}
            >
                {isMicEnabled ? "Mute Mic" : "Unmute Mic"}
            </button>
        </div>
    )
}

export default memo(MicTooltipBody)
