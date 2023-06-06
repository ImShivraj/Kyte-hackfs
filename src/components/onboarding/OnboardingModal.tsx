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

            <Dialog className="" size="md" open={open} handler={handleOpen}>
                {/* <DialogHeader></DialogHeader> */}
                <DialogBody className=" ">
                    {/* <OnboardingSteps /> */}
                    {/* <ConnectWallet /> */}
                    {/* <ClaimUsername
                        username={username}
                        setUsername={setUsername}
                    /> */}

                    <div className=" bg-lightGray py-4 px-4 w-11/12 mx-auto rounded-full">
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
                            <div className=" flex justify-center items-center pt-10">
                                All steps completed - you&apos;re finished
                            </div>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    pt: 2,
                                }}
                            >
                                <Box sx={{ flex: "1 1 auto" }} />
                            </Box>
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
