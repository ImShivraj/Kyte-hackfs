import Image from "next/image";
import user from "@assets/user.png";
import pfp from "@assets/pfp2.png";
import post from "@assets/post.png";
import { BiDotsVerticalRounded } from "react-icons/bi";

function PostPreview() {
  return (
    <div className=" px-8 py-6 border rounded-3xl mx-3 md:mx-8 my-2.5 ">
      <div className=" relative   ">
        <div className="flex items-start gap-5">
          <div className=" h-[94.7%] z-10 absolute border-r px-3 top-14 -mt-1"></div>
          <div className=" absolute top-1.5 right-0 -mt-1.5">
            <BiDotsVerticalRounded size={"1.5em"} color="black" />
          </div>
          <Image width={52} src={pfp} alt="user" />
          <div>
            <h3 className=" font-semibold">Lorem Ipsum</h3>
            <div className=" flex items-center font-semibold">
              <span className=" text-sm text-gray-400">@lorem.ipsum</span>{" "}
              <span className=" text-sm text-gray-400">
                {" "}
                &nbsp;&#x2022;&nbsp;12 Jan
              </span>{" "}
            </div>
            <p className="  py-3 text-md">
              Sed ut perspiciatis unde omnis iste na, error sit voluptatem
              accusanti dolorog laudantium, tota rem, eaque ipsa qn ab illo
              invee veritatis et quasi architect beatae vae dicta so.
            </p>
            <Image
              className="py-1 w-full md:w-7/12 md:h-auto"
              src={post}
              alt="post"
            />
          </div>
        </div>
      </div>
      <div className="flex items-start gap-5 mt-5 relative ">
        <div className=" absolute top-1.5 right-0 -mt-1.5">
          <BiDotsVerticalRounded size={"1.5em"} color="black" />
        </div>
        <Image width={52} src={user} alt="user" />
        <div>
          <h3 className=" font-semibold">Lorem Ipsum</h3>
          <div className=" flex items-center font-semibold">
            <span className=" text-sm text-gray-400">@lorem.ipsum</span>{" "}
            <span className=" text-sm text-gray-400">
              {" "}
              &nbsp;&#x2022;&nbsp;12 Jan
            </span>{" "}
          </div>
          <p className="  py-3 text-md">
            Sed ut perspiciatis unde omnis iste na, error sit voluptatem
            accusanti dolorog laudantium, tota rem, eaque ipsa qn ab illo invee
            veritatis et quasi architect beatae vae dicta so.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PostPreview;
