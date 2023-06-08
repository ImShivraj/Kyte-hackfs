import React, { useState } from "react"
import SuggestedProfile from "@/src/components/home/SuggestedProfile"
import { CgSearch } from "react-icons/cg"
import { HiOutlineGlobeEuropeAfrica } from "react-icons/hi2"
import { useAppStore } from "@store/app"
import WalletSelector from "@/src/components/Shared/Login/WalletSelector"
import useIsMounted from "@/src/utils/hooks/useIsMounted"

import { links } from "./explore"
import ResponsiveLayout from "@/src/components/Shared/ResponsiveLayout"

import HomeTabs from "@/src/components/home/HomeTabs"
import OnboardingModal from "@/src/components/onboarding/OnboardingModal"

const Children1: React.FC = () => {
    const [activeTab, setActiveTab] = useState("for-you")

    return <HomeTabs activeTab={activeTab} setActiveTab={setActiveTab} />
}

const Children2: React.FC = () => {
    const [expandedImage, setExpandedImage] = useState<string | null>(null)
    const { currentProfile } = useAppStore()
    return (
        <div className="fixed md1050:pr-5 xl1450:pr-0 xl1450:">
            {/* {currentProfile ? (
                <div className="relative mt-5 mb-2">
                    <input
                        placeholder="Search"
                        className=" bg-lightGray py-3.5 p-4 w-full rounded-2xl outline-none"
                    />
                    <CgSearch
                        className=" cursor-pointer absolute top-3.5 right-4 text-gray-400"
                        size={"1.5em"}
                    />
                </div>
            ) : (
                <div className=" mt-2 mb-3 active:scale-95 transition ease-in-out">
                    <WalletSelector withLabel />
                </div>
            )} */}

            <div className=" my-2">
                <OnboardingModal />
            </div>

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

export default function Home() {
    const { mounted } = useIsMounted()

    if (!mounted) {
        return <div>Loading...</div>
    }

    return (
        <ResponsiveLayout children1={<Children1 />} children2={<Children2 />} />
    )
}
