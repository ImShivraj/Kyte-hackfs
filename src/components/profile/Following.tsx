import Loader from "@components/Shared/Loader"
import UserProfile from "@components/Shared/UserProfile"
import { EmptyState } from "@components/UI/EmptyState"
import { ErrorMessage } from "@components/UI/ErrorMessage"
import InfiniteLoader from "@components/UI/InfiniteLoader"
import formatHandle from "@lib/formatHandle"
import { SCROLL_THRESHOLD } from "@constants/index"
// @ts-ignore
import { FC, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { FollowingQuery, Profile, useFollowingQuery } from "@gql/generated"
import { PeopleOutlineRounded } from "@mui/icons-material"
import GradientIcon from "@components/utils/GradientIcon"
import { showNotification } from "@mantine/notifications"
import clsx from "clsx"

interface Props {
    profile: Profile
    onProfileSelected?: (profile: Profile) => void
}

const Following: FC<Props> = ({ profile, onProfileSelected }) => {
    const [cursor, setCursor] = useState('{"offset":0}')
    const [followings, setFollowings] = useState<
        FollowingQuery["following"]["items"]
    >([])

    const { data, isLoading } = useFollowingQuery(
        {
            request: {
                address: profile?.ownedBy,
                limit: 10,
                cursor,
            },
        },
        {
            enabled: !!profile?.id,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            onSuccess: (followingsData) => {
                setFollowings([
                    ...followings,
                    ...followingsData?.following?.items,
                ])
            },
            onError: (followingError) => {
                console.log({ followingError })
                showNotification({
                    title: "User notification",
                    message: "Some error occured !",
                    autoClose: false,
                    styles: () => ({
                        root: {
                            zIndex: 1000000000,
                            width: "300px",
                            padding: "12.5px 5px 20px 22px",
                            "&::before": { backgroundColor: "#F20505" },
                            border: "2px solid rgb(242, 5, 5, .25)",
                        },
                    }),
                })
            },
        }
    )

    const pageInfo = data?.following?.pageInfo
    const hasMore = pageInfo?.next && followings?.length !== pageInfo.totalCount

    const loadMore = async () => {
        setCursor(pageInfo?.next)
    }

    if (followings.length === 0 && isLoading) {
        return (
            <>
                <Loader
                    message={`Loading people you follow`}
                    // variant="brand"
                />
            </>
        )
    }

    if (followings?.length === 0) {
        return (
            <EmptyState
                message={
                    <div>
                        <span className="mr-1 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-text_gradient1 to-text_gradient2">
                            @{formatHandle(profile?.handle)}
                        </span>
                        <span>doesn’t follow anyone.</span>
                    </div>
                }
                icon={
                    <GradientIcon
                        Icon={PeopleOutlineRounded}
                        width="36px"
                        height="36px"
                        margin="none"
                    />
                }
                hideCard
            />
        )
    }

    return (
        <div
            className={clsx(
                followings && followings?.length > 0 ? "" : "pt-10",
                "overflow-y-auto max-h-[80vh]"
            )}
            id="scrollableDiv"
        >
            <ErrorMessage className="m-5" title={`Failed to load following`} />
            <InfiniteScroll
                dataLength={followings?.length ?? 0}
                scrollThreshold={SCROLL_THRESHOLD}
                hasMore={hasMore}
                next={loadMore}
                loader={<InfiniteLoader />}
                scrollableTarget="scrollableDiv"
            >
                <div className="divide-y dark:divide-gray-700 transition-all">
                    {followings?.map((following: any) => (
                        <div
                            className={`p-5 ${
                                onProfileSelected &&
                                "hover:bg-gray-100 dark:hover:bg-gray-900 cursor-pointer"
                            }`}
                            key={following?.profile?.id}
                            onClick={
                                onProfileSelected && following.profile
                                    ? () => {
                                          onProfileSelected(
                                              following.profile as Profile
                                          )
                                      }
                                    : undefined
                            }
                        >
                            <UserProfile
                                profile={following?.profile as Profile}
                                linkToProfile={!onProfileSelected}
                                showBio
                                showFollow
                                showUserPreview={false}
                                isFollowing={following?.profile?.isFollowedByMe}
                            />
                        </div>
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    )
}

export default Following
