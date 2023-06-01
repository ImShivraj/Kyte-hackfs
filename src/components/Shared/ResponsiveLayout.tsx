import React, { Children } from "react"

interface ResponsiveComponentProps {
    children1: React.ReactNode
    children2?: React.ReactNode
}

const ResponsiveLayout: React.FC<ResponsiveComponentProps> = ({
    children1,
    children2,
}) => {
    return (
        <div className=" bg-white h-screen ">
            <div className=" grid grid-cols-12 md900:gap-[20px] xl1450:gap-0  bg-green-30 ">
                <div className="xl1450:pr-8 md900:px-6 md1050:px-0 xs320:col-span-12 md900:col-span-12 md950:col-span-12 md1000:col-span-12 md1050:col-span-8  xl1450:col-span-9">
                    {children1}
                </div>
                <div className="md1050:pl-3  xl1450:pl-auto col-span-3 md900:col-span-4 xl1450:col-span-3 right-10 px-6 md900:px-0 md1050:pr-4  xl1450:px-4 max-h-[96vh] h-[96vh] overflow-auto mt-2 hidden md1050:flex flex-col justify-start items-stretch ">
                    <div className="">{children2}</div>
                </div>
            </div>
        </div>
    )
}

export default ResponsiveLayout
