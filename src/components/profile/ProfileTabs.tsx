import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import clsx from "clsx";
import MessageUser from "../message/MessageUser";
import { CgSearch } from "react-icons/cg";
import PostPreview from "../posts/PostPreview";

interface Props {
  activeTab: string; // Replace 'StateType' with the actual type of the state
  setActiveTab: React.Dispatch<React.SetStateAction<string>>; // Replace 'StateType' with the actual type of the state
}

const ProfileTabs: React.FC<Props> = ({ activeTab, setActiveTab }) => {
  return (
    <>
      <Tabs value={activeTab} className="   w-full  rounded-3xl ">
        <div className=" ">
          <TabsHeader
            className=" border-b border-blue-gray-50 p-0  mt-6 border rounded-3xl rounded-b-none pt-5"
            indicatorProps={{
              className: "bg-transparent shadow-none rounded-none",
            }}
          >
            <Tab
              value={"posts"}
              onClick={() => setActiveTab("posts")}
              className={clsx(
                activeTab === "posts"
                  ? "text-black  border-b-4 border-black pb-1"
                  : "",
                "  text-base font-semibold text-center pb-4  "
              )}
            >
              Posts
            </Tab>
            <Tab
              value={"replies"}
              onClick={() => setActiveTab("replies")}
              className={clsx(
                activeTab === "replies"
                  ? "text-black  border-b-4 border-black pb-1"
                  : "",
                "  text-base font-semibold text-center pb-4"
              )}
            >
              Replies
            </Tab>
            <Tab
              value={"media"}
              onClick={() => setActiveTab("media")}
              className={clsx(
                activeTab === "media"
                  ? "text-black  border-b-4 border-black pb-1 "
                  : "",
                " text-base font-semibold text-center pb-4"
              )}
            >
              Media
            </Tab>
            <Tab
              value={"likes"}
              onClick={() => setActiveTab("likes")}
              className={clsx(
                activeTab === "likes"
                  ? "text-black  border-b-4 border-black pb-1 "
                  : "",
                " text-center pb-4 font-semibold text-base"
              )}
            >
              Likes
            </Tab>
          </TabsHeader>
        </div>
        <TabsBody className="w-full border rounded-3xl rounded-t-none border-t-0">
          <TabPanel className="w-full " key={"posts"} value={"posts"}>
            <div className="  p-3  rounded-xl ">
              <PostPreview />
              <PostPreview />
              <PostPreview />
            </div>
          </TabPanel>
          <TabPanel key={"replies"} value={"replies"}>
            <div className="  p-3  rounded-xl ">
              <PostPreview />
              <PostPreview />
              <PostPreview />
            </div>
          </TabPanel>
          <TabPanel key={"media"} value={"media"}>
            <div className="  p-3  rounded-xl ">
              <PostPreview />
              <PostPreview />
              <PostPreview />
            </div>
          </TabPanel>
          <TabPanel key={"likes"} value={"likes"}>
            <div className="  p-3  rounded-xl ">
              <PostPreview />
              <PostPreview />
              <PostPreview />
            </div>
          </TabPanel>
        </TabsBody>
      </Tabs>
    </>
  );
};

export default ProfileTabs;
