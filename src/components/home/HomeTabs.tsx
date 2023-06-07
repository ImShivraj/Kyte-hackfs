import React, { useState } from "react"
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react"
import clsx from "clsx"
import MessageUser from "../message/MessageUser"
import { CgSearch } from "react-icons/cg"
import PostPreview from "../posts/PostPreview"
import Feed from "@components/Feed/Feed"
import Image from "next/image"
import user from "@/src/assets/user.png"
import { BiDotsVerticalRounded } from "react-icons/bi"
import brand1 from "@/src/assets/brand1.png"
import CreateNewPost from "../posts/CreateNewPost"
import OnboardingModalMobile from "../onboarding/OnboardingModalMobile"
import OnboardingModal from "../onboarding/OnboardingModal"

interface Props {
    activeTab: string // Replace 'StateType' with the actual type of the state
    setActiveTab: React.Dispatch<React.SetStateAction<string>> // Replace 'StateType' with the actual type of the state
}

const HomeTabs: React.FC<Props> = ({ activeTab, setActiveTab }) => {
    return (
        <>
            <Tabs value={activeTab} className="  w-full  rounded-xl mt-2 5  ">
                <div className="flex items-center justify-between gap-3  w-full  mb-0 xs320:fixed xs320:top-0 md900:relative z-[50] bg-white  ">
                    <div className="flex justify-between py-2 items-center md900:relative fixed top-0   xs320:bg-lightGray md900:bg-white w-full z-40">
                        <div className=" md900:hidden px-3 flex items-center justify-start gap-5">
                            <Image src={brand1} alt="user" />
                            <span className=" text-3xl font-bold">Kyte</span>
                        </div>

                        <div className=" md900:hidden px-3">
                            <Image width={45} src={user} alt="user" />
                        </div>
                    </div>
                    <div className=" md900:hidden flex items-center gap-3"></div>
                </div>

                <div className=" xs320:fixed xs320:top-12 md900:pb-12 -screen w-full  bg-white z-[49] md900:relative xs320:-mt-2 ">
                    <TabsHeader
                        className=" flex justify-around items-center border border-b border-blue-gray-50  p-0 xs320:mt-2 md900:-mt-6 xs320:border-t-0 md900:border-t rounded-xl  xs320:rounded-b-none md900:rounded-b-xl pt-5"
                        indicatorProps={{
                            className:
                                "bg-transparent shadow-none rounded-none",
                        }}
                    >
                        <Tab
                            value={"for-you"}
                            onClick={() => setActiveTab("for-you")}
                            className={clsx(
                                activeTab === "for-you"
                                    ? "text-black  border-b-4 border-black  pb-1 xs320:bg-lightGray md900:bg-white xs320:pt-4 md900:pt-1"
                                    : " xs320:pt-4 md900:pt-1 text-lightGratText1",
                                "  text-base font-semibold text-center pb-4 w-60  "
                            )}
                        >
                            For you
                        </Tab>
                        <Tab
                            value={"following"}
                            onClick={() => setActiveTab("following")}
                            className={clsx(
                                activeTab === "following"
                                    ? "text-black  border-b-4 border-black pb-1 xs320:bg-lightGray md900:bg-white xs320:pt-4 md900:pt-1"
                                    : " xs320:pt-4 md900:pt-1  text-lightGratText1",
                                "  text-base font-semibold text-center pb-4 w-60  "
                            )}
                        >
                            Following
                        </Tab>
                    </TabsHeader>
                </div>
                <TabsBody className=" xs320:z-[45] md900:z-50 xs320:mt-24 md900:mt-2 ">
                    <TabPanel
                        //  md900:h-[66vh] xl1450:h-[70vh] overflow-scroll scrollbar-hide
                        className="w-full p-0  "
                        key={"for-you"}
                        value={"for-you"}
                    >
                        <div className=" xs320:hidden md900:block p-4 border rounded-xl">
                            <CreateNewPost />
                        </div>
                        <div className="border xs320:rounded-none md900:rounded-xl mt-2  xs320:pt-8 md900:pt-0xs320:w-screen md900:w-auto md900:max-w-full h-auto  ">
                            {/* <div className=" xs320:hidden md900:block">
                                <OnboardingModal />
                            </div> */}
                            <div className=" md900:hidden xs320:block">
                                <OnboardingModalMobile />
                            </div>
                            <Feed />
                        </div>
                    </TabPanel>
                    <TabPanel
                        //  md900:h-[67vh] xl1450:h-[73vh] overflow-scroll scrollbar-hide
                        className="w-full p-0 "
                        key={"following"}
                        value={"following"}
                    >
                        <div className="xs320:hidden md900:block p-4 border rounded-xl">
                            <CreateNewPost />
                        </div>
                        <div className="border xs320:rounded-none md900:rounded-xl mt-2  xs320:pt-8 md900:pt-0xs320:w-screen md900:w-auto md900:max-w-full h-auto  ">
                            <Feed />
                        </div>
                    </TabPanel>
                </TabsBody>
            </Tabs>
        </>
    )
}

export default HomeTabs
