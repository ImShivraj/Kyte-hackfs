import Image from "next/image"
import user from "@assets/user.png"
import pfp from "@assets/pfp2.png"
import post from "@assets/post.png"
import { BiDotsVerticalRounded } from "react-icons/bi"
import { MdOutlineTranslate } from "react-icons/md"
import { RxExclamationTriangle } from "react-icons/rx"
import PostActions from "./PostActions"

function PostPreview() {
    return (
        <div className="  border-b -mb-4 md:-mb-0 py-3 md:py-5">
            {/* hover:bg-lightGray  */}
            <div className=" relative  ">
                <div className="flex flex-col items-start gap-5">
                    <div className=" h-[94.7%] z-10 absolute border-r px-3 top-14 -mt-1"></div>
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
                    <div className=" flex items-center gap-2 font-semibold">
                        <Image
                            width={52}
                            className="   "
                            src={pfp}
                            alt="user"
                        />
                        <div>
                            <h3 className=" font-semibold">Lorem Ipsum</h3>
                            <span className=" text-sm text-gray-400">
                                @lorem.ipsum
                            </span>
                            <span className=" text-sm text-gray-400">
                                &nbsp;&#x2022;&nbsp;12 Jan
                            </span>
                        </div>
                    </div>
                    <div className=" ml-10 px-3">
                        <p className=" py-0  md:pt-2 text-md">
                            Sed ut perspiciatis unde omnis iste na, error sit
                            voluptatem accusanti dolorog laudantium, tota rem,
                            eaque ipsa qn ab illo invee veritatis et quasi
                            architect beatae vae dicta so.
                        </p>
                        <Image
                            className="pt-3 pb-1.5 w-full md:w-7/12 md:h-auto"
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
                <div className=" flex items-center gap-2 font-semibold">
                    <Image width={52} className="" src={user} alt="user" />
                    <div>
                        <h3 className=" font-semibold">Lorem Ipsum</h3>
                        <span className=" text-sm text-gray-400">
                            @lorem.ipsum
                        </span>
                        <span className=" text-sm text-gray-400">
                            &nbsp;&#x2022;&nbsp;12 Jan
                        </span>
                    </div>
                </div>
                <div className=" ml-10 px-3">
                    <p className=" py-0  md:pt-2 text-md">
                        Sed ut perspiciatis unde omnis iste na, error sit
                        voluptatem accusanti dolorog laudantium, tota rem, eaque
                        ipsa qn ab illo invee veritatis et quasi architect
                        beatae vae dicta so.
                    </p>
                    <div>
                        <PostActions />
                    </div>
                </div>

                {/* <Image width={52} src={user} alt="user" />
                <div>
                    <h3 className=" font-semibold">Lorem Ipsum</h3>
                    <div className=" flex items-center font-semibold">
                        <span className=" text-sm text-gray-400">
                            @lorem.ipsum
                        </span>{" "}
                        <span className=" text-sm text-gray-400">
                            {" "}
                            &nbsp;&#x2022;&nbsp;12 Jan
                        </span>{" "}
                    </div>
                    <p className="  pt-4 text-md">
                        Sed ut perspiciatis unde omnis iste na, error sit
                        voluptatem accusanti dolorog laudantium, tota rem, eaque
                        ipsa qn ab illo invee veritatis et quasi architect
                        beatae vae dicta so.
                    </p>
                    <div>
                        <PostActions />
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default PostPreview
