import React from "react"

export default function Quests() {
    return (
        <div className="  w-full h-screen">
            <div className="  flex items-start justify-start  mx-auto  ">
                <div className=" mx-4 mt-4  relative w-10/12 p-2 bg-purple-20  ">
                    <div className=" w-full ">Saved</div>
                </div>
                <div className=" fixed right-10  z-0 w-3/12 p-6 max-h-[96vh] h-[96vh] overflow-auto my-3 flex flex-col justify-start items-stretch ">
                    <div className="mt-2 bg-lightGray  rounded-3xl h-full"></div>
                    <div className=" bg-[#83B08C] w-32 h-6 rounded-full mx-auto mt-5 -mb-5"></div>
                </div>
            </div>
        </div>
    )
}
