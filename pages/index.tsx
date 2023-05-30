import Sidebar from "@components/ui/Sidebar"
import CreateNewPost from "@components/posts/CreateNewPost"
import PostPreview from "@components/posts/PostPreview"
import React from "react"
import SuggestedProfile from "@/src/components/home/SuggestedProfile"
import { CgSearch } from "react-icons/cg"
import { HiOutlineGlobeEuropeAfrica } from "react-icons/hi2"
import { useAppStore } from "@store/app"
import WalletSelector from "@/src/components/Shared/Login/WalletSelector"
import useIsMounted from "@/src/utils/hooks/useIsMounted"
import Image from "next/image"
import user from "@/src/assets/user.png"
import brand1 from "@/src/assets/brand1.png"
import brand2 from "@/src/assets/brand2.png"

export default function Home() {
    const { currentProfile } = useAppStore()
    const { mounted } = useIsMounted()

    if (!mounted) {
        return <div>Loading...</div>
    }

    return (
        // <div className="w-full mb-0 bg-white relative">
        <div className=" relative flex items-start justify-between w-full bg-green-20 min-h-screen mb-16 ">
            {/* <div className=" flex items-start justify-start relative  mx-auto  "> */}
            {/* <div className=" md:mx-2.5 z-50 w-full md:w-10/12  md:p-3 pr-0 flex justify-start items-start"> */}
            <div className=" md800:w-full bg-blue-20 md900:w-8/12 xl1450:w-9/12 bg-blue-30 xl1450:mx-0 md800:mx-0 w-ful xl1450:p-12 xl1450:z-40 md900:p-0 md800:ml-0 md900:-ml-5 xl1450:-ml-8  r-0 flex justify-start items-start">
                <div className=" relative">
                    {/* md:ml-8 md:w-[49.7%] shadow-md md:shadow-none*/}
                    <div className=" flex justify-between py-2 items-center md900:relative fixed   xs320:bg-lightGray md900:bg-white w-full z-40">
                        <h1 className=" hidden md900:flex text-3xl md:text-4xl font-semibold px-3 md:pl-10 mb-5 mt-2 ">
                            Home
                        </h1>

                        <div className=" md900:hidden px-3 flex items-center justify-start gap-5">
                            <Image src={brand1} alt="user" />
                            <span className=" text-3xl font-bold">Kyte</span>
                        </div>

                        <div className=" md900:hidden px-3">
                            <Image width={45} src={user} alt="user" />
                        </div>
                    </div>
                    {/* md:mt-20  */}
                    <div className=" xs320:mt-20 md900:md:mt-0  px-2 md:px-8 py-3 md:py-6 border rounded-xl mx-3 md:mx-8 my-2.5">
                        <CreateNewPost width={"w-32 mr-auto "} />
                    </div>
                    <div className="">
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
            {/* <div className=" fixed right-10 z-0 w-3/12 p-6 max-h-[96vh] h-[96vh] overflow-auto my-3 hidden md:flex flex-col justify-start items-stretch "> */}
            <div className=" md900:bg-pink-30 xl1450:bg-cyan-40 xl1450:w-3/12 p-6 max-h-[96vh] h-[96vh] overflow-auto my-3 flex-col justify-start items-stretch fixed right-0 w-auto xl1450:z-20 hidden md900:block ">
                {currentProfile ? (
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
                    <WalletSelector withLabel />
                )}

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
                {/* <div className=" p-6 h-full bg-lightGray rounded-3xl flex flex-col items-center justify-start ">
              demo
            </div>
            <div className=" bg-[#83B08C] w-32 h-6 rounded-full mx-auto mt-5 -mb-5"></div> */}
            </div>
        </div>
        // {/* </div> */}
        // {/* </div> */}
    )
}
