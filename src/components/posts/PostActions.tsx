import React from "react";
import { AiOutlineMessage, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { HiArrowsUpDown, HiBookmark } from "react-icons/hi2";
import { MdOutlineBookmarkBorder } from "react-icons/md";

function PostActions() {
  return (
    <div className=" mt-4 flex justify-between max-w-md mr-auto">
      <div className=" cursor-pointer flex  text-[#6996EF]">
        <div className="transition ease-in-out active:scale-95">
          <AiOutlineMessage size={"1.4em"} />
        </div>
        <span className=" font-semibold">&nbsp;999</span>
      </div>
      <div className=" cursor-pointer flex  text-[#B581C8]">
        <div className="transition ease-in-out active:scale-95">
          <HiArrowsUpDown size={"1.4em"} />
        </div>
        <span className=" font-semibold">&nbsp;999</span>
      </div>
      <div className=" cursor-pointer flex  text-[#FF54B1]">
        <div className="transition ease-in-out active:scale-95">
          <AiOutlineHeart size={"1.4em"} />
        </div>
        <span className=" font-semibold">&nbsp;999</span>
      </div>
      <div className=" cursor-pointer flex  text-[#F97878]">
        <div className="transition ease-in-out active:scale-95">
          <MdOutlineBookmarkBorder size={"1.4em"} />
        </div>
        <span className=" font-semibold">&nbsp;999</span>
      </div>
    </div>
  );
}

export default PostActions;
