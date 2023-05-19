import Image from "next/image";
import user from "../../assets/user.png";

export default function MessageUser({
  username,
  message,
  pfp,
  time,
}: MessageUser) {
  return (
    <div className=" flex  items-center justify-start cursor-pointer my-3 py-2.5">
      <Image src={user} alt="user" />
      <div className=" mx-2 relative w-full ">
        <div className=" text-lg font-semibold">{username}</div>
        <span className=" text-md text-gray-400 font-normal ">{message}</span>
        <span className=" text-sm text-gray-400 absolute top-2 right-0">
          {time}
        </span>
      </div>
    </div>
  );
}
