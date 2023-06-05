import EventType from "@components/home/Timeline/EventType"
import { ElectedMirror, FeedItem } from "@lens/generated"
import { useRouter } from "next/router"
import type { FC } from "react"
import { KytePublication } from "src/types"

import PublicationActions from "./Actions"
import ModAction from "./Actions/ModAction"
import HiddenPublication from "./HiddenPublication"
import PublicationBody from "./PublicationBody"
import PublicationHeader from "./PublicationHeader"
import PublicationType from "./Type"

interface Props {
    publication: KytePublication
    feedItem?: FeedItem
    showType?: boolean
    showActions?: boolean
    showModActions?: boolean
    showThread?: boolean
}

const SinglePublication: FC<Props> = ({
    publication,
    feedItem,
    showType = true,
    showActions = true,
    showModActions = false,
    showThread = true,
}) => {
    const { push } = useRouter()
    const firstComment = feedItem?.comments && feedItem.comments[0]
    const rootPublication = feedItem
        ? firstComment
            ? firstComment
            : feedItem?.root
        : publication

    return (
        <article
            className=" bg-green-20 hover:bg[#F7F7F7] border-b border-borderLight cursor-pointer last:rounded-b-xl xs320:p-2 md:p-5  w-full transition-all h-auto"
            onClick={() => {
                const selection = window.getSelection()
                if (!selection || selection.toString().length === 0) {
                    push(`/posts/${rootPublication?.id}`)
                }
            }}
        >
            {feedItem ? (
                <EventType
                    feedItem={feedItem}
                    showType={showType}
                    showThread={showThread}
                />
            ) : (
                <PublicationType
                    publication={publication}
                    showType={showType}
                    showThread={showThread}
                />
            )}
            <PublicationHeader
                className="pb-4"
                publication={rootPublication as KytePublication}
                feedItem={feedItem}
            />
            <div className="ml-[53px]">
                {publication?.hidden ? (
                    <HiddenPublication type={publication.__typename} />
                ) : (
                    <>
                        <PublicationBody
                            publication={rootPublication as KytePublication}
                        />
                        {showActions && (
                            <PublicationActions
                                publication={
                                    rootPublication as KytePublication
                                }
                                electedMirror={
                                    feedItem?.electedMirror as ElectedMirror
                                }
                            />
                        )}
                        {showModActions && (
                            <ModAction
                                publication={
                                    rootPublication as KytePublication
                                }
                            />
                        )}
                    </>
                )}
            </div>
        </article>
    )
}

export default SinglePublication
