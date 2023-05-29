import type { ApolloCache } from "@apollo/client"
import { Tooltip } from "@components/UI/Tooltip"
import { FavoriteBorderOutlined } from "@mui/icons-material"
import WbSunnyIcon from "@mui/icons-material/WbSunny"
import hasGm from "@lib/hasGm"
import { publicationKeyFields } from "@lib/keyFields"
import nFormatter from "@lib/nFormatter"
import clsx from "clsx"
import { SIGN_WALLET } from "@constants/index"
import {ReactionTypes} from "@lens/generated"
import { useRouter } from "next/router"
import type { FC } from "react"
import { useState } from "react"
import { useAppStore } from "src/store/app"
import { KytePublication } from "src/types"
import { showNotification } from "@mantine/notifications"

interface Props {
    publication: KytePublication
    isFullPublication: boolean
}

const Like: FC<Props> = ({ publication, isFullPublication }) => {
    const { pathname } = useRouter()
    const isMirror = publication.__typename === "Mirror"
    const currentProfile = useAppStore((state) => state.currentProfile)
    const [liked, setLiked] = useState(
        (isMirror ? publication?.mirrorOf?.reaction : publication?.reaction) ===
            "UPVOTE"
    )
    const [count, setCount] = useState(
        isMirror
            ? publication?.mirrorOf?.stats?.totalUpvotes
            : publication?.stats?.totalUpvotes
    )

    const updateCache = (
        cache: ApolloCache<any>,
        type: ReactionTypes.Upvote | ReactionTypes.Downvote
    ) => {
        if (pathname === "/posts/[id]") {
            cache.modify({
                id: publicationKeyFields(
                    isMirror ? publication?.mirrorOf : publication
                ),
                fields: {
                    stats: (stats) => ({
                        ...stats,
                        totalUpvotes:
                            type === ReactionTypes.Upvote
                                ? stats.totalUpvotes + 1
                                : stats.totalUpvotes - 1,
                    }),
                },
            })
        }
    }

    // const [addReaction] = useAddReactionMutation({
    //   onCompleted: () => {
    //     Analytics.track(PUBLICATION.LIKE);
    //   },
    //   onError: (error) => {
    //     setLiked(!liked);
    //     setCount(count - 1);
    //     onError(error);
    //   },
    //   update: (cache) => updateCache(cache, ReactionTypes.Upvote)
    // });

    // const [removeReaction] = useRemoveReactionMutation({
    //   onCompleted: () => {
    //     Analytics.track(PUBLICATION.DISLIKE);
    //   },
    //   onError: (error) => {
    //     setLiked(!liked);
    //     setCount(count + 1);
    //     onError(error);
    //   },
    //   update: (cache) => updateCache(cache, ReactionTypes.Downvote)
    // });

    const createLike = () => {
        if (!currentProfile) {
            return showNotification({
                title: "Default notification",
                message: SIGN_WALLET,
            })
        }

        const variable = {
            variables: {
                request: {
                    profileId: currentProfile?.id,
                    reaction: ReactionTypes.Upvote,
                    publicationId:
                        publication.__typename === "Mirror"
                            ? publication?.mirrorOf?.id
                            : publication?.id,
                },
            },
        }

        if (liked) {
            setLiked(false)
            setCount(count - 1)
            // removeReaction(variable);
        } else {
            setLiked(true)
            setCount(count + 1)
            // addReaction(variable);
        }
    }

    const iconClassName = isFullPublication
        ? "w-[17px] sm:w-[20px]"
        : "w-[15px] sm:w-[18px]"
    const { content } = publication.metadata
    const isGM = hasGm(content)

    return (
        <div
            className={clsx(
                isGM ? "text-yellow-600" : "text-pink-500",
                "flex items-center space-x-1"
            )}
        >
            <button
                className={`focus:scale-90 transition-all ${
                    isGM && liked && "rotate-90"
                }`}
                onClick={createLike}
                aria-label="Like"
            >
                <div
                    className={clsx(
                        isGM ? "hover:bg-yellow-400" : "hover:bg-pink-300",
                        "p-1.5 rounded-full hover:bg-opacity-20"
                    )}
                >
                    <Tooltip
                        placement="top"
                        content={liked ? `Dislike` : `Like`}
                        withDelay
                    >
                        {liked ? (
                            isGM ? (
                                <WbSunnyIcon className={iconClassName} />
                            ) : (
                                <FavoriteBorderOutlined
                                    className={iconClassName}
                                />
                            )
                        ) : isGM ? (
                            <WbSunnyIcon className={iconClassName} />
                        ) : (
                            <FavoriteBorderOutlined className={iconClassName} />
                        )}
                    </Tooltip>
                </div>
            </button>
            {count > 0 && !isFullPublication && (
                <span className="text-[11px] sm:text-xs text-pink-500">
                    {nFormatter(count)}
                </span>
            )}
        </div>
    )
}

export default Like
