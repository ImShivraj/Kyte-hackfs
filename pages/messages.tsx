import ChatWindow from "@components/message/ChatWindow"
import ProfileOverview from "@components/message/ProfileOverview"
import UserList from "@components/message/UserList"
import React, { useState } from "react"
import { HiOutlineGlobeEuropeAfrica } from "react-icons/hi2"
import { links } from "./explore"
import SuggestedProfile from "@/src/components/home/SuggestedProfile"
import MessageUser from "@/src/components/message/MessageUser"
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react"
import clsx from "clsx"
import { TbMessagePlus } from "react-icons/tb"
import { BiDotsVerticalRounded } from "react-icons/bi"
import { CgSearch } from "react-icons/cg"
import { MailOutlineRounded } from "@mui/icons-material"
import { useRouter } from "next/router"
import { useAppStore } from "@/src/store/app"
import { useMessageStore } from "@/src/store/message"
import Search from "@/src/components/Shared/Navbar/Search"
import { Modal } from "@/src/components/UI/Modal"
import GradientIcon from "@/src/components/utils/GradientIcon"
import Following from "@/src/components/profile/Following"
import buildConversationId from "@lib/buildConversationId"
import { buildConversationKey } from "@/src/lib/conversationKey"
import { Profile } from "@/src/graphql/generated"
import kyte_logo from "@/src/assets/kyte_logo.png"
import Image from "next/image"
import IconButton from "@/src/components/Shared/IconButton"

export default function Messages() {
    const [activeTab, setActiveTab] = useState("lens")
    const [showNewWalletMsgModal, setShowNewWalletMsgModal] = useState(false)
    const [showSearchModal, setShowSearchModal] = useState<boolean>(false)
    const { currentProfile } = useAppStore()
    const router = useRouter()
    const { addProfileAndSelectTab } = useMessageStore()

    function openModal() {
        setShowSearchModal(true)
    }

    const onProfileSelected = (profile: Profile) => {
        const conversationId = buildConversationId(
            currentProfile?.id,
            profile.id
        )
        const conversationKey = buildConversationKey(
            profile.ownedBy,
            conversationId
        )
        addProfileAndSelectTab(conversationKey, profile)
        router.push(`/messages/${conversationKey}`)
        setShowSearchModal(false)
    }

    return (
        <div className=" flex justify-start h-screen ">
            <div className=" md800:w-full md900:w-full md950:w-max md1000:w-full  md1050:w-full  lg1150:w-full  lg1200:w-full  lg1250:w-full  lg1300:w-full  xl1450:w-full   md1000:py-6 pr-0 flex justify-start items-start md1000:pl-8  md1050:pl-0 xl1450:-ml-16  ">
                <div className=" xs1000:w-5/12 l:w-3/12 min-w-[300px]">
                    <div className=" max-w-xs max-h-[96vh] h-[96vh] overflow-auto scrollbar-hide  ">
                        <div className=" ">
                            <div className="flex justify-between items-center">
                                <h1 className=" text-3xl font-semibold">
                                    Messages
                                </h1>
                                <div className=" flex items-center">
                                    <TbMessagePlus
                                        onClick={openModal}
                                        className=" cursor-pointer"
                                        size={"1.5em"}
                                    />
                                    <BiDotsVerticalRounded size={"1.5em"} />
                                </div>
                            </div>

                            <Search
                                modalWidthClassName=" max-w-lg"
                                placeholder={`Search for someone to message...`}
                                // onProfileSelected={onProfileSelected}
                                bodyWidth="94%"
                                variant="brand"
                                inputHeight="45px"
                            />
                        </div>

                        <div className=" w-full">
                            <Tabs value={activeTab}>
                                <TabsHeader
                                    className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 pb- mt-6"
                                    indicatorProps={{
                                        className:
                                            "bg-transparent shadow-none rounded-none",
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
                                <TabsBody className="w-full max-h-[82vh] h-[81.5vh]  overflow-auto scrollbar-hide">
                                    <TabPanel
                                        className="w-full "
                                        key={"lens"}
                                        value={"lens"}
                                    >
                                        <WelcomeMessage />
                                    </TabPanel>
                                    <TabPanel key={"wallet"} value={"wallet"}>
                                        <WelcomeMessage />
                                    </TabPanel>
                                    <TabPanel
                                        key={"requests"}
                                        value={"requests"}
                                    >
                                        <WelcomeMessage />
                                    </TabPanel>
                                </TabsBody>
                            </Tabs>
                        </div>

                        <Modal
                            title={`New message`}
                            icon={
                                <GradientIcon
                                    Icon={MailOutlineRounded}
                                    width="24px"
                                    height="24px"
                                    margin="none"
                                />
                            }
                            size="sm"
                            show={showSearchModal}
                            onClose={() => setShowSearchModal(false)}
                        >
                            {activeTab === "lens" && (
                                <div className="w-full pt-1 px-4 pb-10">
                                    <Search
                                        modalWidthClassName="max-w-lg"
                                        placeholder={`Search for someone to message...`}
                                        onProfileSelected={onProfileSelected}
                                        bodyWidth="94%"
                                        variant="brand"
                                        inputHeight="45px"
                                    />
                                </div>
                            )}
                            {currentProfile && (
                                <Following
                                    profile={currentProfile}
                                    onProfileSelected={onProfileSelected}
                                />
                            )}
                            {activeTab === "wallet" && (
                                <div className="w-full pt-4 px-4 mb-5">
                                    <Search
                                        modalWidthClassName="max-w-lg"
                                        placeholder={`Enter a wallet address to message...`}
                                        onProfileSelected={onProfileSelected}
                                        bodyWidth="94%"
                                        variant="brand"
                                        inputHeight="45px"
                                        isWalletSearch={true}
                                        setShowModal={setShowNewWalletMsgModal}
                                    />
                                </div>
                            )}
                        </Modal>
                    </div>
                </div>
                <div className="  h-full px-6 pt-4 rounded-2xl  w-8/12 md1000:w-10/12 md1050:w-9/12 l:w-9/12 ml-6">
                    <div className="chat-wallpaper rounded-2xl h-full  relative">
                        <div className=" flex w-full justify-center items-center h-full bg-transparent backdrop-blur-sm backdrop-opacity-50 ">
                            <div className="flex flex-col items-center gap-3 text-lightGratText1">
                                <Image src={kyte_logo} alt="kyte_logo" />
                                <h1 className="font-[700] text-2xl">
                                    Get started with secure web3 messaging
                                </h1>
                                <p className=" font-[500] max-w-sm text-center ">
                                    Chose an existing conversation or start a
                                    new one with your friends
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" xs320:hidden md1050:block w-3/12 md900:px-8 xl1450:px-0  pt- max-h-[92vh] h-[92vh] scrollbar-hide overflow-visible md900:overflow-scroll  mt-3 my-3 flex flex-col justify-center items-stretch ">
                <div className=" fixed right-10">
                    <div className="mt-2 bg-lightGray  rounded-3xl">
                        <h2 className="  text-2xl font-semibold p-5">
                            Suggested for you{" "}
                        </h2>
                        <SuggestedProfile />
                        <SuggestedProfile />
                        <SuggestedProfile />
                        <SuggestedProfile />
                        <SuggestedProfile />
                        <SuggestedProfile />{" "}
                        <div className=" px-4 my-4">
                            <button className=" btn btn-ghost btn-sm normal-case text-lg text-lightGreen font-normal hover:bg-transparent">
                                Show More
                            </button>
                        </div>
                    </div>
                    <div className=" mx-1 mb-1 mt-5 ">
                        <div className=" grid grid-cols-4 flex-wrap justify-evenly">
                            {links.map((link, idx) => (
                                <a
                                    key={idx}
                                    href={link.link}
                                    className=" col-span-1 text-start text-lightGratText2 my-1  md900:text-[14px] xl1450:text-[15px] font-[600] hover:bg-transparent"
                                >
                                    {idx === 0 ? (
                                        <span className=" ">&#169; Kyte</span>
                                    ) : (
                                        link.label
                                    )}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className=" mx-1 mt-2 flex justify-between items-center text-start text-lightGratText2 my-auto text-[15px] font-[600] hover:bg-transparent">
                        <div className=" text-lightGratText2 flex items-center gap-3">
                            <HiOutlineGlobeEuropeAfrica
                                size={"1.5em"}
                                color="#B0B0B0"
                            />
                            <span>English</span>
                        </div>
                        <div className=" text-lightGratText2">
                                                {/* <span>Storage Powered by Polybase</span> */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function WelcomeMessage() {
    return (
        <div className=" flex justify-center items-center flex-col gap-4">
            <h1 className=" text-3xl font-[700]">Welcome to your inbox! </h1>
            <p className=" font-[500] text-sm text-lightGratText1">
                Share messages, videos, posts and more with private chats with
                your friends.
            </p>
            <button
                // variant="gradient"
                type="button"
                className=" mt-2 rounded-full btn bg-lightGreen border-0 hover:bg-lightGreen active:bg-lightGreen focus:bg-lightGreen px-[27.5px] h-full flex items-center justify-center gap-2 w-full"
            >
                <span className="text-white font-semibold leading-[20px]">
                    Write a message
                </span>
            </button>
        </div>
    )
}
