import Loader from "@components/Shared/Loader"
import { Modal } from "@components/UI/Modal"
import { Tooltip } from "@components/UI/Tooltip"
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined"
import dynamic from "next/dynamic"
import type { FC } from "react"
import { useState } from "react"
import { useAppStore } from "src/store/app"
import { KytePublication } from "src/types"

const Stats = dynamic(() => import("./Stats"), {
    loading: () => <Loader message={`Loading analytics`} />,
})

interface Props {
    publication: KytePublication
    isFullPublication: boolean
}

const Analytics: FC<Props> = ({ publication, isFullPublication }) => {
    const currentProfile = useAppStore((state) => state.currentProfile)
    const [showCollectModal, setShowCollectModal] = useState(false)

    const profileIdFromPublication = publication?.id.split("-")[0]
    const showAnalytics = currentProfile?.id === profileIdFromPublication

    if (!showAnalytics || publication.__typename === "Mirror") {
        return null
    }

    const iconClassName = isFullPublication
        ? "w-[17px] sm:w-[20px]"
        : "w-[15px] sm:w-[18px]"

    return (
        <>
            <button
                className="focus:scale-90 transition-all"
                onClick={() => {
                    setShowCollectModal(true)
                    // Analytics.track(PUBLICATION.COLLECT_MODULE.OPEN_COLLECT);
                }}
                aria-label="Analytics"
            >
                <div className="flex items-center space-x-1 text-blue-500">
                    <div className="p-1.5 rounded-full hover:bg-blue-300 hover:bg-opacity-20">
                        <Tooltip placement="top" content="Analytics" withDelay>
                            <LeaderboardOutlinedIcon
                                className={iconClassName}
                            />
                        </Tooltip>
                    </div>
                </div>
            </button>
            <Modal
                title={`Publication Analytics`}
                icon={<LeaderboardOutlinedIcon className="text-brand h-5 w-5" />}
                show={showCollectModal}
                onClose={() => setShowCollectModal(false)}
            >
                <Stats publication={publication} />
            </Modal>
        </>
    )
}

export default Analytics
