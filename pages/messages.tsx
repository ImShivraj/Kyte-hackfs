import ChatWindow from "@/src/components/message/ChatWindow";
import MessageUser from "@/src/components/message/MessageUser";
import UserList from "@/src/components/message/UserList";
import Sidebar from "@/src/components/ui/Sidebar";
import React from "react";

export default function Messages() {
  return (
    <div>
      <Sidebar>
        <div className=" flex justify-start items-start w-full">
          <div className=" w-4/12 lg:w-3/12">
            <UserList />
          </div>
          <div className="  w-8/12 lg:w-9/12 ml-6">
            <ChatWindow />
          </div>
        </div>
      </Sidebar>
    </div>
  );
}
