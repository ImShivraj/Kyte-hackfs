import { CloseRounded } from "@mui/icons-material"
import clsx from "clsx"
import React, { Dispatch, SetStateAction, useEffect, useState } from "react"

type Props = {
    imageInView: string
    imageViewOpened: boolean
    setImageViewOpened: Dispatch<SetStateAction<boolean>>
}

const ImageFiewModal = ({
    imageInView,
    imageViewOpened,
    setImageViewOpened,
}: Props) => {
    const [stylesState, setStylesState] = useState("hidden")

    useEffect(() => {
        if (!imageViewOpened) {
            setTimeout(() => {
                setStylesState("opacity-0  w-0 h-0 blur-3xl")
            }, 300)
            setTimeout(() => {
                setStylesState("hidden")
            }, 900)
        } else {
            setStylesState("opacity-0 blur-3xl")
            setTimeout(() => {
                setStylesState("opacity-100 blur-none w-fit h-fit")
            }, 300)
        }
    }, [imageViewOpened])

    return (
        <div
            className={clsx(
                stylesState,
                "w-fit h-fit rounded-lg overflow-hidden absolute left-0 right-0 top-0 bottom-0 m-auto z-50 transition-all duration-300 border border-black border-opacity-5 shadow  bg-opacity-100"
            )}
        >
            <div className="relative">
                <button
                    className="absolute top-0 right-0 m-auto z-20 bg-black bg-opacity-20 shadow-xl border border-black border-opacity-5 backdrop-blur p-[8px] rounded-full rounded-tr-none"
                    style={{
                        boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.5)",
                    }}
                    onClick={() => {
                        setImageViewOpened(false)
                    }}
                >
                    <CloseRounded className="text-white" fontSize="small" />
                </button>
                <img
                    className={clsx(
                        "object-fit max-h-[600px] sm:max-w-[600px] sm:min-h-[350px]"
                    )}
                    src={imageInView}
                />

                <a
                    className="text-sm text-gray-200 border border-white border-opacity-5 focus:outline-none absolute left-[15px] bottom-[15px] px-3 py-0.5 rounded-md flex items-center justify-center bg-black bg-opacity-25"
                    href={imageInView}
                    style={{
                        boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.5)",
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) => event.stopPropagation()}
                >
                    Open original
                </a>
            </div>
        </div>
    )
}

export default ImageFiewModal
