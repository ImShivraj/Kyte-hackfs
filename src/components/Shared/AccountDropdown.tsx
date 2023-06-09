import React from "react"
import { LogoutRounded, SwapHorizRounded } from "@mui/icons-material"
import { useAppPersistStore, useAppStore } from "@store/app"
import { useRouter } from "next/router"
import { useDisconnect } from "wagmi"
import SwitchProfileModal from "./Modal/SwitchProfileModal"
import { useModalStore } from "@store/modal"
import resetAuthData from "@/src/lib/auth/resetAuthData"
import { useDisconnectXmtp } from "@/src/utils/hooks/useXmtpClient"
import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
    Avatar,
    Typography,
} from "@material-tailwind/react"
import { MapPinIcon, BuildingOffice2Icon } from "@heroicons/react/24/outline"
import { RiSettings5Fill } from "react-icons/ri"

type Props = {
    handle: string
}

export default function AccountDropdown() {
    // const disconnectXmtp = useDisconnectXmtp()
    const { setCurrentProfile } = useAppStore()
    const { setProfileId } = useAppPersistStore()
    const { disconnect } = useDisconnect()
    const router = useRouter()

    const { setShowSwitchModal } = useModalStore()

    const logout = () => {
        router.push("/")
        // disconnectXmtp()
        setCurrentProfile(null)
        setProfileId(null)
        resetAuthData()
        disconnect?.()
    }

    const [openPopover, setOpenPopover] = React.useState(false)
    const triggers = {
        onMouseEnter: () => setOpenPopover(true),
        onMouseLeave: () => setOpenPopover(false),
    }

    return (
        <Popover open={openPopover} handler={setOpenPopover}>
            <PopoverHandler {...triggers}>
                <div className=" cursor-pointer">
                    <RiSettings5Fill size={"1.5em"} color="#B0B0B0" />
                </div>
            </PopoverHandler>
            <PopoverContent {...triggers} className="max-w-[24rem] z-50">
                <div className="p-2 flex items-center flex-col">
                    <div className="flex flex-col items-center gap-0.5 rounded-lg px-4 py-2 text-sm  hover:bg-gray-100 cursor-pointer">
                        <span>Logged in as</span>
                        <span
                            className="font-semibold text- bg-clip-text bg-gradient-to-tr from-text_gradient1 to-text_gradient2 relative bottom-[2px] whitespace-nowrap overflow-hidden overflow-ellipsis break-words max-w-[150px]"
                            style={{ maxWidth: "" }}
                        >
                            @lorem.ipsum
                        </span>
                    </div>
                    <div className="w-full h-[.5px] bg-sideBarLink bg-opacity-25 rounded my-2" />
                    <div className="w-full">
                        <button
                            className="flex items-center gap-1.5 w-full px-4 py-1.5 hover:bg-verifyIcon hover:bg-opacity-10 rounded text-sm transition-all duration-300"
                            onClick={() => {
                                // setShowSwitchModal(true)
                            }}
                        >
                            <SwapHorizRounded fontSize="small" />
                            <span>Switch Profile</span>
                        </button>
                    </div>
                    <div className="w-full">
                        <button
                            className="flex items-center gap-1.5 w-full px-4 py-1.5 hover:bg-badgeRed1 hover:bg-opacity-10 rounded text-sm transition-all duration-300"
                            // onClick={logout}
                        >
                            <LogoutRounded fontSize="small" />
                            <span>Logout</span>
                        </button>
                    </div>
                    <div className="w-full h-[.5px] bg-sideBarLink bg-opacity-25 rounded my-2" />
                    <div className="px-6 py-1 text-sm w-full">v1.0.3-alpha</div>
                    <SwitchProfileModal />
                </div>
            </PopoverContent>
        </Popover>
    )
}
