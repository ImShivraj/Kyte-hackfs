import ChatWindow from "@/src/components/message/ChatWindow";
import ProfileOverview from "@/src/components/message/ProfileOverview";
import UserList from "@/src/components/message/UserList";
import Sidebar from "@/src/components/ui/Sidebar";

export default function UserMessages() {
  return (
    <div>
      <Sidebar>
        <div className="w-9/12 m- p-6 pr-0 flex justify-start items-start">
          <div className=" w-4/12 lg:w-3/12">
            <UserList />
          </div>
          <div className="  w-8/12 lg:w-9/12 ml-6">
            <ChatWindow />
          </div>
        </div>
        <div className=" w-3/12 px-12 pt-8 max-h-[92vh] h-[92vh] scrollbar-hide overflow-visible my-3 flex flex-col justify-center items-stretch ">
          <div className=" pt-10 h-full rounded-3xl flex flex-col items-center justify-start ">
            <ProfileOverview />
          </div>
        </div>
      </Sidebar>
    </div>
  );
}
