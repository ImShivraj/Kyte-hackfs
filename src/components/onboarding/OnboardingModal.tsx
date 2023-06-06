import { Fragment, useState } from "react"
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react"
import OnboardingSteps from "./OnboardingSteps"
import ConnectWallet from "./ConnectWallet"
import ClaimUsername from "./CalimUsername"
import CreateLensProfile from "./CreateLensProfile"
import LinkLensProfile from "./LinkLensProfile"

export default function OnboardingModal() {
    const [open, setOpen] = useState(false)
    const [activeStep, setActiveStep] = useState(0)
    const [isLastStep, setIsLastStep] = useState(false)
    const [isFirstStep, setIsFirstStep] = useState(false)

    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1)
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1)

    const handleOpen = () => setOpen(!open)

    return (
        <Fragment>
            <button
                // variant="gradient"
                onClick={handleOpen}
                type="button"
                className=" btn px-[27.5px] h-full flex items-center justify-center gap-2 w-full"
            >
                <img
                    src="/lens-white-1.png"
                    alt=""
                    className="w-[1.5rem] h-[1.5rem]"
                />
                <span className="text-white font-semibold leading-[20px]">
                    Get Started
                </span>
            </button>

            <Dialog className="" size="md" open={open} handler={handleOpen}>
                {/* <DialogHeader></DialogHeader> */}
                <DialogBody className=" ">
                    <OnboardingSteps />
                    {/* <ConnectWallet /> */}
                    {/* <ClaimUsername /> */}
                    {/* <CreateLensProfile /> */}
                    <LinkLensProfile />
                </DialogBody>
                <DialogFooter className=" flex w-full justify-between px-14  ">
                    <button
                        onClick={handlePrev}
                        disabled={isFirstStep}
                        color="red"
                        className=" btn rounded-full w-32"
                    >
                        <span>Previous</span>
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={isLastStep}
                        color="green"
                        className=" btn rounded-full w-32"
                    >
                        <span>Next</span>
                    </button>
                </DialogFooter>
            </Dialog>
        </Fragment>
    )
}
