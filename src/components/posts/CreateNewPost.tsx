import Image from "next/image";
import pfp from "@assets/user.png";
import { BsFiletypeGif } from "react-icons/bs";
import { TbPhotoPlus } from "react-icons/tb";
import { ImAttachment } from "react-icons/im";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { useState } from "react";
import clsx from "clsx";

function CreateNewPost(props: any) {
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
    <div className=" flex items-start justify-start gap-3 ">
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
            rows={1}
          />
        </div>
        <div className=" flex justify-between items-center mt-2 mx-2">
          <div
            className={clsx(
              " flex justify-around 6 ",
              props.width ? props.width : "w-1/6"
            )}
          >
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

export default CreateNewPost;
