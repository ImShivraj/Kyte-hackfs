import clsx from "clsx"
import { useState } from "react"
import SortTabs from "../explore/SortTabs"

type Tab = {
    label: string
    content: JSX.Element
}

type TabsProps = {
    tabs: Tab[]
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0)

    const handleTabClick = (index: number) => {
        setActiveTab(index)
    }

    return (
        <div className="flex relative flex-col w- bg-red-30 ">
            <div className="  fixed top-0 w-6/12 xl1450:w-7/12 xl1550:w-7/12 z-50  bg-green-30 xl1450:px-3 md900:px-2 bg-white ">
                <ul className="space-y-2 flex items-center justify-evenly border-b pt-5 md:border-b border-blue-gray-50 p-0  md:gap-x-20  mt-0 md:mt-6 md:border rounded-2xl rounded-b-none w-full ">
                    {tabs.map((tab, index) => (
                        <li
                            key={index}
                            className={clsx(
                                activeTab === index
                                    ? " text-black border-b-4 border-black rounded-none"
                                    : "bg-white border-b-4 border-b-transparent",
                                `cursor-pointer  rounded-md pb-3 w-2/12 text-center -mb-2 font-semibold`
                            )}
                            onClick={() => handleTabClick(index)}
                        >
                            {tab.label}
                        </li>
                    ))}
                </ul>
                <ul className="space-y-2 flex items-center justify-around border-b py-1 md:border-b border-blue-gray-50 p-0  md:gap-x-20 border  border-t-0 rounded-t-none rounded-2xl w-full ">
                    <SortTabs />
                </ul>
            </div>
            <div className="w-full mt-16">{tabs[activeTab].content}</div>
        </div>
    )
}

export default Tabs
