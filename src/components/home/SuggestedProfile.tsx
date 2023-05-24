import Image from "next/image";
import React from "react";
import user from "@assets/user.png";
import { BsPersonPlus } from "react-icons/bs";

function SuggestedProfile() {
  return (
    <div className=" py-3 mb-0 mx-4 px-3 rounded-xl bg-lightGray cursor-pointer hover:bg-gray-100  ">
      <div className="flex items-center gap-3 w-full">
        <Image src={user} alt="user" />
        <div className=" flex items-center justify-between w-full">
          <div className="ml-2">
            <h3 className=" font-semibold text-xl">Lorem Ipsum</h3>
            <p className=" text-sm text-gray-400 font-semibold ">@lorem.ipsum</p>
          </div>
          <button className=" btn rounded-full h-12 w-12 p-1">
            <BsPersonPlus size={"1.5em"} color="white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SuggestedProfile;
