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
import Share from "./Share"

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
        <div
            className={clsx(
                { "justify-between": isFullPublication },
                // flex items-center xs320:justify-between md900:justify-between xs320:gap-0 md900:gap-16
                "  xs320:w-[120%] md900:max-w-xl  grid grid-cols-5 md900:gap-4  pt-3 -ml-2 lt-text-gray-500 "
            )}
            onClick={(event) => {
                event.stopPropagation()
            }}
        >
            <div className=" bg-blue-0 w-full col-span-1">
                <Comment
                    publication={publication}
                    isFullPublication={isFullPublication}
                />
            </div>
            <div className=" bg-red-0 w-full col-span-1">
                {canMirror && (
                    <Mirror
                        publication={publication}
                        isFullPublication={isFullPublication}
                    />
                )}
            </div>
            <div className=" bg-purple-0 w-full col-span-1">
                <Like
                    publication={publication}
                    isFullPublication={isFullPublication}
                />
            </div>
            <div className=" bg-cyan-0 w-full col-span-1">
                {collectModuleType !== "RevertCollectModuleSettings" && (
                    <Collect
                        electedMirror={electedMirror}
                        publication={publication}
                        isFullPublication={isFullPublication}
                    />
                )}
            </div>
            <div className=" bg-sky-0 w-full col-span-1">
                <Share />
            </div>
            <div className=" bg-indigo-0 w-full col-span-1">
                <Analytics
                    publication={publication}
                    isFullPublication={isFullPublication}
                />
            </div>
        </div>
    )
}

export default PublicationActions
