import ChatWindow from "@components/message/ChatWindow"
import ProfileOverview from "@components/message/ProfileOverview"
import UserList from "@components/message/UserList"
import React, { useState } from "react"

export default function UserMessages() {
    return (
        <div className=" flex justify-start h-screen ">
            <div className=" md800:w-full md900:w-full md950:w-max md1000:w-full  md1050:w-full  lg1150:w-full  lg1200:w-full  lg1250:w-full  lg1300:w-full  xl1450:w-full   md1000:py-6 pr-0 flex justify-start items-start md1000:pl-8  md1050:pl-0 xl1450:-ml-16  ">
                <div className=" xs1000:w-5/12 l:w-3/12 min-w-[300px]">
                    <UserList />
                </div>
                <div className="  w-8/12 md1000:w-10/12 md1050:w-9/12 l:w-9/12 ml-6">
                    <ChatWindow />
                </div>
            </div>
            <div className=" xs320:hidden md1050:block w-3/12 md900:px-8 xl1450:px-0  pt- max-h-[92vh] h-[92vh] scrollbar-hide overflow-visible md900:overflow-scroll  mt-0 my-3 flex flex-col justify-center items-stretch ">
                <div className=" pt-10 h-full rounded-3xl flex flex-col items-center justify-start ">
                    <ProfileOverview />
                </div>
            </div>
        </div>
    )
}
