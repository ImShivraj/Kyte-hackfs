import WalletSelector from "@/src/components/Shared/Login/WalletSelector"
import ResponsiveLayout from "@/src/components/Shared/ResponsiveLayout"
import SuggestedProfile from "@/src/components/home/SuggestedProfile"
import ProfileTabs from "@/src/components/profile/ProfileTabs"
import UserProfile from "@/src/components/profile/UserProfile"
import { useAppStore } from "@/src/store/app"
import React, { useState } from "react"
import { CgSearch } from "react-icons/cg"
import { HiOutlineGlobeEuropeAfrica } from "react-icons/hi2"

const Children1: React.FC = () => {
    const [activeTab, setActiveTab] = useState("posts")

    return (
        <div className=" mx-auto md:mt-2 relative w-full ">
            <div className=" w-full  ">
                <UserProfile />
            </div>
            <div className="md:mx-2 md:px-1 -mt-10 md:-mt-0 relative">
                <ProfileTabs
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
            </div>
        </div>
    )
}

const Children2: React.FC = () => {
    const [expandedImage, setExpandedImage] = useState<string | null>(null)
    const { currentProfile } = useAppStore()
    return (
        // fixed right-3
        <div className="fixed right-10  bg-green300 w-auto">
            <div className="mt-2 w-full bg-lightGray  rounded-3xl">
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
        </div>
    )
}

export default function MyProfile() {
    return (
        <ResponsiveLayout children1={<Children1 />} children2={<Children2 />} />
    )
}
