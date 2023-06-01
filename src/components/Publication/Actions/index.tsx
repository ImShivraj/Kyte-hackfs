import { ElectedMirror } from "@lens/generated"
import clsx from "clsx"
import type { FC } from "react"
import { useAppStore } from "src/store/app"
import { KytePublication } from "src/types"

import Analytics from "./Analytics"
import Collect from "./Collect"
import Comment from "./Comment"
import Like from "./Like"
import Mirror from "./Mirror"

interface Props {
    publication: KytePublication
    isFullPublication?: boolean
    electedMirror?: ElectedMirror
}

const PublicationActions: FC<Props> = ({
    publication,
    electedMirror,
    isFullPublication = false,
}) => {
    const currentProfile = useAppStore((state) => state.currentProfile)
    const collectModuleType = publication?.collectModule.__typename
    const canMirror = currentProfile ? publication?.canMirror?.result : true

    return (
        <span
            className={clsx(
                { "justify-between": isFullPublication },
                "flex gap-6 items-center pt-3 -ml-2 lt-text-gray-500 sm:gap-8"
            )}
            onClick={(event) => {
                event.stopPropagation()
            }}
        >
            <Comment
                publication={publication}
                isFullPublication={isFullPublication}
            />
            {canMirror && (
                <Mirror
                    publication={publication}
                    isFullPublication={isFullPublication}
                />
            )}
            <Like
                publication={publication}
                isFullPublication={isFullPublication}
            />
            {collectModuleType !== "RevertCollectModuleSettings" && (
                <Collect
                    electedMirror={electedMirror}
                    publication={publication}
                    isFullPublication={isFullPublication}
                />
            )}
            <Analytics
                publication={publication}
                isFullPublication={isFullPublication}
            />
        </span>
    )
}

export default PublicationActions