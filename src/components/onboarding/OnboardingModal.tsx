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
import { useEffect } from "react"

import * as React from "react"
import Box from "@mui/material/Box"
import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import { StepConnector, Theme, Typography } from "@mui/material"
import { RxCross1 } from "react-icons/rx"
import { CheckIcon, createStyles } from "@mantine/core"
import { makeStyles } from "@mui/styles"
import clsx from "clsx"
import { useModalStore } from "@/src/store/modal"
import { useAccount } from "wagmi"
import { useLogin } from "@/src/lib/auth/useLogin"
import { useAppPersistStore, useAppStore } from "@/src/store/app"
import usePolLogin from "@/src/lib/usePolybaseLogin"
import { usePolybase } from "@polybase/react"

const steps = ["Connect your wallet", "Select a username", "Connect with Lens"]

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        completed: {
            color: "black",
            borderColor: "black",
        },
        connectorActive: {
            "& $connectorLine": {
                borderColor: "black",
            },
        },
        connectorLine: {
            borderColor: "rgba(0, 0, 0, 0.23)",
        },
    })
)

const CustomStepIcon = (props: any) => {
    const classes = useStyles()
    const { active, completed } = props

    return (
        <div
        // className={completed ? classes.completed : ""}
        >
            {completed ? (
                <div className=" border-2 border-black rounded-full bg-black text-white font-semibold px-3.5 py-1 ">
                    {props.icon}
                </div>
            ) : (
                <div className=" border-2 border-lightGratText1 text-lightGratText1 rounded-full bg-transparent font-semibold px-3.5 py-1 ">
                    {props.icon}
                </div>
            )}
        </div>
    )
}

export default function OnboardingModal() {
    const { address, isConnected } = useAccount();

    const [username, setUsername] = useState("")
    const [activeStep, setActiveStep] = useState(0)
    const [skipped, setSkipped] = useState(new Set<number>())

    const classes = useStyles()

    const isStepSkipped = (step: number) => {
        return skipped.has(step)
    }

    const handleNext = () => {
        if (activeStep === 2) return
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

    const { showOnboardingModal, setShowOnboardingModal } = useModalStore()

    const handleOpen = () => setShowOnboardingModal(!showOnboardingModal)



    const { setShowAuthModal } = useModalStore()
    const { setProfiles, setCurrentProfile, currentProfile, setUserName, userName } = useAppStore()
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

    const polybase = usePolybase()

    const polLogin = usePolLogin(address)

    const createKyteUsers = async () => {
        const createResponse = await polybase.applySchema(`
        @public 
        collection KyteUsers {
          id: string;
        
          // This field is referencing the User collection below
          owner: string;
         
          constructor (id: string, owner: string) {
            this.id = id;
            this.owner = owner;
          }
    
          updateOwner(owner: string) {
            this.owner = owner;
          }
    
        }  
      `, 'kyte-prototype')

        console.log({ createResponse })
    }

    useEffect(() => {
        if (isConnected) {
            setActiveStep(1)
            if (userName) {
                setActiveStep(2)
            }
        }
    }, [isConnected, userName])

    useEffect(() => {

        if (isConnected) {
            polLogin()
            createKyteUsers()
        }

    }, [isConnected])



    return (
        <Fragment>
            <button
                // variant="gradient"
                onClick={handleOpen}
                type="button"
                className=" btn bg-lightGreen border-0 hover:bg-lightGreen active:bg-lightGreen focus:bg-lightGreen px-[27.5px] h-full flex items-center justify-center gap-2 w-full"
            >
                {/* <img
                    src="/lens-white-1.png"
                    alt=""
                    className="w-[1.5rem] h-[1.5rem]"
                /> */}
                <span className="text-white font-semibold leading-[20px]">
                    Get Started
                </span>
            </button>

            <Dialog
                dismiss={{
                    outsidePress: false,
                }}
                className=" p-3 rounded-2xl  md1000:min-w-[900px] "
                size="lg"
                open={showOnboardingModal && !currentProfile}
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
                            {/* <Stepper activeStep={activeStep}>
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
                            </Stepper> */}

                            <Stepper activeStep={activeStep + 1}>
                                {steps.map((label, index) => {
                                    const stepProps: { completed?: boolean } =
                                        {}

                                    if (isStepSkipped(index)) {
                                        stepProps.completed = false
                                    }

                                    // console.log({ activeStep, index })

                                    return (
                                        <Step
                                            key={label}
                                            {...stepProps}
                                            completed={stepProps.completed}
                                        >
                                            <StepLabel
                                                StepIconComponent={
                                                    CustomStepIcon
                                                }
                                            // StepIconProps={{
                                            //     classes: {
                                            //         completed:
                                            //             classes.completed,
                                            //     },
                                            // }}
                                            >
                                                <span
                                                    className={clsx(
                                                        activeStep === index &&
                                                        " text-lightGratText1",
                                                        "text-base font-[600]"
                                                    )}
                                                >
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
                            <LinkLensProfile loading={loading} requestLogin={requestLogin} />
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            {activeStep === 0 && <ConnectWallet />}
                            {activeStep === 1 && (
                                <ClaimUsername
                                    username={username}
                                    setUsername={setUsername}
                                    setActiveStep={setActiveStep}
                                />
                            )}
                            {/* {activeStep === 2 && (
                                <CreateLensProfile
                                    username={username}
                                    setUsername={setUsername}
                                />
                            )} */}
                            {activeStep === 2 && <LinkLensProfile loading={loading} requestLogin={requestLogin} />}
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
