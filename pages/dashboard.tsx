import Sidebar from "@components/ui/Sidebar";
import CreateNewPost from "@components/posts/CreateNewPost";
import PostPreview from "@components/posts/PostPreview";
import React from "react";

export default function dashboard() {
  return (
    <div className="  w-full ">
      <Sidebar>
        <div className=" flex items-start justify-start relative ">
          <div className=" mx-2.5  z-50 w-8/12 p-6 pr-0 flex justify-start items-start">
            <div className="">
              <div className="">
                <h1 className=" text-4xl font-semibold md:pl-10 mb-5 mt-2 ">
                  Home
                </h1>
              </div>
              <div className="">
                <CreateNewPost />
              </div>
              <div className="">
                <PostPreview />
                <PostPreview />
                <PostPreview />
              </div>
            </div>
          </div>
          <div className=" fixed right-10 z-0 w-3/12 p-6 max-h-[96vh] h-[96vh] overflow-auto my-3 flex flex-col justify-center items-stretch ">
            <div className=" p-6 h-full bg-lightGray rounded-3xl flex flex-col items-center justify-start ">
              demo
            </div>
            <div className=" bg-[#83B08C] w-32 h-6 rounded-full mx-auto mt-5 -mb-5"></div>
          </div>
        </div>
      </Sidebar>
    </div>
  );
}
