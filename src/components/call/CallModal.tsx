import extractEthAddress from "@components/utils/extractEthAddress"
import formatCallDuration from "@components/utils/formatCallDuration"
import {
    useDivergentClient,
    useDivergentStore,
} from "@huddle01/divergent-client"
import {
    CallEndRounded,
    CallRounded,
    CloseRounded,
    HeightRounded,
    MicOffRounded,
    MicRounded,
    VideocamOffRounded,
    VideocamRounded,
} from "@mui/icons-material"
import {
    IconButton,
    Modal,
    styled,
    Tooltip,
    tooltipClasses,
    TooltipProps,
    Zoom,
} from "@mui/material"
import { useModalStore } from "@store/modal"
import { useMessageStore } from "@store/message"
import { useCallStore } from "@store/call"
import clsx from "clsx"
import { useRouter } from "next/router"
import React, { memo, useEffect, useRef, useState } from "react"
import web3 from "web3"
import getAvatar from "@lib/getAvatar"
import Draggable from "react-draggable"
import MicTooltipBody from "./MicTooltipBody"
import WalletAvatar from "../message/WalletAvatar"

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

const CallModal = () => {
    const [callState, setCallState] = useState<
        "LOBBY" | "OUTGOING" | "ONGOING" | "INCOMING"
    >("LOBBY")

    const [isMicEnabled, setIsMicEnabled] = useState(true)
    const [isCamEnabled, setIsCamEnabled] = useState(false)

    const [audioDevices, setAudioDevices] = useState<InputDeviceInfo[]>([])

    const [callDuration, setCallDuration] = useState(0)

    const { showCallModal, setShowCallModal } = useModalStore()

    const [isExpanded, setIsExpanded] = useState(false)

    const { callerName, callerProfilePic, setCallerName, setCallerProfilePic } =
        useCallStore()

    const { messageProfiles } = useMessageStore()

    const client = useDivergentClient()
    const store = useDivergentStore()

    const { asPath } = useRouter()

    const userToCallAddress = extractEthAddress(asPath)

    const setCallerData = () => {
        if (store.callerUid) {
            const user = Array.from(messageProfiles?.values()).find(
                (profile) => store.callerUid === profile?.ownedBy
            )

            if (user) {
                setCallerName(user?.name || user?.handle)
                setCallerProfilePic(getAvatar(user))
            } else {
                setCallerName(store.callerUid)
                setCallerProfilePic("ADDRESS")
            }
        }
    }

    // const audioCallEnd = new Audio("/assets/audio/call_end.mp3")

    const incomingAudioRef = useRef<HTMLAudioElement>(null)
    const outgoingAudioRef = useRef<HTMLAudioElement>(null)

    useEffect(() => {
        let audioCallEnd: any
        if (typeof window !== "undefined") {
            audioCallEnd = new Audio("/assets/audio/call_end.mp3")
        }

        if (store.callerStream) {
            setCallState("ONGOING")

            incomingAudioRef?.current?.pause()
            outgoingAudioRef?.current?.pause()

            if (!isMicEnabled) {
                client?.muteMic()
            }
        } else if (store.callerSignal) {
            setCallState("INCOMING")

            incomingAudioRef?.current?.play()

            setCallerData()

            setShowCallModal(true)
        } else if (store.callerUid) {
            setCallState("OUTGOING")

            outgoingAudioRef?.current?.play()

            setShowCallModal(true)
        } else {
            setCallState("LOBBY")

            incomingAudioRef?.current?.pause()
            outgoingAudioRef?.current?.pause()
            audioCallEnd?.play()

            setShowCallModal(false)

            setCallDuration(0)
        }
    }, [store.callerSignal, store.callerUid, store.callerStream])

    const callerRef = useRef<any>()
    const userRef = useRef<any>()
    const callerStream = store?.callerStream

    // useEffect(() => {
    //     if (store.micState.stream)
    //         userRef.current.srcObject = store.micState.stream
    // }, [store.micState.stream])

    // Setting the audio stream of the user when the call starts
    useEffect(() => {
        if (callerStream) {
            callerRef.current.srcObject = callerStream
        }
    }, [callerStream])

    useEffect(() => {
        let intervalId: NodeJS.Timer

        if (callState === "ONGOING") {
            intervalId = setInterval(() => {
                setCallDuration((time) => time + 0.75)
            }, 10)
        }

        return () => clearInterval(intervalId)
    }, [callState])

    // Get all the available cam devices
    const getMediaDevices = async () => {
        const mediaDevices = await store?.getMediaDevices()
    }

    // Get all the available audio devices
    const getAudioDevices = async () => {
        const result = await store?.getAudioDevices()
        setAudioDevices(result)
    }

    // Triggers permission to use microphone
    const enableAudioStream = async () => {
        const enableAudioStreamResult = await store?.enableAudioStream()
    }

    // Triggers permission to use camera
    const enableStream = async () => {
        const enableStreamResult = await store?.enableStream()
    }

    // pauses the audio track of the current user
    const pauseAudioTracks = async () => {
        const pauseAudioTracksResult = await store?.pauseAudioTracks()
    }
    // pauses the video track of the current user (prolly)
    const pauseTracks = async () => {
        const pauseTracksResult = await store.pauseTracks()
    }

    // sets the current cam device to be used
    const setMediaDevice = (device: MediaDeviceInfo) => {
        store?.setMediaDevice(device)
    }

    useEffect(() => {
        getAudioDevices()
        enableAudioStream()
    }, [])

    useEffect(() => {
        if (isMicEnabled) {
            // client?.unmuteMic()
            if (client && typeof client.unmuteMic === "function") {
                client.unmuteMic()
            }
        } else {
            // client?.muteMic()
            if (client && typeof client.muteMic === "function") {
                client.muteMic()
            }
        }
    }, [isMicEnabled])

    return (
        <Draggable
            // @ts-ignore
            position={isExpanded ? { x: 10, y: 10 } : null}
            enableUserSelectHack={false}
            cancel={'[class*="MuiDialogContent-root"]'}
            disabled={isExpanded}
            defaultClassName={" w-max bg-fixed h-auto"}
            defaultClassNameDragging=" w-max"
        >
            <Modal open={showCallModal} disableEnforceFocus>
                <div
                    className={clsx(
                        "min-w-[400px] min-h-[275px]",
                        "flex flex-col items-center justify-center transition-all duration-300 absolute p-2 bg-white  rounded-[30px] shadow-2xl"
                    )}
                    style={
                        isExpanded
                            ? {
                                  minWidth: "calc(100vw - 25px)",
                                  minHeight: "calc(100vh - 25px)",
                              }
                            : {}
                    }
                >
                    <div className="flex flex-1 flex-col items-center justify-center rounded-[30px] bg-[#F2F2F2] relative w-full">
                        <IconButton
                            className="absolute left-0 top-0 w-fit h-fit rounded-r-none"
                            style={{
                                position: "absolute",
                                backgroundColor: "rgb(67, 100, 117, .5)",
                                borderTopRightRadius: "0px",
                                borderBottomRightRadius: "10px",
                                borderBottomLeftRadius: "0",
                            }}
                            onClick={() => setIsExpanded(!isExpanded)}
                        >
                            <HeightRounded className="text-white rotate-[135deg]" />
                        </IconButton>
                        <div className="relative">
                            {callerProfilePic ? (
                                callerProfilePic === "ADDRESS" ? (
                                    <WalletAvatar
                                        peerAddress={callerName || ""}
                                        className={clsx(
                                            !store.callerStream &&
                                                (store.callerSignal ||
                                                    store.callerUid) &&
                                                "animate-callAnimation",
                                            isExpanded
                                                ? "w-[150px] min-w-[150px] h-[150px] min-h-[150px]"
                                                : "w-[100px] min-w-[100px] h-[100px] min-h-[100px]",
                                            "object-cover rounded-full transition-all duration-300"
                                        )}
                                    />
                                ) : (
                                    <img
                                        src={callerProfilePic}
                                        alt={"profile image"}
                                        className={clsx(
                                            !store.callerStream &&
                                                (store.callerSignal ||
                                                    store.callerUid) &&
                                                "animate-callAnimation",
                                            isExpanded
                                                ? "w-[150px] h-[150px]"
                                                : "w-[100px] h-[100px]",
                                            " object-cover rounded-full transition-all duration-300"
                                        )}
                                    />
                                )
                            ) : null}

                            <div className="bg-badgeRed1 rounded-full p-1 absolute right-0 bottom-[10px] w-[40px] h-[40px] flex items-center justify-center border-[#F2F2F2] border-[2px] hidden">
                                <MicOffRounded className="text-white" />
                            </div>
                        </div>
                        <div
                            className={clsx(
                                isExpanded
                                    ? "gap-2 mt-[20px]"
                                    : "gap-0 mt-[10px]",
                                "flex flex-col items-center transition-all duration-300"
                            )}
                        >
                            <h2 className="text-sideBarLink font-bold text-2xl z-10">
                                {callerProfilePic === "ADDRESS" && callerName
                                    ? callerName?.slice(0, 6) +
                                      "..." +
                                      callerName?.slice(-4)
                                    : callerName}
                            </h2>
                            <p className="max-w-[280px] text-center text-sideBarLink z-10">
                                {callState === "LOBBY"
                                    ? "Ready to call ? "
                                    : callState === "INCOMING"
                                    ? "is calling you..."
                                    : callState === "OUTGOING"
                                    ? "ringing..."
                                    : callState === "ONGOING"
                                    ? formatCallDuration(callDuration)
                                    : null}
                            </p>
                        </div>
                    </div>
                    <div
                        className={clsx(
                            isExpanded ? "py-2.5" : "py-1.5",
                            "flex items-center justify-center gap-5 w-full bg-white"
                        )}
                    >
                        {callState === "LOBBY" ? (
                            <>
                                <LightTooltip
                                    title="Start Video"
                                    TransitionComponent={Zoom}
                                    placement="top"
                                >
                                    <IconButton
                                        style={{
                                            backgroundColor: "#14D696",
                                            padding: isExpanded
                                                ? "12.5px"
                                                : "10px",
                                        }}
                                        className={clsx(
                                            true && "opacity-50",
                                            "transition-all duration-300"
                                        )}
                                        // onClick={() => {
                                        //     if (
                                        //         !!store?.user?.uid &&
                                        //         userToCallAddress
                                        //     ) {
                                        //         client.dial(
                                        //             web3.utils.toChecksumAddress(
                                        //                 userToCallAddress
                                        //             )
                                        //         )
                                        //     }
                                        // }}
                                    >
                                        <VideocamRounded className="text-white" />
                                    </IconButton>
                                </LightTooltip>
                                <LightTooltip
                                    title="Cancel"
                                    TransitionComponent={Zoom}
                                    placement="top"
                                >
                                    <IconButton
                                        style={{
                                            backgroundColor: "#436475",
                                            padding: isExpanded
                                                ? "12.5px"
                                                : "10px",
                                        }}
                                        className="transition-all duration-300"
                                        onClick={() => setShowCallModal(false)}
                                    >
                                        <CloseRounded className="text-white" />
                                    </IconButton>
                                </LightTooltip>
                                <LightTooltip
                                    title="Start Call"
                                    TransitionComponent={Zoom}
                                    placement="top"
                                >
                                    <IconButton
                                        style={{
                                            backgroundColor: "#14D696",
                                            padding: isExpanded
                                                ? "12.5px"
                                                : "10px",
                                        }}
                                        className={clsx(
                                            !!!store?.user?.uid && "opacity-50",
                                            "transition-all duration-300"
                                        )}
                                        onClick={() => {
                                            if (
                                                !!store?.user?.uid &&
                                                userToCallAddress
                                            ) {
                                                client.dial(
                                                    web3.utils.toChecksumAddress(
                                                        userToCallAddress
                                                    )
                                                )
                                            }
                                        }}
                                    >
                                        <CallRounded className="text-white" />
                                    </IconButton>
                                </LightTooltip>
                            </>
                        ) : callState === "INCOMING" ? (
                            <>
                                <LightTooltip
                                    title={
                                        isCamEnabled
                                            ? "Stop Video"
                                            : "Start Video"
                                    }
                                    TransitionComponent={Zoom}
                                    placement="top"
                                >
                                    <IconButton
                                        style={{
                                            backgroundColor: isCamEnabled
                                                ? "rgb(67, 100, 117)"
                                                : "rgb(67, 100, 117, 0.75)",
                                            padding: isExpanded
                                                ? "12.5px"
                                                : "10px",
                                        }}
                                        className="transition-all duration-300"
                                        // onClick={() =>
                                        //     setIsCamEnabled(!isCamEnabled)
                                        // }
                                    >
                                        {isCamEnabled ? (
                                            <VideocamRounded className="text-white" />
                                        ) : (
                                            <VideocamOffRounded className="text-white" />
                                        )}
                                    </IconButton>
                                </LightTooltip>
                                <LightTooltip
                                    title="Decline"
                                    TransitionComponent={Zoom}
                                    placement="top"
                                >
                                    <IconButton
                                        style={{
                                            backgroundColor: "#F20505",
                                            padding: isExpanded
                                                ? "12.5px"
                                                : "10px",
                                        }}
                                        className="transition-all duration-300"
                                        onClick={() => {
                                            client.end()
                                            incomingAudioRef?.current?.pause()
                                            outgoingAudioRef?.current?.pause()
                                            setShowCallModal(false)
                                            setCallState("LOBBY")
                                        }}
                                    >
                                        <CallEndRounded className="text-white" />
                                    </IconButton>
                                </LightTooltip>
                                <LightTooltip
                                    title="Accept"
                                    TransitionComponent={Zoom}
                                    placement="top"
                                >
                                    <IconButton
                                        style={{
                                            backgroundColor: "#14D696",
                                            padding: isExpanded
                                                ? "12.5px"
                                                : "10px",
                                        }}
                                        className="transition-all duration-300"
                                        onClick={() => {
                                            client.answer()
                                            setCallState("ONGOING")
                                        }}
                                    >
                                        <CallRounded className="text-white" />
                                    </IconButton>
                                </LightTooltip>
                                <LightTooltip
                                    title={
                                        <MicTooltipBody
                                            audioDevices={audioDevices}
                                            selectedAudioDevice={
                                                store?.micState?.mediaDevice
                                            }
                                            setMicDevice={store?.setAudioDevice}
                                            isMicEnabled={isMicEnabled}
                                            setIsMicEnabled={setIsMicEnabled}
                                        />
                                    }
                                    TransitionComponent={Zoom}
                                    placement="top"
                                    className="mics-tooltip-parent-body"
                                >
                                    <IconButton
                                        style={{
                                            backgroundColor: isMicEnabled
                                                ? "rgb(67, 100, 117)"
                                                : "rgb(67, 100, 117, 0.75)",
                                            padding: isExpanded
                                                ? "12.5px"
                                                : "10px",
                                        }}
                                        className="transition-all duration-300"
                                    >
                                        {isMicEnabled ? (
                                            <MicRounded className="text-white" />
                                        ) : (
                                            <MicOffRounded className="text-white" />
                                        )}
                                    </IconButton>
                                </LightTooltip>
                            </>
                        ) : callState === "OUTGOING" ? (
                            <>
                                <LightTooltip
                                    title={
                                        isCamEnabled
                                            ? "Stop Video"
                                            : "Start Video"
                                    }
                                    TransitionComponent={Zoom}
                                    placement="top"
                                >
                                    <IconButton
                                        style={{
                                            backgroundColor: isCamEnabled
                                                ? "rgb(67, 100, 117)"
                                                : "rgb(67, 100, 117, 0.75)",
                                            padding: "12.5px",
                                        }}
                                        // onClick={() =>
                                        //     setIsCamEnabled(!isCamEnabled)
                                        // }
                                    >
                                        {isCamEnabled ? (
                                            <VideocamRounded className="text-white" />
                                        ) : (
                                            <VideocamOffRounded className="text-white" />
                                        )}
                                    </IconButton>
                                </LightTooltip>
                                <LightTooltip
                                    title="End Call"
                                    TransitionComponent={Zoom}
                                    placement="top"
                                >
                                    <IconButton
                                        style={{
                                            backgroundColor: "#F20505",
                                            padding: isExpanded
                                                ? "12.5px"
                                                : "10px",
                                        }}
                                        className="transition-all duration-300"
                                        onClick={() => {
                                            client.end()
                                            incomingAudioRef?.current?.pause()
                                            outgoingAudioRef?.current?.pause()
                                            setShowCallModal(false)
                                            setCallState("LOBBY")
                                        }}
                                    >
                                        <CallEndRounded className="text-white" />
                                    </IconButton>
                                </LightTooltip>
                                <LightTooltip
                                    title={
                                        <MicTooltipBody
                                            audioDevices={audioDevices}
                                            selectedAudioDevice={
                                                store?.micState?.mediaDevice
                                            }
                                            setMicDevice={store?.setAudioDevice}
                                            isMicEnabled={isMicEnabled}
                                            setIsMicEnabled={setIsMicEnabled}
                                        />
                                    }
                                    TransitionComponent={Zoom}
                                    placement="top"
                                    className="mics-tooltip-parent-body"
                                >
                                    <IconButton
                                        style={{
                                            backgroundColor: isMicEnabled
                                                ? "rgb(67, 100, 117)"
                                                : "rgb(67, 100, 117, 0.75)",
                                            padding: isExpanded
                                                ? "12.5px"
                                                : "10px",
                                        }}
                                        className="transition-all duration-300"
                                    >
                                        {isMicEnabled ? (
                                            <MicRounded className="text-white" />
                                        ) : (
                                            <MicOffRounded className="text-white" />
                                        )}
                                    </IconButton>
                                </LightTooltip>
                            </>
                        ) : callState === "ONGOING" ? (
                            <>
                                <LightTooltip
                                    title={
                                        isCamEnabled
                                            ? "Stop Video"
                                            : "Start Video"
                                    }
                                    TransitionComponent={Zoom}
                                    placement="top"
                                >
                                    <IconButton
                                        style={{
                                            backgroundColor: isCamEnabled
                                                ? "rgb(67, 100, 117)"
                                                : "rgb(67, 100, 117, 0.75)",
                                            padding: isExpanded
                                                ? "12.5px"
                                                : "10px",
                                        }}
                                        className="transition-all duration-300"
                                        // onClick={() =>
                                        //     setIsCamEnabled(!isCamEnabled)
                                        // }
                                    >
                                        {isCamEnabled ? (
                                            <VideocamRounded className="text-white" />
                                        ) : (
                                            <VideocamOffRounded className="text-white" />
                                        )}
                                    </IconButton>
                                </LightTooltip>
                                <LightTooltip
                                    title="End Call"
                                    TransitionComponent={Zoom}
                                    placement="top"
                                >
                                    <IconButton
                                        style={{
                                            backgroundColor: "#F20505",
                                            padding: isExpanded
                                                ? "12.5px"
                                                : "10px",
                                        }}
                                        className="transition-all duration-300"
                                        onClick={() => {
                                            client.end()
                                            audioCallEnd?.play()
                                            setShowCallModal(false)
                                            setCallState("LOBBY")
                                        }}
                                    >
                                        <CallEndRounded className="text-white" />
                                    </IconButton>
                                </LightTooltip>
                                <LightTooltip
                                    title={
                                        <MicTooltipBody
                                            audioDevices={audioDevices}
                                            selectedAudioDevice={
                                                store?.micState?.mediaDevice
                                            }
                                            setMicDevice={store?.setAudioDevice}
                                            isMicEnabled={isMicEnabled}
                                            setIsMicEnabled={setIsMicEnabled}
                                        />
                                    }
                                    TransitionComponent={Zoom}
                                    placement="top"
                                    className="mics-tooltip-parent-body"
                                >
                                    <IconButton
                                        style={{
                                            backgroundColor: isMicEnabled
                                                ? "rgb(67, 100, 117)"
                                                : "rgb(67, 100, 117, 0.75)",
                                            padding: isExpanded
                                                ? "12.5px"
                                                : "10px",
                                        }}
                                        className="transition-all duration-300"
                                    >
                                        {isMicEnabled ? (
                                            <MicRounded className="text-white" />
                                        ) : (
                                            <MicOffRounded className="text-white" />
                                        )}
                                    </IconButton>
                                </LightTooltip>
                            </>
                        ) : null}
                    </div>
                    <audio playsInline ref={callerRef} autoPlay />
                    <audio
                        src="/assets/audio/incoming_sound.wav"
                        loop
                        ref={incomingAudioRef}
                    />
                    <audio
                        src="/assets/audio/outgoing_call.mp3"
                        loop
                        ref={outgoingAudioRef}
                    />
                </div>

                {/* <video
                    playsInline
                    muted
                    ref={userRef}
                    autoPlay
                    style={{ minWidth: "300px", minHeight: "300px" }}
                /> */}
            </Modal>
        </Draggable>
    )
}

export default memo(CallModal)
