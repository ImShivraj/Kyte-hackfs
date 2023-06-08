import Image from "next/image"
import img from "@assets/modal_img1.svg"
import React, { useState } from "react"
import { RxCross1 } from "react-icons/rx"
import { useForm } from "react-hook-form"
import clsx from "clsx"

interface Props {
    username: string
    setUsername: (value: string) => void
}

function ClaimUsername({ username, setUsername }: Props) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    return (
        // <div className=" flex items-center xs320:text-center md900:text-start flex-wrap-reverse md900:justify-between xl1450:px-6 bggre xl1450:justify-between md900:px-12 md900:gap-3 py-4">
        <div
            className={`flex items-center xs320:text-center md900:text-start flex-wrap-reverse 
        
        md1000:justify-center  md1050: lg1100: lg1200: lg1300: lg1350: xl1400: xl1450: xl1500: xl1600: xl1700: xl1800: xl1900:

     lg1300:justify-around xl1450:justify-evenly md900:px-12 lg1300:px-4 xl1450:px-0 md900:gap-3 py-4  `}
        >
            <div className=" md900:max-w-sm xl1450:max-w-max xs320:mt-6 md900:mt-0">
                <h1 className=" text-2xl font-[600] my-2">
                    Claim your username
                </h1>
                <p className=" text-lightGratText2 font-[600] my-2">
                    Create a unique username to start your journey in Kyte
                </p>
                <div className="relative mt-5 mb-2 xs320:mx-3 md900:mx-0">
                    <input
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setUsername(e.target.value)
                        }
                        value={username}
                        placeholder="username"
                        className={clsx(
                            username === "test" &&
                                "outline outline-2 outline-red-500 ring-red-500 focus:outline-red-500",
                            "font-[500] bg-lightGray input input-ghost py-3.5 p-4 w-full xl1450:w-96 rounded-md outline-none "
                        )}
                    />
                    {username && (
                        <div onClick={() => setUsername("")}>
                            <RxCross1
                                className=" cursor-pointer absolute top-3.5 right-4 text-gray-400"
                                size={"1.5em"}
                            />
                        </div>
                    )}
                    {username === "test" && (
                        <span className="  text-red-500 absolute ">
                            username not available, try another
                        </span>
                    )}
                </div>
            </div>
            <div className="xs320:mx-auto md900:mx-0">
                <Image src={img} alt=" img" />
            </div>
        </div>
    )
}

export default ClaimUsername
