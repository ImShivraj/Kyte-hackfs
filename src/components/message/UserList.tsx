import MessageUser from "./MessageUser";
import { TbMessagePlus } from "react-icons/tb";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { CgSearch } from "react-icons/cg";
import Tabs from "./Tabs";

function UserList() {
  return (
    <div className=" max-w-xs max-h-[95vh] h-[95vh] overflow-auto scrollbar-hide">
      <div className="flex justify-between items-center">
        <h1 className=" text-3xl font-semibold">Messages</h1>
        <div className=" flex items-center">
          <TbMessagePlus size={"1.5em"} />
          <BiDotsVerticalRounded size={"1.5em"} />
        </div>
      </div>
      <div className=" relative mt-5 mb-2">
        <input
          placeholder="Search"
          className=" bg-gray-100 py-3.5 p-4 w-full rounded-2xl outline-none"
        />
        <CgSearch
          className=" cursor-pointer absolute top-3.5 right-4 text-gray-400"
          size={"1.5em"}
        />
      </div>
      <div className=" w-full">
        <Tabs />
      </div>
      <div>
        <MessageUser
          username="Lorem Ipsum"
          message=" Lorem ipsum dolor sit amet"
          time="00:00"
          pfp={"path to pfp"}
        />
        <MessageUser
          username="Lorem Ipsum"
          message=" Lorem ipsum dolor sit amet"
          time="00:00"
          pfp={"path to pfp"}
        />
        <MessageUser
          username="Lorem Ipsum"
          message=" Lorem ipsum dolor sit amet"
          time="00:00"
          pfp={"path to pfp"}
        />
        <MessageUser
          username="Lorem Ipsum"
          message=" Lorem ipsum dolor sit amet"
          time="00:00"
          pfp={"path to pfp"}
        />
        <MessageUser
          username="Lorem Ipsum"
          message=" Lorem ipsum dolor sit amet"
          time="00:00"
          pfp={"path to pfp"}
        />
        <MessageUser
          username="Lorem Ipsum"
          message=" Lorem ipsum dolor sit amet"
          time="00:00"
          pfp={"path to pfp"}
        />
        <MessageUser
          username="Lorem Ipsum"
          message=" Lorem ipsum dolor sit amet"
          time="00:00"
          pfp={"path to pfp"}
        />
        <MessageUser
          username="Lorem Ipsum"
          message=" Lorem ipsum dolor sit amet"
          time="00:00"
          pfp={"path to pfp"}
        />
        <MessageUser
          username="Lorem Ipsum"
          message=" Lorem ipsum dolor sit amet"
          time="00:00"
          pfp={"path to pfp"}
        />
        <MessageUser
          username="Lorem Ipsum"
          message=" Lorem ipsum dolor sit amet"
          time="00:00"
          pfp={"path to pfp"}
        />
        <MessageUser
          username="Lorem Ipsum"
          message=" Lorem ipsum dolor sit amet"
          time="00:00"
          pfp={"path to pfp"}
        />
        <MessageUser
          username="Lorem Ipsum"
          message=" Lorem ipsum dolor sit amet"
          time="00:00"
          pfp={"path to pfp"}
        />
        <MessageUser
          username="Lorem Ipsum"
          message=" Lorem ipsum dolor sit amet"
          time="00:00"
          pfp={"path to pfp"}
        />
        <MessageUser
          username="Lorem Ipsum"
          message=" Lorem ipsum dolor sit amet"
          time="00:00"
          pfp={"path to pfp"}
        />
        <MessageUser
          username="Lorem Ipsum"
          message=" Lorem ipsum dolor sit amet"
          time="00:00"
          pfp={"path to pfp"}
        />
        <MessageUser
          username="Lorem Ipsum"
          message=" Lorem ipsum dolor sit amet"
          time="00:00"
          pfp={"path to pfp"}
        />
      </div>
    </div>
  );
}

export default UserList;
