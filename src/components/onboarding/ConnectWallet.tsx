import Image from "next/image"
import img from "@assets/modal_img2.svg"
import { IoWalletOutline } from "react-icons/io5"
import IconButton from "../Shared/IconButton"

function ConnectWallet() {
    return (
        <div className=" flex items-center justify-between px-12 gap-3 py-4">
            <div className=" max-w-sm">
                <h1 className=" text-2xl font-[600] my-2">
                    Connect your wallet
                </h1>
                <p className=" text-lightGratText2 font-[600] my-2">
                    Sed ut perspiciatis unde omnis iste na, error voluptatem
                    accusanti dolorog.
                </p>
                <IconButton
                    // onClick={() => {}}
                    icon={IoWalletOutline}
                    title="Connect Wallet"
                    rounded={true}
                />
            </div>
            <div>
                <Image src={img} alt=" img" />
            </div>
        </div>
    )
}

export default ConnectWallet
