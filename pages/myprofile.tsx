import ProfileTabs from "@/src/components/profile/ProfileTabs"
import UserProfile from "@/src/components/profile/UserProfile"
import Sidebar from "@components/ui/Sidebar"
import React, { useState } from "react"

export default function MyProfile() {
    const [activeTab, setActiveTab] = useState("posts")

    return (
        <div className="  w-full md:pb-6 ">
            <div className="  flex items-start justify-start  mx-auto  ">
                <div className=" md:mx-4 mx-auto md:mt-4 relative md:w-10/12 md:p-2  ">
                    <div className=" w-full ">
                        <UserProfile />
                    </div>
                    <div className="md:mx-2 md:px-1 -mt-10 md:-mt-0">
                        <ProfileTabs
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                        />
                    </div>
                </div>
                <div className=" fixed right-10  z-0 w-3/12 p-6 max-h-[96vh] h-[96vh] overflow-auto my-3 hidden  md:flex flex-col justify-start items-stretch ">
                    <div className="mt-2 bg-lightGray  rounded-3xl h-full"></div>
                    <div className=" bg-[#83B08C] w-32 h-6 rounded-full mx-auto mt-5 -mb-5"></div>
                </div>
            </div>
        </div>
    )
}
