import React, { useState } from "react";
import { BsFiletypeGif } from "react-icons/bs";
import { TbPhotoPlus } from "react-icons/tb";
import { ImAttachment } from "react-icons/im";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";
import pfp from "@assets/user.png";
import clsx from "clsx";

export default function CreatePostModal() {
  const [post, setPost] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPost(event.target.value);
    adjustTextareaHeight(event.target);
  };

  const adjustTextareaHeight = (textarea: HTMLTextAreaElement) => {
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  return (
    <div className="modal-box max-w-3xl absolute top-20 bg-white p-0 m-0 ">
      <label
        htmlFor="my-modal"
        className="btn bg-white hover:bg-gray-100 text-black btn-sm btn-circle border-0 absolute left-3 top-2"
      >
        <RxCross1 />
      </label>
      <div className=" flex flex-col  items-start justify-start gap-3 p-5 px-10 mt-6 ">
        <div className=" w-full flex items-start justify-between">
          <Image width={52} src={pfp} alt="pfp" />{" "}
          <div className=" w-full">
            <div className="flex justify-between items-start w-full">
              <textarea
                placeholder=" What's Happening?"
                className=" text-justify resize-none  scrollbar-hide  text-black focus:text-black textarea textarea-ghost bg-white focus:bg-white outline-none border-0 focus:outline-none w-full text-lg "
                // type="text"
                name=""
                id=""
                value={post}
                onChange={handleChange}
                rows={2}
              />
            </div>
          </div>
        </div>
        <div className=" flex justify-between w-full items-center mt-2 ">
          <div className={clsx(" flex justify-around gap-4 ", "w-1/6")}>
            <div className=" transition ease-in-out active:scale-95 cursor-pointer">
              <BsFiletypeGif color="#83B08C" size={"1.2em"} />
            </div>
            <div className=" transition ease-in-out active:scale-95 cursor-pointer">
              <TbPhotoPlus color="#83B08C" size={"1.3em"} />
            </div>
            <div className=" transition ease-in-out active:scale-95 cursor-pointer">
              <HiOutlineEmojiHappy color="#83B08C" size={"1.3em"} />
            </div>
            <div className=" transition ease-in-out active:scale-95 cursor-pointer">
              <ImAttachment color="#83B08C" size={"1.18em"} />
            </div>
          </div>
          <button className=" normal-case btn w-32 bg-lightGreen hover:bg-lightGreen2 border-0 text-white rounded-full">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
