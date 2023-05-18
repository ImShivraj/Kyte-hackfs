import MessageUser from "@/src/components/message/MessageUser";
import UserList from "@/src/components/message/UserList";
import Sidebar from "@/src/components/ui/Sidebar";
import React from "react";

export default function Messages() {
  return (
    <div>
      <Sidebar>
        <UserList />
      </Sidebar>
    </div>
  );
}
