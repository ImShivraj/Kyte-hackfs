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
import SortTabs from "./SortTabs"
import Feed from "@components/Feed/Feed"
import Image from "next/image"
import user from "@/src/assets/user.png"
import { BiDotsVerticalRounded } from "react-icons/bi"
import ProfileDrawer from "../Shared/ProfileDrawer"
import ExploreSearch from "../Shared/ExploreSearch"
import Search from "../Shared/Navbar/Search"

interface Props {
    activeTab: string // Replace 'StateType' with the actual type of the state
    setActiveTab: React.Dispatch<React.SetStateAction<string>> // Replace 'StateType' with the actual type of the state
}

const ExploreTabs: React.FC<Props> = ({ activeTab, setActiveTab }) => {
    return (
        <>
            <Tabs value={activeTab} className="  w-full  rounded-xl mt-2 5  ">
                <div className="flex items-center justify-between gap-3  w-full  mb-0 xs320:fixed xs320:top-0 md900:relative z-[1000] bg-white  ">
                    <div className="relative  xs320:w-11/12 md900:w-full  pt-2">
                        <Search
                            modalWidthClassName=" w-full max-w-[1094px] mx-0 z-[10000]"
                            placeholder={`Search for someone to message...`}
                            // onProfileSelected={onProfileSelected}
                            bodyWidth="100%"
                            variant="brand"
                            inputHeight="45px"
                        />
                    </div>
                    {/* <div className="relative  xs320:w-11/12 md900:w-full ml-2 pt-2">
                        <input
                            placeholder="Search"
                            className=" bg-lightGray py-3.5 p-4 w-full rounded-2xl outline-none"
                        />
                        <CgSearch
                            className=" cursor-pointer absolute top-6 right-4 text-gray-400"
                            size={"1.5em"}
                        />
                    </div> */}
                    <div className=" md900:hidden flex items-center gap-3 mt-1">
                        <div className="dropdown dropdown-bottom dropdown-end">
                            <label tabIndex={0} className=" my-auto">
                                <BiDotsVerticalRounded size={"1.5em"} />
                            </label>
                            <div
                                tabIndex={0}
                                className="dropdown-content menu mt-2 p-2 shadow-md bg-white rounded-box w-52"
                            >
                                <div className=" text-base mb-2 font-emibold tracking-wide px-3">
                                    Sort:
                                </div>
                                <div className=" py-3 font-emibold px-3 text-sm rounded-lg hover:bg-lightGray ctive:bg-lightGray">
                                    All Posts
                                </div>
                                <div className=" py-3 font-emibold px-3 text-sm rounded-lg hover:bg-lightGray ctive:bg-lightGray">
                                    Text
                                </div>
                                <div className=" py-3 font-emibold px-3 text-sm rounded-lg hover:bg-lightGray ctive:bg-lightGray">
                                    Popular
                                </div>
                                <div className=" py-3 font-emibold px-3 text-sm rounded-lg hover:bg-lightGray ctive:bg-lightGray">
                                    Image
                                </div>
                                <div className=" py-3 font-emibold px-3 text-sm rounded-lg hover:bg-lightGray ctive:bg-lightGray">
                                    Video
                                </div>
                            </div>
                        </div>

                        <ProfileDrawer />
                    </div>
                </div>

                <div className=" xs320:fixed xs320:top-12 md900:pb-12 -screen w-full  bg-white z-[49] md900:relative xs320:-mt-2 ">
                    <TabsHeader
                        className="border border-b border-blue-gray-50 p-0 xs320:mt-2 md900:-mt-6 xs320:border-t-0 md900:border-t rounded-xl rounded-b-none pt-5"
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
                                    ? "text-black  border-b-4 border-black pb-1 xs320:bg-lightGray md900:bg-white xs320:pt-4 md900:pt-1"
                                    : " xs320:pt-4 md900:pt-1",
                                "  text-base font-semibold text-center pb-4  "
                            )}
                        >
                            For you
                        </Tab>
                        <Tab
                            value={"popular"}
                            onClick={() => setActiveTab("popular")}
                            className={clsx(
                                activeTab === "popular"
                                    ? "text-black  border-b-4 border-black pb-1 xs320:bg-lightGray md900:bg-white xs320:pt-4 md900:pt-1"
                                    : " xs320:pt-4 md900:pt-1",
                                "  text-base font-semibold text-center pb-4  "
                            )}
                        >
                            Popular
                        </Tab>
                        <Tab
                            value={"trending"}
                            onClick={() => setActiveTab("trending")}
                            className={clsx(
                                activeTab === "trending"
                                    ? "text-black  border-b-4 border-black pb-1 xs320:bg-lightGray md900:bg-white xs320:pt-4 md900:pt-1"
                                    : " xs320:pt-4 md900:pt-1",
                                "  text-base font-semibold text-center pb-4  "
                            )}
                        >
                            Trending
                        </Tab>
                        <Tab
                            value={"interesting"}
                            onClick={() => setActiveTab("interesting")}
                            className={clsx(
                                activeTab === "interesting"
                                    ? "text-black  border-b-4 border-black pb-1 xs320:bg-lightGray md900:bg-white xs320:pt-4 md900:pt-1"
                                    : " xs320:pt-4 md900:pt-1",
                                "  text-base font-semibold text-center pb-4  "
                            )}
                        >
                            Interesting
                        </Tab>
                    </TabsHeader>
                    <div className=" hidden md900:flex border border-t-0  rounded-xl rounded-t-none  ">
                        <SortTabs />
                    </div>
                </div>
                <TabsBody className=" xs320:z-[45] md900:z-50 xs320:mt-24 md900:mt-2 border xs320:rounded-none md900:rounded-xl ">
                    <TabPanel
                        //  md900:h-[66vh] xl1450:h-[70vh] overflow-scroll scrollbar-hide
                        className="w-full p-0  "
                        key={"for-you"}
                        value={"for-you"}
                    >
                        <div className="xs320:pt-8 md900:pt-0  md900:rounded-xl xs320:rounded-none xs320:w-screen md900:w-auto md900:max-w-full h-auto  ">
                            <Feed />
                        </div>
                    </TabPanel>
                    <TabPanel
                        //  md900:h-[67vh] xl1450:h-[73vh] overflow-scroll scrollbar-hide
                        className="w-full p-0 "
                        key={"popular"}
                        value={"popular"}
                    >
                        <div className="xs320:pt-8 md900:pt-0  md900:rounded-xl xs320:rounded-none xs320:w-screen md900:w-auto md900:max-w-full h-auto  ">
                            <Feed />
                        </div>
                    </TabPanel>
                    <TabPanel
                        className="w-full p-0 "
                        key={"trending"}
                        value={"trending"}
                    >
                        <div className="xs320:pt-8 md900:pt-0  md900:rounded-xl xs320:rounded-none xs320:w-screen md900:w-auto md900:max-w-full h-auto  ">
                            <Feed />
                        </div>
                    </TabPanel>
                    <TabPanel
                        className="w-full p-0 "
                        key={"interesting"}
                        value={"interesting"}
                    >
                        <div className="xs320:pt-8 md900:pt-0  md900:rounded-xl xs320:rounded-none xs320:w-screen md900:w-auto md900:max-w-full h-auto  ">
                            <Feed />
                        </div>
                    </TabPanel>
                </TabsBody>
            </Tabs>
        </>
    )
}

export default ExploreTabs
