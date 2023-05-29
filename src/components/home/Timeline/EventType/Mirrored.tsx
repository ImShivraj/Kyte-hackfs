import { MirrorEvent } from "@lens/generated"
import SyncAltIcon from "@mui/icons-material/SyncAlt"
import type { FC } from "react"

import ProfileCircles from "./ProfileCircles"

interface Props {
    mirrors: Array<MirrorEvent>
}

const Mirrored: FC<Props> = ({ mirrors }) => {
    const getMirroredProfiles = () => {
        let profiles = mirrors.map((event) => event.profile)
        profiles = profiles.filter(
            (profile, index, self) =>
                index === self.findIndex((t) => t.id === profile.id)
        )
        return profiles
    }

    return (
        <div className="flex items-center pb-4 space-x-1 lt-text-gray-500 text-[13px] text-sideBarLink gap-1">
            <SyncAltIcon style={{ width: "18px", height: "18px" }} className="relative top-[.75px]" />
            <ProfileCircles
                profiles={getMirroredProfiles()}
                context={`Mirrored by`}
            />
        </div>
    )
}

export default Mirrored
