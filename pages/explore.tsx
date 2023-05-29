import React, { useState } from "react"
import SuggestedProfile from "@/src/components/home/SuggestedProfile"
import { HiOutlineGlobeEuropeAfrica } from "react-icons/hi2"
import { CgSearch } from "react-icons/cg"
import ExploreTabs from "@/src/components/explore/ExploreTabs"

export default function Explore() {
    const [activeTab, setActiveTab] = useState("for-you")
    return (
        <div className=" md:mx-5 px-5 pb-10">
            <div className="  flex items-start justify-start  mx-auto  ">
                <div className=" mx-4 mt-4  relative w-10/12 p-2 bg-purple-20  ">
                    <div className=" w-full ">
                        <div className=" w-full relative mb-2  ">
                            <input
                                placeholder="Search"
                                className=" bg-lightGray py-3.5 p-4 w-full rounded-2xl outline-none"
                            />
                            <CgSearch
                                className=" cursor-pointer absolute top-3.5 right-4 text-gray-400"
                                size={"1.5em"}
                            />
                        </div>
                    </div>
                    <ExploreTabs
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />
                </div>
                <div className=" fixed right-10 z-0 w-3/12 p-6 max-h-[96vh] h-[96vh] overflow-auto my-3 flex flex-col justify-start items-stretch ">
                    <div className="mt-2 bg-lightGray  rounded-3xl">
                        <h2 className="  text-2xl font-semibold p-5">
                            Suggested for you
                        </h2>
                        <SuggestedProfile />
                        <SuggestedProfile />
                        <SuggestedProfile />
                        <SuggestedProfile />
                        <SuggestedProfile />
                        <SuggestedProfile />
                        <div className=" px-4 my-4">
                            <button className=" btn btn-ghost btn-sm normal-case text-lg text-lightGreen font-normal hover:bg-transparent">
                                Show More
                            </button>
                        </div>
                    </div>
                    <div className=" mx-1 mb-1 mt-5">
                        <div className=" grid grid-cols-4 flex-wrap justify-evenly">
                            <a
                                href="#"
                                className=" text-start text-lightGratText2 my-auto   text-[15px] font-[600] hover:bg-transparent"
                            >
                                &#169; Kyte
                            </a>
                            <a
                                href="#"
                                className="text-start text-lightGratText2 my-auto   text-[15px] font-[600] hover:bg-transparent"
                            >
                                Terms
                            </a>
                            <a
                                href="#"
                                className="text-start text-lightGratText2 my-auto   text-[15px] font-[600] hover:bg-transparent"
                            >
                                Privacy
                            </a>
                            <a
                                href="#"
                                className="text-start text-lightGratText2 my-auto   text-[15px] font-[600] hover:bg-transparent"
                            >
                                Discord
                            </a>
                            <a
                                href="#"
                                className="text-start text-lightGratText2 my-auto   text-[15px] font-[600] hover:bg-transparent"
                            >
                                Donate
                            </a>
                            <a
                                href="#"
                                className="text-start text-lightGratText2 my-auto   text-[15px] font-[600] hover:bg-transparent"
                            >
                                Status
                            </a>
                            <a
                                href="#"
                                className="text-start text-lightGratText2 my-auto   text-[15px] font-[600] hover:bg-transparent"
                            >
                                Feedback
                            </a>
                            <a
                                href="#"
                                className=" text-lightGratText2  btn btn-ghost btn-sm normal-case text-sm font-[600] hover:bg-transparent"
                            >
                                Thanks
                            </a>
                        </div>
                    </div>
                    <div className=" mx-1 mt-2 flex justify-between items-center text-start text-lightGratText2 my-auto   text-[15px] font-[600] hover:bg-transparent">
                        <div className=" text-lightGratText2 flex items-center gap-3">
                            <HiOutlineGlobeEuropeAfrica
                                size={"1.5em"}
                                color="#B0B0B0"
                            />
                            <span>English</span>
                        </div>
                        <div className=" text-lightGratText2">
                            <span>Storage Powered by Polybase</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
