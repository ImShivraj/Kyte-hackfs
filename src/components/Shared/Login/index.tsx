import { useModalStore } from "@store/modal"
import CloseIcon from "@mui/icons-material/Close"
import { Button, CircularProgress } from "@mui/material"
import { useAppPersistStore, useAppStore } from "@store/app"
import { useState } from "react"
import { useLogin } from "@lib/auth/useLogin"
import IconButton from "@mui/material/IconButton"
import clsx from "clsx"

const Login = () => {
    const { setShowAuthModal } = useModalStore()
    const { setProfiles, setCurrentProfile } = useAppStore()
    const { setProfileId } = useAppPersistStore()
    const [loading, setLoading] = useState(false)
    const [hasProfile, setHasProfile] = useState(true)
    const { mutate: requestLogin } = useLogin(
        setHasProfile,
        setProfiles,
        setCurrentProfile,
        setProfileId,
        setLoading,
        setShowAuthModal
    )

    return (
        <div className="relative w-[650px] h-fit lg:h-fit lg:min-h-[220px] lg:max-h-fit bg-bgCover lg:bg-white rounded-[15px] flex flex-col items-center justify-start overflow-hidden pt-1">
            <div className="w-full h-[60px] min-h-[60px] border-b-[1px] border-b-line flex items-center justify-between px-5  box-border">
                <div className="flex items-center justify-start gap-2">
                    <img src="/kyte_black_logo.png" alt="" className="w-[30px]" />
                    <h1 className="text-[1.4rem] font-bold text-sideBarLink">
                        Please Login
                    </h1>
                </div>
                <IconButton
                    style={{ backgroundColor: "#E4E4E7" }}
                    className="bg-opacity-10 rounded-full transition-all w-[35px] h-[35px] flex items-center justify-center cursor-pointer p-2"
                    onClick={() => setShowAuthModal(false)}
                >
                    <CloseIcon className="text-gray-600 text-[14px]" />
                </IconButton>
            </div>
            {hasProfile ? (
                <div className="py-5 pl-7 w-full flex flex-col items-start justify-between gap-5">
                    <div>
                        <div className="text-xl font-bold leading-7 text-black">
                            Please sign the message
                        </div>
                        <div className="text-sm text-gray-500 font-semibold">
                            {"Kyte uses this signature to verify that you're the owner of this address."}
                        </div>
                    </div>
                    <Button
                        variant="contained"
                        onClick={() => requestLogin()}
                        style={{ borderRadius: "10px" }}
                        className="h-[35px] flex items-center justify-evenly bg-lightGreen hover:bg-lightGreen pl-5 pr-3 gap-2 relative"
                    >
                        {loading ? (
                            <CircularProgress
                                size={17.5}
                                classes={{ circle: "text-white" }}
                                thickness={5}
                            />
                        ) : (
                            <img
                                src="/lens-white-1.png"
                                alt=""
                                className="w-[17.5px] h-[17.5px]"
                            />
                        )}

                        <h1 className="text-[0.9rem] text-white font-bold mr-3 normal-case">
                            Sign-In with Lens
                        </h1>
                        <div
                            className={clsx(loading ? "opacity-100" : "opacity-0",
                                `absolute bg-white h-full bg-opacity-50 transition-all w-[110%] `)}
                        />
                    </Button>
                </div>
            ) : (
                <div className="py-5 pl-7 w-full flex flex-col items-start justify-between gap-5">
                    <div>
                        <img
                            src="/assets/images/lens-logo.png"
                            className="w-[4rem] h-[4rem] rounded-full mb-[14px]"
                            alt=""
                        />
                        <p className="text-xl font-bold leading-7 text-black mb-[14px]">
                            Claim your Lens profile 🌿
                        </p>
                        <p className="text-sm text-black font-semibold mb-0.5">
                            Visit{" "}
                            <a
                                className="font-bold from-text_gradient1 to-text_gradient2 text-transparent bg-clip-text bg-gradient-to-tr"
                                href="https://claim.lens.xyz"
                                target="_blank"
                                rel="noreferrer"
                            >
                                claiming site
                            </a>{" "}
                            to claim your profile now 🏃‍♂️
                        </p>
                        <p className="text-sm text-gray-500 font-semibold">
                            Make sure to check back here when done !
                        </p>
                    </div>
                </div>
            )}
        </div>

    )
}

export default Login
