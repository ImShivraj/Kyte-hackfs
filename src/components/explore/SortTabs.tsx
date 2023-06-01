import { useState } from "react"
import { Tab } from "@headlessui/react"
import clsx from "clsx"

export default function SortTabs() {
    let [categories] = useState([
        "All Posts",
        "Text",
        "Image",
        "Audio",
        "Video",
    ])

    return (
        <div className="py-4 w-full flex md900:justify-evenly md1050:justify-normal xl1500:justify-evenly items-center gap-3 px-3  overflow-scroll scrollbar-hide ">
            <button className=" hover:text-white focus:text-white focus:bg-black normal-case btn rounded-full w-32 bg-white border-black text-black">
                All Posts
            </button>
            <button className=" hover:text-white focus:text-white focus:bg-black normal-case btn rounded-full w-32 bg-white border-black text-black">
                Text
            </button>
            <button className=" hover:text-white focus:text-white focus:bg-black normal-case btn rounded-full w-32 bg-white border-black text-black">
                Image
            </button>
            <button className=" hover:text-white focus:text-white focus:bg-black normal-case btn rounded-full w-32 bg-white border-black text-black">
                Audio
            </button>
            <button className=" hover:text-white focus:text-white focus:bg-black normal-case btn rounded-full w-32 bg-white border-black text-black">
                Video
            </button>
        </div>
    )
}
