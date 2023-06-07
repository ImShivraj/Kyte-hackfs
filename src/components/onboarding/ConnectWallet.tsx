import Image from "next/image"
import img from "@assets/modal_img2.svg"
import { IoWalletOutline } from "react-icons/io5"
import IconButton from "../Shared/IconButton"

function ConnectWallet() {
    return (
        <div className=" flex items-center xs320:text-center md900:text-start flex-wrap-reverse md900:justify-between xl1450:justify-evenly md900:px-12 xl1450:px-0 md900:gap-3 py-4">
            <div className=" md900:max-w-sm xl1450:max-w-max xs320:mt-6 md900:mt-0">
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
            <div className=" xs320:mx-auto md900:mx-0">
                <Image src={img} alt=" img" />
            </div>
        </div>
    )
}

export default ConnectWallet
