import React from "react"
import pfp from "@/src/assets/pfp.jpg"
import banner from "@/src/assets/banner.jpg"
import Image from "next/image"
import clsx from "clsx"
import { RiMailAddLine } from "react-icons/ri"
import { BsTriangleFill } from "react-icons/bs"
import { FiLink } from "react-icons/fi"
import { MdOutlineCalendarMonth } from "react-icons/md"
import { AiFillInfoCircle } from "react-icons/ai"
import { useRouter } from "next/router"

export default function UserProfile() {
    const router = useRouter()

    return (
        <div className=" w-full relative flex flex-col mx-auto rounded-3xl md:px-3  ">
            <div className=" w-full px-3 md:px-0 py-1 md:py-2 flex items-center justify-start gap-5 md:mb-2">
                <div
                    className=" -rotate-90 cursor-pointer transition ease-in-out active:scale-95 "
                    onClick={() => router.push("/")}
                >
                    <div className=" ">
                        <BsTriangleFill size={"1.5em"} color="black" />
                    </div>
                </div>
                <div className="">
                    <h2 className=" text-xl md:text-2xl font-semibold text-black">
                        Lorem Ipsum
                    </h2>
                    <span className=" text-base text-lightGratText2 md:font-semibold ">
                        99999 posts
                    </span>
                </div>
            </div>
            <div
                className={clsx(
                    `    md:rounded-3xl  rounded-b-none`,
                    "bannerr"
                )}
            >
                <Image
                    className=" md:h-[280px] object-cover md:rounded-3xl shadow-md p-0"
                    src={banner}
                    alt="pfp"
                />
            </div>
            <div className="md:border rounded-3xl mt-2 w-full  relative bg-white py-4  ">
                <div className="  pt-4 pb-2">
                    <div className=" flex justify-between items-center mx-auto w-11/12 -mt-[70px] md:-mt-24 md:ml-12 mr-auto">
                        <Image
                            className=" w-28 md:w-32 rounded-full border-[6px] md:border-[10px] border-white shadow-sm md:shadow-md p-0"
                            src={pfp}
                            alt="pfp"
                        />
                        <div className=" mt-16  md:mt-24 flex items-center gap-3">
                            <button className=" btn btn-circle hover:bg-white border-lightGratText2 bg-white normal-case rounded-full ">
                                <RiMailAddLine
                                    className=" cursor-pointer"
                                    size={"1.5em"}
                                    color="black"
                                />
                            </button>
                            <button className=" btn text-white normal-case rounded-full px-6 md:px-8 py-0 text-sm ">
                                Follow
                            </button>
                        </div>
                    </div>
                    <div className=" mx-5 md:mx-12 pt-2 ">
                        <h1 className=" text-black text-2xl font-semibold">
                            Lorem Ipsum
                        </h1>
                        <span className=" font-semibold text-lightGratText2">
                            @lorem.ipsum
                        </span>
                        <p className="pt-2.5 md:pt-4 text-sm md:text-base tracking-wide">
                            Sed ut perspiciatis unde omnis iste na, error sit
                            voluptatem accusanti dolorog laudantium, tota rem,
                            eaque ipsa qn ab illo invee veritatis et quasi
                            architect beatae vae dicta so.
                        </p>

                        <div className=" md:text-base text-sm text-lightGratText2 pt-3 flex gap-x-3 md:gap-x-5 justify-start items-center">
                            <div className=" gap-1 flex justify-start items-center text-lightGreen">
                                <FiLink size={"1.1em"} color="#B0B0B0" />
                                <span>lorem.ipsum</span>
                            </div>
                            <div className=" gap-1  flex justify-start items-center">
                                <MdOutlineCalendarMonth
                                    size={"1.3em"}
                                    color="#B0B0B0"
                                />
                                <span>Joined Now</span>
                            </div>
                            <div className=" gap-1  flex justify-start items-center">
                                <AiFillInfoCircle
                                    size={"1.3em"}
                                    color="#B0B0B0"
                                />
                                <span>info</span>
                            </div>
                        </div>

                        <div className=" pt-2 flex items-center justify-start flex-wrap gap-4  ">
                            <div className="  rounded-full  py-2">
                                <span className=" font-bold">99.9M</span>{" "}
                                <span className=" text-lightGratText2">
                                    Followers
                                </span>
                            </div>
                            <div className="  rounded-full px-4 py-2">
                                <span className=" font-bold">99.9M</span>{" "}
                                <span className=" text-lightGratText2">
                                    Following
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
