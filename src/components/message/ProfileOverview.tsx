import Image from "next/image";
import pfp from "@assets/pfp.png";
import highlight from "@assets/highlight.png";

function ProfileOverview() {
  return (
    <div className=" flex flex-col justify-start items-center">
      <div className=" flex flex-col justify-start items-center text-center">
        <Image src={pfp} alt="pfp" />
        <h1 className=" text-2xl font-semibold leading-9 mt-3">Lorem Ipsum</h1>
        <p className=" text-lightGratText2 font-[500]">@lorem.ipsum</p>
      </div>

      <div className=" mt-8 text-slate-400 w-full my-2 ">
        <h3 className=" text-lightGratText1 font-semibold leading-9">About</h3>
        <p className=" text-lightGratText2">
          Lorem ipsum dolor sit amet, sed do eiusil tempor incididunt ut.
        </p>
        <div className=" flex items-center justify-center flex-wrap gap-3 my-3 ">
          <div className=" bg-lightGray rounded-full px-3 py-2">
            <span className=" font-semibold">99.9M</span> Followers
          </div>
          <div className=" bg-lightGray rounded-full px-4 py-2.5">
            <span className=" font-semibold">99.9M</span> Following
          </div>
        </div>
      </div>

      <div className=" flex flex-col items-start justify-starts w-full py-4">
        <h3 className=" text-lightGratText1 font-semibold leading-9">
          Highlights
        </h3>

        <div className="grid grid-cols-3 gap-2 w-full py-3">
          <div className=" ">
            <Image
              className=" mx-auto"
              width={90}
              src={highlight}
              alt="highlight"
            />
          </div>
          <div className=" ">
            <Image
              className=" mx-auto"
              width={90}
              src={highlight}
              alt="highlight"
            />
          </div>
          <div className=" ">
            <Image
              className=" mx-auto"
              width={90}
              src={highlight}
              alt="highlight"
            />
          </div>
          <div className=" ">
            <Image
              className=" mx-auto"
              width={90}
              src={highlight}
              alt="highlight"
            />
          </div>
          <div className=" ">
            <Image
              className=" mx-auto"
              width={90}
              src={highlight}
              alt="highlight"
            />
          </div>
          <div className=" ">
            <Image
              className=" mx-auto"
              width={90}
              src={highlight}
              alt="highlight"
            />
          </div>
          <div className=" ">
            <Image
              className=" mx-auto"
              width={90}
              src={highlight}
              alt="highlight"
            />
          </div>
          <div className=" ">
            <Image
              className=" mx-auto"
              width={90}
              src={highlight}
              alt="highlight"
            />
          </div>
          <div className=" ">
            <Image
              className=" mx-auto"
              width={90}
              src={highlight}
              alt="highlight"
            />
          </div>
        </div>

        <div className=" relative flex w-full justify-around faded">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-90"></div>
          <div className=" ">
            <Image
              className=" mx-auto"
              width={90}
              src={highlight}
              alt="highlight"
            />
          </div>
          <div className=" ">
            <Image
              className=" mx-auto"
              width={90}
              src={highlight}
              alt="highlight"
            />
          </div>
          <div className=" ">
            <Image
              className=" mx-auto"
              width={90}
              src={highlight}
              alt="highlight"
            />
          </div>
        </div>

        <div className=" bg-[#83B08C] w-32 h-6 rounded-full mx-auto  mt-3 "></div>
      </div>
    </div>
  );
}

export default ProfileOverview;
