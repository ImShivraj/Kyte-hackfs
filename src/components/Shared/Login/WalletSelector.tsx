import { useModalStore } from "@store/modal"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useAppStore } from "@store/app"
import WalletIcon from "@mui/icons-material/Wallet"
import { WarningRounded } from "@mui/icons-material"

type Props = {
    withLabel: boolean
}

const WalletSelector = ({ withLabel }: Props) => {
    const { setShowAuthModal } = useModalStore()
    const { currentProfile } = useAppStore()

    return (
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
                        className="w-[100%] flex items-center justify-center h-[48px] my-[2px] rounded-[15px] bg-lightGreen mx-auto text-[16px]"
                    >
                        {(() => {
                            if (!connected) {
                                return (
                                    <button
                                        onClick={openConnectModal}
                                        type="button"
                                        className="px-[27.5px] h-full flex items-center justify-center gap-2 w-full"
                                    >
                                        <img src="/wallet_icon.png" alt="" className="w-[1.25rem] h-[1.25rem]"/>
                                        {withLabel && (
                                            <span className="text-white font-semibold leading-[20px]">
                                                Connect Wallet
                                            </span>
                                        )}
                                    </button>
                                )
                            }

                            if (chain?.unsupported) {
                                return (
                                    <button
                                        onClick={openChainModal}
                                        type="button"
                                        className="px-[27.5px] h-full flex items-center justify-center gap-2 w-full"
                                    >
                                        <WarningRounded className="w-[1.5rem] h-[1.5rem] text-white scale-x-110" />
                                        {withLabel && (
                                            <span className="text-white font-semibold leading-[20px]">
                                                Wrong network
                                            </span>
                                        )}
                                    </button>
                                )
                            }

                            if (currentProfile) {
                                return (
                                    <button
                                        onClick={openAccountModal}
                                        type="button"
                                        className="px-[27.5px] h-full flex items-center justify-center gap-2 w-full"
                                    >
                                        <WalletIcon className="w-[1.5rem] h-[1.5rem] text-white" />
                                        {withLabel && (
                                            <span className="text-white font-semibold leading-[20px]">
                                                Connected
                                            </span>
                                        )}
                                    </button>
                                )
                            }

                            return (
                                <button
                                    onClick={() => {
                                        setShowAuthModal(true)
                                    }}
                                    type="button"
                                    className="px-[27.5px] h-full flex items-center justify-center gap-2 w-full"
                                >
                                    <img
                                        src="/lens-white-1.png"
                                        alt=""
                                        className="w-[1.5rem] h-[1.5rem]"
                                    />
                                    {withLabel && (
                                        <span className="text-white font-semibold leading-[20px]">
                                            Sign-In
                                        </span>
                                    )}
                                </button>
                            )
                        })()}
                    </div>
                )
            }}
        </ConnectButton.Custom>
    )
}

export default WalletSelector
