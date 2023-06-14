import React from "react"
import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
    Avatar,
    Typography,
} from "@material-tailwind/react"
import { MapPinIcon, BuildingOffice2Icon } from "@heroicons/react/24/outline"
import Image from "next/image"
import user from "@assets/user.png"
import { VerifiedUser } from "@mui/icons-material"
import Slug from "./Slug"
import formatHandle from "@/src/lib/formatHandle"

interface Props {
    name: string
    username: string
    followers: number
    following: number
    isVerified: boolean
}

export default function UserProfilePreview({
    name,
    username,
    followers,
    following,
    isVerified,
}: Props) {
    const [openPopover, setOpenPopover] = React.useState(false)
    const triggers = {
        onMouseEnter: () => setOpenPopover(true),
        onMouseLeave: () => setOpenPopover(false),
    }

    return (
        <Popover
            open={openPopover}
            handler={setOpenPopover}
            placement="bottom-start"
        >
            <PopoverHandler {...triggers}>
                <div className="flex items-center gap-3 cursor-pointer">
                    <Image src={user} alt="user" />
                    <div>
                        <h3 className=" font-semibold">{name}</h3>
                        {/* <p className=" text-sm text-gray-400">{username}</p> */}
                        <Slug
                            className="text-sm -mt-2"
                            slug={formatHandle(username)}
                            prefix="@"
                        />
                    </div>
                </div>
            </PopoverHandler>
            <PopoverContent {...triggers} className="max-w-[24rem] z-50">
                <div className="mb-2 flex flex-col items-start justify-between gap-4">
                    <Image src={user} alt="user" />
                    <div className="flex gap-1 items-center max-w-sm truncate">
                        <div
                            className={
                                // clsx(isBig ? "font-bold" :
                                "text-lg font-[700]"
                                // )
                            }
                        >
                            {name}
                        </div>
                        {isVerified && (
                            <VerifiedUser className="w-4 h-4 text-brand" />
                        )}
                    </div>
                    <Slug
                        className="text-sm -mt-2"
                        slug={formatHandle(username)}
                        prefix="@"
                    />
                    <div className="flex space-x-3 items-center w-full ">
                        <div className="flex items-center space-x-1">
                            <div className="text-base font-semibold">
                                {following}
                            </div>
                            <div className="lt-text-gray-500 text-sm">
                                Following
                            </div>
                        </div>
                        <div className="flex items-center space-x-1 text-md">
                            <div className="text-base font-semibold">
                                {followers}
                            </div>
                            <div className="lt-text-gray-500 text-sm">
                                Followers
                            </div>
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}
