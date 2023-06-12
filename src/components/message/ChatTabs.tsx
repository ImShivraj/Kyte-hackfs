import React, { useState } from "react"
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react"
import MessageUser from "./MessageUser"
import clsx from "clsx"

interface Props {
    activeTab: string // Replace 'StateType' with the actual type of the state
    setActiveTab: React.Dispatch<React.SetStateAction<string>> // Replace 'StateType' with the actual type of the state
}

const ChatTabs: React.FC<Props> = ({ activeTab, setActiveTab }) => {
    return (
        <Tabs value={activeTab}>
            <TabsHeader
                className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 pb- mt-6"
                indicatorProps={{
                    className: "bg-transparent shadow-none rounded-none",
                }}
            >
                <Tab
                    value={"lens"}
                    onClick={() => setActiveTab("lens")}
                    className={clsx(
                        activeTab === "lens"
                            ? "text-black  border-b-4 border-black pb-1"
                            : "",
                        "  text-sm text-center"
                    )}
                >
                    Lens
                </Tab>
                <Tab
                    value={"wallet"}
                    onClick={() => setActiveTab("wallet")}
                    className={clsx(
                        activeTab === "wallet"
                            ? "text-black  border-b-4 border-black pb-1"
                            : "",
                        "  text-sm text-center"
                    )}
                >
                    Wallet
                </Tab>
                <Tab
                    value={"requests"}
                    onClick={() => setActiveTab("requests")}
                    className={clsx(
                        activeTab === "requests"
                            ? "text-black  border-b-4 border-black pb-1 "
                            : "",
                        " text-lightGreen text-sm text-center"
                    )}
                >
                    Requests&#40;2&#41;
                </Tab>
            </TabsHeader>
            <TabsBody className="w-full max-h-[80vh] h-[80vh]  overflow-auto scrollbar-hide">
                <TabPanel className="w-full " key={"lens"} value={"lens"}>
                    <div className=" -mx-2.5 -mt-4 ">
                        <MessageUser
                            username="Lorem Ipsum"
                            message=" Lorem ipsum dolor sit amet"
                            time="00:00"
                            pfp={"path to pfp"}
                        />
                        <MessageUser
                            username="Lorem Ipsum"
                            message=" Lorem ipsum dolor sit amet"
                            time="00:00"
                            pfp={"path to pfp"}
                        />
                        <MessageUser
                            username="Lorem Ipsum"
                            message=" Lorem ipsum dolor sit amet"
                            time="00:00"
                            pfp={"path to pfp"}
                        />
                        <MessageUser
                            username="Lorem Ipsum"
                            message=" Lorem ipsum dolor sit amet"
                            time="00:00"
                            pfp={"path to pfp"}
                        />
                        <MessageUser
                            username="Lorem Ipsum"
                            message=" Lorem ipsum dolor sit amet"
                            time="00:00"
                            pfp={"path to pfp"}
                        />
                        <MessageUser
                            username="Lorem Ipsum"
                            message=" Lorem ipsum dolor sit amet"
                            time="00:00"
                            pfp={"path to pfp"}
                        />
                        <MessageUser
                            username="Lorem Ipsum"
                            message=" Lorem ipsum dolor sit amet"
                            time="00:00"
                            pfp={"path to pfp"}
                        />
                        <MessageUser
                            username="Lorem Ipsum"
                            message=" Lorem ipsum dolor sit amet"
                            time="00:00"
                            pfp={"path to pfp"}
                        />
                        <MessageUser
                            username="Lorem Ipsum"
                            message=" Lorem ipsum dolor sit amet"
                            time="00:00"
                            pfp={"path to pfp"}
                        />
                        <MessageUser
                            username="Lorem Ipsum"
                            message=" Lorem ipsum dolor sit amet"
                            time="00:00"
                            pfp={"path to pfp"}
                        />
                        <MessageUser
                            username="Lorem Ipsum"
                            message=" Lorem ipsum dolor sit amet"
                            time="00:00"
                            pfp={"path to pfp"}
                        />
                        <MessageUser
                            username="Lorem Ipsum"
                            message=" Lorem ipsum dolor sit amet"
                            time="00:00"
                            pfp={"path to pfp"}
                        />
                        <MessageUser
                            username="Lorem Ipsum"
                            message=" Lorem ipsum dolor sit amet"
                            time="00:00"
                            pfp={"path to pfp"}
                        />
                        <MessageUser
                            username="Lorem Ipsum"
                            message=" Lorem ipsum dolor sit amet"
                            time="00:00"
                            pfp={"path to pfp"}
                        />
                        <MessageUser
                            username="Lorem Ipsum"
                            message=" Lorem ipsum dolor sit amet"
                            time="00:00"
                            pfp={"path to pfp"}
                        />
                        <MessageUser
                            username="Lorem Ipsum"
                            message=" Lorem ipsum dolor sit amet"
                            time="00:00"
                            pfp={"path to pfp"}
                        />
                    </div>
                </TabPanel>
                <TabPanel key={"wallet"} value={"wallet"}>
                    Wallet
                </TabPanel>
                <TabPanel key={"requests"} value={"requests"}>
                    Requests&#40;2&#41;
                </TabPanel>
            </TabsBody>
        </Tabs>
    )
}

export default ChatTabs
