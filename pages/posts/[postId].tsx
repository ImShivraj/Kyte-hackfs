import Image from "next/image"
import user from "@assets/user.png"
import pfp from "@assets/pfp2.png"
import post from "@assets/post.png"
import { BiDotsVerticalRounded } from "react-icons/bi"
import { MdOutlineTranslate } from "react-icons/md"
import { RxExclamationTriangle } from "react-icons/rx"
import PostActions from "@/src/components/posts/PostActions"

// function DetailedPost() {
//     return (
//         <div className="max-h-[100vh] overflow-scroll p-12 pl-4 g-green-200">
//             <div className=" relative  ">
//                 <div className="flex flex-col items-start gap-5">
//                     <div className=" h-[96.7%] z-10 absolute border-r px-3 top-14 -mt-1"></div>
//                     <div className=" absolute top-1.5 right-0 -mt-1.5">
//                         <div className=" dropdown dropdown-bottom dropdown-end">
//                             <label tabIndex={0} className=" cursor-pointer">
//                                 <BiDotsVerticalRounded
//                                     size={"1.5em"}
//                                     color="black"
//                                 />
//                             </label>
//                             <ul
//                                 tabIndex={0}
//                                 className="dropdown-content menu p-2 shadow-md bg-white rounded-box w-52 -mt-6 py-2 font-semibold text-sm  "
//                             >
//                                 <div className=" py-2 px-4 flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-md transition ease-in-out active:scale-95">
//                                     <MdOutlineTranslate size={"1.5em"} />
//                                     <span>Translate Post</span>
//                                 </div>
//                                 <div className="py-2 px-4 flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-md transition ease-in-out active:scale-95">
//                                     <RxExclamationTriangle size={"1.5em"} />
//                                     <span>Report Post</span>
//                                 </div>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className=" flex items-center gap-2 font-semibold">
//                         <Image
//                             width={52}
//                             className="   "
//                             src={pfp}
//                             alt="user"
//                         />
//                         <div>
//                             <h3 className=" font-semibold">Lorem Ipsum</h3>
//                             <span className=" text-sm text-gray-400">
//                                 @lorem.ipsum
//                             </span>
//                             <span className=" text-sm text-gray-400">
//                                 &nbsp;&#x2022;&nbsp;12 Jan
//                             </span>
//                         </div>
//                     </div>
//                     <div className=" ml-10 px-3">
//                         <p className=" -mt-2 py-0 md:pb-1 text-base">
//                             Sed ut perspiciatis unde omnis iste na, error sit
//                             voluptatem accusanti dolorog laudantium, tota rem,
//                             eaque ipsa qn ab illo invee veritatis et quasi
//                             architect beatae vae dicta so.
//                         </p>
//                         <Image
//                             className="pt-3 pb-1.5 w-full md:w-7/12 md:h-auto"
//                             src={post}
//                             alt="post"
//                         />
//                         <div>
//                             <PostActions />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="flex flex-col items-start gap-5 mt-6 md:mt-5 relative ">
//                 <div className=" absolute top-1.5 right-0 -mt-1.5">
//                     <div className=" dropdown dropdown-bottom dropdown-end">
//                         <label tabIndex={0} className=" cursor-pointer">
//                             <BiDotsVerticalRounded
//                                 size={"1.5em"}
//                                 color="black"
//                             />
//                         </label>
//                         <ul
//                             tabIndex={0}
//                             className="dropdown-content menu p-2 shadow-md bg-white rounded-box w-52 -mt-6 py-2 font-semibold text-sm  "
//                         >
//                             <div className=" py-2 px-4 flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-md transition ease-in-out active:scale-95">
//                                 <MdOutlineTranslate size={"1.5em"} />
//                                 <span>Translate Post</span>
//                             </div>
//                             <div className="py-2 px-4 flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-md transition ease-in-out active:scale-95">
//                                 <RxExclamationTriangle size={"1.5em"} />
//                                 <span>Report Post</span>
//                             </div>
//                         </ul>
//                     </div>
//                 </div>
//                 <div className=" flex items-center gap-2 font-semibold">
//                     <Image width={52} className="" src={user} alt="user" />
//                     <div>
//                         <h3 className=" font-semibold">Lorem Ipsum</h3>
//                         <span className=" text-sm text-gray-400">
//                             @lorem.ipsum
//                         </span>
//                         <span className=" text-sm text-gray-400">
//                             &nbsp;&#x2022;&nbsp;12 Jan
//                         </span>
//                     </div>
//                 </div>
//                 <div className=" ml-10 px-3">
//                     <p className=" -mt-2 py-0 md:pb-1 text-base">
//                         Sed ut perspiciatis unde omnis iste na, error sit
//                         voluptatem accusanti dolorog laudantium, tota rem, eaque
//                         ipsa qn ab illo invee veritatis et quasi architect
//                         beatae vae dicta so.
//                     </p>
//                     <div>
//                         <PostActions />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default DetailedPost

import React, { useState } from "react"
import SuggestedProfile from "@/src/components/home/SuggestedProfile"
import { CgSearch } from "react-icons/cg"
import { HiOutlineGlobeEuropeAfrica } from "react-icons/hi2"
import { useAppStore } from "@store/app"
import WalletSelector from "@/src/components/Shared/Login/WalletSelector"
import useIsMounted from "@/src/utils/hooks/useIsMounted"

import ResponsiveLayout from "@/src/components/Shared/ResponsiveLayout"
import HomeTabs from "@/src/components/home/HomeTabs"
import OnboardingModal from "@/src/components/onboarding/OnboardingModal"

const Children1: React.FC = () => {
    const [activeTab, setActiveTab] = useState("for-you")

    return (
        <div className=" p-12 pt-6 pl-6 bg-green-20  mt-4 border rounded-xl">
            <div className=" relative  ">
                <div className="flex flex-col items-start gap-5">
                    <div className=" absolute top-1.5 right-0 -mt-1.5">
                        <div className=" dropdown dropdown-bottom dropdown-end">
                            <label tabIndex={0} className=" cursor-pointer">
                                <BiDotsVerticalRounded
                                    size={"1.5em"}
                                    color="black"
                                />
                            </label>
                            <ul
                                tabIndex={0}
                                className="dropdown-content menu p-2 shadow-md bg-white rounded-box w-52 -mt-6 py-2 font-semibold text-sm  "
                            >
                                <div className=" py-2 px-4 flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-md transition ease-in-out active:scale-95">
                                    <MdOutlineTranslate size={"1.5em"} />
                                    <span>Translate Post</span>
                                </div>
                                <div className="py-2 px-4 flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-md transition ease-in-out active:scale-95">
                                    <RxExclamationTriangle size={"1.5em"} />
                                    <span>Report Post</span>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className=" flex items-center gap-5 font-semibold">
                        <Image
                            width={52}
                            className="   "
                            src={pfp}
                            alt="user"
                        />
                        <div>
                            <h3 className=" text-lg font-[600]">Lorem Ipsum</h3>
                            <span className=" text-sm text-lightGratText2 font-[600] tracking-wide">
                                @lorem.ipsum
                            </span>
                        </div>
                    </div>
                    <div className=" py-3">
                        <p className=" -mt-2 py-0 md:pb-1 text-base font-[500]">
                            Sed ut perspiciatis unde omnis iste na, error sit
                            voluptatem accusanti dolorog laudantium, tota rem,
                            eaque ipsa qn ab illo invee veritatis et quasi
                            architect beatae vae dicta so.
                        </p>
                        <Image
                            className="pt-3 pb-1.5 w-full md:h-auto md900:w-8/12 xl1450:w-6/12"
                            src={post}
                            alt="post"
                        />
                        <div>
                            <PostActions />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-start gap-5 mt-6 md:mt-5 relative ">
                <div className=" absolute top-1.5 right-0 -mt-1.5">
                    <div className=" dropdown dropdown-bottom dropdown-end">
                        <label tabIndex={0} className=" cursor-pointer">
                            <BiDotsVerticalRounded
                                size={"1.5em"}
                                color="black"
                            />
                        </label>
                        <ul
                            tabIndex={0}
                            className="dropdown-content menu p-2 shadow-md bg-white rounded-box w-52 -mt-6 py-2 font-semibold text-sm  "
                        >
                            <div className=" py-2 px-4 flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-md transition ease-in-out active:scale-95">
                                <MdOutlineTranslate size={"1.5em"} />
                                <span>Translate Post</span>
                            </div>
                            <div className="py-2 px-4 flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-md transition ease-in-out active:scale-95">
                                <RxExclamationTriangle size={"1.5em"} />
                                <span>Report Post</span>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className=" flex items-center gap-5 font-semibold">
                    <Image width={52} className="   " src={user} alt="user" />
                    <div>
                        <div className=" flex items-center gap-2 justify-start">
                            <h3 className=" text-lg font-[600]">Lorem Ipsum</h3>
                            <span className=" text-sm text-lightGratText2 font-[500] tracking-wide">
                                @lorem.ipsum
                            </span>
                            <span className=" text-sm text-lightGratText2 font-[500] tracking-wide">
                                &#x2022;&nbsp;1m
                            </span>
                        </div>
                        <span className=" text-sm text-lightGratText2 font-[500] tracking-wide">
                            replying to @lorem.ipsum
                        </span>
                    </div>
                </div>

                <div className=" py-3">
                    <p className=" -mt-2 py-0 md:pb-1 text-base font-[500]">
                        Sed ut perspiciatis unde omnis iste na, error sit
                        voluptatem accusanti dolorog laudantium, tota rem, eaque
                        ipsa qn ab illo invee veritatis et quasi architect
                        beatae vae dicta so.
                    </p>
                    <div className="">
                        <PostActions />
                    </div>
                </div>
            </div>
        </div>
    )
}

const Children2: React.FC = () => {
    const [expandedImage, setExpandedImage] = useState<string | null>(null)
    const { currentProfile } = useAppStore()
    return (
        // fixed right-3
        <div className="fixed md1050:pr-5 xl1450:pr-0 xl1450:w-[350px]">
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
        </div>
    )
}

export default function DetailedPost() {
    const { mounted } = useIsMounted()

    if (!mounted) {
        return <div>Loading...</div>
    }

    return (
        <div className=" ">
            <ResponsiveLayout
                children1={<Children1 />}
                children2={<Children2 />}
            />
        </div>
    )
}
