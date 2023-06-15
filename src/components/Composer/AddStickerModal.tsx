import { useModalStore } from "@store/modal"
import clsx from "clsx"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

const StoreComponent = dynamic(
    //@ts-ignore
    () => import("stipop-react-sdk/dist/StoreComponent"),
    {
        ssr: false,
    }
)

const AddStickerModal = () => {
    const { showAddStickerModal, setShowAddStickerModal } = useModalStore()

    const [stylesState, setStylesState] = useState("hidden")

    const [windowWidth, setWindowWidth] = useState<number | null>(null)

    useEffect(() => {
        if (showAddStickerModal) {
            setStylesState("opacity-0 bottom-[-1000px]")
            setTimeout(() => {
                setStylesState("opacity-100 top-0 bottom-0")
            }, 300)
        } else {
            setTimeout(() => {
                setStylesState("opacity-0 top-0 bottom-[-1000px]")
            }, 300)
            setTimeout(() => {
                setStylesState("hidden")
            }, 900)
        }
    }, [showAddStickerModal])

    useEffect(() => {
        if (typeof window !== "undefined") {
            setWindowWidth(window.innerWidth)
        }
    }, [])

    return (
        <div
            className={clsx(
                stylesState,
                "transition-all duration-300 absolute m-auto left-0 right-0 h-fit w-fit z-50 rounded-[10px] overflow-hidden shadow-xl border border-black border-opacity-5 text-black"
            )}
        >
            <div className="bg-white m-auto">
                {windowWidth && (
                    <StoreComponent
                        //@ts-ignore
                        params={{
                            apikey: process?.env?.NEXT_PUBLIC_STIPOP_API_KEY,
                            userId: "ImKunal13z",
                        }}
                        downloadParams={{
                            isPurchase: "N",
                        }}
                        border={{
                            border: "0px",
                        }}
                        color={{
                            downloadBtn: "#FE06C7",
                            downloadBtnHover: "#FE06C7",
                            deleteBtn: "#F20505",
                            deleteBtnHover: "#F20505",
                            recoveryBtn: "#FE06C7",
                            loadingColor: "#FE06C7",
                        }}
                        size={{
                            height: 650,
                            width:
                                windowWidth && windowWidth < 600
                                    ? windowWidth
                                    : 500,
                        }}
                        onClose={() => setShowAddStickerModal(false)}
                    />
                )}
            </div>
        </div>
    )
}

export default AddStickerModal
