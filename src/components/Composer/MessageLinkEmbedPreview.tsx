import ImageWithFallback from "@components/utils/ImageWithFallback"
import getFirstValidUrlFromString from "@components/utils/matchers/getFirstValidUrlFromString"
import { CloseRounded } from "@mui/icons-material"
import { IconButton, Skeleton } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import clsx from "clsx"
import { useEffect, useState } from "react"
import { EmbedLink } from "src/types"

type Props = {
    message: string
}

const MessageLinkEmbedPreview = ({ message }: Props) => {
    const [isEmbedActive, setIsEmbedActive] = useState<boolean>(false)
    const [og, setOG] = useState<EmbedLink>({
        title: null,
        description: null,
        site: null,
        url: null,
        favicon: `https://www.google.com/s2/favicons?domain=${message}`,
        thumbnail: null,
        isSquare: null,
        html: null,
    })

    const { isLoading, data } = useQuery(
        [message],
        () =>
            axios({
                url: "https://iframe.ly/api/iframely",
                params: {
                    api_key: process.env.NEXT_PUBLIC_IFRAMELY_API_KEY,
                    url: getFirstValidUrlFromString(message)?.firstUrl,
                },
            }).then((res) => res.data),
        { enabled: getFirstValidUrlFromString(message)?.hasValidUrl }
    )

    useEffect(() => {
        ;(window as any).iframely && (window as any).iframely.load()
    }, [])

    useEffect(() => {
        if (
            getFirstValidUrlFromString(message)?.hasValidUrl &&
            data?.html &&
            !data?.error
        ) {
            setOG({
                ...og,
                title: data?.meta?.title,
                description: data?.meta?.description,
                site: data?.meta?.site,
                url: data?.url,
                thumbnail: data?.links?.thumbnail
                    ? data?.links?.thumbnail[0]?.href
                    : null,
                isSquare:
                    data?.links?.thumbnail &&
                    data?.links?.thumbnail[0]?.media?.width ===
                        data?.links?.thumbnail[0]?.media?.height,
                html: data?.links?.player ? data?.links?.player[0]?.html : null,
            })
            setIsEmbedActive(true)
        } else {
            setOG({
                ...og,
                title: null,
                description: null,
                site: null,
                url: null,
                thumbnail: null,
                isSquare: null,
                html: null,
            })

            setIsEmbedActive(false)
        }
    }, [message, data])

    return (
        <div
            className={clsx(
                isEmbedActive
                    ? "h-[112px] top-[-7.5rem] opacity-100"
                    : "h-0 top-0 opacity-0",
                "absolute bg-bgCover z-0 w-full rounded-[10px] transition-all duration-500 border border-black shadow border-opacity-5 pt-[12px] overflow-hidden"
            )}
        >
            <div className="relative w-full h-full">
                <a
                    className="absolute h-[85px] top-0 left-[12.5px] m-auto sm500:w-[90%] w-[85%] rounded-[10px] shadow mx-auto bg-white flex items-center gap-1.5 cursor-pointer"
                    href={
                        getFirstValidUrlFromString(message)?.hasValidUrl
                            ? getFirstValidUrlFromString(
                                  message
                              )?.firstUrl?.toString()
                            : "#"
                    }
                    target={
                        getFirstValidUrlFromString(message)?.hasValidUrl
                            ? "_blank"
                            : "_self"
                    }
                >
                    {isLoading ? (
                        <Skeleton
                            variant="rectangular"
                            animation="wave"
                            className="w-[100px] rounded-[10px]"
                            classes={{
                                fitContent: "h-full",
                                wave: "h-full",
                            }}
                            sx={{ bgcolor: "#e5e7eb" }}
                            height={85}
                        />
                    ) : (
                        <ImageWithFallback
                            src={og?.thumbnail || ""}
                            className="rounded-[10px] h-full max-w-[110px] object-cover"
                            alt={og?.title || ""}
                        />
                    )}

                    <div className="flex flex-col h-fit my-auto">
                        <p className="text-sideBarLink font-medium whitespace-pre-wrap overflow-hidden overflow-ellipsis break-words line-clamp-1 sm:line-clamp-2">
                            {isLoading ? (
                                <Skeleton
                                    animation="wave"
                                    height={20}
                                    width={350}
                                    sx={{ bgcolor: "#e5e7eb" }}
                                />
                            ) : og?.title ? (
                                og?.title.length > 50 ? (
                                    og?.title?.slice(0, 50) + "..."
                                ) : (
                                    og?.title
                                )
                            ) : (
                                ""
                            )}
                        </p>
                        <p className="text-sideBarLink text-opacity-60 text-xs pr-2 whitespace-pre-wrap overflow-hidden overflow-ellipsis break-words line-clamp-3">
                            {isLoading ? (
                                <Skeleton
                                    animation="wave"
                                    height={20}
                                    width={275}
                                    sx={{ bgcolor: "#e5e7eb" }}
                                />
                            ) : og?.description ? (
                                og?.description?.length > 150 ? (
                                    og?.description?.slice(0, 150) + "..."
                                ) : (
                                    og?.description
                                )
                            ) : (
                                ""
                            )}
                        </p>
                    </div>
                </a>
                <div className="absolute top-0 right-0 m-auto h-[85px] sm:w-[8%] w-[10%] flex items-center justify-center box-border">
                    <IconButton
                        aria-label="delete"
                        className="p-1 text-sideBarLink rounded-full hover:bg-badgeRed1 transition-all h-fit my-auto"
                        onClick={() => setIsEmbedActive(false)}
                    >
                        <CloseRounded fontSize="small" />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default MessageLinkEmbedPreview
