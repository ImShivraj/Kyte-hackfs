import React, { useState } from "react"
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react"
import clsx from "clsx"
import MessageUser from "../message/MessageUser"
import { CgSearch } from "react-icons/cg"
import PostPreview from "../posts/PostPreview"
import { feedItems } from "../Feed/Feed"
import SinglePublication from "../Publication/SinglePublication"

interface Props {
    activeTab: string // Replace 'StateType' with the actual type of the state
    setActiveTab: React.Dispatch<React.SetStateAction<string>> // Replace 'StateType' with the actual type of the state
}

const temp = {
    root: {
        __typename: "Post",
        id: "0x05-0x1225",
        profile: {
            id: "0x05",
            name: "Stani",
            bio: "Chief Mezcal Officer @LensProtocol & @AaveAave",
            attributes: [
                {
                    displayType: null,
                    traitType: "string",
                    key: "website",
                    value: "https://lens.xyz",
                },
                {
                    displayType: null,
                    traitType: "string",
                    key: "statusEmoji",
                    value: "🏋️‍♀️",
                },
                {
                    displayType: null,
                    traitType: "string",
                    key: "statusMessage",
                    value: "Started 2023",
                },
                {
                    displayType: null,
                    traitType: "string",
                    key: "app",
                    value: "Lenster",
                },
            ],
            isFollowedByMe: false,
            isFollowing: false,
            followNftAddress: "0xD3596C81FcAb699192dc79C8e25f1362E3dFf89A",
            metadata:
                "https://arweave.net/M2I82waN3wmO2yp75edbYzuk5pSTOpSTxhIUJMvpMSs",
            isDefault: true,
            handle: "stani.lens",
            picture: {
                original: {
                    url: "ipfs://bafybeiewog3iscltj6uvus6iut5kerbbkyxovjhvnikrc4luy5sap6w3zu",
                    mimeType: null,
                },
            },
            coverPicture: {
                original: {
                    url: "ipfs://bafybeigz3di7re3rm3dhnnhnmnfgklu42z5y7xwrtgm75cf3qscrnqee2q",
                    mimeType: null,
                },
            },
            ownedBy: "0x7241DDDec3A6aF367882eAF9651b87E1C7549Dff",
            dispatcher: {
                address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
            },
            stats: {
                totalFollowers: 48915,
                totalFollowing: 1284,
                totalPosts: 1159,
                totalComments: 2277,
                totalMirrors: 1330,
                totalPublications: 4766,
                totalCollects: 93102,
            },
            followModule: null,
        },
        stats: {
            totalAmountOfMirrors: 14,
            totalAmountOfCollects: 15,
            totalAmountOfComments: 15,
        },
        metadata: {
            name: "Post by @stani",
            description: "Can’t believe how bad I am at skiing 🎿 😢",
            content: "Can’t believe how bad I am at skiing 🎿 😢",
            media: [],
            attributes: [],
        },
        createdAt: "2023-01-13T15:22:52.000Z",
        collectModule: {
            __typename: "FreeCollectModuleSettings",
            type: "FreeCollectModule",
            followerOnly: false,
            contractAddress: "0x23b9467334bEb345aAa6fd1545538F3d54436e96",
        },
        referenceModule: null,
        appId: "orb",
        collectedBy: null,
        hidden: false,
        reaction: null,
        mirrors: [],
        hasCollectedByMe: false,
    },
    electedMirror: null,
    mirrors: [],
    collects: [],
    reactions: [],
    comments: [
        {
            id: "0x73b1-0x0e3b",
            profile: {
                id: "0x73b1",
                name: "Je$$yFries",
                bio: "Fries NFT specialist working with the CIA. \n🍟🕵🏽\n\nMy web3 Blog:\nhttps://theshr.xyz/Fil/0x73b1-0x034c/detail_article/\n\nMy art meme series: #myartisgirlytrashmemeparty\n \n\nAlso building a DAO for creatives\n@artfromfuture.lens",
                attributes: [
                    {
                        displayType: null,
                        traitType: "string",
                        key: "location",
                        value: "At Mcdonald's",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "twitter",
                        value: "Jessy_Jeanne",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "statusMessage",
                        value: "Eating fries 🍟 ",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "app",
                        value: "Lenster",
                    },
                ],
                isFollowedByMe: false,
                isFollowing: false,
                followNftAddress: "0x427FfB2D0cf32Fa0D5e64829a6d3aB5B65e046E1",
                metadata:
                    "https://arweave.net/4H7FjJAjGIKcmJnyzWEvz3ognqu3gbklDn-fiy9DK9E",
                isDefault: true,
                handle: "jessyjeanne.lens",
                picture: {
                    original: {
                        url: "ipfs://bafybeibfpcq5jkabhumd46nbp2eefhfug4gc2co2acuhzca35sh4k3npou",
                        mimeType: null,
                    },
                },
                coverPicture: {
                    original: {
                        url: "https://ik.imagekit.io/orbapp/tr:n-attachment,tr:di-placeholder.webp/https://lens.infura-ipfs.io/ipfs/bafybeibt5jxa537g243jqxq2kdqr2aztgcxzlysygfbz2hzljwl27xfsoq",
                        mimeType: null,
                    },
                },
                ownedBy: "0x3D5e9077ef8F9C6B0e10D6c62C1A022a49675Cc3",
                dispatcher: {
                    address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                },
                stats: {
                    totalFollowers: 1039,
                    totalFollowing: 141,
                    totalPosts: 244,
                    totalComments: 2735,
                    totalMirrors: 663,
                    totalPublications: 3642,
                    totalCollects: 4245,
                },
                followModule: null,
            },
            stats: {
                totalAmountOfMirrors: 0,
                totalAmountOfCollects: 0,
                totalAmountOfComments: 0,
            },
            metadata: {
                name: "Comment by @jessyjeanne",
                description: "It’s okay! You will learn.",
                content: "It’s okay! You will learn.",
                media: [],
                attributes: [],
            },
            createdAt: "2023-01-13T18:28:30.000Z",
            collectModule: {
                __typename: "FreeCollectModuleSettings",
                type: "FreeCollectModule",
                followerOnly: false,
                contractAddress: "0x23b9467334bEb345aAa6fd1545538F3d54436e96",
            },
            referenceModule: null,
            appId: "orb",
            collectedBy: null,
            hidden: false,
            reaction: null,
            mirrors: [],
            hasCollectedByMe: false,
            mainPost: {
                id: "0x05-0x1225",
                profile: {
                    id: "0x05",
                    name: "Stani",
                    bio: "Chief Mezcal Officer @LensProtocol & @AaveAave",
                    attributes: [
                        {
                            displayType: null,
                            traitType: "string",
                            key: "website",
                            value: "https://lens.xyz",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "statusEmoji",
                            value: "🏋️‍♀️",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "statusMessage",
                            value: "Started 2023",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "app",
                            value: "Lenster",
                        },
                    ],
                    isFollowedByMe: false,
                    isFollowing: false,
                    followNftAddress:
                        "0xD3596C81FcAb699192dc79C8e25f1362E3dFf89A",
                    metadata:
                        "https://arweave.net/M2I82waN3wmO2yp75edbYzuk5pSTOpSTxhIUJMvpMSs",
                    isDefault: true,
                    handle: "stani.lens",
                    picture: {
                        original: {
                            url: "ipfs://bafybeiewog3iscltj6uvus6iut5kerbbkyxovjhvnikrc4luy5sap6w3zu",
                            mimeType: null,
                        },
                    },
                    coverPicture: {
                        original: {
                            url: "ipfs://bafybeigz3di7re3rm3dhnnhnmnfgklu42z5y7xwrtgm75cf3qscrnqee2q",
                            mimeType: null,
                        },
                    },
                    ownedBy: "0x7241DDDec3A6aF367882eAF9651b87E1C7549Dff",
                    dispatcher: {
                        address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                    },
                    stats: {
                        totalFollowers: 48915,
                        totalFollowing: 1284,
                        totalPosts: 1159,
                        totalComments: 2277,
                        totalMirrors: 1330,
                        totalPublications: 4766,
                        totalCollects: 93102,
                    },
                    followModule: null,
                },
                stats: {
                    totalAmountOfMirrors: 14,
                    totalAmountOfCollects: 15,
                    totalAmountOfComments: 15,
                },
                metadata: {
                    name: "Post by @stani",
                    description: "Can’t believe how bad I am at skiing 🎿 😢",
                    content: "Can’t believe how bad I am at skiing 🎿 😢",
                    media: [],
                    attributes: [],
                },
                createdAt: "2023-01-13T15:22:52.000Z",
                collectModule: {
                    __typename: "FreeCollectModuleSettings",
                    type: "FreeCollectModule",
                    followerOnly: false,
                    contractAddress:
                        "0x23b9467334bEb345aAa6fd1545538F3d54436e96",
                },
                referenceModule: null,
                appId: "orb",
                collectedBy: null,
                hidden: false,
                reaction: null,
                mirrors: [],
                hasCollectedByMe: false,
            },
        },
        {
            id: "0x011f55-0x08c4",
            profile: {
                id: "0x011f55",
                name: "Chris Comrie 🌿",
                bio: "Learning and creating about Web3 Social, NFTs and DeFi. Subscribe to Web3 Social Email list (coming soon): https://forms.gle/2DhjikvMBp6LBZci7\n\nLooking for investment? Apply here: https://forms.gle/YXmhXGpM51uAd6gq8\n\nAlso on twitter at @ christafarious",
                attributes: [
                    {
                        displayType: null,
                        traitType: null,
                        key: "pinnedPublicationId",
                        value: "0x011f55-0x0713",
                    },
                    {
                        displayType: null,
                        traitType: null,
                        key: "location",
                        value: "Metaverse",
                    },
                    {
                        displayType: null,
                        traitType: null,
                        key: "website",
                        value: "https://forms.gle/ZAcgjVvzLJ8e4bNT9",
                    },
                    {
                        displayType: null,
                        traitType: null,
                        key: "twitter",
                        value: "christafarious",
                    },
                    {
                        displayType: null,
                        traitType: null,
                        key: "statusMessage",
                        value: "Feeling extremely grateful, humbled and flattered :)",
                    },
                    {
                        displayType: null,
                        traitType: null,
                        key: "app",
                        value: "Lenster",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "cardView",
                        value: "card",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "corners",
                        value: "0.9",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "gradient",
                        value: "true",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "about",
                        value: "Yo yo! Thanks for watching!",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "theme",
                        value: '{"h":"198","s":"0.94","l":"0.43"}',
                    },
                ],
                isFollowedByMe: false,
                isFollowing: false,
                followNftAddress: "0xc1Bf666ACD14DAd62d55457417E69D8705c3d2f0",
                metadata:
                    "https://arweave.net/dBRdJNz8zWvjdjnLU-qhxzHKV43aTe0v7-ys2V9RIRE",
                isDefault: false,
                handle: "chriscomrie.lens",
                picture: {
                    original: {
                        url: "ipfs://bafkreigxcyz4azycdfz5ft6tcoupm5qoie6tqj4uw3dd4ht63gwftbe42i",
                        mimeType: null,
                    },
                },
                coverPicture: null,
                ownedBy: "0xA99E8B241bbF15dCcCb46325b3FA99473Ff11eb0",
                dispatcher: {
                    address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                },
                stats: {
                    totalFollowers: 2536,
                    totalFollowing: 419,
                    totalPosts: 354,
                    totalComments: 1436,
                    totalMirrors: 441,
                    totalPublications: 2231,
                    totalCollects: 9635,
                },
                followModule: null,
            },
            stats: {
                totalAmountOfMirrors: 0,
                totalAmountOfCollects: 0,
                totalAmountOfComments: 0,
            },
            metadata: {
                name: "Comment by @chriscomrie",
                description: "Oooh I wanna do",
                content: "Oooh I wanna do",
                media: [],
                attributes: [],
            },
            createdAt: "2023-01-13T18:09:52.000Z",
            collectModule: {
                __typename: "FreeCollectModuleSettings",
                type: "FreeCollectModule",
                followerOnly: false,
                contractAddress: "0x23b9467334bEb345aAa6fd1545538F3d54436e96",
            },
            referenceModule: null,
            appId: "orb",
            collectedBy: null,
            hidden: false,
            reaction: null,
            mirrors: [],
            hasCollectedByMe: false,
            mainPost: {
                id: "0x05-0x1225",
                profile: {
                    id: "0x05",
                    name: "Stani",
                    bio: "Chief Mezcal Officer @LensProtocol & @AaveAave",
                    attributes: [
                        {
                            displayType: null,
                            traitType: "string",
                            key: "website",
                            value: "https://lens.xyz",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "statusEmoji",
                            value: "🏋️‍♀️",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "statusMessage",
                            value: "Started 2023",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "app",
                            value: "Lenster",
                        },
                    ],
                    isFollowedByMe: false,
                    isFollowing: false,
                    followNftAddress:
                        "0xD3596C81FcAb699192dc79C8e25f1362E3dFf89A",
                    metadata:
                        "https://arweave.net/M2I82waN3wmO2yp75edbYzuk5pSTOpSTxhIUJMvpMSs",
                    isDefault: true,
                    handle: "stani.lens",
                    picture: {
                        original: {
                            url: "ipfs://bafybeiewog3iscltj6uvus6iut5kerbbkyxovjhvnikrc4luy5sap6w3zu",
                            mimeType: null,
                        },
                    },
                    coverPicture: {
                        original: {
                            url: "ipfs://bafybeigz3di7re3rm3dhnnhnmnfgklu42z5y7xwrtgm75cf3qscrnqee2q",
                            mimeType: null,
                        },
                    },
                    ownedBy: "0x7241DDDec3A6aF367882eAF9651b87E1C7549Dff",
                    dispatcher: {
                        address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                    },
                    stats: {
                        totalFollowers: 48915,
                        totalFollowing: 1284,
                        totalPosts: 1159,
                        totalComments: 2277,
                        totalMirrors: 1330,
                        totalPublications: 4766,
                        totalCollects: 93102,
                    },
                    followModule: null,
                },
                stats: {
                    totalAmountOfMirrors: 14,
                    totalAmountOfCollects: 15,
                    totalAmountOfComments: 15,
                },
                metadata: {
                    name: "Post by @stani",
                    description: "Can’t believe how bad I am at skiing 🎿 😢",
                    content: "Can’t believe how bad I am at skiing 🎿 😢",
                    media: [],
                    attributes: [],
                },
                createdAt: "2023-01-13T15:22:52.000Z",
                collectModule: {
                    __typename: "FreeCollectModuleSettings",
                    type: "FreeCollectModule",
                    followerOnly: false,
                    contractAddress:
                        "0x23b9467334bEb345aAa6fd1545538F3d54436e96",
                },
                referenceModule: null,
                appId: "orb",
                collectedBy: null,
                hidden: false,
                reaction: null,
                mirrors: [],
                hasCollectedByMe: false,
            },
        },
    ],
}

const ProfileTabs: React.FC<Props> = ({ activeTab, setActiveTab }) => {
    return (
        <>
            <Tabs value={activeTab} className="   w-full  rounded-3xl  ">
                <TabsHeader
                    className=" border-b md:border-blue-gray-50 p-0  mt-6 md:border rounded-3xl rounded-b-none pt-5 border-blue-gray-50  flex  items-center justify-between md:gap-x-20  "
                    indicatorProps={{
                        className: "bg-transparent shadow-none rounded-none",
                    }}
                >
                    <Tab
                        value={"posts"}
                        onClick={() => setActiveTab("posts")}
                        className={clsx(
                            activeTab === "posts"
                                ? "text-black  border-b-4 border-black pb-1 md:bg-transparent bg-gray-50 "
                                : "",
                            " text-center  font-semibold text-base pt-3 pb-2 md:pt-0 md:pb-4"
                        )}
                    >
                        Posts
                    </Tab>
                    <Tab
                        value={"replies"}
                        onClick={() => setActiveTab("replies")}
                        className={clsx(
                            activeTab === "replies"
                                ? "text-black  border-b-4 border-black pb-1 md:bg-transparent bg-gray-50 "
                                : "",
                            " text-center  font-semibold text-base pt-3 pb-2 md:pt-0 md:pb-4"
                        )}
                    >
                        Replies
                    </Tab>
                    <Tab
                        value={"media"}
                        onClick={() => setActiveTab("media")}
                        className={clsx(
                            activeTab === "media"
                                ? "text-black  border-b-4 border-black pb-1 md:bg-transparent bg-gray-50 "
                                : "",
                            " text-center  font-semibold text-base pt-3 pb-2 md:pt-0 md:pb-4"
                        )}
                    >
                        Media
                    </Tab>
                    <Tab
                        value={"likes"}
                        onClick={() => setActiveTab("likes")}
                        className={clsx(
                            activeTab === "likes"
                                ? "text-black  border-b-4 border-black pb-1 md:bg-transparent bg-gray-50 "
                                : "",
                            " text-center  font-semibold text-base pt-3 pb-2 md:pt-0 md:pb-4"
                        )}
                    >
                        Likes
                    </Tab>
                </TabsHeader>
                <TabsBody className="  w-full md:border  md:rounded-3xl md:rounded-t-none md:border-t-0">
                    <TabPanel className="w-full " key={"posts"} value={"posts"}>
                        <div className="  md:p-3 md:rounded-xl ">
                            <PostPreview />

                            {feedItems?.map((publication, index) => (
                                <div key={index}>
                                    <PostPreview
                                        authorName={
                                            publication.root.profile.name
                                        }
                                    />
                                </div>
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel key={"replies"} value={"replies"}>
                        <div className="  md:p-3 md:rounded-xl ">
                            <PostPreview />
                            <PostPreview />
                            <PostPreview />
                        </div>
                    </TabPanel>
                    <TabPanel key={"media"} value={"media"}>
                        <div className="  md:p-3 md:rounded-xl ">
                            <PostPreview />
                            <PostPreview />
                            <PostPreview />
                        </div>
                    </TabPanel>
                    <TabPanel key={"likes"} value={"likes"}>
                        <div className="  md:p-3 md:rounded-xl ">
                            <PostPreview />
                            <PostPreview />
                            <PostPreview />
                        </div>
                    </TabPanel>
                </TabsBody>
            </Tabs>
        </>
    )
}

export default ProfileTabs
