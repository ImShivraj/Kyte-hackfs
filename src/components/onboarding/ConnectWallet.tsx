import Image from "next/image"
import img from "@assets/modal_img2.svg"
import { IoWalletOutline } from "react-icons/io5"
import IconButton from "../Shared/IconButton"
import { ConnectButton } from "@rainbow-me/rainbowkit"

function ConnectWallet() {
    return (
        <div
            className={`flex items-center xs320:text-center md900:text-start flex-wrap-reverse 
            
            md1000:justify-center  md1050: lg1100: lg1200: lg1300: lg1350: xl1400: xl1450: xl1500: xl1600: xl1700: xl1800: xl1900:

         lg1300:justify-around xl1450:justify-evenly md900:px-12 lg1300:px-4 xl1450:px-0 md900:gap-3 py-4  `}
        >
            <div className=" md1000:text-center md1050:text-start md900:max-w-sm xl1450:max-w-max xs320:mt-6 md900:mt-0">
                <h1 className=" text-2xl font-[600] my-2">
                    Connect your wallet
                </h1>
                <p className=" text-lightGratText2 font-[600] my-2">
                    Sed ut perspiciatis unde omnis iste na, error voluptatem
                    accusanti dolorog.
                </p>
                <ConnectButton.Custom>
                    {({
                        account,
                        chain,
                        openChainModal,
                        openAccountModal,
                        openConnectModal,
                        mounted,
                    }) => {
                        const ready = mounted
                        const connected = ready && account && chain

                        return (
                            <div
                                {...(!ready && {
                                    "aria-hidden": true,
                                    style: {
                                        opacity: 0,
                                        pointerEvents: "none",
                                        userSelect: "none",
                                    },
                                })}
                            >
                                {(() => {
                                    if (!connected) {
                                        return (
                                            <button
                                                type="button"
                                                className={
                                                    " md1000:mx-auto md1050:mx-0 rounded-full my-3 bg-lightGreen hover:bg-lightGreen active:bg-lightGreen xs320:px-8 mx-auto md900:mx-0 w-full md900:w-auto md900:px-14  border-0 btn  flex items-center justify-center gap-2 "
                                                }
                                                onClick={openConnectModal}
                                            >
                                                <IoWalletOutline size={"1.5em"} />
                                                <span className="text-white  font-[600]  leading-[20px]">
                                                    Connect Wallet
                                                </span>
                                            </button>
                                        )
                                    }

                                    if (chain?.unsupported) {
                                        return (
                                            <button
                                                type="button"
                                                className={
                                                    " md1000:mx-auto md1050:mx-0 rounded-full my-3 bg-lightGreen hover:bg-lightGreen active:bg-lightGreen xs320:px-8 mx-auto md900:mx-0 w-full md900:w-auto md900:px-14  border-0 btn  flex items-center justify-center gap-2 "
                                                }
                                                onClick={() => {
                                                    openChainModal()
                                                }}
                                            >
                                                <IoWalletOutline size={"1.5em"} />
                                                <span className="text-white  font-[600]  leading-[20px]">
                                                    Connect Wallet
                                                </span>
                                            </button>
                                        )
                                    }
                                    if (connected) {
                                        return (
                                            <button
                                                type="button"
                                                className={
                                                    " md1000:mx-auto md1050:mx-0 rounded-full my-3 bg-lightGreen hover:bg-lightGreen active:bg-lightGreen xs320:px-8 mx-auto md900:mx-0 w-full md900:w-auto md900:px-14  border-0 btn  flex items-center justify-center gap-2 "
                                                }
                                            >
                                                <IoWalletOutline size={"1.5em"} />
                                                <span className="text-white  font-[600]  leading-[20px]">
                                                    Connected
                                                </span>
                                            </button>
                                        )
                                    }
                                })()}
                            </div>
                        )
                    }}
                </ConnectButton.Custom>

            </div>
            <div className=" xs320:mx-auto md900:mx-0">
                <Image src={img} alt=" img" />
            </div>
        </div>
    )
}

export default ConnectWallet
