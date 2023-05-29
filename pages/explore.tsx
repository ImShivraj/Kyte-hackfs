import React, { useState } from "react"
import SuggestedProfile from "@/src/components/home/SuggestedProfile"
import { HiOutlineGlobeEuropeAfrica } from "react-icons/hi2"
import { CgSearch } from "react-icons/cg"
import ExploreTabs from "@/src/components/explore/ExploreTabs"
import user from "@/src/assets/user.png"
import Image from "next/image"
import { BiDotsVerticalRounded } from "react-icons/bi"
import PostPreview from "@/src/components/posts/PostPreview"
import brand1 from "@/src/assets/brand1.png"
import CreateNewPost from "@/src/components/posts/CreateNewPost"

export default function Explore() {
    const [activeTab, setActiveTab] = useState("for-you")
    return (
        <div className="w-full mb-0 bg-white">
            <div className=" flex items-start justify-start relative  mx-auto  ">
                <div className=" md:mx-2.5 z-50 w-full md:w-10/12  md:p-6 pr-0 flex justify-start items-start">
                    <div className=" relative ">
                        <div className=" bg-white flex justify-between py-1 md:py-1 items-center  fixed top-0  md:bg-white md:bg-opacity-20 md:backdrop-blur-md w-full z-40 md:mx-5  md:w-[100%] shadow-m md:shadow-none">
                            <div className=" mx-3 my-2 w-full md:w-6/12 z-50 relative">
                                <input
                                    placeholder="Search"
                                    className=" bg-lightGray py-3.5 p-4 w-full rounded-2xl outline-none"
                                />
                                <CgSearch
                                    className=" cursor-pointer absolute top-3.5 right-4 text-gray-400"
                                    size={"1.5em"}
                                />
                            </div>

                            <div className="dropdown dropdown-end md:hidden  ">
                                <label
                                    tabIndex={0}
                                    className="active:scale-95 transition ease-in-out"
                                >
                                    <BiDotsVerticalRounded size={"1.8em"} />
                                </label>
                                <div
                                    tabIndex={0}
                                    className="dropdown-content menu  mt-6  bg-white shadow-md  rounded-box w-52"
                                >
                                    <div className="px-4 py-3 rounded-md font-semibold tracking-wide hover:bg-lightGray">
                                        All Posts
                                    </div>
                                    <div className="px-4 py-3 rounded-md font-semibold tracking-wide hover:bg-lightGray">
                                        Text
                                    </div>
                                    <div className="px-4 py-3 rounded-md font-semibold tracking-wide hover:bg-lightGray">
                                        Image
                                    </div>
                                    <div className="px-4 py-3 rounded-md font-semibold tracking-wide hover:bg-lightGray">
                                        Audio
                                    </div>
                                    <div className="px-4 py-3 rounded-md font-semibold tracking-wide hover:bg-lightGray">
                                        Video
                                    </div>
                                </div>
                            </div>

                            <div className=" md:hidden px-3">
                                <Image width={45} src={user} alt="user" />
                            </div>
                        </div>

                        <div className=" mt-16">
                            <ExploreTabs
                                activeTab={activeTab}
                                setActiveTab={setActiveTab}
                            />
                        </div>

                        <div className="mt-20 md:mt-16">
                            <div className=" px-3.5 md:px-8 md:py-6 md:border rounded-xl mx-0 md:mx-8 my-2.5 ">
                                <PostPreview />
                            </div>
                            <div className=" px-3.5 md:px-8 md:py-6 md:border rounded-xl mx-0 md:mx-8 my-2.5 ">
                                <PostPreview />
                            </div>
                            <div className=" px-3.5 md:px-8 md:py-6 md:border rounded-xl mx-0 md:mx-8 my-2.5 ">
                                <PostPreview />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="  top-0  fixed right-10 z-50 w-3/12 p-6 max-h-[96vh] h-[96vh] overflow-auto my-3 hidden md:flex flex-col justify-start items-stretch ">
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
        // <div className=" md:mx-5 md:px-5 p-2 md:pb-8">
        //     <div className="  flex items-start justify-start mx-auto relative  ">
        //         <div className=" flex flex-col items-center justify-start gap-5  md:mx-4 mt-1 md:mt-4  w-full md:w-10/12 md:p-2  ">
        //             <div className=" w-full bg-green-30 z-40">
        //                 <div className=" flex justify-between py-2 items-center md:relative fixed top-0 bg-white md:bg-inherit w-full z-40">
        //                     <h1 className=" hidden md:flex text-3xl md:text-4xl font-semibold px-3 md:pl-10 mb-5 mt-2 ">
        //                         Home
        //                     </h1>

        //                     <div className="  w-10/12 relative md:hidden md:px-3 flex items-center ml-2 justify-start gap-5">
        //                         {/* <div className=" w-11/12  mb-2   "> */}
        //                         <input
        //                             placeholder="Search"
        //                             className=" bg-lightGray py-3.5 p-4 w-full rounded-2xl outline-none"
        //                         />
        //                         <CgSearch
        //                             className=" cursor-pointer absolute top-3.5 right-4 text-gray-400"
        //                             size={"1.5em"}
        //                         />
        //                         {/* </div> */}
        //                     </div>

        //                     <div className=" flex items-center gap-1 ">
        //                         <div className="dropdown dropdown-end md:hidden ml-2  ">
        //                             <label
        //                                 tabIndex={0}
        //                                 className="active:scale-95 transition ease-in-out"
        //                             >
        //                                 <BiDotsVerticalRounded size={"1.8em"} />
        //                             </label>
        //                             <div
        //                                 tabIndex={0}
        //                                 className="dropdown-content menu  mt-6  bg-white shadow-md  rounded-box w-52"
        //                             >
        //                                 <div className="px-4 py-3 rounded-md font-semibold tracking-wide hover:bg-lightGray">
        //                                     All Posts
        //                                 </div>
        //                                 <div className="px-4 py-3 rounded-md font-semibold tracking-wide hover:bg-lightGray">
        //                                     Text
        //                                 </div>
        //                                 <div className="px-4 py-3 rounded-md font-semibold tracking-wide hover:bg-lightGray">
        //                                     Image
        //                                 </div>
        //                                 <div className="px-4 py-3 rounded-md font-semibold tracking-wide hover:bg-lightGray">
        //                                     Audio
        //                                 </div>
        //                                 <div className="px-4 py-3 rounded-md font-semibold tracking-wide hover:bg-lightGray">
        //                                     Video
        //                                 </div>
        //                             </div>
        //                         </div>

        //                         <div className=" md:hidden px-2  mr-3.5">
        //                             <Image width={56} src={user} alt="user" />
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className=" -mt-10 md:mt-">
        //                 <ExploreTabs
        //                     activeTab={activeTab}
        //                     setActiveTab={setActiveTab}
        //                 />
        //             </div>
        //         </div>
        //         <div className="  fixed right-10 z-0 w-3/12 p-6 max-h-[96vh] h-[96vh] overflow-auto my-3 hidden md:flex flex-col justify-start items-stretch ">
        //             <div className="mt-2 bg-lightGray  rounded-3xl">
        //                 <h2 className="  text-2xl font-semibold p-5">
        //                     Suggested for you
        //                 </h2>
        //                 <SuggestedProfile />
        //                 <SuggestedProfile />
        //                 <SuggestedProfile />
        //                 <SuggestedProfile />
        //                 <SuggestedProfile />
        //                 <SuggestedProfile />
        //                 <div className=" px-4 my-4">
        //                     <button className=" btn btn-ghost btn-sm normal-case text-lg text-lightGreen font-normal hover:bg-transparent">
        //                         Show More
        //                     </button>
        //                 </div>
        //             </div>
        //             <div className=" mx-1 mb-1 mt-5">
        //                 <div className=" grid grid-cols-4 flex-wrap justify-evenly">
        //                     <a
        //                         href="#"
        //                         className=" text-start text-lightGratText2 my-auto   text-[15px] font-[600] hover:bg-transparent"
        //                     >
        //                         &#169; Kyte
        //                     </a>
        //                     <a
        //                         href="#"
        //                         className="text-start text-lightGratText2 my-auto   text-[15px] font-[600] hover:bg-transparent"
        //                     >
        //                         Terms
        //                     </a>
        //                     <a
        //                         href="#"
        //                         className="text-start text-lightGratText2 my-auto   text-[15px] font-[600] hover:bg-transparent"
        //                     >
        //                         Privacy
        //                     </a>
        //                     <a
        //                         href="#"
        //                         className="text-start text-lightGratText2 my-auto   text-[15px] font-[600] hover:bg-transparent"
        //                     >
        //                         Discord
        //                     </a>
        //                     <a
        //                         href="#"
        //                         className="text-start text-lightGratText2 my-auto   text-[15px] font-[600] hover:bg-transparent"
        //                     >
        //                         Donate
        //                     </a>
        //                     <a
        //                         href="#"
        //                         className="text-start text-lightGratText2 my-auto   text-[15px] font-[600] hover:bg-transparent"
        //                     >
        //                         Status
        //                     </a>
        //                     <a
        //                         href="#"
        //                         className="text-start text-lightGratText2 my-auto   text-[15px] font-[600] hover:bg-transparent"
        //                     >
        //                         Feedback
        //                     </a>
        //                     <a
        //                         href="#"
        //                         className=" text-lightGratText2  btn btn-ghost btn-sm normal-case text-sm font-[600] hover:bg-transparent"
        //                     >
        //                         Thanks
        //                     </a>
        //                 </div>
        //             </div>
        //             <div className=" mx-1 mt-2 flex justify-between items-center text-start text-lightGratText2 my-auto   text-[15px] font-[600] hover:bg-transparent">
        //                 <div className=" text-lightGratText2 flex items-center gap-3">
        //                     <HiOutlineGlobeEuropeAfrica
        //                         size={"1.5em"}
        //                         color="#B0B0B0"
        //                     />
        //                     <span>English</span>
        //                 </div>
        //                 <div className=" text-lightGratText2">
        //                     <span>Storage Powered by Polybase</span>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}
