import React from "react"
import { Stepper, Step, Button, Typography } from "@material-tailwind/react"
import {
    CogIcon,
    UserIcon,
    BuildingLibraryIcon,
} from "@heroicons/react/24/outline"
import clsx from "clsx"
import {
    TbCircleNumber1,
    TbCircleNumber2,
    TbCircleNumber3,
} from "react-icons/tb"

export default function OnboardingSteps() {
    const [activeStep, setActiveStep] = React.useState(0)
    const [isLastStep, setIsLastStep] = React.useState(false)
    const [isFirstStep, setIsFirstStep] = React.useState(false)

    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1)
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1)

    return (
        // <div>
        //     <div className="w-full mb-12 py-4 bg-lightGray rounded-full ">
        //         <Stepper
        //             activeStep={activeStep}
        //             isLastStep={(value) => setIsLastStep(value)}
        //             isFirstStep={(value) => setIsFirstStep(value)}
        //             className=" grid grid-cols-6 w-full  "
        //         >
        //             <Step
        //                 className=" col-span-2  "
        //                 onClick={() => setActiveStep(0)}
        //             >
        //                 1
        //             </Step>
        //             <div>Connect your wallet</div>
        //             <Step
        //                 className=" col-span-2 flex  items-center justify-between  "
        //                 onClick={() => setActiveStep(1)}
        //             >
        //                 <CogIcon className="h-5 w-5" />
        //                 <Typography
        //                     variant="h6"
        //                     color={activeStep === 1 ? "blue" : "black"}
        //                 >
        //                     Security Details
        //                 </Typography>
        //             </Step>
        //             <Step
        //                 className=" col-span-2 flex  items-center justify-between "
        //                 onClick={() => setActiveStep(2)}
        //             >
        //                 <BuildingLibraryIcon className="h-5 w-5" />
        //                 <Typography
        //                     variant="h6"
        //                     color={activeStep === 2 ? "blue" : "black"}
        //                 >
        //                     Organization Details
        //                 </Typography>
        //             </Step>
        //         </Stepper>
        //     </div>
        //     <div className="mt-32 flex justify-between">
        //         <Button onClick={handlePrev} disabled={isFirstStep}>
        //             Prev
        //         </Button>
        //         <Button onClick={handleNext} disabled={isLastStep}>
        //             Next
        //         </Button>
        //     </div>
        // </div>
        // <ul className="relative m-0 flex list-none justify-between overflow-hidden p-0 transition-[height] duration-200 ease-in-out">
        //     <li className="w-[4.5rem] flex-auto">
        //         <div className="flex cursor-pointer items-center pl-2 leading-[1.3rem] no-underline after:ml-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
        //             <span className="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
        //                 1
        //             </span>
        //             <span className="font-medium text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
        //                 step1
        //             </span>
        //         </div>
        //         <div className="absolute w-full p-4 transition-all duration-500 ease-in-out">
        //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        //             do eiusmod tempor incididunt ut labore et dolore magna
        //             aliqua.
        //         </div>
        //     </li>

        //     <li className="w-[4.5rem] flex-auto">
        //         <div className="flex cursor-pointer items-center leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] after:ml-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
        //             <span className="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
        //                 2
        //             </span>
        //             <span className="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
        //                 step2
        //             </span>
        //         </div>
        //         <div className="absolute left-0 w-full translate-x-[150%] p-4 transition-all duration-500 ease-in-out">
        //             Ut enim ad minim veniam, quis nostrud exercitation ullamco
        //             laboris nisi ut aliquip ex ea commodo consequat.
        //         </div>
        //     </li>

        //     <li className="w-[4.5rem] flex-auto">
        //         <div className="flex cursor-pointer items-center pr-2 leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
        //             <span className="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
        //                 3
        //             </span>
        //             <span className="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
        //                 step3
        //             </span>
        //         </div>
        //         <div className="absolute left-0 w-full translate-x-[150%] p-4 transition-all duration-500 ease-in-out">
        //             Duis aute irure dolor in reprehenderit in voluptate velit
        //             esse cillum dolore eu fugiat nulla pariatur.
        //         </div>
        //     </li>
        // </ul>

        <ol className=" bg-lightGray my-2 py-6 rounded-full w-11/12  mx-auto px-10 p  grid grid-cols-6  text-sm font-medium text-center text-gray-500 sm:text-base ">
            <li className=" col-span-2 w-full flex items-center text-blacksm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 ">
                {/* <div className="flex items-center justify-between gap-2  after:text-gray-200 w-full bg-green-300 "> */}
                <div>
                    <TbCircleNumber1 size={"2em"} color="black" />
                </div>
                <span>Connect your wallet</span>
                {/* <span className="hidden sm:inline-flex sm:ml-2">Info</span> */}
                {/* </div> */}
            </li>
            <li className=" col-span-2 w-full flex items-center text-blacksm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 ">
                <div>
                    <TbCircleNumber2 size={"2em"} color="black" />
                </div>
                <span>Select a username</span>
            </li>

            <li className="col-span-2 flex items-center">
                <div>
                    <TbCircleNumber3 size={"2em"} color="black" />
                </div>
                <span> Connect with Lens</span>
            </li>
        </ol>
    )
}
