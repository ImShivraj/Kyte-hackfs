import MessageUser from "./MessageUser"
import { TbMessagePlus } from "react-icons/tb"
import { BiDotsVerticalRounded } from "react-icons/bi"
import { CgSearch } from "react-icons/cg"
import ChatTabs from "./ChatTabs"
import { useState } from "react"
import { Modal } from "../UI/Modal"
import GradientIcon from "../utils/GradientIcon"
import { MailOutlineRounded } from "@mui/icons-material"
import Search from "../Shared/Navbar/Search"
import Following from "../profile/Following"
import { useAppStore } from "@/src/store/app"
import { Profile } from "@gql/generated"
import buildConversationId from "@lib/buildConversationId"
import { buildConversationKey } from "@/src/lib/conversationKey"
import { useMessageStore } from "@/src/store/message"
import { useRouter } from "next/router"

function UserList() {
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
        // max-h-[94vh] h-[95vh] overflow-auto scrollbar-hide
        <div className=" max-w-xs max-h-[96vh] h-[96vh] overflow-auto scrollbar-hide  ">
            <div className=" ">
                <div className="flex justify-between items-center">
                    <h1 className=" text-3xl font-semibold">Messages</h1>
                    <div className=" flex items-center">
                        <TbMessagePlus
                            onClick={openModal}
                            className=" cursor-pointer"
                            size={"1.5em"}
                        />
                        <BiDotsVerticalRounded size={"1.5em"} />
                    </div>
                </div>
                {/* <div className=" relative mt-5 mb-2">
                    <input
                        placeholder="Search"
                        className=" bg-gray-100 py-3.5 p-4 w-full rounded-2xl outline-none"
                    />
                    <CgSearch
                        className=" cursor-pointer absolute top-3.5 right-4 text-gray-400"
                        size={"1.5em"}
                    />
                </div> */}
                <Search
                    modalWidthClassName=" max-w-lg"
                    placeholder={`Search for someone to message...`}
                    // onProfileSelected={onProfileSelected}
                    bodyWidth="17%"
                    variant="brand"
                    inputHeight="45px"
                />
            </div>

            <div className=" w-full">
                <ChatTabs activeTab={activeTab} setActiveTab={setActiveTab} />
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
                    <div className="w-full pt-1 px-4 pb-10 ">
                        <Search
                            modalWidthClassName=" mx-auto"
                            placeholder={`Search for someone to message...`}
                            onProfileSelected={onProfileSelected}
                            bodyWidth="90%"
                            variant="brand"
                            inputHeight="45px"
                        />
                    </div>
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
    )
}

export default UserList
