import Sidebar from "@components/ui/Sidebar"
import PostPreview from "@components/posts/PostPreview"
import React, { useState } from "react"
import SuggestedProfile from "@/src/components/home/SuggestedProfile"
import { HiOutlineGlobeEuropeAfrica } from "react-icons/hi2"
import { CgSearch } from "react-icons/cg"

import ExploreTabs from "@/src/components/explore/ExploreTabs"

const links = [
    {
        label: "&#169; Kyte",
        link: "#",
    },
    {
        label: "Terms",
        link: "#",
    },
    {
        label: "Privacy",
        link: "#",
    },
    {
        label: "Discord",
        link: "#",
    },
    {
        label: "Donate",
        link: "#",
    },
    {
        label: "Status",
        link: "#",
    },
    {
        label: "Feedback",
        link: "#",
    },
    {
        label: "Thanks",
        link: "#",
    },
]

export default function Explore() {
    const [activeTab, setActiveTab] = useState("for-you")
    return (
        // md900:-ml-16 xl1450:ml-1 xl1450:pl-6
        <div className=" bg-white h-screen ">
            {/* md900:mx-5 md1050:mx-0 md950:mr-3.5  xl1450:ml-3.5 */}
            <div className=" grid grid-cols-12 md900:gap-[20px] xl1450:gap-0  bg-green-30 ">
                {/* ml-4 ml-aut */}
                <div className="xl1450:pr-8 md900:px-6 md1050:px-0 xs320:col-span-12 md900:col-span-12 md950:col-span-12 md1000:col-span-12 md1050:col-span-8  xl1450:col-span-9">
                    <ExploreTabs
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />
                </div>
                {/* md900:ml-3.5 xl1450:ml-0  */}
                <div className="md1050:pl-3  xl1450:pl-auto col-span-3 md900:col-span-4 xl1450:col-span-3 right-10 px-6 md900:px-0 md1050:pr-4  xl1450:px-4 max-h-[96vh] h-[96vh] overflow-auto mt-2 hidden md1050:flex flex-col justify-start items-stretch ">
                    <div className="mt-2 bg-lightGray  rounded-3xl">
                        <h2 className="  text-2xl font-semibold p-5">
                            Suggested for you{" "}
                        </h2>
                        <SuggestedProfile />
                        <SuggestedProfile />
                        <SuggestedProfile />
                        <SuggestedProfile />
                        <SuggestedProfile />
                        <SuggestedProfile />{" "}
                        <div className=" px-4 my-4">
                            <button className=" btn btn-ghost btn-sm normal-case text-lg text-lightGreen font-normal hover:bg-transparent">
                                Show More
                            </button>
                        </div>
                    </div>
                    <div className=" mx-1 mb-1 mt-5 ">
                        <div className=" grid grid-cols-4 flex-wrap justify-evenly">
                            {links.map((link, idx) => (
                                <a
                                    key={idx}
                                    href={link.link}
                                    className=" col-span-1 text-start text-lightGratText2 my-1  md900:text-[14px] xl1450:text-[15px] font-[600] hover:bg-transparent"
                                >
                                    {idx === 0 ? (
                                        <span className=" ">&#169; Kyte</span>
                                    ) : (
                                        link.label
                                    )}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className=" mx-1 mt-2 flex justify-between items-center text-start text-lightGratText2 my-auto text-[15px] font-[600] hover:bg-transparent">
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
