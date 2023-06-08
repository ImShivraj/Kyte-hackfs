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

import * as React from "react"
import Box from "@mui/material/Box"
import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import { Typography } from "@mui/material"
import { RxCross1 } from "react-icons/rx"
import { Carousel, IconButton } from "@material-tailwind/react"
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"

const steps = ["Connect your wallet", "Select a username", "Connect with Lens"]

export default function OnboardingModalMobile() {
    const [open, setOpen] = useState(false)
    const [username, setUsername] = useState("")
    const [activeStep, setActiveStep] = useState(0)
    const [skipped, setSkipped] = useState(new Set<number>())

    const isStepOptional = (step: number) => {
        return step === 1
    }

    const isStepSkipped = (step: number) => {
        return skipped.has(step)
    }

    const handleNext = () => {
        let newSkipped = skipped
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values())
            newSkipped.delete(activeStep)
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1)
        setSkipped(newSkipped)
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    const handleReset = () => {
        setActiveStep(0)
    }

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

            <Dialog
                dismiss={{
                    outsidePress: false,
                }}
                className=" p-3 h-full  max-h-[100vh]"
                size="xxl"
                open={open}
                handler={handleOpen}
            >
                <DialogBody className="  relative h-[100vh]  ">
                    <div
                        onClick={handleOpen}
                        className=" z-[100] absolute right-0 top-0 hover:bg-lightGray rounded-full p-3 cursor-pointer transition-all ease-in-out active:scale-95"
                    >
                        <RxCross1 size={"1.4em"} />
                    </div>
                    {/* <div className=" bg-lightGray py-4 px-4 w-11/12 mb-3  mx-auto rounded-full">
                        <Box sx={{ width: "100%" }}>
                            <Stepper activeStep={activeStep}>
                                {steps.map((label, index) => {
                                    const stepProps: { completed?: boolean } =
                                        {}
                                    const labelProps: {
                                        optional?: React.ReactNode
                                    } = {}

                                    if (isStepSkipped(index)) {
                                        stepProps.completed = false
                                    }
                                    return (
                                        <Step key={label} {...stepProps}>
                                            <StepLabel {...labelProps}>
                                                <span className=" text-base font-[500]">
                                                    {label}
                                                </span>
                                            </StepLabel>
                                        </Step>
                                    )
                                })}
                            </Stepper>
                        </Box>
                    </div> */}

                    <Carousel
                        className="rounded-xl"
                        prevArrow={({ handlePrev }) => (
                            <button
                                onClick={handlePrev}
                                className="absolute bottom-0 z-50  left-0 btn rounded-full w-32"
                            >
                                <span>Previous</span>
                            </button>
                        )}
                        nextArrow={({ handleNext }) => (
                            <button
                                onClick={handleNext}
                                className="absolute bottom-0 z-50  right-0 btn rounded-full w-32"
                            >
                                <span>
                                    {activeStep === steps.length - 1
                                        ? "Finish"
                                        : "Next"}
                                </span>
                            </button>
                        )}
                        navigation={({
                            setActiveIndex,
                            activeIndex,
                            length,
                        }) => (
                            <div className="absolute bottom-16 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                                {new Array(length).fill("").map((_, i) => (
                                    <span
                                        key={i}
                                        className={`block h-2 w-2 cursor-pointer rounded-2xl transition-all content-[''] ${
                                            activeIndex === i
                                                ? " bg-lightGreen w-2 scale-150"
                                                : " bg-gray-400 w-2"
                                        }`}
                                        onClick={() => setActiveIndex(i)}
                                    />
                                ))}
                            </div>
                        )}
                    >
                        <div className=" h-5/6 mt-6 w-full   max-h-[80vh]">
                            <ConnectWallet />
                        </div>
                        <div className=" h-5/6 mt-6 w-full   max-h-[80vh]">
                            <ClaimUsername
                                username={username}
                                setUsername={setUsername}
                            />
                        </div>
                        <div className=" h-5/6 mt-6 w-full   max-h-[80vh]">
                            <LinkLensProfile />
                        </div>
                        <div className=" h-5/6 mt-6 w-full   max-h-[80vh]">
                            <CreateLensProfile
                                username={username}
                                setUsername={setUsername}
                            />
                        </div>
                    </Carousel>
                    {/* 
                    {activeStep === steps.length ? (
                        <React.Fragment>
                            <LinkLensProfile />
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            {activeStep === 0 && <ConnectWallet />}
                            {activeStep === 1 && (
                                <ClaimUsername
                                    username={username}
                                    setUsername={setUsername}
                                />
                            )}
                            {activeStep === 2 && (
                                <CreateLensProfile
                                    username={username}
                                    setUsername={setUsername}
                                />
                            )}
                            {activeStep === 3 && <LinkLensProfile />}
                        </React.Fragment>
                    )} */}

                    {/* <LinkLensProfile /> */}
                </DialogBody>
                {/* <DialogFooter className=" flex w-full justify-between px-14  ">
                    <button
                        onClick={handleBack}
                        disabled={activeStep === 0}
                        className=" btn rounded-full w-32"
                    >
                        <span>Previous</span>
                    </button>

                    {activeStep === steps.length ? (
                        <button
                            onClick={handleReset}
                            className=" btn rounded-full w-32"
                        >
                            <span>Reset</span>
                        </button>
                    ) : (
                        <button
                            onClick={handleNext}
                            className=" btn rounded-full w-32"
                        >
                            <span>
                                {activeStep === steps.length - 1
                                    ? "Finish"
                                    : "Next"}
                            </span>
                        </button>
                    )}
                </DialogFooter> */}
            </Dialog>
        </Fragment>
    )
}
