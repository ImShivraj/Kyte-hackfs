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

interface Props {
    activeTab: string // Replace 'StateType' with the actual type of the state
    setActiveTab: React.Dispatch<React.SetStateAction<string>> // Replace 'StateType' with the actual type of the state
}

const ExploreTabs: React.FC<Props> = ({ activeTab, setActiveTab }) => {
    return (
        <>
            <Tabs value={activeTab} className="   w-full  rounded-xl ">
                <div className=" ">
                    <TabsHeader
                        className=" border-b border-blue-gray-50 p-0 flex  items-center justify-between md:gap-x-20  mt-6 border rounded-xl rounded-b-none pt-5"
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
                                    ? "text-black  border-b-4 border-black pb-1  "
                                    : "",
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
                                    ? "text-black  border-b-4 border-black pb-1"
                                    : "",
                                "  text-base font-semibold text-center pb-4"
                            )}
                        >
                            Popular
                        </Tab>
                        <Tab
                            value={"trending"}
                            onClick={() => setActiveTab("trending")}
                            className={clsx(
                                activeTab === "trending"
                                    ? "text-black  border-b-4 border-black pb-1 "
                                    : "",
                                " text-base font-semibold text-center pb-4"
                            )}
                        >
                            Trending
                        </Tab>
                        <Tab
                            value={"interesting"}
                            onClick={() => setActiveTab("interesting")}
                            className={clsx(
                                activeTab === "interesting"
                                    ? "text-black  border-b-4 border-black pb-1 "
                                    : "",
                                " text-center pb-4 font-semibold text-base"
                            )}
                        >
                            Interesting
                        </Tab>
                    </TabsHeader>
                    <div className=" border border-t-0  rounded-xl rounded-t-none  ">
                        <SortTabs />
                    </div>
                </div>
                <TabsBody className="w-full mt-3  border rounded-xl">
                    <TabPanel
                        className="w-full "
                        key={"for-you"}
                        value={"for-you"}
                    >
                        <div className="  p-3  rounded-xl ">
                            <PostPreview />
                        </div>
                    </TabPanel>
                    <TabPanel key={"popular"} value={"popular"}>
                        <div className="  p-3  rounded-xl ">
                            <PostPreview />
                        </div>
                    </TabPanel>
                    <TabPanel key={"trending"} value={"trending"}>
                        <div className="  p-3  rounded-xl ">
                            <PostPreview />
                        </div>
                    </TabPanel>
                    <TabPanel key={"interesting"} value={"interesting"}>
                        <div className="  p-3  rounded-xl ">
                            <PostPreview />
                        </div>
                    </TabPanel>
                </TabsBody>
            </Tabs>
        </>
    )
}

export default ExploreTabs
