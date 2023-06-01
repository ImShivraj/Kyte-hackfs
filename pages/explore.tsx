import PostPreview from "@components/posts/PostPreview"
import React, { useState } from "react"
import SuggestedProfile from "@/src/components/home/SuggestedProfile"
import { HiOutlineGlobeEuropeAfrica } from "react-icons/hi2"
import { CgSearch } from "react-icons/cg"

import ExploreTabs from "@/src/components/explore/ExploreTabs"
import ResponsiveLayout from "@/src/components/Shared/ResponsiveLayout"

export const links = [
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

const Children1: React.FC = () => {
    const [activeTab, setActiveTab] = useState("for-you")
    return <ExploreTabs activeTab={activeTab} setActiveTab={setActiveTab} />
}

const Children2: React.FC = () => {
    return (
        <div className="">
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
    )
}

const Explore: React.FC = () => {
    return (
        <ResponsiveLayout children1={<Children1 />} children2={<Children2 />} />
    )
}

export default Explore
