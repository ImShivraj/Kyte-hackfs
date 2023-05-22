import MessageUser from "./MessageUser";
import { TbMessagePlus } from "react-icons/tb";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { CgSearch } from "react-icons/cg";
import ChatTabs from "./ChatTabs";
import { useState } from "react";
import { Modal } from "../ui/Modal";

function UserList() {
  const [activeTab, setActiveTab] = useState("lens");
  const [showSearchModal, setShowSearchModal] = useState<boolean>(false);

  function openModal() {
    setShowSearchModal(true);
  }

  return (
    // max-h-[94vh] h-[95vh] overflow-auto scrollbar-hide
    <div className=" max-w-xs max-h-[94vh] h-[95vh] overflow-auto scrollbar-hide  ">
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
        <div className=" relative mt-5 mb-2">
          <input
            placeholder="Search"
            className=" bg-gray-100 py-3.5 p-4 w-full rounded-2xl outline-none"
          />
          <CgSearch
            className=" cursor-pointer absolute top-3.5 right-4 text-gray-400"
            size={"1.5em"}
          />
        </div>
      </div>

      <div className=" w-full">
        <ChatTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      <Modal
        title={`New message`}
        // icon={
        //   <GradientIcon
        //     Icon={MailOutlineRounded}
        //     width="24px"
        //     height="24px"
        //     margin="none"
        //   />
        // }
        size="sm"
        show={showSearchModal}
        onClose={() => setShowSearchModal(false)}
      >
        <div className="w-full py-4 px-4">
          {activeTab === "lens" && <span>Lens Modal Search</span>}
          {activeTab === "wallet" && <span>Wallet Modal Search</span>}
          {/* <Search
            modalWidthClassName="max-w-lg"
            placeholder={`Search for someone to message...`}
            onProfileSelected={onProfileSelected}
            bodyWidth="94%"
            variant="brand"
            inputHeight="45px"
          /> */}
        </div>
        {/*  */}
        {/* {currentProfile && (
          <Following
            profile={currentProfile}
            onProfileSelected={onProfileSelected}
          />
        )} */}
      </Modal>
    </div>
  );
}

export default UserList;
