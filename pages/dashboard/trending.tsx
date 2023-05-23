import Sidebar from "@components/ui/Sidebar";
import React from "react";

export default function Trending() {
  return (
    <div>
      <Sidebar>
        <div className="w-9/12 m- p-6 pr-0 flex justify-start items-start">
          demo
        </div>
        <div className=" w-3/12 p-6 max-h-[96vh] h-[96vh] overflow-auto my-3 flex flex-col justify-center items-stretch ">
          <div className=" p-6 h-full bg-lightGray rounded-3xl flex flex-col items-center justify-start ">
            demo
          </div>
          <div className=" bg-[#83B08C] w-32 h-6 rounded-full mx-auto mt-5 -mb-5"></div>
        </div>
      </Sidebar>
    </div>
  );
}
