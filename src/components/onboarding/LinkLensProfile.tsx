import Image from "next/image"
import img from "@assets/modal-img.png"
import { IoWalletOutline } from "react-icons/io5"
import IconButton from "../Shared/IconButton"

function LinkLensProfile() {
    return (
        <div className=" flex items-center justify-center gap-8 py-4">
            <div className=" max-w-sm">
                <h1 className=" text-2xl font-[600] my-2">
                    Link your Lens profile
                </h1>
                <p className=" text-lightGratText2 font-[600] my-2">
                    Connect your existing lens profile to continue with Lens
                    ecosystem.
                </p>
                <button
                    // onClick={handleOpen}
                    type="button"
                    className="px-[20px] rounded-full bg-lightGreen active:bg-lightGreen hover:bg-lightGreen btn  border-0 h-full flex items-center justify-center gap-2 w-full"
                >
                    <img
                        src="/lens-white-1.png"
                        alt=""
                        className="w-[1.5rem] h-[1.5rem]"
                    />
                    <span className="text-white font-semibold leading-[20px]">
                        Sign in with Lens
                    </span>
                </button>
            </div>
            <div>
                <Image src={img} alt=" img" />
            </div>
        </div>
    )
}

export default LinkLensProfile
