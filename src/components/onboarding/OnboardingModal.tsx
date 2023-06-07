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

const steps = ["Connect your wallet", "Select a username", "Connect with Lens"]

export default function OnboardingModal() {
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
                className=" p-3"
                size="lg"
                open={open}
                handler={handleOpen}
            >
                <DialogBody className=" relative ">
                    <div
                        onClick={handleOpen}
                        className=" absolute right-0 top-0 hover:bg-lightGray rounded-full p-3 cursor-pointer transition-all ease-in-out active:scale-95"
                    >
                        <RxCross1 size={"1.2em"} />
                    </div>
                    <div className=" bg-lightGray py-4 px-4 w-11/12 mb-3  mx-auto rounded-full">
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
                    </div>

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
                    )}

                    {/* <LinkLensProfile /> */}
                </DialogBody>
                <DialogFooter className=" flex w-full justify-between px-14  ">
                    <button
                        onClick={handleBack}
                        disabled={activeStep === 0}
                        color="red"
                        className=" btn rounded-full w-32"
                    >
                        <span>Previous</span>
                    </button>

                    {activeStep === steps.length ? (
                        <button
                            onClick={handleReset}
                            color="red"
                            className=" btn rounded-full w-32"
                        >
                            <span>Reset</span>
                        </button>
                    ) : (
                        <button
                            onClick={handleNext}
                            color="green"
                            className=" btn rounded-full w-32"
                        >
                            <span>
                                {activeStep === steps.length - 1
                                    ? "Finish"
                                    : "Next"}
                            </span>
                        </button>
                    )}
                </DialogFooter>
            </Dialog>
        </Fragment>
    )
}
