import React from "react";
import pfp from "@/src/assets/user-pf.png";
import banner from "@/src/assets/banner.jpg";
import Image from "next/image";
import clsx from "clsx";

export default function UserProfile() {
  return (
    // <div>
    //   <div className=" rounded-xl relative">
    //     <Image className=" rounded-xl" src={banner} alt="banner" />
    //     <div className=" absolute t ">
    //       <Image width={100} src={pfp} alt="pfp" />
    //     </div>
    //   </div>
    //   <div>
    //     <div>
    //       <h1 className=" text-black text-xl">Lorem Ipsum</h1>
    //       <span className=" font-semibold text-lightGratText2">
    //         @lorem.ipsum
    //       </span>

    //       <p>
    //         Sed ut perspiciatis unde omnis iste na, error sit voluptatem
    //         accusanti dolorog laudantium, tota rem, eaque ipsa qn ab illo invee
    //         veritatis et quasi architect beatae vae dicta so.
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div className=" w-full flex flex-col mx-auto rounded-xl  border">
      <div className={clsx(`  rounded-xl  rounded-b-none`, "banner")}></div>
      <div className="  w-full relative ">
        <div className="  py-6">
          <div className=" flex justify-between items-center mx-auto w-11/12  -mt-24 ml-12 mr-auto">
            <Image
              className=" w-32 rounded-full border-4 shadow-md p-0"
              src={pfp}
              width="100"
              height="100"
              alt="pfp"
            />
            <div className=" mt-24">
              <button className=" btn text-white normal-case rounded-full px-8 py-0">
                Follow
              </button>
            </div>
          </div>
          <div className=" mx-12 pt-4 ">
            <h1 className=" text-black text-2xl font-semibold">Lorem Ipsum</h1>
            <span className=" font-semibold text-lightGratText2">
              @lorem.ipsum
            </span>
            <p className=" pt-4">
              Sed ut perspiciatis unde omnis iste na, error sit voluptatem
              accusanti dolorog laudantium, tota rem, eaque ipsa qn ab illo
              invee veritatis et quasi architect beatae vae dicta so.
            </p>

            <div className=" text-lightGratText2 pt-3 flex gap-x-5 justify-start items-center">
              <div>lorem.ipsum</div>
              <div>Joined Now</div>
              <div>info</div>
            </div>

            <div className=" pt-3 flex items-center justify-start flex-wrap gap-4  ">
              <div className="  rounded-full  py-2">
                <span className=" font-bold">99.9M</span>{" "}
                <span className=" text-lightGratText2">Followers</span>
              </div>
              <div className="  rounded-full px-4 py-2">
                <span className=" font-bold">99.9M</span>{" "}
                <span className=" text-lightGratText2">Following</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
