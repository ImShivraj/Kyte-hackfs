import Image from "next/image";
import { GrAttachment } from "react-icons/gr";
import { FaRegPaperPlane } from "react-icons/fa";
import { HiOutlineEmojiHappy, HiVideoCamera } from "react-icons/hi";
import { BsFillMicFill } from "react-icons/bs";
import { RxDoubleArrowRight } from "react-icons/rx";
import { MdWifiCalling3 } from "react-icons/md";
import user from "@assets/user.png";
import { useState } from "react";

function ChatWindow() {
  const [message, setMessage] = useState<string>("");
  return (
    <div className="  relative">
      <div className=" flex w-full justify-between items-center ">
        <div className="flex items-center gap-3">
          <Image src={user} alt="user" />
          <div>
            <h3 className=" font-semibold">Lorem Ipsum</h3>
            <p className=" text-sm text-gray-400">@lorem.ipsum</p>
          </div>
        </div>
        <div className=" flex items-center gap-2">
          <button className=" bg-black p-2.5 active:scale-95 ease-in-out rounded-full">
            <MdWifiCalling3 size={"1.3em"} color="white" />
          </button>
          <button className=" bg-black p-2.5 active:scale-95 ease-in-out rounded-full">
            <HiVideoCamera size={"1.3em"} color="white" />
          </button>
        </div>
      </div>
      <div className=" relative mt-4 chat-wallpaper  max-h-[86vh] h-[88vh] overflow-auto rounded-3xl ">
        <div className=" flex flex-col justify-end mt-auto h-[100%] overflow-auto crollbar-hide  p-4  pb-24 ">
          <div className=" flex justify-start items-start gap-4 max-w-md ">
            <Image src={user} alt="user" />
            <p className=" relative mt-4 bg-white px-5 py-3 text-sm tracking-wide rounded-xl rounded-tl-none shadow-md pb-8 pt-4">
              Lorem ipsum dolor sit, amet.
              <span className=" absolute right-3 bottom-2 text-xs text-gray-400  ">
                00:00
              </span>
            </p>
          </div>
          <div className=" flex justify-start items-start gap-4 max-w-md  ">
            <Image src={user} alt="user" />
            <p className=" relative mt-4 bg-white px-5 py-3 text-sm tracking-wide rounded-xl rounded-tl-none shadow-md pb-8 pt-4">
              Sed ut perspiciatis unde omnis iste na, error sit voluptatem
              accusanti dolorog laudantium, totam rem, eaque ipsa qn ab illo na,
              error sit voluptatem accusanti dolorog laudantium, ipsum
              <span className=" absolute right-3 bottom-2 text-xs text-gray-400  ">
                00:00
              </span>
            </p>
          </div>
          <div className=" flex justify-start items-start gap-4 max-w-sm ml-auto bg ">
            {" "}
            <p className=" relative mt-4 bg-[#E0EDE4] px-5 py-3 text-sm tracking-wide rounded-xl rounded-tl-none shadow-md pb-8 pt-4">
              Sed ut perspiciatis unde omnis iste na, error sit voluptatem
              accusanti dolorog laudantium, totam rem, eaque ipsa qn ab illo na,
              error sit voluptatem accusanti dolorog laudantium, ipsum
              <span className=" absolute right-3 bottom-2 text-xs text-gray-400  ">
                00:00
              </span>
            </p>
          </div>
        </div>
      </div>
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
          className=" bg-white pl-24 py-3.5 p-4 w-11/12 rounded-full outline-none shadow-lg"
        />
        <GrAttachment
          className=" cursor-pointer absolute top-3.5 right-28 text-gray-400"
          size={"1.5em"}
          color="black"
        />
        {message && (
          <button className=" cursor-pointer  btn rounded-2xl">
            <FaRegPaperPlane
              className=" cursor-pointer  text-gray-400"
              size={"1.5em"}
              color="white"
            />
          </button>
        )}
        {!message && (
          <button className=" cursor-pointer  btn rounded-2xl">
            <BsFillMicFill
              className=" cursor-pointer  text-gray-400"
              size={"1.5em"}
              color="white"
            />
          </button>
        )}
      </div>
    </div>
  );
}

export default ChatWindow;
