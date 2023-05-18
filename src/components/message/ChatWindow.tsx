import Image from "next/image";
import { GrAttachment } from "react-icons/gr";
import { FaRegPaperPlane } from "react-icons/fa";
import { HiOutlineEmojiHappy, HiVideoCamera } from "react-icons/hi";
import { RxDoubleArrowRight } from "react-icons/rx";
import { MdWifiCalling3 } from "react-icons/md";
import user from "../../assets/user.png";

function ChatWindow() {
  return (
    <div className=" ">
      <div className=" flex w-full justify-between items-center ">
        <Image src={user} alt="user" />
        <div className=" flex items-center gap-2">
          <button className=" bg-black p-2.5 active:scale-95 ease-in-out rounded-full">
            <MdWifiCalling3 size={"1.3em"} color="white" />
          </button>
          <button className=" bg-black p-2.5 active:scale-95 ease-in-out rounded-full">
            <HiVideoCamera size={"1.3em"} color="white" />
          </button>
        </div>
      </div>
      <div className="   relative mt-4 chat-wallpaper  max-h-[88vh] h-[88vh] overflow-auto rounded-3xl ">
        <div className="px-3 absolute flex items-center justify-between bottom-2 mt-5 mb-2  w-full">
          <RxDoubleArrowRight
            className=" cursor-pointer absolute top-3.5 left-10 text-gray-400"
            size={"1.5em"}
            color="black"
          />
          <HiOutlineEmojiHappy
            className=" cursor-pointer absolute top-3.5 left-[4.5rem] text-gray-400"
            size={"1.5em"}
            color="black"
          />
          <input
            placeholder="Messages"
            className=" bg-white pl-24 py-3.5 p-4 w-11/12 rounded-full outline-none"
          />
          <GrAttachment
            className=" cursor-pointer absolute top-3.5 right-24 text-gray-400"
            size={"1.5em"}
            color="black"
          />
          <button className=" cursor-pointer  btn rounded-2xl">
            <FaRegPaperPlane
              className=" cursor-pointer  text-gray-400"
              size={"1.5em"}
              color="white"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatWindow;
