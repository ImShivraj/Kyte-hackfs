import GradientIcon from "@components/utils/GradientIcon"
import type { ICategory } from "@giphy/js-fetch-api"
import { GiphyFetch } from "@giphy/js-fetch-api"
import type { IGif } from "@giphy/js-types"
import { Grid } from "@giphy/react-components"
import {
    CloseRounded,
    InsertPhotoOutlined,
    SearchRounded,
} from "@mui/icons-material"
import clsx from "clsx"
import { ChangeEvent, Dispatch, SetStateAction, useRef } from "react"
import { useEffect, useState } from "react"
import Lottie from "lottie-web"
import { Lottie404_1 } from "@/src/assets/lottie"
import { IconButton } from "@mui/material"
import { ContentTypeId, DecodedMessage } from "@xmtp/xmtp-js"
import { ContentTypeGif } from "@codecs/Gif"
import { ContentTypeReply, Reply } from "@codecs/Reply"
import { useDebounce } from "@/src/components/utils/hooks/useDebounce"

const giphyFetch = new GiphyFetch("sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh")

interface Props {
    onClose?: () => void
    sendXmtpMessage: (
        message: string | Reply,
        contentType?: ContentTypeId,
        contentFallback?: string
    ) => Promise<boolean>
    setSendingXmtpMessage: (
        sendingXmtpMessage: ContentTypeId | undefined
    ) => void
    replyingMessage: DecodedMessage | null
}

const NoResult = () => {
    let animationContainer = useRef(null)
    const anim = useRef(null)

    useEffect(() => {
        //@ts-ignore
        anim.current = Lottie.loadAnimation({
            //@ts-ignore
            container: animationContainer.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: Lottie404_1,
        })

        //@ts-ignore
        return () => anim.current?.destroy()
    }, [])

    return (
        <div className="h-full flex flex-col items-center justify-center relative bottom-5">
            <div
                ref={animationContainer}
                className="h-[200px] w-[200px] mx-auto z-20"
            />
            <p className="bg-white text-sideBarLink text-[20px] font-bold">
                oops! not found
            </p>
        </div>
    )
}

const GifSelector = ({
    onClose,
    sendXmtpMessage,
    setSendingXmtpMessage,
    replyingMessage,
}: Props) => {
    const [categories, setCategories] = useState<ICategory[]>([])
    const [debouncedGifInput, setDebouncedGifInput] = useState("")
    const [searchText, setSearchText] = useState("")

    const fetchGiphyCategories = async () => {
        const { data } = await giphyFetch.categories()
        // TODO: we can persist this categories
        setCategories(data)
    }

    const onSelectGif = async (item: IGif) => {
        onClose?.()
        setSendingXmtpMessage(ContentTypeGif)

        if (replyingMessage) {
            const reply: Reply = {
                messageContent: item?.images?.original?.url,
                replyContent: replyingMessage?.content,
                replyContentTypeId: replyingMessage?.contentType?.typeId,
                replyMessageId: replyingMessage?.id,
                replySenderAddress: replyingMessage?.senderAddress,
                messageContentTypeId: ContentTypeGif.typeId,
            }

            await sendXmtpMessage(
                reply,
                ContentTypeReply,
                item?.images?.original?.url
            )
        } else {
            await sendXmtpMessage(
                item?.images?.original?.url,
                ContentTypeGif,
                item?.images?.original?.url
            )
        }

        setSendingXmtpMessage(undefined)
    }

    useDebounce(
        () => {
            setSearchText(debouncedGifInput)
        },
        1000,
        [debouncedGifInput]
    )

    useEffect(() => {
        fetchGiphyCategories()
    }, [])

    const fetchGifs = (offset: number) => {
        return giphyFetch.search(searchText, { offset, limit: 10 })
    }

    const handleSearch = (evt: ChangeEvent<HTMLInputElement>) => {
        const keyword = evt.target.value
        setDebouncedGifInput(keyword)
    }

    return (
        <div className="bg-white border rounded-lg w-[350px] overflow-hidden">
            <div className="flex justify-between items-center pt-3.5 pb-0.5 px-5 divider">
                <div className="flex items-center font-bold">
                    <GradientIcon
                        Icon={InsertPhotoOutlined}
                        width="24px"
                        height="24px"
                        margin="none"
                    />
                    <p className="text-[16px] font-semibold text-black max-w-xs text-center ml-2">
                        Select GIF
                    </p>
                </div>
                <IconButton
                    aria-label="delete"
                    className="p-1 text-sideBarLink rounded-full hover:bg-badgeRed1 transition-all"
                    onClick={onClose}
                    style={{ backgroundColor: "rgb(67, 100, 117, .1)" }}
                >
                    <CloseRounded fontSize="small" />
                </IconButton>
            </div>
            <div className="m-3">
                <div
                    className={clsx(
                        `focus-within:ring-1 focus-within:border-text_gradient1 focus-within:ring-text_gradient1 flex items-center rounded-xl bg-bgDropDown oveflow-hidden duration-500 border border-black border-opacity-5 w-full`
                    )}
                    style={{ height: "45px" }}
                >
                    <input
                        id={"gif-selector"}
                        className={clsx(
                            "peer border-none focus:ring-0 outline-none bg-transparent w-full",
                            "py-20 px-3 text-sm text-black font-semibold"
                        )}
                        type="text"
                        placeholder={`Search for GIFs`}
                        value={debouncedGifInput}
                        onChange={handleSearch}
                        // {...props}
                    />
                    <span
                        tabIndex={-1}
                        className={clsx(
                            "order-first pl-3 [&>*]:peer-focus:text-text_gradient1 text-sideBarLink"
                        )}
                    >
                        <SearchRounded />
                    </span>
                    <span
                        tabIndex={-1}
                        className={clsx(
                            "order-last pr-3 [&>*]:peer-focus:text-text_gradient1 text-sideBarLink"
                        )}
                    >
                        <CloseRounded
                            className={clsx(
                                "cursor-pointer",
                                searchText ? "visible" : "invisible"
                            )}
                            onClick={() => {
                                setDebouncedGifInput("")
                                setSearchText("")
                            }}
                        />
                    </span>
                </div>
            </div>
            <div className="flex overflow-y-auto overflow-x-hidden h-[45vh]">
                {debouncedGifInput ? (
                    //@ts-ignore
                    <Grid
                        onGifClick={(item) => onSelectGif(item)}
                        fetchGifs={fetchGifs}
                        hideAttribution
                        width={350}
                        columns={2}
                        noResultsMessage={<NoResult />}
                        noLink
                        key={searchText}
                    />
                ) : (
                    <div className="grid grid-cols-2 gap-1">
                        {categories.map((category) => (
                            <button
                                type="button"
                                key={category.name_encoded}
                                className="flex relative outline-none"
                                onClick={() =>
                                    setDebouncedGifInput(category.name)
                                }
                            >
                                <img
                                    className="object-cover w-full h-32 cursor-pointer"
                                    height={128}
                                    src={
                                        category.gif?.images?.original_still.url
                                    }
                                    alt=""
                                    draggable={false}
                                />
                                <div className="absolute right-0 bottom-0 py-1 px-2 w-full text-lg font-bold text-right text-white bg-gradient-to-b from-transparent to-gray-800">
                                    <span className="capitalize">
                                        {category.name}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default GifSelector
