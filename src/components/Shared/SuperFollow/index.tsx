import { Button } from "@/src/components/UI/Button"
import { Modal } from "@/src/components/UI/Modal"
import { StarBorderOutlined } from "@mui/icons-material"
import formatHandle from "@lib/formatHandle"
import dynamic from "next/dynamic"
import type { Dispatch, FC } from "react"
import { useState } from "react"
import { useAppStore } from "src/store/app"

import Loader from "../Loader"
import Slug from "../Slug"
import { Profile } from "@lens/generated"

const FollowModule = dynamic(() => import("./FollowModule"), {
    loading: () => <Loader message={`Loading super follow`} />,
})

interface Props {
    profile: Profile
    setFollowing: Dispatch<boolean>
    showText?: boolean
    again?: boolean
}

const SuperFollow: FC<Props> = ({
    profile,
    setFollowing,
    showText = false,
    again = false,
}) => {
    const [showFollowModal, setShowFollowModal] = useState(false)
    const currentProfile = useAppStore((state) => state.currentProfile)

    return (
        <>
            <Button
                className="text-sm !px-3 !py-1.5"
                variant="super"
                outline
                onClick={() => {
                    if (!currentProfile) {
                        return
                    }
                    setShowFollowModal(!showFollowModal)
                }}
                aria-label="Super Follow"
                icon={<StarBorderOutlined className="w-4 h-4" />}
            >
                {showText && `Super follow`}
            </Button>
            <Modal
                title={
                    <span>
                        Super follow{" "}
                        <Slug slug={formatHandle(profile?.handle)} prefix="@" />{" "}
                        {again ? "again" : ""}
                    </span>
                }
                icon={<StarBorderOutlined className="w-5 h-5 text-pink-500" />}
                show={showFollowModal}
                onClose={() => setShowFollowModal(false)}
            >
                <FollowModule
                    profile={profile}
                    setFollowing={setFollowing}
                    setShowFollowModal={setShowFollowModal}
                    again={again}
                />
            </Modal>
        </>
    )
}

export default SuperFollow
