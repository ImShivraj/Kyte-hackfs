import {
    CalendarViewMonthRounded,
    CloseRounded,
    InsertDriveFileRounded,
} from "@mui/icons-material"
import { IconButton, Skeleton } from "@mui/material"
import { ContentTypeId, DecodedMessage } from "@xmtp/xmtp-js"
import clsx from "clsx"
import React, { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Profile } from "@gql/generated"
import { useAppStore } from "@store/app"
import { AUDIO_BG_COlORS } from "@constants/index"
// @ts-ignore
import VideoThumbnail from "react-video-thumbnail"
import { FileMetadata } from "src/types"
import { useMessageStore } from "@store/message"

type Props = {
    replyingMessage: DecodedMessage | null
    setReplyingMessage: Dispatch<SetStateAction<DecodedMessage | null>>
    selectedProfile: Profile | undefined
    sendingXmtpMessage: ContentTypeId | undefined
    isUploadingVoice: boolean
}

const ReplyContentPreview = ({
    replyingMessage,
    setReplyingMessage,
    selectedProfile,
    sendingXmtpMessage,
    isUploadingVoice,
}: Props) => {
    const { currentProfile } = useAppStore()

    const { uploadingFiles } = useMessageStore()

    const [docMetadata, setDocMetadata] = useState<FileMetadata | null>(null)

    const getDocMetadata = async () => {
        try {
            const fileResponse = await fetch(
                "https://" +
                    replyingMessage?.content +
                    ".ipfs.w3s.link/metadata.json"
            )

            const fileMetadata = await fileResponse.json()

            setDocMetadata(fileMetadata)
        } catch (error) {
            console.log("Metadata fetching error => ", error)
        }
    }

    const address = currentProfile?.ownedBy

    const color =
        replyingMessage?.contentType?.typeId === "audio"
            ? AUDIO_BG_COlORS[3]
            : replyingMessage?.contentType?.typeId === "image"
            ? AUDIO_BG_COlORS[2]
            : replyingMessage?.contentType?.typeId === "video"
            ? AUDIO_BG_COlORS[0]
            : replyingMessage?.contentType?.typeId === "sticker"
            ? AUDIO_BG_COlORS[4]
            : replyingMessage?.contentType?.typeId === "gif"
            ? AUDIO_BG_COlORS[4]
            : replyingMessage?.contentType?.typeId === "voice"
            ? AUDIO_BG_COlORS[1]
            : AUDIO_BG_COlORS[2]

    let replyMsgContentType

    replyMsgContentType = replyingMessage?.contentType?.typeId

    useEffect(() => {
        if (sendingXmtpMessage) {
            setReplyingMessage(null)
        }
    }, [sendingXmtpMessage])

    useEffect(() => {
        if (replyingMessage) {
            getDocMetadata()
        }
    }, [replyingMessage])

    return (
        <div
            className={clsx(
                !isUploadingVoice && !uploadingFiles && replyingMessage
                    ? "h-[112px] top-[-7.5rem] opacity-100"
                    : "h-0 top-0 opacity-0",
                "absolute bg-bgCover z-10 w-full rounded-[10px] transition-all duration-500 border border-black shadow border-opacity-5 pt-[12px] overflow-hidden"
            )}
        >
            <div className="relative w-full h-full">
                <div className="absolute h-[85px] top-0 left-[12.5px] m-auto sm500:w-[90%] w-[85%] rounded-[10px] overflow-hidden shadow mx-auto bg-white flex items-center justify-between">
                    <div className="flex flex-col items-start justify-center gap-0 relative h-full pl-[20px]">
                        <div
                            className={clsx(
                                "absolute left-0 h-full rounded-l-[10px]"
                            )}
                            style={{
                                backgroundColor: docMetadata
                                    ? docMetadata?.type === "application/pdf"
                                        ? "#F20505"
                                        : docMetadata?.type === "text/csv"
                                        ? "#436475"
                                        : "#008FFF"
                                    : color,
                                width: "8px",
                            }}
                        />

                        <p
                            style={{
                                color: docMetadata
                                    ? docMetadata?.type === "application/pdf"
                                        ? "#F20505"
                                        : docMetadata?.type === "text/csv"
                                        ? "#436475"
                                        : "#008FFF"
                                    : color,
                            }}
                        >
                            {replyingMessage ? (
                                replyingMessage?.senderAddress === address ? (
                                    "You"
                                ) : (
                                    selectedProfile?.name
                                )
                            ) : (
                                <Skeleton
                                    animation="wave"
                                    height={15}
                                    width={100}
                                    sx={{
                                        bgcolor: docMetadata
                                            ? docMetadata?.type ===
                                              "application/pdf"
                                                ? "#F20505"
                                                : docMetadata?.type ===
                                                  "text/csv"
                                                ? "#436475"
                                                : "#008FFF"
                                            : color,
                                        opacity: "0.25",
                                    }}
                                />
                            )}
                        </p>

                        <p>
                            {replyingMessage ? (
                                replyMsgContentType === "document" ? (
                                    <div
                                        className="font-normal text-sideBarLink text-opacity-60 line-clamp-1 break-all flex items-center gap-1"
                                        style={{ display: "flex" }}
                                    >
                                        <svg
                                            viewBox="0 0 13 20"
                                            height="20"
                                            width="13"
                                            preserveAspectRatio="xMidYMid meet"
                                            version="1.1"
                                            x="0px"
                                            y="0px"
                                            enableBackground="new 0 0 13 20"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M10.2,3H2.5C1.7,3,1,3.7,1,4.5v10.1C1,15.3,1.7,16,2.5,16h7.7c0.8,0,1.5-0.7,1.5-1.5v-10 C11.6,3.7,11,3,10.2,3z M7.6,12.7H3.5v-1.3h4.1V12.7z M9.3,10H3.5V8.7h5.8V10z M9.3,7.3H3.5V6h5.8V7.3z"
                                            ></path>
                                        </svg>
                                        <span className="overflow-hidden overflow-ellipsis break-words whitespace-pre-wrap line-clamp-1">
                                            {docMetadata && docMetadata?.name}
                                        </span>
                                    </div>
                                ) : replyMsgContentType === "text" ? (
                                    <span className="font-normal text-sideBarLink text-opacity-60 line-clamp-1 break-all">
                                        {replyingMessage?.content}
                                    </span>
                                ) : replyMsgContentType === "gif" ? (
                                    <span className="font-normal text-sideBarLink text-opacity-60 flex items-center gap-1">
                                        <svg
                                            viewBox="0 0 20 20"
                                            height="20"
                                            width="20"
                                            preserveAspectRatio="xMidYMid meet"
                                            version="1.1"
                                            x="0px"
                                            y="0px"
                                            enableBackground="new 0 0 20 20"
                                            className="relative top-[1px]"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M4.878,3.9h10.285c1.334,0,1.818,0.139,2.306,0.4c0.488,0.261,0.871,0.644,1.131,1.131 C18.861,5.919,19,6.403,19,7.737v4.351c0,1.334-0.139,1.818-0.4,2.306c-0.261,0.488-0.644,0.871-1.131,1.131 c-0.488,0.261-0.972,0.4-2.306,0.4H4.878c-1.334,0-1.818-0.139-2.306-0.4c-0.488-0.261-0.871-0.644-1.131-1.131 s-0.4-0.972-0.4-2.306V7.737c0-1.334,0.139-1.818,0.4-2.306S2.084,4.561,2.572,4.3S3.544,3.9,4.878,3.9z M11.071,9.836L11.071,9.836 c-0.001-0.783,0.002-1.567-0.003-2.35c-0.002-0.281-0.2-0.519-0.458-0.577c-0.283-0.063-0.568,0.064-0.683,0.328 C9.881,7.343,9.865,7.471,9.865,7.589c-0.004,1.492-0.003,2.984-0.002,4.476c0,0.06,0.002,0.121,0.008,0.181 c0.026,0.248,0.225,0.462,0.468,0.508c0.397,0.076,0.728-0.196,0.731-0.611C11.074,11.375,11.071,10.606,11.071,9.836z  M7.338,10.523c0,0.274-0.005,0.521,0.002,0.768c0.003,0.093-0.031,0.144-0.106,0.19c-0.279,0.172-0.583,0.254-0.905,0.292 C5.51,11.87,4.757,11.44,4.457,10.692c-0.147-0.367-0.178-0.748-0.125-1.14c0.131-0.97,1.022-1.647,1.984-1.513 c0.359,0.05,0.674,0.194,0.968,0.396c0.157,0.108,0.327,0.158,0.513,0.112c0.243-0.06,0.398-0.219,0.448-0.464 c0.055-0.273-0.055-0.484-0.278-0.637C7.176,6.901,6.29,6.787,5.384,6.982c-2.006,0.432-2.816,2.512-2.08,4.196 c0.481,1.101,1.379,1.613,2.546,1.693c0.793,0.054,1.523-0.148,2.2-0.56c0.265-0.161,0.438-0.385,0.447-0.698 c0.014-0.522,0.014-1.045,0.001-1.568c-0.007-0.297-0.235-0.549-0.51-0.557C7.442,9.474,6.895,9.477,6.348,9.487 c-0.21,0.004-0.394,0.181-0.446,0.385c-0.055,0.217,0.023,0.447,0.217,0.559c0.092,0.053,0.207,0.083,0.313,0.088 C6.728,10.53,7.024,10.523,7.338,10.523z M13.815,8.004h0.171c0.811,0,1.623,0.002,2.434-0.001c0.383-0.001,0.632-0.286,0.577-0.654 c-0.041-0.274-0.281-0.455-0.611-0.455c-1.025-0.001-2.049-0.001-3.074,0c-0.474,0-0.711,0.237-0.711,0.713c0,1.078,0,2.155,0,3.233 c0,0.415,0,0.83,0,1.246c0,0.243,0.096,0.436,0.306,0.56c0.41,0.241,0.887-0.046,0.896-0.545c0.009-0.504,0.002-1.008,0.002-1.511 v-0.177h0.169c0.7,0,1.4,0.001,2.1-0.001c0.259-0.001,0.463-0.153,0.535-0.388c0.071-0.235-0.001-0.488-0.213-0.611 c-0.118-0.068-0.27-0.103-0.407-0.105c-0.667-0.01-1.335-0.005-2.003-0.005h-0.172V8.004z"
                                            ></path>
                                        </svg>
                                        <span>GIF</span>
                                    </span>
                                ) : replyMsgContentType === "sticker" ? (
                                    <span className="font-normal text-sideBarLink text-opacity-60 flex items-center gap-1">
                                        <svg
                                            viewBox="0 0 16 16"
                                            height="16"
                                            width="16"
                                            preserveAspectRatio="xMidYMid meet"
                                            className="relative top-[1px]"
                                            version="1.1"
                                            x="0px"
                                            y="0px"
                                            enableBackground="new 0 0 16 16"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M9.179,14.637c0.061-0.14,0.106-0.29,0.135-0.45 c0.031-0.171,0.044-0.338,0.049-0.543c0.002-0.078,0.003-0.155,0.003-0.233c0-0.043,0-0.043,0.001-0.067c0-0.024,0-0.024,0-0.072 l0.002-0.216c0.01-0.364,0.032-1.205,0.08-1.473c0.052-0.287,0.136-0.538,0.255-0.771c0.122-0.237,0.281-0.453,0.472-0.642 c0.193-0.191,0.412-0.349,0.653-0.469c0.238-0.12,0.493-0.203,0.786-0.255c0.27-0.048,1.098-0.07,1.487-0.08l0.152,0.001 c0.027,0,0.027,0,0.047,0c0.045,0,0.088-0.001,0.325-0.004c0.221-0.006,0.384-0.018,0.554-0.048 c0.177-0.032,0.341-0.081,0.494-0.151c-0.201,0.923-0.671,1.77-1.359,2.429c-0.561,0.538-1.264,1.194-2.057,1.924 C10.667,14.061,9.951,14.444,9.179,14.637z M7.358,14.797c-0.203,0.005-0.406,0.01-0.474,0.012c-0.301,0.007-0.448,0.01-0.507,0.009 c-0.551-0.015-0.96-0.046-1.372-0.119c-0.481-0.086-0.912-0.226-1.314-0.428c-0.416-0.209-0.794-0.48-1.123-0.807 c-0.33-0.326-0.605-0.699-0.816-1.11c-0.205-0.397-0.347-0.824-0.434-1.303c-0.074-0.411-0.106-0.827-0.12-1.356 C1.193,9.5,1.19,9.297,1.189,9.078c-0.002-0.206-0.002-0.37-0.002-0.736V7.668c0-0.274,0-0.396,0.001-0.549 c0-0.064,0.001-0.125,0.001-0.182c0.001-0.223,0.004-0.426,0.009-0.62c0.014-0.529,0.046-0.946,0.121-1.358 c0.087-0.476,0.229-0.903,0.434-1.301c0.211-0.411,0.485-0.784,0.814-1.109c0.33-0.327,0.708-0.599,1.122-0.807 c0.403-0.203,0.834-0.344,1.315-0.429c0.413-0.074,0.822-0.105,1.379-0.12c0.72-0.009,0.989-0.011,1.359-0.011H8.27 c0.896,0.003,1.143,0.005,1.366,0.011c0.55,0.015,0.959,0.046,1.371,0.12c0.482,0.085,0.913,0.226,1.314,0.428 c0.416,0.209,0.794,0.48,1.123,0.806c0.331,0.327,0.605,0.7,0.814,1.109c0.206,0.4,0.348,0.827,0.434,1.302 c0.075,0.412,0.107,0.819,0.121,1.356c0.006,0.198,0.009,0.402,0.01,0.619c0,0.008,0,0.016,0,0.024c0,0.069-0.001,0.132-0.003,0.194 c-0.004,0.162-0.014,0.283-0.033,0.391c-0.019,0.106-0.05,0.197-0.092,0.28c-0.044,0.085-0.1,0.162-0.168,0.229 c-0.069,0.069-0.148,0.125-0.234,0.168s-0.179,0.074-0.29,0.094c-0.108,0.019-0.227,0.028-0.395,0.033 c-0.231,0.003-0.27,0.003-0.311,0.004c-0.018,0-0.018,0-0.039,0l-0.163-0.001c-0.453,0.012-1.325,0.036-1.656,0.096 c-0.388,0.069-0.737,0.183-1.064,0.348c-0.336,0.168-0.643,0.389-0.911,0.655c-0.267,0.263-0.49,0.566-0.661,0.899 c-0.166,0.324-0.281,0.67-0.351,1.054c-0.06,0.33-0.085,1.216-0.096,1.636l-0.002,0.23c0,0.052,0,0.052,0,0.069 c0,0.019,0,0.019-0.001,0.067c0,0.074-0.001,0.143-0.003,0.213c-0.004,0.158-0.014,0.28-0.033,0.388 c-0.02,0.106-0.05,0.197-0.092,0.279c-0.044,0.085-0.1,0.162-0.168,0.229c-0.069,0.069-0.148,0.125-0.234,0.168 c-0.086,0.043-0.179,0.073-0.289,0.093C7.478,14.785,7.421,14.792,7.358,14.797z"
                                            ></path>
                                        </svg>
                                        <span>Sticker</span>
                                    </span>
                                ) : replyMsgContentType === "image" ? (
                                    <span className="font-normal text-sideBarLink text-opacity-60 flex items-center gap-1">
                                        <svg
                                            viewBox="0 0 16 20"
                                            height="20"
                                            width="16"
                                            preserveAspectRatio="xMidYMid meet"
                                            className="relative top-[1px]"
                                            version="1.1"
                                            x="0px"
                                            y="0px"
                                            enableBackground="new 0 0 16 20"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M13.822,4.668H7.14l-1.068-1.09C5.922,3.425,5.624,3.3,5.409,3.3H3.531 c-0.214,0-0.51,0.128-0.656,0.285L1.276,5.296C1.13,5.453,1.01,5.756,1.01,5.971v1.06c0,0.001-0.001,0.002-0.001,0.003v6.983 c0,0.646,0.524,1.17,1.17,1.17h11.643c0.646,0,1.17-0.524,1.17-1.17v-8.18C14.992,5.191,14.468,4.668,13.822,4.668z M7.84,13.298 c-1.875,0-3.395-1.52-3.395-3.396c0-1.875,1.52-3.395,3.395-3.395s3.396,1.52,3.396,3.395C11.236,11.778,9.716,13.298,7.84,13.298z  M7.84,7.511c-1.321,0-2.392,1.071-2.392,2.392s1.071,2.392,2.392,2.392s2.392-1.071,2.392-2.392S9.161,7.511,7.84,7.511z"
                                            ></path>
                                        </svg>
                                        <span>Photo</span>
                                    </span>
                                ) : replyMsgContentType === "video" ? (
                                    <span className="font-normal text-sideBarLink text-opacity-60 flex items-center gap-1">
                                        <svg
                                            viewBox="0 0 16 20"
                                            height="20"
                                            width="16"
                                            preserveAspectRatio="xMidYMid meet"
                                            className="relative top-[1px]"
                                            version="1.1"
                                            x="0px"
                                            y="0px"
                                            enableBackground="new 0 0 16 20"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M15.243,5.868l-3.48,3.091v-2.27c0-0.657-0.532-1.189-1.189-1.189H1.945 c-0.657,0-1.189,0.532-1.189,1.189v7.138c0,0.657,0.532,1.189,1.189,1.189h8.629c0.657,0,1.189-0.532,1.189-1.189v-2.299l3.48,3.09 V5.868z"
                                            ></path>
                                        </svg>
                                        <span>Video</span>
                                    </span>
                                ) : replyMsgContentType === "audio" ? (
                                    <span className="font-normal text-sideBarLink text-opacity-60 flex items-center gap-1">
                                        <svg
                                            viewBox="0 0 14 17"
                                            height="17"
                                            width="14"
                                            preserveAspectRatio="xMidYMid meet"
                                            version="1.1"
                                            id="_x39_7d25ebd-827b-4b31-aacf-70732ab74202"
                                            x="0px"
                                            y="0px"
                                            enableBackground="new 0 0 14 17"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M7,2.33C3.7,2.32,1.01,4.99,1,8.29C1,8.3,1,8.32,1,8.33V13c-0.02,1.09,0.85,1.98,1.94,2 c0.02,0,0.04,0,0.06,0h2V9.67H2.33V8.33c0-2.58,2.09-4.67,4.67-4.67s4.67,2.09,4.67,4.67v1.33H9v5.33h2c1.09,0.02,1.98-0.85,2-1.94 c0-0.02,0-0.04,0-0.06V8.33c0.01-3.3-2.66-5.99-5.96-6C7.03,2.33,7.01,2.33,7,2.33z"
                                            ></path>
                                        </svg>
                                        <span>Audio</span>
                                    </span>
                                ) : replyMsgContentType === "voice" ? (
                                    <span className="font-normal text-sideBarLink text-opacity-60 flex items-center gap-1">
                                        <svg
                                            viewBox="0 0 12 20"
                                            height="20"
                                            width="12"
                                            preserveAspectRatio="xMidYMid meet"
                                            className="relative top-[1px]"
                                            version="1.1"
                                            x="0px"
                                            y="0px"
                                            enableBackground="new 0 0 12 20"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M6,11.745c1.105,0,2-0.896,2-2V4.941c0-1.105-0.896-2-2-2s-2,0.896-2,2v4.803 C4,10.849,4.895,11.745,6,11.745z M9.495,9.744c0,1.927-1.568,3.495-3.495,3.495s-3.495-1.568-3.495-3.495H1.11 c0,2.458,1.828,4.477,4.192,4.819v2.495h1.395v-2.495c2.364-0.342,4.193-2.362,4.193-4.82H9.495V9.744z"
                                            ></path>
                                        </svg>
                                        <span>Voice</span>
                                    </span>
                                ) : null
                            ) : (
                                <Skeleton
                                    animation="wave"
                                    height={15}
                                    width={200}
                                    sx={{ bgcolor: "black", opacity: "0.10" }}
                                />
                            )}
                        </p>
                    </div>
                    {replyMsgContentType === "document" && docMetadata ? (
                        <div className="relative min-w-[50px] min-h-[50px] sm:mr-5 mr-0.5">
                            {docMetadata.type === "text/csv" ? (
                                <>
                                    {" "}
                                    <InsertDriveFileRounded
                                        className="text-sideBarLink absolute top-0 bottom-0 right-0 left-0 m-auto"
                                        style={{ fontSize: "50px" }}
                                    />
                                    <span className="absolute z-10 text-[10px] top-1 bottom-0 font-medium text-white right-0 left-0 m-auto w-fit h-fit">
                                        CSV
                                    </span>{" "}
                                </>
                            ) : docMetadata?.type ===
                              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ? (
                                <>
                                    {" "}
                                    <InsertDriveFileRounded
                                        className="text-[#008FFF] absolute top-0 bottom-0 right-0 left-0 m-auto"
                                        style={{ fontSize: "50px" }}
                                    />
                                    <span className="absolute z-10 text-[10px] top-1 bottom-0 font-medium text-white right-0 left-0 m-auto w-fit h-fit">
                                        <CalendarViewMonthRounded
                                            style={{ fontSize: "15px" }}
                                        />
                                    </span>{" "}
                                </>
                            ) : docMetadata?.type ===
                              "application/vnd.ms-excel" ? (
                                <>
                                    {" "}
                                    <InsertDriveFileRounded
                                        className="text-[#008FFF] absolute top-0 bottom-0 right-0 left-0 m-auto"
                                        style={{ fontSize: "50px" }}
                                    />
                                    <span className="absolute z-10 text-[10px] top-1 bottom-0 font-medium text-white right-0 left-0 m-auto w-fit h-fit">
                                        <CalendarViewMonthRounded
                                            style={{ fontSize: "15px" }}
                                        />
                                    </span>{" "}
                                </>
                            ) : docMetadata?.type === "application/pdf" ? (
                                <>
                                    {" "}
                                    <InsertDriveFileRounded
                                        className="text-[#F20505] absolute top-0 bottom-0 right-0 left-0 m-auto"
                                        style={{ fontSize: "50px" }}
                                    />
                                    <span className="absolute z-10 text-[10px] top-1 bottom-0 font-medium text-white right-0 left-0 m-auto w-fit h-fit">
                                        PDF
                                    </span>{" "}
                                </>
                            ) : (
                                <></>
                            )}
                        </div>
                    ) : replyMsgContentType === "image" ? (
                        <img
                            src={
                                "https://" +
                                replyingMessage?.content +
                                ".ipfs.w3s.link/image"
                            }
                            className="h-full w-[85px] object-cover"
                        />
                    ) : replyMsgContentType === "sticker" ? (
                        <img
                            src={replyingMessage?.content}
                            className="h-full w-[85px] object-cover"
                        />
                    ) : replyMsgContentType === "gif" ? (
                        <img
                            src={replyingMessage?.content}
                            className="h-full w-[85px] object-cover"
                        />
                    ) : replyMsgContentType === "video" ? (
                        <div className="h-full w-[85px] ">
                            <VideoThumbnail
                                videoUrl={
                                    "https://" +
                                    replyingMessage?.content +
                                    ".ipfs.w3s.link/video"
                                }
                            />
                        </div>
                    ) : null}
                </div>
            </div>
            <div className="absolute top-0 bottom-0 right-0 m-auto h-[85px] sm:w-[8%] w-[10%] flex items-center justify-center box-border">
                <IconButton
                    aria-label="delete"
                    className="p-1 text-sideBarLink rounded-full hover:bg-badgeRed1 transition-all h-fit my-auto"
                    onClick={() => setReplyingMessage(null)}
                >
                    <CloseRounded fontSize="small" />
                </IconButton>
            </div>
        </div>
    )
}

export default ReplyContentPreview
