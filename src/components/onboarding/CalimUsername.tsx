import Image from "next/image"
import img from "@assets/modal_img_2.png"
import { useState } from "react"
import { RxCross1 } from "react-icons/rx"

function ClaimUsername() {
    const [username, setUsername] = useState("")

    return (
        <div className=" flex items-center justify-center gap-8 py-4">
            <div className=" max-w-sm">
                <h1 className=" text-2xl font-[600] my-2">
                    Claim your username
                </h1>
                <p className=" text-lightGratText2 font-[600] my-2">
                    Create a unique username to start your journey in Kyte
                </p>
                <div className="relative mt-5 mb-2">
                    <input
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        placeholder="username"
                        className=" font-[500] bg-lightGray input input-ghost py-3.5 p-4 w-full rounded-md outline-none "
                    />
                    {username && (
                        <div onClick={() => setUsername("")}>
                            <RxCross1
                                className=" cursor-pointer absolute top-3.5 right-4 text-gray-400"
                                size={"1.5em"}
                            />
                        </div>
                    )}
                </div>
            </div>
            <div>
                <Image src={img} alt=" img" />
            </div>
        </div>
    )
}

export default ClaimUsername
