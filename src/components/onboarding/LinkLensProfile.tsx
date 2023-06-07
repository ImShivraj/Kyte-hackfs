import Image from "next/image"
import img from "@assets/modal_img2.svg"
import lens from "@assets/lens_logo.png"
import { IoWalletOutline } from "react-icons/io5"
import IconButton from "../Shared/IconButton"

function LinkLensProfile() {
    return (
        <div className=" flex items-center xs320:text-center md900:text-start flex-wrap-reverse md900:justify-between xl1450:justify-evenly md900:px-12 xl1450:px-0 md900:gap-3 py-4">
            <div className=" md900:max-w-sm xl1450:max-w-max xs320:mt-6 md900:mt-0">
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
                    className="px-[70px] my-3 rounded-full bg-lightGreen active:bg-lightGreen hover:bg-lightGreen btn  border-0 h-full flex items-center justify-between px-12 gap-2"
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
            <div className="max-w-xs xs320:mx-auto md900:mx-0">
                {/* <Image className=" max-w-[232px] " src={lens} alt=" img" /> */}
                <Image className=" " src={img} alt=" img" />
            </div>
        </div>
    )
}

export default LinkLensProfile
