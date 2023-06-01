import ChatWindow from "@components/message/ChatWindow"
import ProfileOverview from "@components/message/ProfileOverview"
import UserList from "@components/message/UserList"

export default function UserMessages() {
    return (
        // <div className=" grid grid-cols-12 bg-cyan-300">
        //     <div className=" col-span-10 grid grid-cols-12 py-6 ">
        //         <div className=" col-span-3 bg-purple-300">
        //             <UserList />
        //         </div>
        //         <div className=" col-span-9  bg-blue-300">
        //             <ChatWindow />
        //         </div>
        //     </div>
        //     <div className=" w-full bg-green-300 col-span-2 max-h-[92vh] h-[92vh] scrollbar-hide overflow-visible my-6 ">
        //         <div className=" pt-10 h-full rounded-3xl flex flex-col items-center justify-start ">
        //             <ProfileOverview />
        //         </div>
        //     </div>
        // </div>
        <div className=" flex justify-start">
            <div className="w-10/12 m- p-6 pr-0 flex justify-start items-start">
                <div className=" w-4/1 xs1000:w-5/12 l:w-3/12">
                    <UserList />
                </div>
                <div className="  w-8/12 md1000:w-10/12 md1050:w-9/12 l:w-9/12 ml-6">
                    <ChatWindow />
                </div>
            </div>
            <div className=" xs320:hidden md1050:block w-3/12  px-12 pt-8 max-h-[92vh] h-[92vh] scrollbar-hide overflow-visible my-3 flex flex-col justify-center items-stretch ">
                <div className=" pt-10 h-full rounded-3xl flex flex-col items-center justify-start ">
                    <ProfileOverview />
                </div>
            </div>
        </div>
    )
}
