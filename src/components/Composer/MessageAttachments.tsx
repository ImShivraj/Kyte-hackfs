// import isValidMessageFileType from "@components/utils/isValidMessageFileType"
// import {
//     MAX_TOTAL_MESSAGE_FILES_SIZE_BYTES,
//     MAX_MESSAGE_FILE_SIZE_BYTES,
// } from "@constants/index"
// import { showNotification } from "@mantine/notifications"
// import {
//     IconButton,
//     SpeedDial,
//     SpeedDialAction,
//     SpeedDialContent,
//     SpeedDialHandler,
//     Tooltip,
// } from "@material-tailwind/react"
// import { useMessageStore } from "@store/message"
// import React, { ChangeEvent, useState } from "react"
// import { FaImage, FaVideo } from "react-icons/fa"
// import { GrAttachment } from "react-icons/gr"
// import { HiDocument } from "react-icons/hi"
// import { IconType } from "react-icons/lib"
// import { MdAudiotrack } from "react-icons/md"

// const SpeedDialActionIcon = ({
//     name,
//     color,
//     Icon,
//     id,
// }: {
//     name: string
//     color: string
//     Icon: any
//     id: "audio" | "video" | "document" | "image"
// }) => {
//     const { setSelectedFiles } = useMessageStore()

//     const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
//         if (event?.target?.files && event?.target?.files?.length > 0) {
//             // show notification if the total fize size has exceeded
//             const totalSize = Array.from(event?.target?.files).reduce(
//                 (total: number, current: File) => total + current.size,
//                 0
//             )

//             if (totalSize > MAX_TOTAL_MESSAGE_FILES_SIZE_BYTES) {
//                 showNotification({
//                     title: "User notification",
//                     message: "Max total file size is 100 MB !",
//                     autoClose: 2500,
//                     styles: () => ({
//                         root: {
//                             zIndex: 1000000000,
//                             width: "300px",
//                             padding: "12.5px 5px 20px 22px",
//                             "&::before": {
//                                 backgroundColor: "#F20505",
//                             },
//                         },
//                     }),
//                 })
//             } else {
//                 // show notification that fize type is wrong
//                 for (let i = 0; i < event?.target?.files?.length; i++) {
//                     if (!isValidMessageFileType(event?.target?.files[i], id)) {
//                         showNotification({
//                             title: "User notification",
//                             message: "Incorrect file type !",
//                             autoClose: 2500,
//                             styles: () => ({
//                                 root: {
//                                     zIndex: 1000000000,
//                                     width: "300px",
//                                     padding: "12.5px 5px 20px 22px",
//                                     "&::before": {
//                                         backgroundColor: "#F20505",
//                                     },
//                                 },
//                             }),
//                         })
//                         break
//                     }

//                     if (
//                         event?.target?.files[i]?.size >
//                         MAX_MESSAGE_FILE_SIZE_BYTES
//                     ) {
//                         showNotification({
//                             title: "User notification",
//                             message: "Max file size is 15 MB !",
//                             autoClose: 2500,
//                             styles: () => ({
//                                 root: {
//                                     zIndex: 1000000000,
//                                     width: "300px",
//                                     padding: "12.5px 5px 20px 22px",
//                                     "&::before": {
//                                         backgroundColor: "#F20505",
//                                     },
//                                 },
//                             }),
//                         })
//                         break
//                     }
//                 }

//                 // Checking if max 10 files are selected
//                 if (event?.target?.files?.length > 10) {
//                     showNotification({
//                         title: "User notification",
//                         message: "Max 10 files can be sent at a time !",
//                         autoClose: 2500,
//                         styles: () => ({
//                             root: {
//                                 zIndex: 1000000000,
//                                 width: "300px",
//                                 padding: "12.5px 5px 20px 22px",
//                                 "&::before": {
//                                     backgroundColor: "#F20505",
//                                 },
//                             },
//                         }),
//                     })
//                 }

//                 setSelectedFiles(
//                     Array.from(event?.target.files)
//                         .filter(
//                             (file: File) =>
//                                 isValidMessageFileType(file, id) &&
//                                 file?.size <= MAX_MESSAGE_FILE_SIZE_BYTES
//                         )
//                         .slice(0, 10)
//                 )
//             }
//         }
//     }

//     return (
//         <div className=" relative">
//             <label htmlFor={id} className=" cursor-pointer">
//                 <Icon className="z-10" color={"black"} size={"1.3em"} />
//             </label>

//             <input
//                 id={id}
//                 type="file"
//                 style={{ display: "none" }}
//                 accept={id === "document" ? `application/*, text/*` : `${id}/*`}
//                 multiple
//                 onChange={handleInput}
//             />
//         </div>
//     )
// }

// interface AttachmentActions {
//     Icon: IconType
//     name: string
//     id: "audio" | "video" | "document" | "image"
// }

// const attachmentActions: AttachmentActions[] = [
//     {
//         Icon: FaImage,
//         name: "Image",
//         id: "image",
//     },
//     {
//         Icon: FaVideo,
//         name: "Video",
//         id: "video",
//     },
//     {
//         Icon: MdAudiotrack,
//         name: "Audio",
//         id: "audio",
//     },
//     {
//         Icon: HiDocument,
//         name: "Docs",
//         id: "document",
//     },
// ]

// interface Props {
//     messageAttachmensDisabled: boolean
// }

// const MessageAttachments = ({ messageAttachmensDisabled }: Props) => {
//     const [speedDialOpen, setSpeedDialOpen] = useState(false)

//     const { selectedFiles } = useMessageStore()

//     return (
//         <>
//             <div className="relative w-full  flex items-center justify-center max-w-[50px] max-h-[50px] mt-auto overflow-visible h-[320px] flex-grow z-10">
//                 <div className="absolutebottom-0 right-0">
//                     <SpeedDial>
//                         <SpeedDialHandler className=" active:scale-95 transition-all easi ">
//                             <IconButton
//                                 size="lg"
//                                 className="rounded-full bg-white active:bg-white hover:bg-white focus:bg-white hover:shadow-none shadow-none "
//                             >
//                                 <GrAttachment
//                                     className=" cursor-pointer  text-gray-400"
//                                     size={"1.5em"}
//                                     color="black"
//                                 />
//                             </IconButton>
//                         </SpeedDialHandler>
//                         <SpeedDialContent>
//                             {attachmentActions.map(({ id, Icon, name }) => (
//                                 <Tooltip
//                                     className=" "
//                                     content={name}
//                                     placement="left"
//                                     key={name}
//                                 >
//                                     <SpeedDialAction
//                                         className=" cursor-pointer"
//                                         onClick={() => {
//                                             setSpeedDialOpen(false)
//                                         }}
//                                     >
//                                         <SpeedDialActionIcon
//                                             name={name}
//                                             Icon={Icon}
//                                             color="white"
//                                             id={id}
//                                         />
//                                     </SpeedDialAction>
//                                 </Tooltip>
//                             ))}
//                         </SpeedDialContent>
//                     </SpeedDial>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default MessageAttachments

import isValidMessageFileType from "@components/utils/isValidMessageFileType"
import {
    MAX_TOTAL_MESSAGE_FILES_SIZE_BYTES,
    MAX_MESSAGE_FILE_SIZE_BYTES,
} from "@constants/index"
import { showNotification } from "@mantine/notifications"
import {
    Attachment,
    AudiotrackRounded,
    InsertDriveFileRounded,
    InsertPhotoRounded,
    VideocamRounded,
} from "@mui/icons-material"
import { SpeedDial, SpeedDialAction } from "@mui/material"
import { useMessageStore } from "@store/message"
import clsx from "clsx"
import React, { ChangeEvent, useState } from "react"

const SpeedDialActionIcon = ({
    color,
    Icon,
    id,
}: {
    color: string
    Icon: any
    id: "audio" | "video" | "image" | "document"
}) => {
    const { setSelectedFiles } = useMessageStore()

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        if (event?.target?.files && event?.target?.files?.length > 0) {
            // show notification if the total fize size has exceeded
            const totalSize = Array.from(event?.target?.files).reduce(
                (total: number, current: File) => total + current.size,
                0
            )

            if (totalSize > MAX_TOTAL_MESSAGE_FILES_SIZE_BYTES) {
                showNotification({
                    title: "User notification",
                    message: "Max total file size is 100 MB !",
                    autoClose: 2500,
                    styles: () => ({
                        root: {
                            zIndex: 1000000000,
                            width: "300px",
                            padding: "12.5px 5px 20px 22px",
                            "&::before": {
                                backgroundColor: "#F20505",
                            },
                        },
                    }),
                })
            } else {
                // show notification that fize type is wrong
                for (let i = 0; i < event?.target?.files?.length; i++) {
                    if (!isValidMessageFileType(event?.target?.files[i], id)) {
                        showNotification({
                            title: "User notification",
                            message: "Incorrect file type !",
                            autoClose: 2500,
                            styles: () => ({
                                root: {
                                    zIndex: 1000000000,
                                    width: "300px",
                                    padding: "12.5px 5px 20px 22px",
                                    "&::before": {
                                        backgroundColor: "#F20505",
                                    },
                                },
                            }),
                        })
                        break
                    }

                    if (
                        event?.target?.files[i]?.size >
                        MAX_MESSAGE_FILE_SIZE_BYTES
                    ) {
                        showNotification({
                            title: "User notification",
                            message: "Max file size is 15 MB !",
                            autoClose: 2500,
                            styles: () => ({
                                root: {
                                    zIndex: 1000000000,
                                    width: "300px",
                                    padding: "12.5px 5px 20px 22px",
                                    "&::before": {
                                        backgroundColor: "#F20505",
                                    },
                                },
                            }),
                        })
                        break
                    }
                }

                // Checking if max 10 files are selected
                if (event?.target?.files?.length > 10) {
                    showNotification({
                        title: "User notification",
                        message: "Max 10 files can be sent at a time !",
                        autoClose: 2500,
                        styles: () => ({
                            root: {
                                zIndex: 1000000000,
                                width: "300px",
                                padding: "12.5px 5px 20px 22px",
                                "&::before": {
                                    backgroundColor: "#F20505",
                                },
                            },
                        }),
                    })
                }

                setSelectedFiles(
                    Array.from(event?.target.files)
                        .filter(
                            (file: File) =>
                                isValidMessageFileType(file, id) &&
                                file?.size <= MAX_MESSAGE_FILE_SIZE_BYTES
                        )
                        .slice(0, 10)
                )
            }
        }
    }

    return (
        <>
            <label
                htmlFor={id}
                className="relative rounded-full overflow-hidden text-white  w-full h-full p-4 flex items-center justify-center cursor-pointer"
                style={{ backgroundColor: color }}
            >
                <Icon className="z-10" />
                <span className="absolute bg-white w-full h-[50%] bg-opacity-20 bottom-0" />
            </label>
            <input
                id={id}
                type="file"
                style={{ display: "none" }}
                accept={id === "document" ? `application/*, text/*` : `${id}/*`}
                multiple
                onChange={handleInput}
            />
        </>
    )
}

const attachmentActions = [
    {
        icon: (
            <SpeedDialActionIcon
                color="#9313f8"
                Icon={InsertPhotoRounded}
                id="image"
            />
        ),

        name: "Image",
    },
    {
        icon: (
            <SpeedDialActionIcon
                color="#008FFF"
                Icon={VideocamRounded}
                id="video"
            />
        ),
        name: "Video",
    },
    {
        icon: (
            <SpeedDialActionIcon
                color="#F20505"
                Icon={AudiotrackRounded}
                id="audio"
            />
        ),
        name: "Audio",
    },
    {
        icon: (
            <SpeedDialActionIcon
                color="#14D690"
                Icon={InsertDriveFileRounded}
                id="document"
            />
        ),
        name: "Docs",
    },
]

interface Props {
    messageAttachmensDisabled: boolean
}

import { GrAttachment } from "react-icons/gr"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
    speedDialButton: {
        backgroundColor: "white",
    },
}))

const MessageAttachments = ({ messageAttachmensDisabled }: Props) => {
    const [speedDialOpen, setSpeedDialOpen] = useState(false)

    const { selectedFiles } = useMessageStore()
    const classes = useStyles()

    return (
        <div
            className="relative w-full  flex items-center justify-center max-w-[50px] max-h-[50px] mt-auto overflow-visible h-[320px] flex-grow z-10"
            // className="max-w-[50px] max-h-[50px] mt-auto overflow-visible h-[320px] flex-grow z-50"
        >
            <SpeedDial
                ariaLabel="Attachment Speed Dial"
                className={clsx(
                    classes.speedDialButton,
                    "absolute right-0 top-0 bottom-2 m-auto attachment-speed-dial"
                )}
                classes={{
                    fab: "attachment-fab ",
                }}
                icon={<GrAttachment size={"1.5em"} />}
                onClose={() => {
                    setSpeedDialOpen(false)
                }}
                onOpen={() => {
                    setSpeedDialOpen(selectedFiles?.length === 0)
                }}
                open={speedDialOpen && !messageAttachmensDisabled}
            >
                {attachmentActions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        className={`${classes.speedDialButton} p-0`}
                        classes={{
                            fab: "attachment-speed-dial",
                        }}
                        onClick={() => {
                            setSpeedDialOpen(false)
                        }}
                    />
                ))}
            </SpeedDial>
            {/* <SpeedDial
                ariaLabel="Attachment Speed Dial"
                className="absolute right-0 top-0 bottom-2 m-auto bg-white"
                classes={{
                    fab: "attachment-fab",
                }}
                icon={<GrAttachment size={"1.5em"} />}
                onClose={() => {
                    setSpeedDialOpen(false)
                }}
                onOpen={() => {
                    setSpeedDialOpen(selectedFiles?.length === 0)
                }}
                open={speedDialOpen && !messageAttachmensDisabled}
            >
                {attachmentActions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        className="p-0"
                        classes={{
                            fab: "attachment-speed-dial",
                        }}
                        onClick={() => {
                            setSpeedDialOpen(false)
                        }}
                    />
                ))}
            </SpeedDial> */}
        </div>
    )
}

export default MessageAttachments
