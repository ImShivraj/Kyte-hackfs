import SinglePublication from "@components/Publication/SinglePublication"
import { SCROLL_THRESHOLD } from "@constants/index"
// @ts-ignore
import type { FeedItem } from "lens"
import InfiniteScroll from "react-infinite-scroll-component"
import { Card } from "@components/UI/Card"
import { KytePublication } from "src/types"
import InfiniteLoader from "../ui/InfiniteLoader"

const feedItems = [
    {
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
                    followNftAddress:
                        "0x427FfB2D0cf32Fa0D5e64829a6d3aB5B65e046E1",
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
                            address:
                                "0xD1FecCF6881970105dfb2b654054174007f0e07E",
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
                        description:
                            "Can’t believe how bad I am at skiing 🎿 😢",
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
                    followNftAddress:
                        "0xc1Bf666ACD14DAd62d55457417E69D8705c3d2f0",
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
                            address:
                                "0xD1FecCF6881970105dfb2b654054174007f0e07E",
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
                        description:
                            "Can’t believe how bad I am at skiing 🎿 😢",
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
    },
    {
        root: {
            __typename: "Post",
            id: "0xc1bd-0x02be",
            profile: {
                id: "0xc1bd",
                name: "Dragaan",
                bio: "Singer-songwriter, music producer 🌿 \nCollect my music NFTs: https://opensea.io/collection/dragaan-originals\nLenstube: https://lenstube.xyz/dragaan.lens",
                attributes: [
                    {
                        displayType: null,
                        traitType: null,
                        key: "website",
                        value: "https://solo.to/dragaan",
                    },
                    {
                        displayType: null,
                        traitType: null,
                        key: "location",
                        value: "Cleveland, OH",
                    },
                    {
                        displayType: null,
                        traitType: null,
                        key: "twitter",
                        value: "dragaan_v1",
                    },
                    {
                        displayType: null,
                        traitType: null,
                        key: "app",
                        value: "lenstube",
                    },
                    {
                        displayType: null,
                        traitType: null,
                        key: "about",
                        value: "Hi, I'm Dragaan and WAGMI Fund is a way to both help fund my projects and bring you all into my world. I'm going to be giving unreleased material and unique, behind-the-scenes takes on how I make my music. \n\nYou'll get a look into parts of my creative process, hear some unreleased material that never made it out of my studio and you'll get early access to upcoming songs, concerts, streams, merch drops & discounts (depending on which tier you purchase).\n\nThis would allow me to focus less on pleasing algorithms and more on growing a community and getting to know you guys. Your contribution would allow me to make more ambitious projects and I won't have to rely on client work and streaming numbers to push things forward.\n\nI'm excited to grow together! LFGrow!",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "cardView",
                        value: "stack",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "corners",
                        value: "1.5",
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
                        key: "theme",
                        value: '{"h":212,"s":0.9199999999999997,"l":0.56,"a":1}',
                    },
                ],
                isFollowedByMe: false,
                isFollowing: false,
                followNftAddress: "0x749f85df735F485c9E9e0F54F44747780f81A396",
                metadata:
                    "https://arweave.net/ZIWvdk2VE1rwC4-OjM976rt-eyIHs_IvujZNjVE9N38",
                isDefault: false,
                handle: "dragaan.lens",
                picture: {
                    original: {
                        url: "https://lens.infura-ipfs.io/ipfs/QmUUXTQubWYTKdTh5HFtaSoXbn957BewcrgDnU8BgCrNkA",
                        mimeType: null,
                    },
                },
                coverPicture: null,
                ownedBy: "0x3188973471200Df1dA427c20D8f1eBD48AC70B3c",
                dispatcher: {
                    address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                },
                stats: {
                    totalFollowers: 932,
                    totalFollowing: 72,
                    totalPosts: 216,
                    totalComments: 349,
                    totalMirrors: 138,
                    totalPublications: 703,
                    totalCollects: 743,
                },
                followModule: null,
            },
            stats: {
                totalAmountOfMirrors: 4,
                totalAmountOfCollects: 0,
                totalAmountOfComments: 3,
            },
            metadata: {
                name: "Post by @dragaan.lens",
                description: null,
                content:
                    "LFGrow! Love this concept and I'm so glad this exists haha\nI can't wait to see this get more built upon. \nI'm also scared to see @gotenks.lens and @chriscomrie.lens stats lmfao\n\nhttps://lenswrap.tech/wrapped/dragaan",
                media: [
                    {
                        original: {
                            url: "ipfs://bafkreiazy5z3spe34mzvqrznzc4ccubfnkhig5umy6ffwq6s7hhsgv4ngm",
                            mimeType: "image/png",
                        },
                    },
                ],
                attributes: [
                    {
                        displayType: "string",
                        traitType: "type",
                        value: "image",
                    },
                ],
            },
            createdAt: "2023-01-13T16:34:02.000Z",
            collectModule: {
                __typename: "RevertCollectModuleSettings",
                type: "RevertCollectModule",
            },
            referenceModule: null,
            appId: "lenster",
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
                id: "0x011f55-0x08c5",
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
                    followNftAddress:
                        "0xc1Bf666ACD14DAd62d55457417E69D8705c3d2f0",
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
                    totalAmountOfMirrors: 1,
                    totalAmountOfCollects: 0,
                    totalAmountOfComments: 2,
                },
                metadata: {
                    name: "Comment by @chriscomrie",
                    description: "lololo  should i post mine? 👀",
                    content: "lololo  should i post mine? 👀",
                    media: [],
                    attributes: [],
                },
                createdAt: "2023-01-13T18:12:50.000Z",
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
                mainPost: {
                    id: "0xc1bd-0x02be",
                    profile: {
                        id: "0xc1bd",
                        name: "Dragaan",
                        bio: "Singer-songwriter, music producer 🌿 \nCollect my music NFTs: https://opensea.io/collection/dragaan-originals\nLenstube: https://lenstube.xyz/dragaan.lens",
                        attributes: [
                            {
                                displayType: null,
                                traitType: null,
                                key: "website",
                                value: "https://solo.to/dragaan",
                            },
                            {
                                displayType: null,
                                traitType: null,
                                key: "location",
                                value: "Cleveland, OH",
                            },
                            {
                                displayType: null,
                                traitType: null,
                                key: "twitter",
                                value: "dragaan_v1",
                            },
                            {
                                displayType: null,
                                traitType: null,
                                key: "app",
                                value: "lenstube",
                            },
                            {
                                displayType: null,
                                traitType: null,
                                key: "about",
                                value: "Hi, I'm Dragaan and WAGMI Fund is a way to both help fund my projects and bring you all into my world. I'm going to be giving unreleased material and unique, behind-the-scenes takes on how I make my music. \n\nYou'll get a look into parts of my creative process, hear some unreleased material that never made it out of my studio and you'll get early access to upcoming songs, concerts, streams, merch drops & discounts (depending on which tier you purchase).\n\nThis would allow me to focus less on pleasing algorithms and more on growing a community and getting to know you guys. Your contribution would allow me to make more ambitious projects and I won't have to rely on client work and streaming numbers to push things forward.\n\nI'm excited to grow together! LFGrow!",
                            },
                            {
                                displayType: null,
                                traitType: "string",
                                key: "cardView",
                                value: "stack",
                            },
                            {
                                displayType: null,
                                traitType: "string",
                                key: "corners",
                                value: "1.5",
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
                                key: "theme",
                                value: '{"h":212,"s":0.9199999999999997,"l":0.56,"a":1}',
                            },
                        ],
                        // Start from here
                        isFollowedByMe: false,
                        isFollowing: false,
                        followNftAddress:
                            "0x749f85df735F485c9E9e0F54F44747780f81A396",
                        metadata:
                            "https://arweave.net/ZIWvdk2VE1rwC4-OjM976rt-eyIHs_IvujZNjVE9N38",
                        isDefault: false,
                        handle: "dragaan.lens",
                        picture: {
                            original: {
                                url: "https://lens.infura-ipfs.io/ipfs/QmUUXTQubWYTKdTh5HFtaSoXbn957BewcrgDnU8BgCrNkA",
                                mimeType: null,
                            },
                        },
                        coverPicture: null,
                        ownedBy: "0x3188973471200Df1dA427c20D8f1eBD48AC70B3c",
                        dispatcher: {
                            address:
                                "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                        },
                        stats: {
                            totalFollowers: 932,
                            totalFollowing: 72,
                            totalPosts: 216,
                            totalComments: 349,
                            totalMirrors: 138,
                            totalPublications: 703,
                            totalCollects: 743,
                        },
                        followModule: null,
                    },
                    stats: {
                        totalAmountOfMirrors: 4,
                        totalAmountOfCollects: 0,
                        totalAmountOfComments: 3,
                    },
                    metadata: {
                        name: "Post by @dragaan.lens",
                        description: null,
                        content:
                            "LFGrow! Love this concept and I'm so glad this exists haha\nI can't wait to see this get more built upon. \nI'm also scared to see @gotenks.lens and @chriscomrie.lens stats lmfao\n\nhttps://lenswrap.tech/wrapped/dragaan",
                        media: [
                            {
                                original: {
                                    url: "ipfs://bafkreiazy5z3spe34mzvqrznzc4ccubfnkhig5umy6ffwq6s7hhsgv4ngm",
                                    mimeType: "image/png",
                                },
                            },
                        ],
                        attributes: [
                            {
                                displayType: "string",
                                traitType: "type",
                                value: "image",
                            },
                        ],
                    },
                    createdAt: "2023-01-13T16:34:02.000Z",
                    collectModule: {
                        __typename: "RevertCollectModuleSettings",
                        type: "RevertCollectModule",
                    },
                    referenceModule: null,
                    appId: "lenster",
                    collectedBy: null,
                    hidden: false,
                    reaction: null,
                    mirrors: [],
                    hasCollectedByMe: false,
                },
            },
        ],
    },
    {
        root: {
            __typename: "Post",
            id: "0x24-0x04f4",
            profile: {
                id: "0x24",
                name: "Bradley Freeman",
                bio: 'Growth @LensProtocol @AaveAave, CV#52, ex- @tiktok_us, views expressed = my own \n\n"Not your keys, not your content"\n\nLens is for creators',
                attributes: [
                    {
                        displayType: null,
                        traitType: "string",
                        key: "location",
                        value: "New York, NY",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "website",
                        value: "https://www.tiktok.com/@brad_or_bradley",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "twitter",
                        value: "brad_or_bradley",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "statusEmoji",
                        value: "🐝",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "statusMessage",
                        value: "writing and making more videos this year",
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
                followNftAddress: "0xBda3218ad2980Af729eD18EB09C6F825a78278eA",
                metadata:
                    "https://arweave.net/UVB1PffiNApvTGRwKPO51oQ2zfQg1GbxGT-T_yj3-_M",
                isDefault: true,
                handle: "bradorbradley.lens",
                picture: {
                    original: {
                        url: "https://lens.infura-ipfs.io/ipfs/QmQDEJeutE8UhcvdbQHJoFSSH3xf2Ze8pNpRtZoRpK8bAz",
                        mimeType: null,
                    },
                },
                coverPicture: {
                    original: {
                        url: "ipfs://bafybeidlhvvezur7j6mgg6daiwjh6nhaowwo4dcl2omaapag54udnf7gr4",
                        mimeType: null,
                    },
                },
                ownedBy: "0x8eC94086A724cbEC4D37097b8792cE99CaDCd520",
                dispatcher: {
                    address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                },
                stats: {
                    totalFollowers: 25312,
                    totalFollowing: 760,
                    totalPosts: 364,
                    totalComments: 378,
                    totalMirrors: 629,
                    totalPublications: 1371,
                    totalCollects: 10534,
                },
                followModule: null,
            },
            stats: {
                totalAmountOfMirrors: 4,
                totalAmountOfCollects: 10,
                totalAmountOfComments: 0,
            },
            metadata: {
                name: "Post by @bradorbradley.lens",
                description: null,
                content:
                    "fantastic lens ecosystem summary from @fabri.lens - and the first one ever on mirror.xyz! cool little piece of lens internet history https://mirror.xyz/0x7E0b0363404751346930AF92C80D1fef932Cc48a/QHsMG6JwYbBJxXDbVonGC1co2OrILivvscoESiy0qGo",
                media: [],
                attributes: [
                    {
                        displayType: "string",
                        traitType: "type",
                        value: "text_only",
                    },
                ],
            },
            createdAt: "2023-01-13T17:47:36.000Z",
            collectModule: {
                __typename: "FreeCollectModuleSettings",
                type: "FreeCollectModule",
                followerOnly: false,
                contractAddress: "0x23b9467334bEb345aAa6fd1545538F3d54436e96",
            },
            referenceModule: {},
            appId: "lenster",
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
        comments: [],
    },
    {
        root: {
            __typename: "Post",
            id: "0x8a58-0xa4",
            profile: {
                id: "0x8a58",
                name: "fabri.lens (🌿,👻)",
                bio: "DevRel Engineer  @LensProtocol @AaveAave\n\nWho to follow\nhttps://lists.inlens.xyz/users/0x8a58/lists",
                attributes: [
                    {
                        displayType: null,
                        traitType: "string",
                        key: "location",
                        value: "Lensverse",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "website",
                        value: "lens.xyz",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "twitter",
                        value: "fabriguespe",
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
                followNftAddress: "0xc72D7ac319202e9FabE283ca9E938305815A72Fa",
                metadata:
                    "https://arweave.net/Qs7kOzSDy8AHictY87e4EfLHsKxpWK7_a_7BADQkj0k",
                isDefault: true,
                handle: "fabri.lens",
                picture: {
                    original: {
                        url: "ipfs://bafkreifflpxyheb2bzqeygz7c3h3ytvpxcfobg5gl3liozawj64ph2jafu",
                        mimeType: null,
                    },
                },
                coverPicture: {
                    original: {
                        url: "ipfs://bafkreigo4ovkqvfpgqiscfkgflcrp33uhjz2g5jaxgxiwncmriqdarkpf4",
                        mimeType: null,
                    },
                },
                ownedBy: "0x7E0b0363404751346930AF92C80D1fef932Cc48a",
                dispatcher: {
                    address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                },
                stats: {
                    totalFollowers: 1244,
                    totalFollowing: 82,
                    totalPosts: 82,
                    totalComments: 19,
                    totalMirrors: 68,
                    totalPublications: 169,
                    totalCollects: 1015,
                },
                followModule: null,
            },
            stats: {
                totalAmountOfMirrors: 10,
                totalAmountOfCollects: 0,
                totalAmountOfComments: 6,
            },
            metadata: {
                name: "Post by @fabri.lens",
                description: null,
                content:
                    "**Lens Protocol Application Ecosystem Update 🌿 [2023]**\n\n\n\nThe #Lensverse is poised to become the largest developer ecosystem in history, thanks to the unparalleled openness and composability of web3 ecosystems and the ease of use of our API. With a growing market demand for social media applications, we’re on track to become the biggest on-ramp to the blockchain industry yet.\n\n\n\nIn just six short months, we’ve already seen nearly 300 applications and hackathon projects built on Lens. With exciting new projects and verticals emerging all the time, it’s an exciting time to be a part of the Lensverse.\n\n\n\nBoasting a user base of over 100,000 and facilitating over 10 million gasless transactions it’s an exhilarating time to be part of the Lensverse. So, let’s take a look at the latest curated applications, libraries, and resources that contribute to the growth and vitality of our ecosystem. None of this would have been achievable without the tireless efforts of all the incredibly talented teams working towards a shared vision.\n\n\n\nhttps://mirror.xyz/0x7E0b0363404751346930AF92C80D1fef932Cc48a/QHsMG6JwYbBJxXDbVonGC1co2OrILivvscoESiy0qGo\n\n",
                media: [],
                attributes: [
                    {
                        displayType: "string",
                        traitType: "type",
                        value: "text_only",
                    },
                ],
            },
            createdAt: "2023-01-11T12:33:55.000Z",
            collectModule: {
                __typename: "RevertCollectModuleSettings",
                type: "RevertCollectModule",
            },
            referenceModule: {},
            appId: "lenster",
            collectedBy: null,
            hidden: false,
            reaction: null,
            mirrors: [],
            hasCollectedByMe: false,
        },
        electedMirror: {
            mirrorId: "0x24-0x04f3",
            profile: {
                id: "0x24",
                handle: "bradorbradley.lens",
            },
            timestamp: "2023-01-13T17:46:08.000Z",
        },
        mirrors: [
            {
                profile: {
                    id: "0x24",
                    handle: "bradorbradley.lens",
                },
                timestamp: "2023-01-13T17:46:08.000Z",
            },
        ],
        collects: [],
        reactions: [],
        comments: [],
    },
    {
        root: {
            __typename: "Post",
            id: "0xf99d-0x0c",
            profile: {
                id: "0xf99d",
                name: "Amin Iman",
                bio: "DAO Contributor @ Somewhere Street // Developer DAO member #2530",
                attributes: [
                    {
                        displayType: null,
                        traitType: "string",
                        key: "website",
                        value: "https://linktr.ee/aminiman",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "twitter",
                        value: "aminiman89",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "app",
                        value: "Orb",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "location",
                        value: "San Diego",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "github",
                        value: "aminiman",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "linkedin",
                        value: "aminiman",
                    },
                    {
                        displayType: null,
                        traitType: "json",
                        key: "projects",
                        value: "[]",
                    },
                    {
                        displayType: null,
                        traitType: "json",
                        key: "skills",
                        value: "[]",
                    },
                    {
                        displayType: null,
                        traitType: "json",
                        key: "experience",
                        value: "[]",
                    },
                    {
                        displayType: null,
                        traitType: "json",
                        key: "education",
                        value: "[]",
                    },
                ],
                isFollowedByMe: false,
                isFollowing: false,
                followNftAddress: "0x22544323E00aFB96bB118d61CBDbf3B3a11aE495",
                metadata:
                    "https://arweave.net/_arjsMyeS3uprGqsV5_hwgFPeWiLDxOAPPKkiWsX8Ok",
                isDefault: false,
                handle: "amin1.lens",
                picture: {
                    original: {
                        url: "ipfs://QmcP5suYysSShQPgbiTig6B4iHkymBJJtkmnMbaokDQdrF",
                        mimeType: null,
                    },
                },
                coverPicture: {
                    original: {
                        url: "https://ik.imagekit.io/lensterimg/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/lensterimg/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/lensterimg/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/lensterimg/tr:n-attachment,tr:di-placeholder.webp/https://lens.infura-ipfs.io/ipfs/QmP7NcEGoyyLeFhRaBWXBVAibgUDiTsYhSZH2Hgc1n8tnk",
                        mimeType: null,
                    },
                },
                ownedBy: "0xD12b78Df063fC4bC7bb12CF1f060B55a15dD759d",
                dispatcher: {
                    address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                },
                stats: {
                    totalFollowers: 130,
                    totalFollowing: 31,
                    totalPosts: 9,
                    totalComments: 3,
                    totalMirrors: 0,
                    totalPublications: 12,
                    totalCollects: 12,
                },
                followModule: null,
            },
            stats: {
                totalAmountOfMirrors: 3,
                totalAmountOfCollects: 4,
                totalAmountOfComments: 0,
            },
            metadata: {
                name: "Post by @amin1",
                description:
                    "Happy birthday @nader and @stani!\n\nWishing you guys another year of great health and success along your way, while building the best web3 social graph out there  👏 🎉 🥳",
                content:
                    "Happy birthday @nader and @stani!\n\nWishing you guys another year of great health and success along your way, while building the best web3 social graph out there  👏 🎉 🥳",
                media: [],
                attributes: [],
            },
            createdAt: "2023-01-13T17:16:10.000Z",
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
        electedMirror: {
            mirrorId: "0x8e-0x06e2",
            profile: {
                id: "0x8e",
                handle: "christina.lens",
            },
            timestamp: "2023-01-13T17:39:52.000Z",
        },
        mirrors: [
            {
                profile: {
                    id: "0x8e",
                    handle: "christina.lens",
                },
                timestamp: "2023-01-13T17:39:52.000Z",
            },
        ],
        collects: [],
        reactions: [],
        comments: [],
    },
    {
        root: {
            __typename: "Post",
            id: "0x89dc-0x054a",
            profile: {
                id: "0x89dc",
                name: "Chaotic Monk",
                bio: "- Photographer: #FotoADay  📸\n- LensTuber:  https://lenstube.xyz/chaoticmonk.lens 📽️\n",
                attributes: [
                    {
                        displayType: null,
                        traitType: null,
                        key: "pinnedPublicationId",
                        value: "0x89dc-0x03e7",
                    },
                    {
                        displayType: null,
                        traitType: null,
                        key: "location",
                        value: "Germany",
                    },
                    {
                        displayType: null,
                        traitType: null,
                        key: "website",
                        value: "amoltyagi.com",
                    },
                    {
                        displayType: null,
                        traitType: null,
                        key: "statusEmoji",
                        value: "📸",
                    },
                    {
                        displayType: null,
                        traitType: null,
                        key: "statusMessage",
                        value: "Foto a Day. Everyday.",
                    },
                    {
                        displayType: null,
                        traitType: null,
                        key: "app",
                        value: "Lenster",
                    },
                ],
                isFollowedByMe: false,
                isFollowing: false,
                followNftAddress: "0xC5866Cc70ED898F905E1c4c5e33524472f31899a",
                metadata:
                    "https://arweave.net/HhEz0QN5flRSNXJTrQMXZiM6LZ5jCKpTxQoIy9WNouE",
                isDefault: true,
                handle: "chaoticmonk.lens",
                picture: {
                    original: {
                        url: "ipfs://QmQXdjmk3hGT3gMXMQppuiM6kaxzvXeWKr97VWGMLuy9UB",
                        mimeType: null,
                    },
                },
                coverPicture: {
                    original: {
                        url: "ipfs://bafybeif4ihmkvghq3rxt3hy4uvngoqkobyz5ei4znjp3fdsm6zj7gsi2ma",
                        mimeType: null,
                    },
                },
                ownedBy: "0x45dA50B5e5552Ffd010E309d296c88e393D227Ab",
                dispatcher: {
                    address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                },
                stats: {
                    totalFollowers: 894,
                    totalFollowing: 172,
                    totalPosts: 225,
                    totalComments: 676,
                    totalMirrors: 450,
                    totalPublications: 1351,
                    totalCollects: 1001,
                },
                followModule: null,
            },
            stats: {
                totalAmountOfMirrors: 8,
                totalAmountOfCollects: 1,
                totalAmountOfComments: 1,
            },
            metadata: {
                name: "Post by @chaoticmonk.lens",
                description: "Post by @chaoticmonk.lens",
                content:
                    "`Foto a Day #87`\nPlaying around with the 20 mins of sunlight in my room; sometimes there's just not a lot to shoot :) \n\nSingle Edition\n5 WMATIC\n50% Mirror Referral\nFollowers-only\n\n#LMCC #photography @creators @photographers\n#lensport #lenster #FotoADay",
                media: [
                    {
                        original: {
                            url: "ipfs://Qma4KauysZT1QDZM5tUo3w2kJqWhgehPFmYuU6BjP4QRnM",
                            mimeType: "image/jpeg",
                        },
                    },
                ],
                attributes: [],
            },
            createdAt: "2023-01-13T17:14:58.000Z",
            collectModule: {
                __typename: "LimitedFeeCollectModuleSettings",
                type: "LimitedFeeCollectModule",
                collectLimit: "1",
                amount: {
                    asset: {
                        name: "Wrapped Matic",
                        symbol: "WMATIC",
                        decimals: 18,
                        address: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
                    },
                    value: "5.0",
                },
                recipient: "0x45dA50B5e5552Ffd010E309d296c88e393D227Ab",
                referralFee: 50,
            },
            referenceModule: null,
            appId: "lensport",
            collectedBy: null,
            hidden: false,
            reaction: null,
            mirrors: [],
            hasCollectedByMe: false,
        },
        electedMirror: {
            mirrorId: "0x24-0x04f2",
            profile: {
                id: "0x24",
                handle: "bradorbradley.lens",
            },
            timestamp: "2023-01-13T17:39:46.000Z",
        },
        mirrors: [
            {
                profile: {
                    id: "0x24",
                    handle: "bradorbradley.lens",
                },
                timestamp: "2023-01-13T17:39:46.000Z",
            },
        ],
        collects: [],
        reactions: [],
        comments: [],
    },
    {
        root: {
            __typename: "Post",
            id: "0x011f55-0x08c3",
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
                totalAmountOfMirrors: 1,
                totalAmountOfCollects: 0,
                totalAmountOfComments: 0,
            },
            metadata: {
                name: "Post by @chriscomrie",
                description:
                    "Live now with @0xtommythomas.lens https://twitter.com/i/spaces/1djGXlXPWoPGZ",
                content:
                    "Live now with @0xtommythomas.lens https://twitter.com/i/spaces/1djGXlXPWoPGZ",
                media: [],
                attributes: [],
            },
            createdAt: "2023-01-13T17:02:49.000Z",
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
        comments: [],
    },
    {
        root: {
            __typename: "Post",
            id: "0x28ce-0x0182",
            profile: {
                id: "0x28ce",
                name: "treethought",
                bio: "decentralist, turtle stacker, cycle carpenter building https://amnisiac.xyz\n\nfailing minimalist",
                attributes: [
                    {
                        displayType: null,
                        traitType: "string",
                        key: "website",
                        value: "https://linktr.ee/treethought",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "twitter",
                        value: "treethought_",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "statusEmoji",
                        value: "💃",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "statusMessage",
                        value: " ",
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
                followNftAddress: "0x8e4785F9360c914173dC5757DE678cAddF79bBE0",
                metadata:
                    "https://arweave.net/JOjIIkZwpDEJ3eeWjn_YNNJBIN_3-YYfKGm72yoFAi4",
                isDefault: true,
                handle: "treethought.lens",
                picture: {
                    original: {
                        url: "ipfs://Qmc6S2qxD6zpkQ96joo7NRgksRSJUZVuTwGYpVFiuVcUzg",
                        mimeType: null,
                    },
                },
                coverPicture: {
                    original: {
                        url: "https://ik.imagekit.io/lensterimg/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/lensterimg/tr:n-attachment,tr:di-placeholder.webp/https://lens.infura-ipfs.io/ipfs/QmX2DRQT6w98fL4PCwKaRFFt2vZwsYGYWNQ4Gtec1p9Ey3",
                        mimeType: null,
                    },
                },
                ownedBy: "0xF4367eD4DBD13E5348B11436D3805aC8db20d9ce",
                dispatcher: {
                    address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                },
                stats: {
                    totalFollowers: 219,
                    totalFollowing: 307,
                    totalPosts: 67,
                    totalComments: 268,
                    totalMirrors: 59,
                    totalPublications: 394,
                    totalCollects: 398,
                },
                followModule: null,
            },
            stats: {
                totalAmountOfMirrors: 0,
                totalAmountOfCollects: 0,
                totalAmountOfComments: 0,
            },
            metadata: {
                name: "Post by @treethought.lens",
                description: null,
                content:
                    "ethereum KZG Summoning Ceremony is live! anyone can contribute randomness\nhttps://ceremony.ethereum.org/",
                media: [],
                attributes: [
                    {
                        displayType: "string",
                        traitType: "type",
                        value: "text_only",
                    },
                ],
            },
            createdAt: "2023-01-13T16:55:25.000Z",
            collectModule: {
                __typename: "RevertCollectModuleSettings",
                type: "RevertCollectModule",
            },
            referenceModule: {},
            appId: "lenster",
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
        comments: [],
    },
    {
        root: {
            __typename: "Post",
            id: "0xefb9-0xa1",
            profile: {
                id: "0xefb9",
                name: "kimlabu",
                bio: "lensfrens.xyz/wrost.lens\n\n@StarkGuardians\n@FibrousFinance\n@StarkNetRocks\n@mosoGallery\n@Carbonable_io\n#skullverse",
                attributes: [
                    {
                        displayType: null,
                        traitType: "string",
                        key: "location",
                        value: "türkiye",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "twitter",
                        value: "@kimlabu11",
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
                followNftAddress: "0x5697eB997175Bd9D3c1cf67a2069bD83afDCad6f",
                metadata:
                    "https://arweave.net/SGe37KxCSO5ASfU_S8R_XQS6d08c1I-6HvOH-ugD6_s",
                isDefault: false,
                handle: "wrost.lens",
                picture: {
                    contractAddress:
                        "0x114b6bd2c32699B130880450BC5B0F18124f6bc4",
                    tokenId: "1",
                    uri: "https://statics-polygon-lens.s3.eu-west-1.amazonaws.com/profile/nft-0xee7028E9C5240d77876efBAC5acD0E7cE2012b19_polygon_0x114b6bd2c32699B130880450BC5B0F18124f6bc4_1.jpg",
                    verified: true,
                },
                coverPicture: {
                    original: {
                        url: "ipfs://QmTDCMcsYQhQd8B2rRsnuatFEjPMbEp1CmutWHXDdaMCpe",
                        mimeType: null,
                    },
                },
                ownedBy: "0xee7028E9C5240d77876efBAC5acD0E7cE2012b19",
                dispatcher: {
                    address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                },
                stats: {
                    totalFollowers: 641,
                    totalFollowing: 1731,
                    totalPosts: 104,
                    totalComments: 13,
                    totalMirrors: 43,
                    totalPublications: 160,
                    totalCollects: 62,
                },
                followModule: null,
            },
            stats: {
                totalAmountOfMirrors: 0,
                totalAmountOfCollects: 0,
                totalAmountOfComments: 0,
            },
            metadata: {
                name: "After the problems, come to #Hepton's new discord account.",
                description: null,
                content:
                    "After the problems, come to #Hepton's new discord account.\n\n[Hepton on Twitter](https://twitter.com/HeptonL2/status/1613923144112439297)\n“We don't want you to miss any important announcements and information from us, so please join our new #Discord server.\n\nhttps://t.co/QRrf24Detm”",
                media: [
                    {
                        original: {
                            url: "https://images.lens.phaver.com/insecure/raw:1/plain/56081d1752635d240c2ea60521c40b91",
                            mimeType: "image/jpeg",
                        },
                    },
                ],
                attributes: [],
            },
            createdAt: "2023-01-13T16:30:56.000Z",
            collectModule: {
                __typename: "FreeCollectModuleSettings",
                type: "FreeCollectModule",
                followerOnly: false,
                contractAddress: "0x23b9467334bEb345aAa6fd1545538F3d54436e96",
            },
            referenceModule: null,
            appId: "phaver",
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
        comments: [],
    },
    {
        root: {
            __typename: "Post",
            id: "0x73b1-0x0e3a",
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
                totalAmountOfMirrors: 1,
                totalAmountOfCollects: 4,
                totalAmountOfComments: 5,
            },
            metadata: {
                name: "Post by @jessyjeanne",
                description: "Time to relax 🥹",
                content: "Time to relax 🥹",
                media: [
                    {
                        original: {
                            url: "ipfs://QmfZkNHpmDQGF9TMMvRaSmKGB3xdadwyfSmGYRWsBXuRzV",
                            mimeType: "image/jpeg",
                        },
                    },
                    {
                        original: {
                            url: "ipfs://QmfD1SG2vNysDnq2jJRZxPTKnhfaXpWvzNQ2kF7ozDesFp",
                            mimeType: "image/jpeg",
                        },
                    },
                ],
                attributes: [],
            },
            createdAt: "2023-01-13T16:24:48.000Z",
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
        comments: [],
    },
    {
        root: {
            __typename: "Post",
            id: "0x01a2fe-0x2d",
            profile: {
                id: "0x01a2fe",
                name: "｡ₓˑ༺ʚ♡ Violet Forest ♡ɞ༻ˑₓ",
                bio: "experimental NFT artist \nhttp://fxhash.xyz/generative/8723",
                attributes: [
                    {
                        displayType: null,
                        traitType: null,
                        key: "website",
                        value: "violetforest.com",
                    },
                    {
                        displayType: null,
                        traitType: null,
                        key: "twitter",
                        value: "violet_forest",
                    },
                    {
                        displayType: null,
                        traitType: null,
                        key: "app",
                        value: "Lenster",
                    },
                ],
                isFollowedByMe: false,
                isFollowing: false,
                followNftAddress: "0x49b50fF2b62dC38924E8615Ab1d7861064c08e23",
                metadata:
                    "https://arweave.net/WIo367ZyMnO2OKd95IKkukwrzhtTxU-tLgSlrx2KRE4",
                isDefault: true,
                handle: "violetforest.lens",
                picture: {
                    contractAddress:
                        "0xf343753518D7E56294dc488ff1aB87C726C73ca7",
                    tokenId: "44",
                    uri: "https://statics-polygon-lens.s3.eu-west-1.amazonaws.com/profile/nft-0x4316c47Ece0D202b032517B3B930c08C56dCFa93_eth_0xf343753518D7E56294dc488ff1aB87C726C73ca7_44.png",
                    verified: true,
                },
                coverPicture: {
                    original: {
                        url: "ipfs://bafybeifvcapdtn6qu4sxhpgn45jh4vl6mcmzfdv3ocxruccz4fxxnjtucy",
                        mimeType: null,
                    },
                },
                ownedBy: "0x4316c47Ece0D202b032517B3B930c08C56dCFa93",
                dispatcher: {
                    address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                },
                stats: {
                    totalFollowers: 29,
                    totalFollowing: 66,
                    totalPosts: 34,
                    totalComments: 4,
                    totalMirrors: 7,
                    totalPublications: 45,
                    totalCollects: 56,
                },
                followModule: {
                    type: "FeeFollowModule",
                    amount: {
                        asset: {
                            name: "Wrapped Matic",
                            symbol: "WMATIC",
                            decimals: 18,
                            address:
                                "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
                        },
                        value: "1.0",
                    },
                    recipient: "0x4316c47Ece0D202b032517B3B930c08C56dCFa93",
                },
            },
            stats: {
                totalAmountOfMirrors: 1,
                totalAmountOfCollects: 0,
                totalAmountOfComments: 0,
            },
            metadata: {
                name: "Post by @violetforest.lens",
                description: null,
                content:
                    "𓆩♡𓆪\n\ncybertwee devices ˖ ͘ ⭑ ֺ°̥࿐\n\n\n\nbuyer will get rights to use their device as cover album art for their vinyl / 💿 / soundcloud / bandcamp / spotify etc.\n\n✩°｡⋆⸜ 🎧\n\n\n\n3780 x 3780 pixels\n\n300 dpi\n\n\n\nhttps://foundation.app/collection/cybrtwee\n\n#musicnft \n\nﮩ٨ـﮩﮩ٨ـ♡ﮩ٨ـﮩﮩ٨ـ",
                media: [
                    {
                        original: {
                            url: "ipfs://bafybeibbajxtcmr65glxd7dwrms7cjpbalh63dbweldh64l6gtox6mi6we",
                            mimeType: "video/quicktime",
                        },
                    },
                ],
                attributes: [
                    {
                        displayType: "string",
                        traitType: "type",
                        value: "video",
                    },
                ],
            },
            createdAt: "2023-01-13T16:06:38.000Z",
            collectModule: {
                __typename: "RevertCollectModuleSettings",
                type: "RevertCollectModule",
            },
            referenceModule: {},
            appId: "lenster",
            collectedBy: null,
            hidden: false,
            reaction: null,
            mirrors: [],
            hasCollectedByMe: false,
        },
        electedMirror: {
            mirrorId: "0x73b1-0x0e39",
            profile: {
                id: "0x73b1",
                handle: "jessyjeanne.lens",
            },
            timestamp: "2023-01-13T16:15:28.000Z",
        },
        mirrors: [
            {
                profile: {
                    id: "0x73b1",
                    handle: "jessyjeanne.lens",
                },
                timestamp: "2023-01-13T16:15:28.000Z",
            },
        ],
        collects: [],
        reactions: [],
        comments: [],
    },
    {
        root: {
            __typename: "Post",
            id: "0x019b72-0x59",
            profile: {
                id: "0x019b72",
                name: "Buttrfly 🦋",
                bio: "A mobile app for @LensProtocol\nBuilt by @0xMoe.lens\n\nBeta now available for iOS\n🦋×🌿",
                attributes: [
                    {
                        displayType: null,
                        traitType: null,
                        key: "website",
                        value: "https://buttrfly.app",
                    },
                    {
                        displayType: null,
                        traitType: null,
                        key: "twitter",
                        value: "buttrfly_app",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "cardView",
                        value: "stack",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "corners",
                        value: "0.5",
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
                        value: "GM friends!\n\n\n\n\n\nButtrfly is a mobile app for Lens focusing on providing a great user experience. It allows you to follow your favorite profiles, browse the latest posts and comments, message your friends through XMTP integration, keep a tab on all your notifications, and much more.\n\n\n\n\n\nLots of features are planned for Buttrfly like flexible push notifications, quote posts, shareable and discoverable lists of profiles, drafts, better DM support, better wallet connections, and more cool secret features. 😉\n\n\n\n\n\nButtrfly is designed and built by one developer, so your support is really appreciated.\n\n🦋×🌿\n\n\n\n\n\nWebsite: [https://buttrfly.app](https://buttrfly.app)\n\n[TestFlight link:  https://testflight.apple.com/join/lvmRCNU3](https://testflight.apple.com/join/lvmRCNU3)",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "theme",
                        value: '{"h":212,"s":0.9199999999999997,"l":0.56,"a":1}',
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "pinnedPublicationId",
                        value: "0x019b72-0x54",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "app",
                        value: "Buttrfly",
                    },
                ],
                isFollowedByMe: false,
                isFollowing: false,
                followNftAddress: "0x0Fa352821982252C6BEC5C520405BF9184a97495",
                metadata:
                    "https://arweave.net/WU3Juhd4GNdOkrWVRkv3J7VQsaAizpKMohr-S3xyQCs",
                isDefault: true,
                handle: "buttrfly.lens",
                picture: {
                    original: {
                        url: "ipfs://QmRGqvYNDuNa88WoYcTP1xvcSNmACTxkqZU3LbL4ZWGhZP",
                        mimeType: null,
                    },
                },
                coverPicture: null,
                ownedBy: "0x25Ff889d0DEbf5D1e04bbA290AfF5273021B9C07",
                dispatcher: {
                    address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                },
                stats: {
                    totalFollowers: 531,
                    totalFollowing: 2,
                    totalPosts: 7,
                    totalComments: 22,
                    totalMirrors: 54,
                    totalPublications: 83,
                    totalCollects: 54,
                },
                followModule: null,
            },
            stats: {
                totalAmountOfMirrors: 2,
                totalAmountOfCollects: 0,
                totalAmountOfComments: 2,
            },
            metadata: {
                name: "Post by @buttrfly.lens",
                description: "GM 🦢\n\n___\nQuoting @0xmoe.lens :\nGM! 🦩",
                content: "GM 🦢\n\n___\nQuoting @0xmoe.lens :\nGM! 🦩",
                media: [],
                attributes: [
                    {
                        displayType: "string",
                        traitType: "quotedPublicationId",
                        value: "0x2b9a-0x018e",
                    },
                ],
            },
            createdAt: "2023-01-13T16:04:44.000Z",
            collectModule: {
                __typename: "FreeCollectModuleSettings",
                type: "FreeCollectModule",
                followerOnly: true,
                contractAddress: "0x23b9467334bEb345aAa6fd1545538F3d54436e96",
            },
            referenceModule: null,
            appId: "buttrfly",
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
        comments: [],
    },
    {
        root: {
            __typename: "Post",
            id: "0xaeea-0x0182",
            profile: {
                id: "0xaeea",
                name: "amber",
                bio: "photographer & digital artist | art/design @ Mai Finance ",
                attributes: [
                    {
                        displayType: null,
                        traitType: null,
                        key: "statusMessage",
                        value: "making art 👻",
                    },
                    {
                        displayType: null,
                        traitType: null,
                        key: "app",
                        value: "Lenster",
                    },
                    {
                        displayType: null,
                        traitType: null,
                        key: "cardView",
                        value: "card",
                    },
                    {
                        displayType: null,
                        traitType: null,
                        key: "corners",
                        value: "1.5",
                    },
                    {
                        displayType: null,
                        traitType: null,
                        key: "gradient",
                        value: "true",
                    },
                    {
                        displayType: null,
                        traitType: null,
                        key: "about",
                        value: "Thank you for providing all the fuel I need for my creative endeavors 💜",
                    },
                    {
                        displayType: null,
                        traitType: null,
                        key: "theme",
                        value: '{"h":189,"s":0.94,"l":0.43,"a":1}',
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "location",
                        value: "NYC",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "twitter",
                        value: "arterlioz",
                    },
                ],
                isFollowedByMe: false,
                isFollowing: false,
                followNftAddress: "0x21200692967439a7eEec5bd1B51019Eb3Ff70437",
                metadata:
                    "https://arweave.net/xFQbFCxyO-HsHJNLsQSqmXs0JPUalY13OhJS7Av--sE",
                isDefault: false,
                handle: "arterlioz.lens",
                picture: {
                    original: {
                        url: "https://lens.infura-ipfs.io/ipfs/QmfTFdg39cBrpuo8x7M6HLaFtDgxyYCepVV9jpnivFm16E",
                        mimeType: null,
                    },
                },
                coverPicture: {
                    original: {
                        url: "ipfs://bafybeidgkzilh5kulhkbukim3ikzrovge4yvhrcpljpwuutnb4budbivyy",
                        mimeType: null,
                    },
                },
                ownedBy: "0x399e62557a267B0aBd6E99bF22e5aF5A21Ead53b",
                dispatcher: {
                    address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                },
                stats: {
                    totalFollowers: 554,
                    totalFollowing: 110,
                    totalPosts: 98,
                    totalComments: 198,
                    totalMirrors: 90,
                    totalPublications: 386,
                    totalCollects: 1110,
                },
                followModule: null,
            },
            stats: {
                totalAmountOfMirrors: 5,
                totalAmountOfCollects: 16,
                totalAmountOfComments: 10,
            },
            metadata: {
                name: "Post by @arterlioz.lens",
                description: null,
                content:
                    "Not bad for my first #lenswrap 🙈\n\n\n\nhttps://lenswrap.tech/",
                media: [
                    {
                        original: {
                            url: "ipfs://bafkreidkcjmk6qrem2ppgftsizxt5xc5y3mxfgkrryohxdcmi7t4yw4nym",
                            mimeType: "image/png",
                        },
                    },
                ],
                attributes: [
                    {
                        displayType: "string",
                        traitType: "type",
                        value: "image",
                    },
                ],
            },
            createdAt: "2023-01-13T01:59:36.000Z",
            collectModule: {
                __typename: "FreeCollectModuleSettings",
                type: "FreeCollectModule",
                followerOnly: false,
                contractAddress: "0x23b9467334bEb345aAa6fd1545538F3d54436e96",
            },
            referenceModule: null,
            appId: "lenster",
            collectedBy: null,
            hidden: false,
            reaction: null,
            mirrors: [],
            hasCollectedByMe: false,
        },
        electedMirror: {
            mirrorId: "0x28a2-0x03f3",
            profile: {
                id: "0x28a2",
                handle: "nader.lens",
            },
            timestamp: "2023-01-13T16:00:58.000Z",
        },
        mirrors: [
            {
                profile: {
                    id: "0x28a2",
                    handle: "nader.lens",
                },
                timestamp: "2023-01-13T16:00:58.000Z",
            },
        ],
        collects: [],
        reactions: [],
        comments: [],
    },
    {
        root: {
            __typename: "Post",
            id: "0xa68c-0x02f9",
            profile: {
                id: "0xa68c",
                name: "Juampi",
                bio: "Building on @lensprotocol || Creator of @Coconnect.lens || System engenieer || Business developer and content creator\n",
                attributes: [
                    {
                        displayType: null,
                        traitType: "string",
                        key: "location",
                        value: "Argentina",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "website",
                        value: "https://medium.com/@JuampiHernandez",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "twitter",
                        value: "HooCrypto",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "app",
                        value: "Orb",
                    },
                    {
                        displayType: null,
                        traitType: "json",
                        key: "projects",
                        value: "[]",
                    },
                    {
                        displayType: null,
                        traitType: "json",
                        key: "skills",
                        value: '[{"title":"System engenieer","icon":null,"nfts":[],"poaps":[]},{"title":"Business Developer","icon":null,"nfts":[],"poaps":[]},{"title":"Content creator","icon":null,"nfts":[],"poaps":[]}]',
                    },
                    {
                        displayType: null,
                        traitType: "json",
                        key: "experience",
                        value: "[]",
                    },
                    {
                        displayType: null,
                        traitType: "json",
                        key: "education",
                        value: "[]",
                    },
                ],
                isFollowedByMe: false,
                isFollowing: false,
                followNftAddress: "0x24AF0c373Dd0fc0BcB5989eB83227c5Dc7c9B004",
                metadata:
                    "https://arweave.net/T6Fct7YL8NL56VAYwGRqwG6jpHRg91ONMnDo4k_EdvU",
                isDefault: true,
                handle: "juampi.lens",
                picture: {
                    original: {
                        url: "ipfs://QmQzjhHuprohns59P5GmbCbpy9LwRU12S5ngZsf9HWzw3M",
                        mimeType: null,
                    },
                },
                coverPicture: {
                    original: {
                        url: "https://ik.imagekit.io/lensterimg/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/lensterimg/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/lensterimg/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/lensterimg/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/lensterimg/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/lensterimg/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/lensterimg/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/lensterimg/tr:n-attachment,tr:di-placeholder.webp/https://lens.infura-ipfs.io/ipfs/Qmc5sAmD8yXQNyVCDz5BqwptQwFqy6LwThGDFu7AaXtZmG",
                        mimeType: null,
                    },
                },
                ownedBy: "0xA081e1dA16133bB4Ebc7Aab1A9B0588A48D15138",
                dispatcher: {
                    address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                },
                stats: {
                    totalFollowers: 1140,
                    totalFollowing: 174,
                    totalPosts: 401,
                    totalComments: 262,
                    totalMirrors: 92,
                    totalPublications: 755,
                    totalCollects: 1396,
                },
                followModule: null,
            },
            stats: {
                totalAmountOfMirrors: 7,
                totalAmountOfCollects: 2,
                totalAmountOfComments: 2,
            },
            metadata: {
                name: "Exploring The Garden 🔎🌿  #1 - Lens landscape, How to grow your socials, LATAM, Twitter and More!",
                description:
                    "In this first episode I will be talking with  @chriscomrie.lens in one of his Twitter Spaces about the Lens ecosystem, my experience and more!\n\nPlease #LMCC to help me continue this serie! Share using #ExploringTheGarden\n\nWho I should collab next? Tag them below👇🏻👇🏻",
                content:
                    "Exploring The Garden 🔎🌿  #1 - Lens landscape, How to grow your socials, LATAM, Twitter and More!\n\nIn this first episode I will be talking with  @chriscomrie.lens in one of his Twitter Spaces about the Lens ecosystem, my experience and more!\n\nPlease #LMCC to help me continue this serie! Share using #ExploringTheGarden\n\nWho I should collab next? Tag them below👇🏻👇🏻",
                media: [
                    {
                        original: {
                            url: "https://arweave.net/Dlm-61oyaJOpQyT4PCqVSxyYQaOKNIEXLQfR7DjtpNU",
                            mimeType: "video/mp4",
                        },
                    },
                ],
                attributes: [
                    {
                        displayType: "string",
                        traitType: "handle",
                        value: "juampi.lens",
                    },
                    {
                        displayType: "string",
                        traitType: "app",
                        value: "lenstube",
                    },
                    {
                        displayType: "string",
                        traitType: "durationInSeconds",
                        value: "1678.68",
                    },
                ],
            },
            createdAt: "2023-01-13T15:21:08.000Z",
            collectModule: {
                __typename: "FeeCollectModuleSettings",
                type: "FeeCollectModule",
                amount: {
                    asset: {
                        name: "Wrapped Matic",
                        symbol: "WMATIC",
                        decimals: 18,
                        address: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
                    },
                    value: "1.0",
                },
                recipient: "0xA081e1dA16133bB4Ebc7Aab1A9B0588A48D15138",
                referralFee: 20,
            },
            referenceModule: null,
            appId: "lenstube",
            collectedBy: null,
            hidden: false,
            reaction: null,
            mirrors: [],
            hasCollectedByMe: false,
        },
        electedMirror: {
            mirrorId: "0x011f55-0x08c0",
            profile: {
                id: "0x011f55",
                handle: "chriscomrie.lens",
            },
            timestamp: "2023-01-13T15:54:08.000Z",
        },
        mirrors: [
            {
                profile: {
                    id: "0x28a2",
                    handle: "nader.lens",
                },
                timestamp: "2023-01-13T16:00:46.000Z",
            },
            {
                profile: {
                    id: "0x011f55",
                    handle: "chriscomrie.lens",
                },
                timestamp: "2023-01-13T15:54:08.000Z",
            },
        ],
        collects: [],
        reactions: [],
        comments: [
            {
                id: "0x011f55-0x08c2",
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
                    followNftAddress:
                        "0xc1Bf666ACD14DAd62d55457417E69D8705c3d2f0",
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
                    name: "Comment by @chriscomrie.lens",
                    description: null,
                    content:
                        "this was a great audio session- anyone that wants to learn some alpha on how to grow their audience on Lens should give this a listen end to end!",
                    media: [],
                    attributes: [
                        {
                            displayType: "string",
                            traitType: "type",
                            value: "text_only",
                        },
                    ],
                },
                createdAt: "2023-01-13T15:57:38.000Z",
                collectModule: {
                    __typename: "RevertCollectModuleSettings",
                    type: "RevertCollectModule",
                },
                referenceModule: {},
                appId: "lenster",
                collectedBy: null,
                hidden: false,
                reaction: null,
                mirrors: [],
                hasCollectedByMe: false,
                mainPost: {
                    id: "0xa68c-0x02f9",
                    profile: {
                        id: "0xa68c",
                        name: "Juampi",
                        bio: "Building on @lensprotocol || Creator of @Coconnect.lens || System engenieer || Business developer and content creator\n",
                        attributes: [
                            {
                                displayType: null,
                                traitType: "string",
                                key: "location",
                                value: "Argentina",
                            },
                            {
                                displayType: null,
                                traitType: "string",
                                key: "website",
                                value: "https://medium.com/@JuampiHernandez",
                            },
                            {
                                displayType: null,
                                traitType: "string",
                                key: "twitter",
                                value: "HooCrypto",
                            },
                            {
                                displayType: null,
                                traitType: "string",
                                key: "app",
                                value: "Orb",
                            },
                            {
                                displayType: null,
                                traitType: "json",
                                key: "projects",
                                value: "[]",
                            },
                            {
                                displayType: null,
                                traitType: "json",
                                key: "skills",
                                value: '[{"title":"System engenieer","icon":null,"nfts":[],"poaps":[]},{"title":"Business Developer","icon":null,"nfts":[],"poaps":[]},{"title":"Content creator","icon":null,"nfts":[],"poaps":[]}]',
                            },
                            {
                                displayType: null,
                                traitType: "json",
                                key: "experience",
                                value: "[]",
                            },
                            {
                                displayType: null,
                                traitType: "json",
                                key: "education",
                                value: "[]",
                            },
                        ],
                        isFollowedByMe: false,
                        isFollowing: false,
                        followNftAddress:
                            "0x24AF0c373Dd0fc0BcB5989eB83227c5Dc7c9B004",
                        metadata:
                            "https://arweave.net/T6Fct7YL8NL56VAYwGRqwG6jpHRg91ONMnDo4k_EdvU",
                        isDefault: true,
                        handle: "juampi.lens",
                        picture: {
                            original: {
                                url: "ipfs://QmQzjhHuprohns59P5GmbCbpy9LwRU12S5ngZsf9HWzw3M",
                                mimeType: null,
                            },
                        },
                        coverPicture: {
                            original: {
                                url: "https://ik.imagekit.io/lensterimg/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/lensterimg/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/lensterimg/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/lensterimg/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/lensterimg/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/lensterimg/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/lensterimg/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/lensterimg/tr:n-attachment,tr:di-placeholder.webp/https://lens.infura-ipfs.io/ipfs/Qmc5sAmD8yXQNyVCDz5BqwptQwFqy6LwThGDFu7AaXtZmG",
                                mimeType: null,
                            },
                        },
                        ownedBy: "0xA081e1dA16133bB4Ebc7Aab1A9B0588A48D15138",
                        dispatcher: {
                            address:
                                "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                        },
                        stats: {
                            totalFollowers: 1140,
                            totalFollowing: 174,
                            totalPosts: 401,
                            totalComments: 262,
                            totalMirrors: 92,
                            totalPublications: 755,
                            totalCollects: 1396,
                        },
                        followModule: null,
                    },
                    stats: {
                        totalAmountOfMirrors: 7,
                        totalAmountOfCollects: 2,
                        totalAmountOfComments: 2,
                    },
                    metadata: {
                        name: "Exploring The Garden 🔎🌿  #1 - Lens landscape, How to grow your socials, LATAM, Twitter and More!",
                        description:
                            "In this first episode I will be talking with  @chriscomrie.lens in one of his Twitter Spaces about the Lens ecosystem, my experience and more!\n\nPlease #LMCC to help me continue this serie! Share using #ExploringTheGarden\n\nWho I should collab next? Tag them below👇🏻👇🏻",
                        content:
                            "Exploring The Garden 🔎🌿  #1 - Lens landscape, How to grow your socials, LATAM, Twitter and More!\n\nIn this first episode I will be talking with  @chriscomrie.lens in one of his Twitter Spaces about the Lens ecosystem, my experience and more!\n\nPlease #LMCC to help me continue this serie! Share using #ExploringTheGarden\n\nWho I should collab next? Tag them below👇🏻👇🏻",
                        media: [
                            {
                                original: {
                                    url: "https://arweave.net/Dlm-61oyaJOpQyT4PCqVSxyYQaOKNIEXLQfR7DjtpNU",
                                    mimeType: "video/mp4",
                                },
                            },
                        ],
                        attributes: [
                            {
                                displayType: "string",
                                traitType: "handle",
                                value: "juampi.lens",
                            },
                            {
                                displayType: "string",
                                traitType: "app",
                                value: "lenstube",
                            },
                            {
                                displayType: "string",
                                traitType: "durationInSeconds",
                                value: "1678.68",
                            },
                        ],
                    },
                    createdAt: "2023-01-13T15:21:08.000Z",
                    collectModule: {
                        __typename: "FeeCollectModuleSettings",
                        type: "FeeCollectModule",
                        amount: {
                            asset: {
                                name: "Wrapped Matic",
                                symbol: "WMATIC",
                                decimals: 18,
                                address:
                                    "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
                            },
                            value: "1.0",
                        },
                        recipient: "0xA081e1dA16133bB4Ebc7Aab1A9B0588A48D15138",
                        referralFee: 20,
                    },
                    referenceModule: null,
                    appId: "lenstube",
                    collectedBy: null,
                    hidden: false,
                    reaction: null,
                    mirrors: [],
                    hasCollectedByMe: false,
                },
            },
            {
                id: "0x011f55-0x08c1",
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
                    followNftAddress:
                        "0xc1Bf666ACD14DAd62d55457417E69D8705c3d2f0",
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
                    name: "Comment by @chriscomrie.lens",
                    description: null,
                    content: "KING  👑👑👑 JUAMP!!! ",
                    media: [],
                    attributes: [
                        {
                            displayType: "string",
                            traitType: "type",
                            value: "text_only",
                        },
                    ],
                },
                createdAt: "2023-01-13T15:54:46.000Z",
                collectModule: {
                    __typename: "RevertCollectModuleSettings",
                    type: "RevertCollectModule",
                },
                referenceModule: {},
                appId: "lenster",
                collectedBy: null,
                hidden: false,
                reaction: null,
                mirrors: [],
                hasCollectedByMe: false,
                mainPost: {
                    id: "0xa68c-0x02f9",
                    profile: {
                        id: "0xa68c",
                        name: "Juampi",
                        bio: "Building on @lensprotocol || Creator of @Coconnect.lens || System engenieer || Business developer and content creator\n",
                        attributes: [
                            {
                                displayType: null,
                                traitType: "string",
                                key: "location",
                                value: "Argentina",
                            },
                            {
                                displayType: null,
                                traitType: "string",
                                key: "website",
                                value: "https://medium.com/@JuampiHernandez",
                            },
                            {
                                displayType: null,
                                traitType: "string",
                                key: "twitter",
                                value: "HooCrypto",
                            },
                            {
                                displayType: null,
                                traitType: "string",
                                key: "app",
                                value: "Orb",
                            },
                            {
                                displayType: null,
                                traitType: "json",
                                key: "projects",
                                value: "[]",
                            },
                            {
                                displayType: null,
                                traitType: "json",
                                key: "skills",
                                value: '[{"title":"System engenieer","icon":null,"nfts":[],"poaps":[]},{"title":"Business Developer","icon":null,"nfts":[],"poaps":[]},{"title":"Content creator","icon":null,"nfts":[],"poaps":[]}]',
                            },
                            {
                                displayType: null,
                                traitType: "json",
                                key: "experience",
                                value: "[]",
                            },
                            {
                                displayType: null,
                                traitType: "json",
                                key: "education",
                                value: "[]",
                            },
                        ],
                        isFollowedByMe: false,
                        isFollowing: false,
                        followNftAddress:
                            "0x24AF0c373Dd0fc0BcB5989eB83227c5Dc7c9B004",
                        metadata:
                            "https://arweave.net/T6Fct7YL8NL56VAYwGRqwG6jpHRg91ONMnDo4k_EdvU",
                        isDefault: true,
                        handle: "juampi.lens",
                        picture: {
                            original: {
                                url: "ipfs://QmQzjhHuprohns59P5GmbCbpy9LwRU12S5ngZsf9HWzw3M",
                                mimeType: null,
                            },
                        },
                        coverPicture: {
                            original: {
                                url: "https://ik.imagekit.io/lensterimg/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/lensterimg/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/lensterimg/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/lensterimg/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/lensterimg/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/lensterimg/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/lensterimg/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/lensterimg/tr:n-attachment,tr:di-placeholder.webp/https://lens.infura-ipfs.io/ipfs/Qmc5sAmD8yXQNyVCDz5BqwptQwFqy6LwThGDFu7AaXtZmG",
                                mimeType: null,
                            },
                        },
                        ownedBy: "0xA081e1dA16133bB4Ebc7Aab1A9B0588A48D15138",
                        dispatcher: {
                            address:
                                "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                        },
                        stats: {
                            totalFollowers: 1140,
                            totalFollowing: 174,
                            totalPosts: 401,
                            totalComments: 262,
                            totalMirrors: 92,
                            totalPublications: 755,
                            totalCollects: 1396,
                        },
                        followModule: null,
                    },
                    stats: {
                        totalAmountOfMirrors: 7,
                        totalAmountOfCollects: 2,
                        totalAmountOfComments: 2,
                    },
                    metadata: {
                        name: "Exploring The Garden 🔎🌿  #1 - Lens landscape, How to grow your socials, LATAM, Twitter and More!",
                        description:
                            "In this first episode I will be talking with  @chriscomrie.lens in one of his Twitter Spaces about the Lens ecosystem, my experience and more!\n\nPlease #LMCC to help me continue this serie! Share using #ExploringTheGarden\n\nWho I should collab next? Tag them below👇🏻👇🏻",
                        content:
                            "Exploring The Garden 🔎🌿  #1 - Lens landscape, How to grow your socials, LATAM, Twitter and More!\n\nIn this first episode I will be talking with  @chriscomrie.lens in one of his Twitter Spaces about the Lens ecosystem, my experience and more!\n\nPlease #LMCC to help me continue this serie! Share using #ExploringTheGarden\n\nWho I should collab next? Tag them below👇🏻👇🏻",
                        media: [
                            {
                                original: {
                                    url: "https://arweave.net/Dlm-61oyaJOpQyT4PCqVSxyYQaOKNIEXLQfR7DjtpNU",
                                    mimeType: "video/mp4",
                                },
                            },
                        ],
                        attributes: [
                            {
                                displayType: "string",
                                traitType: "handle",
                                value: "juampi.lens",
                            },
                            {
                                displayType: "string",
                                traitType: "app",
                                value: "lenstube",
                            },
                            {
                                displayType: "string",
                                traitType: "durationInSeconds",
                                value: "1678.68",
                            },
                        ],
                    },
                    createdAt: "2023-01-13T15:21:08.000Z",
                    collectModule: {
                        __typename: "FeeCollectModuleSettings",
                        type: "FeeCollectModule",
                        amount: {
                            asset: {
                                name: "Wrapped Matic",
                                symbol: "WMATIC",
                                decimals: 18,
                                address:
                                    "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
                            },
                            value: "1.0",
                        },
                        recipient: "0xA081e1dA16133bB4Ebc7Aab1A9B0588A48D15138",
                        referralFee: 20,
                    },
                    referenceModule: null,
                    appId: "lenstube",
                    collectedBy: null,
                    hidden: false,
                    reaction: null,
                    mirrors: [],
                    hasCollectedByMe: false,
                },
            },
        ],
    },
    {
        root: {
            __typename: "Post",
            id: "0x010c0b-0x5b",
            profile: {
                id: "0x010c0b",
                name: "Nextspace.ORB",
                bio: null,
                attributes: [
                    {
                        displayType: null,
                        traitType: "string",
                        key: "app",
                        value: "Orb",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "twitter",
                        value: "@MallickM87",
                    },
                    {
                        displayType: null,
                        traitType: "json",
                        key: "projects",
                        value: "[]",
                    },
                    {
                        displayType: null,
                        traitType: "json",
                        key: "skills",
                        value: "[]",
                    },
                    {
                        displayType: null,
                        traitType: "json",
                        key: "experience",
                        value: "[]",
                    },
                    {
                        displayType: null,
                        traitType: "json",
                        key: "education",
                        value: "[]",
                    },
                ],
                isFollowedByMe: false,
                isFollowing: false,
                followNftAddress: "0x2396E79027C2857B3cAf7EbcfCE0f82c5b348aa5",
                metadata:
                    "https://arweave.net/BoGv71lSqanYPlMIjRbAgEJFzDMF1oqKqc55a7RTOIY",
                isDefault: false,
                handle: "nextspace.lens",
                picture: null,
                coverPicture: null,
                ownedBy: "0x88CECa932abE52DC7c80326064B086657C06b29b",
                dispatcher: {
                    address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                },
                stats: {
                    totalFollowers: 643,
                    totalFollowing: 2607,
                    totalPosts: 88,
                    totalComments: 1,
                    totalMirrors: 1,
                    totalPublications: 90,
                    totalCollects: 8,
                },
                followModule: null,
            },
            stats: {
                totalAmountOfMirrors: 0,
                totalAmountOfCollects: 0,
                totalAmountOfComments: 0,
            },
            metadata: {
                name: "Bitcoin, Ethereum Technical Analysis: BTC Hits 2-Month High, Climbing Above $19,000",
                description: null,
                content:
                    "Bitcoin, Ethereum Technical Analysis: BTC Hits 2-Month High, Climbing Above $19,000\n\n[Bitcoin, Ethereum Technical Analysis: BTC Hits 2-Month High, Climbing Above $19,000 – Market Updates Bitcoin News](https://news.bitcoin.com/bitcoin-ethereum-technical-analysis-btc-hits-2-month-high-climbing-above-19000/)\nBitcoin continued to trade higher on Jan. 13, with prices racing above the $19,000 level, hitting a two-month peak in the process.",
                media: [
                    {
                        original: {
                            url: "https://images.lens.phaver.com/insecure/raw:1/plain/9814d10549669937b72bdeb0f1d7dcda",
                            mimeType: "image/jpeg",
                        },
                    },
                ],
                attributes: [],
            },
            createdAt: "2023-01-13T15:31:42.000Z",
            collectModule: {
                __typename: "FreeCollectModuleSettings",
                type: "FreeCollectModule",
                followerOnly: false,
                contractAddress: "0x23b9467334bEb345aAa6fd1545538F3d54436e96",
            },
            referenceModule: null,
            appId: "phaver",
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
        comments: [],
    },
    {
        root: {
            __typename: "Comment",
            id: "0x28a2-0x03ed",
            profile: {
                id: "0x28a2",
                name: "Nader Dabit",
                bio: "Director of Developer Relations at @lensprotocol 🌿 & @aaveaave.lens 👻",
                attributes: [
                    {
                        displayType: null,
                        traitType: "string",
                        key: "location",
                        value: "United States",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "website",
                        value: "nader.arweave.dev",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "twitter",
                        value: "dabit3",
                    },
                    {
                        displayType: null,
                        traitType: "boolean",
                        key: "hasPrideLogo",
                        value: "true",
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
                followNftAddress: "0x667C6446796aa7757aA0F3B423bF3148B1ce5624",
                metadata:
                    "https://arweave.net/qy-PO6wXAGfff8YAlGwGfYTSVBwadkwKXmWVRUTD4X4",
                isDefault: true,
                handle: "nader.lens",
                picture: {
                    original: {
                        url: "https://lens.infura-ipfs.io/ipfs/QmVBfhfgfhGsRVxTNURVUgceqyzjdVe11ic5rCghmePuKX",
                        mimeType: null,
                    },
                },
                coverPicture: {
                    original: {
                        url: "ipfs://bafybeibtvbacwbb2bsitmqlrad4jsegsng2h4fwk26qj3leo6zwqu3fx3u",
                        mimeType: null,
                    },
                },
                ownedBy: "0xB2Ebc9b3a788aFB1E942eD65B59E9E49A1eE500D",
                dispatcher: {
                    address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                },
                stats: {
                    totalFollowers: 8250,
                    totalFollowing: 750,
                    totalPosts: 229,
                    totalComments: 365,
                    totalMirrors: 428,
                    totalPublications: 1022,
                    totalCollects: 11758,
                },
                followModule: null,
            },
            stats: {
                totalAmountOfMirrors: 0,
                totalAmountOfCollects: 0,
                totalAmountOfComments: 1,
            },
            metadata: {
                name: "Comment by @nader",
                description: "Thanks!",
                content: "Thanks!",
                media: [],
                attributes: [],
            },
            createdAt: "2023-01-13T14:13:30.000Z",
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
                id: "0x016a1f-0x048c",
                profile: {
                    id: "0x016a1f",
                    name: "Road Waves",
                    bio: "Canadian Funk/Rock Jamband 🍁 \nAn internationally-touring soul-rock explosion! 🚐🌊 \nListen on any streaming platform! 🎧\nLenstube: https://lenstube.xyz/roadwaves.lens",
                    attributes: [
                        {
                            displayType: null,
                            traitType: "string",
                            key: "website",
                            value: "https://www.roadwaves.xyz",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "twitter",
                            value: "roadwavesband",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "statusMessage",
                            value: "Jam Cruisin' 🚐🌿🌊",
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
                        "0x123a433C01AC5721e4bfAdB7e813205e7a7365c6",
                    metadata:
                        "https://arweave.net/V2x1nluTLnom9418MXsMakxKDTSH85Bf0pPaBD3YlPE",
                    isDefault: true,
                    handle: "roadwaves.lens",
                    picture: {
                        original: {
                            url: "ipfs://bafybeictutgkmk2n7z6vwehia37ujhqgwh6a6td6auduubpp3in7r3mdxm",
                            mimeType: null,
                        },
                    },
                    coverPicture: {
                        original: {
                            url: "ipfs://bafkreifkv5hnf65hujcrujnw7i2hyzdyzy546spmlovhvfccita7rdemyu",
                            mimeType: null,
                        },
                    },
                    ownedBy: "0x4bf4A673858D72F69D1515De302321C48c7233B3",
                    dispatcher: {
                        address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                    },
                    stats: {
                        totalFollowers: 797,
                        totalFollowing: 211,
                        totalPosts: 116,
                        totalComments: 771,
                        totalMirrors: 274,
                        totalPublications: 1161,
                        totalCollects: 1426,
                    },
                    followModule: null,
                },
                stats: {
                    totalAmountOfMirrors: 0,
                    totalAmountOfCollects: 4,
                    totalAmountOfComments: 6,
                },
                metadata: {
                    name: "Post by @roadwaves",
                    description: "Gm  & happy sun cycle to @stani.lens ☀️🥳🎁",
                    content: "Gm  & happy sun cycle to @stani.lens ☀️🥳🎁",
                    media: [],
                    attributes: [],
                },
                createdAt: "2023-01-13T13:55:44.000Z",
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
        electedMirror: null,
        mirrors: [],
        collects: [],
        reactions: [],
        comments: [
            {
                id: "0x016a1f-0x048f",
                profile: {
                    id: "0x016a1f",
                    name: "Road Waves",
                    bio: "Canadian Funk/Rock Jamband 🍁 \nAn internationally-touring soul-rock explosion! 🚐🌊 \nListen on any streaming platform! 🎧\nLenstube: https://lenstube.xyz/roadwaves.lens",
                    attributes: [
                        {
                            displayType: null,
                            traitType: "string",
                            key: "website",
                            value: "https://www.roadwaves.xyz",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "twitter",
                            value: "roadwavesband",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "statusMessage",
                            value: "Jam Cruisin' 🚐🌿🌊",
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
                        "0x123a433C01AC5721e4bfAdB7e813205e7a7365c6",
                    metadata:
                        "https://arweave.net/V2x1nluTLnom9418MXsMakxKDTSH85Bf0pPaBD3YlPE",
                    isDefault: true,
                    handle: "roadwaves.lens",
                    picture: {
                        original: {
                            url: "ipfs://bafybeictutgkmk2n7z6vwehia37ujhqgwh6a6td6auduubpp3in7r3mdxm",
                            mimeType: null,
                        },
                    },
                    coverPicture: {
                        original: {
                            url: "ipfs://bafkreifkv5hnf65hujcrujnw7i2hyzdyzy546spmlovhvfccita7rdemyu",
                            mimeType: null,
                        },
                    },
                    ownedBy: "0x4bf4A673858D72F69D1515De302321C48c7233B3",
                    dispatcher: {
                        address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                    },
                    stats: {
                        totalFollowers: 797,
                        totalFollowing: 211,
                        totalPosts: 116,
                        totalComments: 771,
                        totalMirrors: 274,
                        totalPublications: 1161,
                        totalCollects: 1426,
                    },
                    followModule: null,
                },
                stats: {
                    totalAmountOfMirrors: 0,
                    totalAmountOfCollects: 0,
                    totalAmountOfComments: 0,
                },
                metadata: {
                    name: "Comment by @roadwaves.lens",
                    description: null,
                    content: "You're welcome - hope its a great day and year! ",
                    media: [],
                    attributes: [
                        {
                            displayType: "string",
                            traitType: "type",
                            value: "text_only",
                        },
                    ],
                },
                createdAt: "2023-01-13T14:59:52.000Z",
                collectModule: {
                    __typename: "RevertCollectModuleSettings",
                    type: "RevertCollectModule",
                },
                referenceModule: {},
                appId: "lenster",
                collectedBy: null,
                hidden: false,
                reaction: null,
                mirrors: [],
                hasCollectedByMe: false,
                mainPost: {
                    id: "0x016a1f-0x048c",
                    profile: {
                        id: "0x016a1f",
                        name: "Road Waves",
                        bio: "Canadian Funk/Rock Jamband 🍁 \nAn internationally-touring soul-rock explosion! 🚐🌊 \nListen on any streaming platform! 🎧\nLenstube: https://lenstube.xyz/roadwaves.lens",
                        attributes: [
                            {
                                displayType: null,
                                traitType: "string",
                                key: "website",
                                value: "https://www.roadwaves.xyz",
                            },
                            {
                                displayType: null,
                                traitType: "string",
                                key: "twitter",
                                value: "roadwavesband",
                            },
                            {
                                displayType: null,
                                traitType: "string",
                                key: "statusMessage",
                                value: "Jam Cruisin' 🚐🌿🌊",
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
                            "0x123a433C01AC5721e4bfAdB7e813205e7a7365c6",
                        metadata:
                            "https://arweave.net/V2x1nluTLnom9418MXsMakxKDTSH85Bf0pPaBD3YlPE",
                        isDefault: true,
                        handle: "roadwaves.lens",
                        picture: {
                            original: {
                                url: "ipfs://bafybeictutgkmk2n7z6vwehia37ujhqgwh6a6td6auduubpp3in7r3mdxm",
                                mimeType: null,
                            },
                        },
                        coverPicture: {
                            original: {
                                url: "ipfs://bafkreifkv5hnf65hujcrujnw7i2hyzdyzy546spmlovhvfccita7rdemyu",
                                mimeType: null,
                            },
                        },
                        ownedBy: "0x4bf4A673858D72F69D1515De302321C48c7233B3",
                        dispatcher: {
                            address:
                                "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                        },
                        stats: {
                            totalFollowers: 797,
                            totalFollowing: 211,
                            totalPosts: 116,
                            totalComments: 771,
                            totalMirrors: 274,
                            totalPublications: 1161,
                            totalCollects: 1426,
                        },
                        followModule: null,
                    },
                    stats: {
                        totalAmountOfMirrors: 0,
                        totalAmountOfCollects: 4,
                        totalAmountOfComments: 6,
                    },
                    metadata: {
                        name: "Post by @roadwaves",
                        description:
                            "Gm  & happy sun cycle to @stani.lens ☀️🥳🎁",
                        content: "Gm  & happy sun cycle to @stani.lens ☀️🥳🎁",
                        media: [],
                        attributes: [],
                    },
                    createdAt: "2023-01-13T13:55:44.000Z",
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
    },
    {
        root: {
            __typename: "Post",
            id: "0x6ea1-0x0624",
            profile: {
                id: "0x6ea1",
                name: "Tommy Thomas",
                bio: "Exploring Digital Beauty✌🏾 Building: @Anspar_io ⚡️@pachifunk 🌸 (TW/IG)\nmPhil/PhD (Human Rights) Law",
                attributes: [
                    {
                        displayType: null,
                        traitType: "string",
                        key: "location",
                        value: "happy place",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "website",
                        value: "www.pachifunk.com/",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "twitter",
                        value: "0xtommythomas",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "statusMessage",
                        value: "Building PACHI-FUNK 🌸",
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
                followNftAddress: "0x6e519c0f1B9Dfa8aA06ae8b0583e5EEd8B656b8e",
                metadata:
                    "https://arweave.net/wPWFVb7YffUn8SmcAdWdS9C8NQ3woG4iZ-qiwmb-yj4",
                isDefault: true,
                handle: "0xtommythomas.lens",
                picture: {
                    original: {
                        url: "https://lens.infura-ipfs.io/ipfs/QmcuovwPCne4SgNkhh6U7VeujkBez2qJZnZucDHGaSNMd4",
                        mimeType: null,
                    },
                },
                coverPicture: {
                    original: {
                        url: "ipfs://bafkreihr3ui7qjrnj4zworzyshvelfsnsjvuh5qjnfp4s3pketygae6gcu",
                        mimeType: null,
                    },
                },
                ownedBy: "0x0716461C42780435312C4893033B6e3F0238B956",
                dispatcher: {
                    address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                },
                stats: {
                    totalFollowers: 1114,
                    totalFollowing: 302,
                    totalPosts: 597,
                    totalComments: 887,
                    totalMirrors: 128,
                    totalPublications: 1612,
                    totalCollects: 2266,
                },
                followModule: null,
            },
            stats: {
                totalAmountOfMirrors: 5,
                totalAmountOfCollects: 0,
                totalAmountOfComments: 5,
            },
            metadata: {
                name: "Post by @0xtommythomas.lens",
                description: null,
                content:
                    "Going to be chatting w/ @chriscomrie.lens about NSFW in Web3 and what we've been building at \n\nJUST LEWDS/ LEWD FRIENDS NFT 🍑✨\n\n\n\nSet your reminders and don't miss this one 👀\n\nhttps://twitter.com/i/spaces/1djGXlXPWoPGZ?s=20",
                media: [],
                attributes: [
                    {
                        displayType: "string",
                        traitType: "type",
                        value: "text_only",
                    },
                ],
            },
            createdAt: "2023-01-13T13:41:58.000Z",
            collectModule: {
                __typename: "RevertCollectModuleSettings",
                type: "RevertCollectModule",
            },
            referenceModule: {},
            appId: "lenster",
            collectedBy: null,
            hidden: false,
            reaction: null,
            mirrors: [],
            hasCollectedByMe: false,
        },
        electedMirror: {
            mirrorId: "0x011f55-0x08be",
            profile: {
                id: "0x011f55",
                handle: "chriscomrie.lens",
            },
            timestamp: "2023-01-13T14:27:08.000Z",
        },
        mirrors: [
            {
                profile: {
                    id: "0x73b1",
                    handle: "jessyjeanne.lens",
                },
                timestamp: "2023-01-13T14:58:24.000Z",
            },
            {
                profile: {
                    id: "0x011f55",
                    handle: "chriscomrie.lens",
                },
                timestamp: "2023-01-13T14:27:08.000Z",
            },
        ],
        collects: [],
        reactions: [],
        comments: [
            {
                id: "0x73b1-0x0e38",
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
                    followNftAddress:
                        "0x427FfB2D0cf32Fa0D5e64829a6d3aB5B65e046E1",
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
                    description: "Hope I can make it",
                    content: "Hope I can make it",
                    media: [],
                    attributes: [],
                },
                createdAt: "2023-01-13T14:59:22.000Z",
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
                mainPost: {
                    id: "0x6ea1-0x0624",
                    profile: {
                        id: "0x6ea1",
                        name: "Tommy Thomas",
                        bio: "Exploring Digital Beauty✌🏾 Building: @Anspar_io ⚡️@pachifunk 🌸 (TW/IG)\nmPhil/PhD (Human Rights) Law",
                        attributes: [
                            {
                                displayType: null,
                                traitType: "string",
                                key: "location",
                                value: "happy place",
                            },
                            {
                                displayType: null,
                                traitType: "string",
                                key: "website",
                                value: "www.pachifunk.com/",
                            },
                            {
                                displayType: null,
                                traitType: "string",
                                key: "twitter",
                                value: "0xtommythomas",
                            },
                            {
                                displayType: null,
                                traitType: "string",
                                key: "statusMessage",
                                value: "Building PACHI-FUNK 🌸",
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
                            "0x6e519c0f1B9Dfa8aA06ae8b0583e5EEd8B656b8e",
                        metadata:
                            "https://arweave.net/wPWFVb7YffUn8SmcAdWdS9C8NQ3woG4iZ-qiwmb-yj4",
                        isDefault: true,
                        handle: "0xtommythomas.lens",
                        picture: {
                            original: {
                                url: "https://lens.infura-ipfs.io/ipfs/QmcuovwPCne4SgNkhh6U7VeujkBez2qJZnZucDHGaSNMd4",
                                mimeType: null,
                            },
                        },
                        coverPicture: {
                            original: {
                                url: "ipfs://bafkreihr3ui7qjrnj4zworzyshvelfsnsjvuh5qjnfp4s3pketygae6gcu",
                                mimeType: null,
                            },
                        },
                        ownedBy: "0x0716461C42780435312C4893033B6e3F0238B956",
                        dispatcher: {
                            address:
                                "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                        },
                        stats: {
                            totalFollowers: 1114,
                            totalFollowing: 302,
                            totalPosts: 597,
                            totalComments: 887,
                            totalMirrors: 128,
                            totalPublications: 1612,
                            totalCollects: 2266,
                        },
                        followModule: null,
                    },
                    stats: {
                        totalAmountOfMirrors: 5,
                        totalAmountOfCollects: 0,
                        totalAmountOfComments: 5,
                    },
                    metadata: {
                        name: "Post by @0xtommythomas.lens",
                        description: null,
                        content:
                            "Going to be chatting w/ @chriscomrie.lens about NSFW in Web3 and what we've been building at \n\nJUST LEWDS/ LEWD FRIENDS NFT 🍑✨\n\n\n\nSet your reminders and don't miss this one 👀\n\nhttps://twitter.com/i/spaces/1djGXlXPWoPGZ?s=20",
                        media: [],
                        attributes: [
                            {
                                displayType: "string",
                                traitType: "type",
                                value: "text_only",
                            },
                        ],
                    },
                    createdAt: "2023-01-13T13:41:58.000Z",
                    collectModule: {
                        __typename: "RevertCollectModuleSettings",
                        type: "RevertCollectModule",
                    },
                    referenceModule: {},
                    appId: "lenster",
                    collectedBy: null,
                    hidden: false,
                    reaction: null,
                    mirrors: [],
                    hasCollectedByMe: false,
                },
            },
            {
                id: "0x011f55-0x08bf",
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
                    followNftAddress:
                        "0xc1Bf666ACD14DAd62d55457417E69D8705c3d2f0",
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
                    name: "Comment by @chriscomrie.lens",
                    description: null,
                    content:
                        "u dont wanna miss out on this one!! DID I HEAR WHITELIST ALPHA???",
                    media: [],
                    attributes: [
                        {
                            displayType: "string",
                            traitType: "type",
                            value: "text_only",
                        },
                    ],
                },
                createdAt: "2023-01-13T14:27:42.000Z",
                collectModule: {
                    __typename: "RevertCollectModuleSettings",
                    type: "RevertCollectModule",
                },
                referenceModule: {},
                appId: "lenster",
                collectedBy: null,
                hidden: false,
                reaction: null,
                mirrors: [],
                hasCollectedByMe: false,
                mainPost: {
                    id: "0x6ea1-0x0624",
                    profile: {
                        id: "0x6ea1",
                        name: "Tommy Thomas",
                        bio: "Exploring Digital Beauty✌🏾 Building: @Anspar_io ⚡️@pachifunk 🌸 (TW/IG)\nmPhil/PhD (Human Rights) Law",
                        attributes: [
                            {
                                displayType: null,
                                traitType: "string",
                                key: "location",
                                value: "happy place",
                            },
                            {
                                displayType: null,
                                traitType: "string",
                                key: "website",
                                value: "www.pachifunk.com/",
                            },
                            {
                                displayType: null,
                                traitType: "string",
                                key: "twitter",
                                value: "0xtommythomas",
                            },
                            {
                                displayType: null,
                                traitType: "string",
                                key: "statusMessage",
                                value: "Building PACHI-FUNK 🌸",
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
                            "0x6e519c0f1B9Dfa8aA06ae8b0583e5EEd8B656b8e",
                        metadata:
                            "https://arweave.net/wPWFVb7YffUn8SmcAdWdS9C8NQ3woG4iZ-qiwmb-yj4",
                        isDefault: true,
                        handle: "0xtommythomas.lens",
                        picture: {
                            original: {
                                url: "https://lens.infura-ipfs.io/ipfs/QmcuovwPCne4SgNkhh6U7VeujkBez2qJZnZucDHGaSNMd4",
                                mimeType: null,
                            },
                        },
                        coverPicture: {
                            original: {
                                url: "ipfs://bafkreihr3ui7qjrnj4zworzyshvelfsnsjvuh5qjnfp4s3pketygae6gcu",
                                mimeType: null,
                            },
                        },
                        ownedBy: "0x0716461C42780435312C4893033B6e3F0238B956",
                        dispatcher: {
                            address:
                                "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                        },
                        stats: {
                            totalFollowers: 1114,
                            totalFollowing: 302,
                            totalPosts: 597,
                            totalComments: 887,
                            totalMirrors: 128,
                            totalPublications: 1612,
                            totalCollects: 2266,
                        },
                        followModule: null,
                    },
                    stats: {
                        totalAmountOfMirrors: 5,
                        totalAmountOfCollects: 0,
                        totalAmountOfComments: 5,
                    },
                    metadata: {
                        name: "Post by @0xtommythomas.lens",
                        description: null,
                        content:
                            "Going to be chatting w/ @chriscomrie.lens about NSFW in Web3 and what we've been building at \n\nJUST LEWDS/ LEWD FRIENDS NFT 🍑✨\n\n\n\nSet your reminders and don't miss this one 👀\n\nhttps://twitter.com/i/spaces/1djGXlXPWoPGZ?s=20",
                        media: [],
                        attributes: [
                            {
                                displayType: "string",
                                traitType: "type",
                                value: "text_only",
                            },
                        ],
                    },
                    createdAt: "2023-01-13T13:41:58.000Z",
                    collectModule: {
                        __typename: "RevertCollectModuleSettings",
                        type: "RevertCollectModule",
                    },
                    referenceModule: {},
                    appId: "lenster",
                    collectedBy: null,
                    hidden: false,
                    reaction: null,
                    mirrors: [],
                    hasCollectedByMe: false,
                },
            },
        ],
    },
    {
        root: {
            __typename: "Post",
            id: "0x0875-0x0a",
            profile: {
                id: "0x0875",
                name: "Pol Maire",
                bio: null,
                attributes: [
                    {
                        displayType: "string",
                        traitType: null,
                        key: "app",
                        value: "LensFrens",
                    },
                    {
                        displayType: "string",
                        traitType: null,
                        key: "location",
                        value: "Paris",
                    },
                    {
                        displayType: "string",
                        traitType: null,
                        key: "twitter",
                        value: "polmaire",
                    },
                ],
                isFollowedByMe: false,
                isFollowing: false,
                followNftAddress: "0x8e8E18df7df9cF2d503D4Bba22E821d7e9304Fc2",
                metadata:
                    "https://lens.infura-ipfs.io/ipfs/QmT7R1sqmLEa7DchCXxDk43RtTJNRFXZ7ub89Mi7NhvXyX",
                isDefault: false,
                handle: "polmaire.lens",
                picture: {
                    original: {
                        url: "ipfs://bafybeigsy6qnqp7qlkj6v5n2n45i2phxepvwhgy23f43avxuucizvqgzvm",
                        mimeType: null,
                    },
                },
                coverPicture: null,
                ownedBy: "0xf9a3BB070c1f9b3186A547DeD991BeD04a289C5B",
                dispatcher: {
                    address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                },
                stats: {
                    totalFollowers: 163,
                    totalFollowing: 28,
                    totalPosts: 2,
                    totalComments: 8,
                    totalMirrors: 3,
                    totalPublications: 13,
                    totalCollects: 0,
                },
                followModule: null,
            },
            stats: {
                totalAmountOfMirrors: 1,
                totalAmountOfCollects: 0,
                totalAmountOfComments: 2,
            },
            metadata: {
                name: "Post by @polmaire.lens",
                description: null,
                content:
                    "A few weeks ago with my co-founder @noemalzieu.lens we launched an experiment called WalletRoulette.\n\n\n\nWtf?\n\nWe open 30 minute sessions everyday where web3 folks get randomly connected to other web3 enthusiasts. They can then chat thanks to @xmtplabs.lens protocol (only text, no video).\n\n\n\nOur challenge?\n\nIf we want to provide value to users, we need to have enough people on the app at the same time. We'll re-open sessions once we have enough people interested in participating!\n\n\n\n👉 once we have 1000 people in the Telegram group in which we announce the opening of sessions, we'll re-launch WalletRoulette!\n\n\n\nHere's the link to join the group: https://t.me/+5iA6aBOo4KNmOGE8\n\n\n\nLet's see if the Lens magic makes it work ✨🌿 don't hesitate to mirror this post if you feel like it could provide value to your followers",
                media: [],
                attributes: [
                    {
                        displayType: "string",
                        traitType: "type",
                        value: "text_only",
                    },
                ],
            },
            createdAt: "2023-01-13T14:53:44.000Z",
            collectModule: {
                __typename: "RevertCollectModuleSettings",
                type: "RevertCollectModule",
            },
            referenceModule: {},
            appId: "lenster",
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
                id: "0x0875-0x0b",
                profile: {
                    id: "0x0875",
                    name: "Pol Maire",
                    bio: null,
                    attributes: [
                        {
                            displayType: "string",
                            traitType: null,
                            key: "app",
                            value: "LensFrens",
                        },
                        {
                            displayType: "string",
                            traitType: null,
                            key: "location",
                            value: "Paris",
                        },
                        {
                            displayType: "string",
                            traitType: null,
                            key: "twitter",
                            value: "polmaire",
                        },
                    ],
                    isFollowedByMe: false,
                    isFollowing: false,
                    followNftAddress:
                        "0x8e8E18df7df9cF2d503D4Bba22E821d7e9304Fc2",
                    metadata:
                        "https://lens.infura-ipfs.io/ipfs/QmT7R1sqmLEa7DchCXxDk43RtTJNRFXZ7ub89Mi7NhvXyX",
                    isDefault: false,
                    handle: "polmaire.lens",
                    picture: {
                        original: {
                            url: "ipfs://bafybeigsy6qnqp7qlkj6v5n2n45i2phxepvwhgy23f43avxuucizvqgzvm",
                            mimeType: null,
                        },
                    },
                    coverPicture: null,
                    ownedBy: "0xf9a3BB070c1f9b3186A547DeD991BeD04a289C5B",
                    dispatcher: {
                        address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                    },
                    stats: {
                        totalFollowers: 163,
                        totalFollowing: 28,
                        totalPosts: 2,
                        totalComments: 8,
                        totalMirrors: 3,
                        totalPublications: 13,
                        totalCollects: 0,
                    },
                    followModule: null,
                },
                stats: {
                    totalAmountOfMirrors: 0,
                    totalAmountOfCollects: 0,
                    totalAmountOfComments: 0,
                },
                metadata: {
                    name: "Comment by @polmaire.lens",
                    description: null,
                    content:
                        "Yes! The main goal of the service is to deepen the conversations - people might feel a bit lost in the open universe of social media and it's sometimes good to go back to 1to1 conversations in which you're more active.",
                    media: [],
                    attributes: [
                        {
                            displayType: "string",
                            traitType: "type",
                            value: "text_only",
                        },
                    ],
                },
                createdAt: "2023-01-13T15:12:22.000Z",
                collectModule: {
                    __typename: "RevertCollectModuleSettings",
                    type: "RevertCollectModule",
                },
                referenceModule: {},
                appId: "lenster",
                collectedBy: null,
                hidden: false,
                reaction: null,
                mirrors: [],
                hasCollectedByMe: false,
                mainPost: {
                    id: "0x0875-0x0a",
                    profile: {
                        id: "0x0875",
                        name: "Pol Maire",
                        bio: null,
                        attributes: [
                            {
                                displayType: "string",
                                traitType: null,
                                key: "app",
                                value: "LensFrens",
                            },
                            {
                                displayType: "string",
                                traitType: null,
                                key: "location",
                                value: "Paris",
                            },
                            {
                                displayType: "string",
                                traitType: null,
                                key: "twitter",
                                value: "polmaire",
                            },
                        ],
                        isFollowedByMe: false,
                        isFollowing: false,
                        followNftAddress:
                            "0x8e8E18df7df9cF2d503D4Bba22E821d7e9304Fc2",
                        metadata:
                            "https://lens.infura-ipfs.io/ipfs/QmT7R1sqmLEa7DchCXxDk43RtTJNRFXZ7ub89Mi7NhvXyX",
                        isDefault: false,
                        handle: "polmaire.lens",
                        picture: {
                            original: {
                                url: "ipfs://bafybeigsy6qnqp7qlkj6v5n2n45i2phxepvwhgy23f43avxuucizvqgzvm",
                                mimeType: null,
                            },
                        },
                        coverPicture: null,
                        ownedBy: "0xf9a3BB070c1f9b3186A547DeD991BeD04a289C5B",
                        dispatcher: {
                            address:
                                "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                        },
                        stats: {
                            totalFollowers: 163,
                            totalFollowing: 28,
                            totalPosts: 2,
                            totalComments: 8,
                            totalMirrors: 3,
                            totalPublications: 13,
                            totalCollects: 0,
                        },
                        followModule: null,
                    },
                    stats: {
                        totalAmountOfMirrors: 1,
                        totalAmountOfCollects: 0,
                        totalAmountOfComments: 2,
                    },
                    metadata: {
                        name: "Post by @polmaire.lens",
                        description: null,
                        content:
                            "A few weeks ago with my co-founder @noemalzieu.lens we launched an experiment called WalletRoulette.\n\n\n\nWtf?\n\nWe open 30 minute sessions everyday where web3 folks get randomly connected to other web3 enthusiasts. They can then chat thanks to @xmtplabs.lens protocol (only text, no video).\n\n\n\nOur challenge?\n\nIf we want to provide value to users, we need to have enough people on the app at the same time. We'll re-open sessions once we have enough people interested in participating!\n\n\n\n👉 once we have 1000 people in the Telegram group in which we announce the opening of sessions, we'll re-launch WalletRoulette!\n\n\n\nHere's the link to join the group: https://t.me/+5iA6aBOo4KNmOGE8\n\n\n\nLet's see if the Lens magic makes it work ✨🌿 don't hesitate to mirror this post if you feel like it could provide value to your followers",
                        media: [],
                        attributes: [
                            {
                                displayType: "string",
                                traitType: "type",
                                value: "text_only",
                            },
                        ],
                    },
                    createdAt: "2023-01-13T14:53:44.000Z",
                    collectModule: {
                        __typename: "RevertCollectModuleSettings",
                        type: "RevertCollectModule",
                    },
                    referenceModule: {},
                    appId: "lenster",
                    collectedBy: null,
                    hidden: false,
                    reaction: null,
                    mirrors: [],
                    hasCollectedByMe: false,
                },
            },
        ],
    },
    {
        root: {
            __typename: "Post",
            id: "0x011c1a-0xd6",
            profile: {
                id: "0x011c1a",
                name: "Md Rasel Hossain",
                bio: "Crypto Currency, Domain & Nft Lover",
                attributes: [
                    {
                        displayType: "string",
                        traitType: "website",
                        key: "website",
                        value: "https://www.facebook.com/raselper10",
                    },
                    {
                        displayType: "string",
                        traitType: "twitter",
                        key: "twitter",
                        value: "raselper10",
                    },
                    {
                        displayType: "string",
                        traitType: "app",
                        key: "app",
                        value: "lenstube",
                    },
                ],
                isFollowedByMe: false,
                isFollowing: false,
                followNftAddress: "0x63CB4a972765bFcc85b25748336138870B42E763",
                metadata:
                    "https://arweave.net/gko7ZWLsrx-oStadSkKvcYETPo2cqA8z_9llVqIyvNA",
                isDefault: true,
                handle: "raselper10.lens",
                picture: {
                    original: {
                        url: "ipfs://QmdgYcGdUZbhXcNKwJ3aEH47JxosAMBZ1rzyBFmtXoBKHR",
                        mimeType: null,
                    },
                },
                coverPicture: {
                    original: {
                        url: "ipfs://bafkreibec6n62ddjvvggjdkh6wolehujrot2lyzefbfzxvcjepeysqnf6i",
                        mimeType: null,
                    },
                },
                ownedBy: "0x3953EdC69Bfad109C8B6A94070Adb327CBe40F07",
                dispatcher: {
                    address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                },
                stats: {
                    totalFollowers: 1017,
                    totalFollowing: 2702,
                    totalPosts: 194,
                    totalComments: 5,
                    totalMirrors: 15,
                    totalPublications: 214,
                    totalCollects: 12,
                },
                followModule: null,
            },
            stats: {
                totalAmountOfMirrors: 0,
                totalAmountOfCollects: 0,
                totalAmountOfComments: 0,
            },
            metadata: {
                name: "♾Gitcoin Alpha Round Condition Update\n\n5$ for Each round 🧐🤨\n\nTotal 5$ or each project 5$ 🤨\n\nIf Ea…",
                description: null,
                content:
                    "♾Gitcoin Alpha Round Condition Update\n\n5$ for Each round 🧐🤨\n\nTotal 5$ or each project 5$ 🤨\n\nIf Each project Donation is 5$, So what does mean of DONATION, 😒\n\nWhat do you think, Single project or they are talking about total amount ? 🧐\n\nI think, the yare talkinga bout Total amount..\n\n👉🏻 https://twitter.com/gitcoin/status/1613584544237768704\n\n[Gitcoin (🤖, 💚) on Twitter](https://twitter.com/gitcoin/status/1613584544237768704)\n“In anticipation of our Gitcoin Alpha Round, we've made a few updates to the Alpha Round POAP Quest rules 🚀\n\nThere are now 4 rounds with 4 unique POAPS to claim (instead of 5) and to protecc against Sybil attacks, there will be a minimum donation of $5 for each upcoming round.”",
                media: [],
                attributes: [],
            },
            createdAt: "2023-01-13T14:40:22.000Z",
            collectModule: {
                __typename: "FreeCollectModuleSettings",
                type: "FreeCollectModule",
                followerOnly: false,
                contractAddress: "0x23b9467334bEb345aAa6fd1545538F3d54436e96",
            },
            referenceModule: null,
            appId: "phaver",
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
        comments: [],
    },
    {
        root: {
            __typename: "Post",
            id: "0x018ccc-0x0465",
            profile: {
                id: "0x018ccc",
                name: "Zo",
                bio: "I am a 23 year old fluid artist and photographer from the UK with a love for colourful things.",
                attributes: [
                    {
                        displayType: null,
                        traitType: "string",
                        key: "website",
                        value: "https://objkt.com/profile/zosphotos/created",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "twitter",
                        value: "zosphotos",
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
                followNftAddress: "0xdfc879e8E646aBBf972d4a212e6Bc167f8fc5b04",
                metadata:
                    "https://arweave.net/O-R6BQov2HMHnMU0IE9e0Nr29fAYY5v_P9hysQhJ02s",
                isDefault: false,
                handle: "zospours.lens",
                picture: {
                    original: {
                        url: "ipfs://QmQTX4HXqh1PqXey2VJ3avFV8dPHgbGkhTSWKm5e1jZLc5",
                        mimeType: null,
                    },
                },
                coverPicture: {
                    original: {
                        url: "ipfs://bafybeielthjrpyieqjkkyxopiclgwwv2b5lljxhnk7edcr5brbz3cuu4fe",
                        mimeType: null,
                    },
                },
                ownedBy: "0xBAD8ca0d3Ef9e2b9D2A3149b707a879eBeA2a0BD",
                dispatcher: {
                    address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                },
                stats: {
                    totalFollowers: 443,
                    totalFollowing: 140,
                    totalPosts: 177,
                    totalComments: 799,
                    totalMirrors: 149,
                    totalPublications: 1125,
                    totalCollects: 1694,
                },
                followModule: null,
            },
            stats: {
                totalAmountOfMirrors: 0,
                totalAmountOfCollects: 0,
                totalAmountOfComments: 0,
            },
            metadata: {
                name: "Post by @zospours.lens",
                description: null,
                content: "Todays colour palette: lavender fields ",
                media: [
                    {
                        original: {
                            url: "ipfs://bafybeibni7kpdxqv6ttfw3zkrxnlcwbkumivq4gmau2weubqrp3avntmci",
                            mimeType: "image/jpeg",
                        },
                    },
                ],
                attributes: [
                    {
                        displayType: "string",
                        traitType: "type",
                        value: "image",
                    },
                ],
            },
            createdAt: "2023-01-13T14:30:48.000Z",
            collectModule: {
                __typename: "FeeCollectModuleSettings",
                type: "FeeCollectModule",
                amount: {
                    asset: {
                        name: "Wrapped Matic",
                        symbol: "WMATIC",
                        decimals: 18,
                        address: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
                    },
                    value: "1.0",
                },
                recipient: "0xBAD8ca0d3Ef9e2b9D2A3149b707a879eBeA2a0BD",
                referralFee: 15,
            },
            referenceModule: {},
            appId: "lenster",
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
        comments: [],
    },
    {
        root: {
            __typename: "Post",
            id: "0x05-0x1220",
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
                totalAmountOfMirrors: 65,
                totalAmountOfCollects: 202,
                totalAmountOfComments: 73,
            },
            metadata: {
                name: "Post by @stani",
                description:
                    "Today is my and @dabit3 birthdays 🥳there is some serious Capricorn energy in web3 🐐 Guess how old we are, measured in DeFi years? 🎂",
                content:
                    "Today is my and @dabit3 birthdays 🥳there is some serious Capricorn energy in web3 🐐 Guess how old we are, measured in DeFi years? 🎂",
                media: [],
                attributes: [],
            },
            createdAt: "2023-01-13T08:51:51.000Z",
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
        electedMirror: {
            mirrorId: "0x28a2-0x03f1",
            profile: {
                id: "0x28a2",
                handle: "nader.lens",
            },
            timestamp: "2023-01-13T14:14:28.000Z",
        },
        mirrors: [
            {
                profile: {
                    id: "0x28a2",
                    handle: "nader.lens",
                },
                timestamp: "2023-01-13T14:14:28.000Z",
            },
        ],
        collects: [],
        reactions: [],
        comments: [
            {
                id: "0x012adc-0x0104",
                profile: {
                    id: "0x012adc",
                    name: "0xadams",
                    bio: "19 🇨🇿 // Etherean // Regen // Solidity // Rust // ZKP // Co-founder Decentree // Future will not be centralized 🦇🔊🐼",
                    attributes: [
                        {
                            displayType: null,
                            traitType: "string",
                            key: "location",
                            value: "The Ether",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "website",
                            value: "https://decentree.com/",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "twitter",
                            value: "0xadams_",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "statusEmoji",
                            value: "🧙",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "statusMessage",
                            value: "Doing magic",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "app",
                            value: "Orb",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "github",
                            value: "AdamSchinzel",
                        },
                        {
                            displayType: null,
                            traitType: "json",
                            key: "projects",
                            value: "[]",
                        },
                        {
                            displayType: null,
                            traitType: "json",
                            key: "skills",
                            value: "[]",
                        },
                        {
                            displayType: null,
                            traitType: "json",
                            key: "experience",
                            value: "[]",
                        },
                        {
                            displayType: null,
                            traitType: "json",
                            key: "education",
                            value: "[]",
                        },
                    ],
                    isFollowedByMe: false,
                    isFollowing: false,
                    followNftAddress:
                        "0x973676F5638b29d92863BFE9c22A4c6d00250F09",
                    metadata:
                        "https://arweave.net/eIxeuPEjSH21GDMm7k0B2IYb7w35Cz2fskVQIRv0W7o",
                    isDefault: true,
                    handle: "0xadams.lens",
                    picture: {
                        original: {
                            url: "ipfs://QmW1kq2qvKY7Am3ctn6X2B5bAC1N5XSyd9xyp9xQNJ8PZc",
                            mimeType: null,
                        },
                    },
                    coverPicture: {
                        original: {
                            url: "https://ik.imagekit.io/orbapp/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/orbapp/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/orbapp/tr:n-attachment,tr:di-placeholder.webp/https://lens.infura-ipfs.io/ipfs/bafkreia75w3iimqqji2oeepmyfhbtb3ryix6e4c2tz3tgbgqn777l7oerm",
                            mimeType: null,
                        },
                    },
                    ownedBy: "0xF1c7B271C649b3A5606E3C6f748EA7a8e4351D2B",
                    dispatcher: {
                        address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                    },
                    stats: {
                        totalFollowers: 139,
                        totalFollowing: 46,
                        totalPosts: 46,
                        totalComments: 110,
                        totalMirrors: 101,
                        totalPublications: 257,
                        totalCollects: 87,
                    },
                    followModule: null,
                },
                stats: {
                    totalAmountOfMirrors: 0,
                    totalAmountOfCollects: 0,
                    totalAmountOfComments: 0,
                },
                metadata: {
                    name: "Comment by @0xadams",
                    description: "Happy birthday 🥳🥳",
                    content: "Happy birthday 🥳🥳",
                    media: [],
                    attributes: [],
                },
                createdAt: "2023-01-13T14:15:30.000Z",
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
                mainPost: {
                    id: "0x05-0x1220",
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
                            address:
                                "0xD1FecCF6881970105dfb2b654054174007f0e07E",
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
                        totalAmountOfMirrors: 65,
                        totalAmountOfCollects: 202,
                        totalAmountOfComments: 73,
                    },
                    metadata: {
                        name: "Post by @stani",
                        description:
                            "Today is my and @dabit3 birthdays 🥳there is some serious Capricorn energy in web3 🐐 Guess how old we are, measured in DeFi years? 🎂",
                        content:
                            "Today is my and @dabit3 birthdays 🥳there is some serious Capricorn energy in web3 🐐 Guess how old we are, measured in DeFi years? 🎂",
                        media: [],
                        attributes: [],
                    },
                    createdAt: "2023-01-13T08:51:51.000Z",
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
                id: "0x28a2-0x03ee",
                profile: {
                    id: "0x28a2",
                    name: "Nader Dabit",
                    bio: "Director of Developer Relations at @lensprotocol 🌿 & @aaveaave.lens 👻",
                    attributes: [
                        {
                            displayType: null,
                            traitType: "string",
                            key: "location",
                            value: "United States",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "website",
                            value: "nader.arweave.dev",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "twitter",
                            value: "dabit3",
                        },
                        {
                            displayType: null,
                            traitType: "boolean",
                            key: "hasPrideLogo",
                            value: "true",
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
                        "0x667C6446796aa7757aA0F3B423bF3148B1ce5624",
                    metadata:
                        "https://arweave.net/qy-PO6wXAGfff8YAlGwGfYTSVBwadkwKXmWVRUTD4X4",
                    isDefault: true,
                    handle: "nader.lens",
                    picture: {
                        original: {
                            url: "https://lens.infura-ipfs.io/ipfs/QmVBfhfgfhGsRVxTNURVUgceqyzjdVe11ic5rCghmePuKX",
                            mimeType: null,
                        },
                    },
                    coverPicture: {
                        original: {
                            url: "ipfs://bafybeibtvbacwbb2bsitmqlrad4jsegsng2h4fwk26qj3leo6zwqu3fx3u",
                            mimeType: null,
                        },
                    },
                    ownedBy: "0xB2Ebc9b3a788aFB1E942eD65B59E9E49A1eE500D",
                    dispatcher: {
                        address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                    },
                    stats: {
                        totalFollowers: 8250,
                        totalFollowing: 750,
                        totalPosts: 229,
                        totalComments: 365,
                        totalMirrors: 428,
                        totalPublications: 1022,
                        totalCollects: 11758,
                    },
                    followModule: null,
                },
                stats: {
                    totalAmountOfMirrors: 0,
                    totalAmountOfCollects: 0,
                    totalAmountOfComments: 0,
                },
                metadata: {
                    name: "Comment by @nader",
                    description: "Thanks!!",
                    content: "Thanks!!",
                    media: [],
                    attributes: [],
                },
                createdAt: "2023-01-13T14:13:44.000Z",
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
                mainPost: {
                    id: "0x05-0x1220",
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
                            address:
                                "0xD1FecCF6881970105dfb2b654054174007f0e07E",
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
                        totalAmountOfMirrors: 65,
                        totalAmountOfCollects: 202,
                        totalAmountOfComments: 73,
                    },
                    metadata: {
                        name: "Post by @stani",
                        description:
                            "Today is my and @dabit3 birthdays 🥳there is some serious Capricorn energy in web3 🐐 Guess how old we are, measured in DeFi years? 🎂",
                        content:
                            "Today is my and @dabit3 birthdays 🥳there is some serious Capricorn energy in web3 🐐 Guess how old we are, measured in DeFi years? 🎂",
                        media: [],
                        attributes: [],
                    },
                    createdAt: "2023-01-13T08:51:51.000Z",
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
    },
    {
        root: {
            __typename: "Post",
            id: "0x015182-0xd1",
            profile: {
                id: "0x015182",
                name: "Jack",
                bio: "mintooooooooor, collectooooooooooor, mirrooooooooooor",
                attributes: [
                    {
                        displayType: null,
                        traitType: "string",
                        key: "website",
                        value: "https://lenster.xyz/u/sintex.lens",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "twitter",
                        value: "Breaking_Gud_",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "app",
                        value: "LensFrens",
                    },
                ],
                isFollowedByMe: false,
                isFollowing: false,
                followNftAddress: "0xf10acc3C0cEC9Ec7F1bE7a112fd8f81AB76b9431",
                metadata:
                    "ipfs://QmdEM9BYYq88bpcPi2coT6aKpTxhnNaFAT9dd5L6H5qZpm",
                isDefault: true,
                handle: "sintex.lens",
                picture: {
                    original: {
                        url: "ipfs://bafybeidim6yu3gq4gf55wf5vsbresghcw6rthke6x5iahs64ay25phkdse",
                        mimeType: null,
                    },
                },
                coverPicture: null,
                ownedBy: "0x2D10984365D759Af1D5695f0ac58a22B4e966853",
                dispatcher: {
                    address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                },
                stats: {
                    totalFollowers: 91,
                    totalFollowing: 128,
                    totalPosts: 91,
                    totalComments: 47,
                    totalMirrors: 74,
                    totalPublications: 212,
                    totalCollects: 41,
                },
                followModule: null,
            },
            stats: {
                totalAmountOfMirrors: 0,
                totalAmountOfCollects: 0,
                totalAmountOfComments: 3,
            },
            metadata: {
                name: "Post by @sintex",
                description:
                    "Happy Birthday @stani.lens and @nader.lens\n\nWish you long life full of good health and peace\n\n🎂🍾",
                content:
                    "Happy Birthday @stani.lens and @nader.lens\n\nWish you long life full of good health and peace\n\n🎂🍾",
                media: [],
                attributes: [],
            },
            createdAt: "2023-01-13T12:05:44.000Z",
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
                id: "0x28a2-0x03f0",
                profile: {
                    id: "0x28a2",
                    name: "Nader Dabit",
                    bio: "Director of Developer Relations at @lensprotocol 🌿 & @aaveaave.lens 👻",
                    attributes: [
                        {
                            displayType: null,
                            traitType: "string",
                            key: "location",
                            value: "United States",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "website",
                            value: "nader.arweave.dev",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "twitter",
                            value: "dabit3",
                        },
                        {
                            displayType: null,
                            traitType: "boolean",
                            key: "hasPrideLogo",
                            value: "true",
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
                        "0x667C6446796aa7757aA0F3B423bF3148B1ce5624",
                    metadata:
                        "https://arweave.net/qy-PO6wXAGfff8YAlGwGfYTSVBwadkwKXmWVRUTD4X4",
                    isDefault: true,
                    handle: "nader.lens",
                    picture: {
                        original: {
                            url: "https://lens.infura-ipfs.io/ipfs/QmVBfhfgfhGsRVxTNURVUgceqyzjdVe11ic5rCghmePuKX",
                            mimeType: null,
                        },
                    },
                    coverPicture: {
                        original: {
                            url: "ipfs://bafybeibtvbacwbb2bsitmqlrad4jsegsng2h4fwk26qj3leo6zwqu3fx3u",
                            mimeType: null,
                        },
                    },
                    ownedBy: "0xB2Ebc9b3a788aFB1E942eD65B59E9E49A1eE500D",
                    dispatcher: {
                        address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                    },
                    stats: {
                        totalFollowers: 8250,
                        totalFollowing: 750,
                        totalPosts: 229,
                        totalComments: 365,
                        totalMirrors: 428,
                        totalPublications: 1022,
                        totalCollects: 11758,
                    },
                    followModule: null,
                },
                stats: {
                    totalAmountOfMirrors: 0,
                    totalAmountOfCollects: 0,
                    totalAmountOfComments: 2,
                },
                metadata: {
                    name: "Comment by @nader",
                    description: "Thank you 🙏",
                    content: "Thank you 🙏",
                    media: [],
                    attributes: [],
                },
                createdAt: "2023-01-13T14:14:16.000Z",
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
                mainPost: {
                    id: "0x015182-0xd1",
                    profile: {
                        id: "0x015182",
                        name: "Jack",
                        bio: "mintooooooooor, collectooooooooooor, mirrooooooooooor",
                        attributes: [
                            {
                                displayType: null,
                                traitType: "string",
                                key: "website",
                                value: "https://lenster.xyz/u/sintex.lens",
                            },
                            {
                                displayType: null,
                                traitType: "string",
                                key: "twitter",
                                value: "Breaking_Gud_",
                            },
                            {
                                displayType: null,
                                traitType: "string",
                                key: "app",
                                value: "LensFrens",
                            },
                        ],
                        isFollowedByMe: false,
                        isFollowing: false,
                        followNftAddress:
                            "0xf10acc3C0cEC9Ec7F1bE7a112fd8f81AB76b9431",
                        metadata:
                            "ipfs://QmdEM9BYYq88bpcPi2coT6aKpTxhnNaFAT9dd5L6H5qZpm",
                        isDefault: true,
                        handle: "sintex.lens",
                        picture: {
                            original: {
                                url: "ipfs://bafybeidim6yu3gq4gf55wf5vsbresghcw6rthke6x5iahs64ay25phkdse",
                                mimeType: null,
                            },
                        },
                        coverPicture: null,
                        ownedBy: "0x2D10984365D759Af1D5695f0ac58a22B4e966853",
                        dispatcher: {
                            address:
                                "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                        },
                        stats: {
                            totalFollowers: 91,
                            totalFollowing: 128,
                            totalPosts: 91,
                            totalComments: 47,
                            totalMirrors: 74,
                            totalPublications: 212,
                            totalCollects: 41,
                        },
                        followModule: null,
                    },
                    stats: {
                        totalAmountOfMirrors: 0,
                        totalAmountOfCollects: 0,
                        totalAmountOfComments: 3,
                    },
                    metadata: {
                        name: "Post by @sintex",
                        description:
                            "Happy Birthday @stani.lens and @nader.lens\n\nWish you long life full of good health and peace\n\n🎂🍾",
                        content:
                            "Happy Birthday @stani.lens and @nader.lens\n\nWish you long life full of good health and peace\n\n🎂🍾",
                        media: [],
                        attributes: [],
                    },
                    createdAt: "2023-01-13T12:05:44.000Z",
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
    },
    {
        root: {
            __typename: "Post",
            id: "0x011f55-0x08b6",
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
                totalAmountOfMirrors: 1,
                totalAmountOfCollects: 0,
                totalAmountOfComments: 3,
            },
            metadata: {
                name: "Post by @chriscomrie.lens",
                description: null,
                content: "Happy birthday yall @stani.lens @nader.lens !! ",
                media: [
                    {
                        original: {
                            url: "https://media0.giphy.com/media/26FPpSuhgHvYo9Kyk/giphy.gif?cid=9f0f6425blvora6dgjbw9hc803huok0o1sg15qiun06e9zii&rid=giphy.gif&ct=g",
                            mimeType: "image/gif",
                        },
                    },
                ],
                attributes: [
                    {
                        displayType: "string",
                        traitType: "type",
                        value: "image",
                    },
                ],
            },
            createdAt: "2023-01-13T12:12:18.000Z",
            collectModule: {
                __typename: "RevertCollectModuleSettings",
                type: "RevertCollectModule",
            },
            referenceModule: {},
            appId: "lenster",
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
                id: "0x011f55-0x08bc",
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
                    followNftAddress:
                        "0xc1Bf666ACD14DAd62d55457417E69D8705c3d2f0",
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
                    name: "Comment by @chriscomrie.lens",
                    description: null,
                    content: "🙂",
                    media: [],
                    attributes: [
                        {
                            displayType: "string",
                            traitType: "type",
                            value: "text_only",
                        },
                    ],
                },
                createdAt: "2023-01-13T14:15:38.000Z",
                collectModule: {
                    __typename: "RevertCollectModuleSettings",
                    type: "RevertCollectModule",
                },
                referenceModule: {},
                appId: "lenster",
                collectedBy: null,
                hidden: false,
                reaction: null,
                mirrors: [],
                hasCollectedByMe: false,
                mainPost: {
                    id: "0x011f55-0x08b6",
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
                        followNftAddress:
                            "0xc1Bf666ACD14DAd62d55457417E69D8705c3d2f0",
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
                            address:
                                "0xD1FecCF6881970105dfb2b654054174007f0e07E",
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
                        totalAmountOfMirrors: 1,
                        totalAmountOfCollects: 0,
                        totalAmountOfComments: 3,
                    },
                    metadata: {
                        name: "Post by @chriscomrie.lens",
                        description: null,
                        content:
                            "Happy birthday yall @stani.lens @nader.lens !! ",
                        media: [
                            {
                                original: {
                                    url: "https://media0.giphy.com/media/26FPpSuhgHvYo9Kyk/giphy.gif?cid=9f0f6425blvora6dgjbw9hc803huok0o1sg15qiun06e9zii&rid=giphy.gif&ct=g",
                                    mimeType: "image/gif",
                                },
                            },
                        ],
                        attributes: [
                            {
                                displayType: "string",
                                traitType: "type",
                                value: "image",
                            },
                        ],
                    },
                    createdAt: "2023-01-13T12:12:18.000Z",
                    collectModule: {
                        __typename: "RevertCollectModuleSettings",
                        type: "RevertCollectModule",
                    },
                    referenceModule: {},
                    appId: "lenster",
                    collectedBy: null,
                    hidden: false,
                    reaction: null,
                    mirrors: [],
                    hasCollectedByMe: false,
                },
            },
            {
                id: "0x28a2-0x03ef",
                profile: {
                    id: "0x28a2",
                    name: "Nader Dabit",
                    bio: "Director of Developer Relations at @lensprotocol 🌿 & @aaveaave.lens 👻",
                    attributes: [
                        {
                            displayType: null,
                            traitType: "string",
                            key: "location",
                            value: "United States",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "website",
                            value: "nader.arweave.dev",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "twitter",
                            value: "dabit3",
                        },
                        {
                            displayType: null,
                            traitType: "boolean",
                            key: "hasPrideLogo",
                            value: "true",
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
                        "0x667C6446796aa7757aA0F3B423bF3148B1ce5624",
                    metadata:
                        "https://arweave.net/qy-PO6wXAGfff8YAlGwGfYTSVBwadkwKXmWVRUTD4X4",
                    isDefault: true,
                    handle: "nader.lens",
                    picture: {
                        original: {
                            url: "https://lens.infura-ipfs.io/ipfs/QmVBfhfgfhGsRVxTNURVUgceqyzjdVe11ic5rCghmePuKX",
                            mimeType: null,
                        },
                    },
                    coverPicture: {
                        original: {
                            url: "ipfs://bafybeibtvbacwbb2bsitmqlrad4jsegsng2h4fwk26qj3leo6zwqu3fx3u",
                            mimeType: null,
                        },
                    },
                    ownedBy: "0xB2Ebc9b3a788aFB1E942eD65B59E9E49A1eE500D",
                    dispatcher: {
                        address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                    },
                    stats: {
                        totalFollowers: 8250,
                        totalFollowing: 750,
                        totalPosts: 229,
                        totalComments: 365,
                        totalMirrors: 428,
                        totalPublications: 1022,
                        totalCollects: 11758,
                    },
                    followModule: null,
                },
                stats: {
                    totalAmountOfMirrors: 0,
                    totalAmountOfCollects: 0,
                    totalAmountOfComments: 1,
                },
                metadata: {
                    name: "Comment by @nader",
                    description: "Thank you @chriscomrie",
                    content: "Thank you @chriscomrie",
                    media: [],
                    attributes: [],
                },
                createdAt: "2023-01-13T14:14:06.000Z",
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
                mainPost: {
                    id: "0x011f55-0x08b6",
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
                        followNftAddress:
                            "0xc1Bf666ACD14DAd62d55457417E69D8705c3d2f0",
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
                            address:
                                "0xD1FecCF6881970105dfb2b654054174007f0e07E",
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
                        totalAmountOfMirrors: 1,
                        totalAmountOfCollects: 0,
                        totalAmountOfComments: 3,
                    },
                    metadata: {
                        name: "Post by @chriscomrie.lens",
                        description: null,
                        content:
                            "Happy birthday yall @stani.lens @nader.lens !! ",
                        media: [
                            {
                                original: {
                                    url: "https://media0.giphy.com/media/26FPpSuhgHvYo9Kyk/giphy.gif?cid=9f0f6425blvora6dgjbw9hc803huok0o1sg15qiun06e9zii&rid=giphy.gif&ct=g",
                                    mimeType: "image/gif",
                                },
                            },
                        ],
                        attributes: [
                            {
                                displayType: "string",
                                traitType: "type",
                                value: "image",
                            },
                        ],
                    },
                    createdAt: "2023-01-13T12:12:18.000Z",
                    collectModule: {
                        __typename: "RevertCollectModuleSettings",
                        type: "RevertCollectModule",
                    },
                    referenceModule: {},
                    appId: "lenster",
                    collectedBy: null,
                    hidden: false,
                    reaction: null,
                    mirrors: [],
                    hasCollectedByMe: false,
                },
            },
        ],
    },
    {
        root: {
            __typename: "Post",
            id: "0xee76-0x0158",
            profile: {
                id: "0xee76",
                name: "arturs",
                bio: "building @lenstaxyz , dev, memes\n\nLensta creator",
                attributes: [
                    {
                        displayType: null,
                        traitType: "string",
                        key: "website",
                        value: "https://app.lensta.xyz",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "twitter",
                        value: "akirtovskis",
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
                followNftAddress: "0x6C8dA53a73A8Da3775C7CA00De28353f4f99c210",
                metadata:
                    "https://arweave.net/TPN2QPpnw5AP76-WC-NeTc1OmEkPUL4xQEx6gvz-aus",
                isDefault: true,
                handle: "arturs.lens",
                picture: {
                    original: {
                        url: "ipfs://QmPofaUyfad5vyNtxWAbv8dKHh2LFqVWAtG1wBvGqyF7BL",
                        mimeType: null,
                    },
                },
                coverPicture: null,
                ownedBy: "0x869139316d79117003D69bD41DEaeCA22eA6cE18",
                dispatcher: {
                    address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                },
                stats: {
                    totalFollowers: 1005,
                    totalFollowing: 492,
                    totalPosts: 131,
                    totalComments: 176,
                    totalMirrors: 35,
                    totalPublications: 342,
                    totalCollects: 1254,
                },
                followModule: null,
            },
            stats: {
                totalAmountOfMirrors: 22,
                totalAmountOfCollects: 71,
                totalAmountOfComments: 10,
            },
            metadata: {
                name: "Post by arturs",
                description:
                    "Photography feed on @lenstaxyz.lens 📸 👀\n\nYes or No?",
                content:
                    "Photography feed on @lenstaxyz.lens 📸 👀\n\nYes or No?",
                media: [
                    {
                        original: {
                            url: "ipfs://QmVmgDkTeHuiMr9yYSktnMcy7Nkd1TBdbyJ52tXifajVvv",
                            mimeType: "image/png",
                        },
                    },
                ],
                attributes: [
                    {
                        displayType: "string",
                        traitType: "type",
                        value: "image",
                    },
                ],
            },
            createdAt: "2023-01-13T05:53:09.000Z",
            collectModule: {
                __typename: "FreeCollectModuleSettings",
                type: "FreeCollectModule",
                followerOnly: false,
                contractAddress: "0x23b9467334bEb345aAa6fd1545538F3d54436e96",
            },
            referenceModule: null,
            appId: "lensta",
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
                id: "0x011f55-0x08bb",
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
                    followNftAddress:
                        "0xc1Bf666ACD14DAd62d55457417E69D8705c3d2f0",
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
                    name: "Comment by @chriscomrie.lens",
                    description: null,
                    content: "BIG YES",
                    media: [],
                    attributes: [
                        {
                            displayType: "string",
                            traitType: "type",
                            value: "text_only",
                        },
                    ],
                },
                createdAt: "2023-01-13T14:13:50.000Z",
                collectModule: {
                    __typename: "RevertCollectModuleSettings",
                    type: "RevertCollectModule",
                },
                referenceModule: {},
                appId: "lenster",
                collectedBy: null,
                hidden: false,
                reaction: null,
                mirrors: [],
                hasCollectedByMe: false,
                mainPost: {
                    id: "0xee76-0x0158",
                    profile: {
                        id: "0xee76",
                        name: "arturs",
                        bio: "building @lenstaxyz , dev, memes\n\nLensta creator",
                        attributes: [
                            {
                                displayType: null,
                                traitType: "string",
                                key: "website",
                                value: "https://app.lensta.xyz",
                            },
                            {
                                displayType: null,
                                traitType: "string",
                                key: "twitter",
                                value: "akirtovskis",
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
                            "0x6C8dA53a73A8Da3775C7CA00De28353f4f99c210",
                        metadata:
                            "https://arweave.net/TPN2QPpnw5AP76-WC-NeTc1OmEkPUL4xQEx6gvz-aus",
                        isDefault: true,
                        handle: "arturs.lens",
                        picture: {
                            original: {
                                url: "ipfs://QmPofaUyfad5vyNtxWAbv8dKHh2LFqVWAtG1wBvGqyF7BL",
                                mimeType: null,
                            },
                        },
                        coverPicture: null,
                        ownedBy: "0x869139316d79117003D69bD41DEaeCA22eA6cE18",
                        dispatcher: {
                            address:
                                "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                        },
                        stats: {
                            totalFollowers: 1005,
                            totalFollowing: 492,
                            totalPosts: 131,
                            totalComments: 176,
                            totalMirrors: 35,
                            totalPublications: 342,
                            totalCollects: 1254,
                        },
                        followModule: null,
                    },
                    stats: {
                        totalAmountOfMirrors: 22,
                        totalAmountOfCollects: 71,
                        totalAmountOfComments: 10,
                    },
                    metadata: {
                        name: "Post by arturs",
                        description:
                            "Photography feed on @lenstaxyz.lens 📸 👀\n\nYes or No?",
                        content:
                            "Photography feed on @lenstaxyz.lens 📸 👀\n\nYes or No?",
                        media: [
                            {
                                original: {
                                    url: "ipfs://QmVmgDkTeHuiMr9yYSktnMcy7Nkd1TBdbyJ52tXifajVvv",
                                    mimeType: "image/png",
                                },
                            },
                        ],
                        attributes: [
                            {
                                displayType: "string",
                                traitType: "type",
                                value: "image",
                            },
                        ],
                    },
                    createdAt: "2023-01-13T05:53:09.000Z",
                    collectModule: {
                        __typename: "FreeCollectModuleSettings",
                        type: "FreeCollectModule",
                        followerOnly: false,
                        contractAddress:
                            "0x23b9467334bEb345aAa6fd1545538F3d54436e96",
                    },
                    referenceModule: null,
                    appId: "lensta",
                    collectedBy: null,
                    hidden: false,
                    reaction: null,
                    mirrors: [],
                    hasCollectedByMe: false,
                },
            },
        ],
    },
    {
        root: {
            __typename: "Post",
            id: "0x016a1f-0x048c",
            profile: {
                id: "0x016a1f",
                name: "Road Waves",
                bio: "Canadian Funk/Rock Jamband 🍁 \nAn internationally-touring soul-rock explosion! 🚐🌊 \nListen on any streaming platform! 🎧\nLenstube: https://lenstube.xyz/roadwaves.lens",
                attributes: [
                    {
                        displayType: null,
                        traitType: "string",
                        key: "website",
                        value: "https://www.roadwaves.xyz",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "twitter",
                        value: "roadwavesband",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "statusMessage",
                        value: "Jam Cruisin' 🚐🌿🌊",
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
                followNftAddress: "0x123a433C01AC5721e4bfAdB7e813205e7a7365c6",
                metadata:
                    "https://arweave.net/V2x1nluTLnom9418MXsMakxKDTSH85Bf0pPaBD3YlPE",
                isDefault: true,
                handle: "roadwaves.lens",
                picture: {
                    original: {
                        url: "ipfs://bafybeictutgkmk2n7z6vwehia37ujhqgwh6a6td6auduubpp3in7r3mdxm",
                        mimeType: null,
                    },
                },
                coverPicture: {
                    original: {
                        url: "ipfs://bafkreifkv5hnf65hujcrujnw7i2hyzdyzy546spmlovhvfccita7rdemyu",
                        mimeType: null,
                    },
                },
                ownedBy: "0x4bf4A673858D72F69D1515De302321C48c7233B3",
                dispatcher: {
                    address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                },
                stats: {
                    totalFollowers: 797,
                    totalFollowing: 211,
                    totalPosts: 116,
                    totalComments: 771,
                    totalMirrors: 274,
                    totalPublications: 1161,
                    totalCollects: 1426,
                },
                followModule: null,
            },
            stats: {
                totalAmountOfMirrors: 0,
                totalAmountOfCollects: 4,
                totalAmountOfComments: 6,
            },
            metadata: {
                name: "Post by @roadwaves",
                description: "Gm  & happy sun cycle to @stani.lens ☀️🥳🎁",
                content: "Gm  & happy sun cycle to @stani.lens ☀️🥳🎁",
                media: [],
                attributes: [],
            },
            createdAt: "2023-01-13T13:55:44.000Z",
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
                id: "0x28a2-0x03ed",
                profile: {
                    id: "0x28a2",
                    name: "Nader Dabit",
                    bio: "Director of Developer Relations at @lensprotocol 🌿 & @aaveaave.lens 👻",
                    attributes: [
                        {
                            displayType: null,
                            traitType: "string",
                            key: "location",
                            value: "United States",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "website",
                            value: "nader.arweave.dev",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "twitter",
                            value: "dabit3",
                        },
                        {
                            displayType: null,
                            traitType: "boolean",
                            key: "hasPrideLogo",
                            value: "true",
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
                        "0x667C6446796aa7757aA0F3B423bF3148B1ce5624",
                    metadata:
                        "https://arweave.net/qy-PO6wXAGfff8YAlGwGfYTSVBwadkwKXmWVRUTD4X4",
                    isDefault: true,
                    handle: "nader.lens",
                    picture: {
                        original: {
                            url: "https://lens.infura-ipfs.io/ipfs/QmVBfhfgfhGsRVxTNURVUgceqyzjdVe11ic5rCghmePuKX",
                            mimeType: null,
                        },
                    },
                    coverPicture: {
                        original: {
                            url: "ipfs://bafybeibtvbacwbb2bsitmqlrad4jsegsng2h4fwk26qj3leo6zwqu3fx3u",
                            mimeType: null,
                        },
                    },
                    ownedBy: "0xB2Ebc9b3a788aFB1E942eD65B59E9E49A1eE500D",
                    dispatcher: {
                        address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                    },
                    stats: {
                        totalFollowers: 8250,
                        totalFollowing: 750,
                        totalPosts: 229,
                        totalComments: 365,
                        totalMirrors: 428,
                        totalPublications: 1022,
                        totalCollects: 11758,
                    },
                    followModule: null,
                },
                stats: {
                    totalAmountOfMirrors: 0,
                    totalAmountOfCollects: 0,
                    totalAmountOfComments: 1,
                },
                metadata: {
                    name: "Comment by @nader",
                    description: "Thanks!",
                    content: "Thanks!",
                    media: [],
                    attributes: [],
                },
                createdAt: "2023-01-13T14:13:30.000Z",
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
                mainPost: {
                    id: "0x016a1f-0x048c",
                    profile: {
                        id: "0x016a1f",
                        name: "Road Waves",
                        bio: "Canadian Funk/Rock Jamband 🍁 \nAn internationally-touring soul-rock explosion! 🚐🌊 \nListen on any streaming platform! 🎧\nLenstube: https://lenstube.xyz/roadwaves.lens",
                        attributes: [
                            {
                                displayType: null,
                                traitType: "string",
                                key: "website",
                                value: "https://www.roadwaves.xyz",
                            },
                            {
                                displayType: null,
                                traitType: "string",
                                key: "twitter",
                                value: "roadwavesband",
                            },
                            {
                                displayType: null,
                                traitType: "string",
                                key: "statusMessage",
                                value: "Jam Cruisin' 🚐🌿🌊",
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
                            "0x123a433C01AC5721e4bfAdB7e813205e7a7365c6",
                        metadata:
                            "https://arweave.net/V2x1nluTLnom9418MXsMakxKDTSH85Bf0pPaBD3YlPE",
                        isDefault: true,
                        handle: "roadwaves.lens",
                        picture: {
                            original: {
                                url: "ipfs://bafybeictutgkmk2n7z6vwehia37ujhqgwh6a6td6auduubpp3in7r3mdxm",
                                mimeType: null,
                            },
                        },
                        coverPicture: {
                            original: {
                                url: "ipfs://bafkreifkv5hnf65hujcrujnw7i2hyzdyzy546spmlovhvfccita7rdemyu",
                                mimeType: null,
                            },
                        },
                        ownedBy: "0x4bf4A673858D72F69D1515De302321C48c7233B3",
                        dispatcher: {
                            address:
                                "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                        },
                        stats: {
                            totalFollowers: 797,
                            totalFollowing: 211,
                            totalPosts: 116,
                            totalComments: 771,
                            totalMirrors: 274,
                            totalPublications: 1161,
                            totalCollects: 1426,
                        },
                        followModule: null,
                    },
                    stats: {
                        totalAmountOfMirrors: 0,
                        totalAmountOfCollects: 4,
                        totalAmountOfComments: 6,
                    },
                    metadata: {
                        name: "Post by @roadwaves",
                        description:
                            "Gm  & happy sun cycle to @stani.lens ☀️🥳🎁",
                        content: "Gm  & happy sun cycle to @stani.lens ☀️🥳🎁",
                        media: [],
                        attributes: [],
                    },
                    createdAt: "2023-01-13T13:55:44.000Z",
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
                id: "0x016a1f-0x048e",
                profile: {
                    id: "0x016a1f",
                    name: "Road Waves",
                    bio: "Canadian Funk/Rock Jamband 🍁 \nAn internationally-touring soul-rock explosion! 🚐🌊 \nListen on any streaming platform! 🎧\nLenstube: https://lenstube.xyz/roadwaves.lens",
                    attributes: [
                        {
                            displayType: null,
                            traitType: "string",
                            key: "website",
                            value: "https://www.roadwaves.xyz",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "twitter",
                            value: "roadwavesband",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "statusMessage",
                            value: "Jam Cruisin' 🚐🌿🌊",
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
                        "0x123a433C01AC5721e4bfAdB7e813205e7a7365c6",
                    metadata:
                        "https://arweave.net/V2x1nluTLnom9418MXsMakxKDTSH85Bf0pPaBD3YlPE",
                    isDefault: true,
                    handle: "roadwaves.lens",
                    picture: {
                        original: {
                            url: "ipfs://bafybeictutgkmk2n7z6vwehia37ujhqgwh6a6td6auduubpp3in7r3mdxm",
                            mimeType: null,
                        },
                    },
                    coverPicture: {
                        original: {
                            url: "ipfs://bafkreifkv5hnf65hujcrujnw7i2hyzdyzy546spmlovhvfccita7rdemyu",
                            mimeType: null,
                        },
                    },
                    ownedBy: "0x4bf4A673858D72F69D1515De302321C48c7233B3",
                    dispatcher: {
                        address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                    },
                    stats: {
                        totalFollowers: 797,
                        totalFollowing: 211,
                        totalPosts: 116,
                        totalComments: 771,
                        totalMirrors: 274,
                        totalPublications: 1161,
                        totalCollects: 1426,
                    },
                    followModule: null,
                },
                stats: {
                    totalAmountOfMirrors: 0,
                    totalAmountOfCollects: 0,
                    totalAmountOfComments: 0,
                },
                metadata: {
                    name: "Comment by @roadwaves",
                    description: "Have a killer day😁",
                    content: "Have a killer day😁",
                    media: [],
                    attributes: [],
                },
                createdAt: "2023-01-13T14:07:40.000Z",
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
                mainPost: {
                    id: "0x016a1f-0x048c",
                    profile: {
                        id: "0x016a1f",
                        name: "Road Waves",
                        bio: "Canadian Funk/Rock Jamband 🍁 \nAn internationally-touring soul-rock explosion! 🚐🌊 \nListen on any streaming platform! 🎧\nLenstube: https://lenstube.xyz/roadwaves.lens",
                        attributes: [
                            {
                                displayType: null,
                                traitType: "string",
                                key: "website",
                                value: "https://www.roadwaves.xyz",
                            },
                            {
                                displayType: null,
                                traitType: "string",
                                key: "twitter",
                                value: "roadwavesband",
                            },
                            {
                                displayType: null,
                                traitType: "string",
                                key: "statusMessage",
                                value: "Jam Cruisin' 🚐🌿🌊",
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
                            "0x123a433C01AC5721e4bfAdB7e813205e7a7365c6",
                        metadata:
                            "https://arweave.net/V2x1nluTLnom9418MXsMakxKDTSH85Bf0pPaBD3YlPE",
                        isDefault: true,
                        handle: "roadwaves.lens",
                        picture: {
                            original: {
                                url: "ipfs://bafybeictutgkmk2n7z6vwehia37ujhqgwh6a6td6auduubpp3in7r3mdxm",
                                mimeType: null,
                            },
                        },
                        coverPicture: {
                            original: {
                                url: "ipfs://bafkreifkv5hnf65hujcrujnw7i2hyzdyzy546spmlovhvfccita7rdemyu",
                                mimeType: null,
                            },
                        },
                        ownedBy: "0x4bf4A673858D72F69D1515De302321C48c7233B3",
                        dispatcher: {
                            address:
                                "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                        },
                        stats: {
                            totalFollowers: 797,
                            totalFollowing: 211,
                            totalPosts: 116,
                            totalComments: 771,
                            totalMirrors: 274,
                            totalPublications: 1161,
                            totalCollects: 1426,
                        },
                        followModule: null,
                    },
                    stats: {
                        totalAmountOfMirrors: 0,
                        totalAmountOfCollects: 4,
                        totalAmountOfComments: 6,
                    },
                    metadata: {
                        name: "Post by @roadwaves",
                        description:
                            "Gm  & happy sun cycle to @stani.lens ☀️🥳🎁",
                        content: "Gm  & happy sun cycle to @stani.lens ☀️🥳🎁",
                        media: [],
                        attributes: [],
                    },
                    createdAt: "2023-01-13T13:55:44.000Z",
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
                id: "0x016a1f-0x048d",
                profile: {
                    id: "0x016a1f",
                    name: "Road Waves",
                    bio: "Canadian Funk/Rock Jamband 🍁 \nAn internationally-touring soul-rock explosion! 🚐🌊 \nListen on any streaming platform! 🎧\nLenstube: https://lenstube.xyz/roadwaves.lens",
                    attributes: [
                        {
                            displayType: null,
                            traitType: "string",
                            key: "website",
                            value: "https://www.roadwaves.xyz",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "twitter",
                            value: "roadwavesband",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "statusMessage",
                            value: "Jam Cruisin' 🚐🌿🌊",
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
                        "0x123a433C01AC5721e4bfAdB7e813205e7a7365c6",
                    metadata:
                        "https://arweave.net/V2x1nluTLnom9418MXsMakxKDTSH85Bf0pPaBD3YlPE",
                    isDefault: true,
                    handle: "roadwaves.lens",
                    picture: {
                        original: {
                            url: "ipfs://bafybeictutgkmk2n7z6vwehia37ujhqgwh6a6td6auduubpp3in7r3mdxm",
                            mimeType: null,
                        },
                    },
                    coverPicture: {
                        original: {
                            url: "ipfs://bafkreifkv5hnf65hujcrujnw7i2hyzdyzy546spmlovhvfccita7rdemyu",
                            mimeType: null,
                        },
                    },
                    ownedBy: "0x4bf4A673858D72F69D1515De302321C48c7233B3",
                    dispatcher: {
                        address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                    },
                    stats: {
                        totalFollowers: 797,
                        totalFollowing: 211,
                        totalPosts: 116,
                        totalComments: 771,
                        totalMirrors: 274,
                        totalPublications: 1161,
                        totalCollects: 1426,
                    },
                    followModule: null,
                },
                stats: {
                    totalAmountOfMirrors: 0,
                    totalAmountOfCollects: 0,
                    totalAmountOfComments: 2,
                },
                metadata: {
                    name: "Comment by @roadwaves",
                    description: "Happy sun cycle to @nader.lens too 🥳🎁☀️",
                    content: "Happy sun cycle to @nader.lens too 🥳🎁☀️",
                    media: [],
                    attributes: [],
                },
                createdAt: "2023-01-13T14:06:06.000Z",
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
                mainPost: {
                    id: "0x016a1f-0x048c",
                    profile: {
                        id: "0x016a1f",
                        name: "Road Waves",
                        bio: "Canadian Funk/Rock Jamband 🍁 \nAn internationally-touring soul-rock explosion! 🚐🌊 \nListen on any streaming platform! 🎧\nLenstube: https://lenstube.xyz/roadwaves.lens",
                        attributes: [
                            {
                                displayType: null,
                                traitType: "string",
                                key: "website",
                                value: "https://www.roadwaves.xyz",
                            },
                            {
                                displayType: null,
                                traitType: "string",
                                key: "twitter",
                                value: "roadwavesband",
                            },
                            {
                                displayType: null,
                                traitType: "string",
                                key: "statusMessage",
                                value: "Jam Cruisin' 🚐🌿🌊",
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
                            "0x123a433C01AC5721e4bfAdB7e813205e7a7365c6",
                        metadata:
                            "https://arweave.net/V2x1nluTLnom9418MXsMakxKDTSH85Bf0pPaBD3YlPE",
                        isDefault: true,
                        handle: "roadwaves.lens",
                        picture: {
                            original: {
                                url: "ipfs://bafybeictutgkmk2n7z6vwehia37ujhqgwh6a6td6auduubpp3in7r3mdxm",
                                mimeType: null,
                            },
                        },
                        coverPicture: {
                            original: {
                                url: "ipfs://bafkreifkv5hnf65hujcrujnw7i2hyzdyzy546spmlovhvfccita7rdemyu",
                                mimeType: null,
                            },
                        },
                        ownedBy: "0x4bf4A673858D72F69D1515De302321C48c7233B3",
                        dispatcher: {
                            address:
                                "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                        },
                        stats: {
                            totalFollowers: 797,
                            totalFollowing: 211,
                            totalPosts: 116,
                            totalComments: 771,
                            totalMirrors: 274,
                            totalPublications: 1161,
                            totalCollects: 1426,
                        },
                        followModule: null,
                    },
                    stats: {
                        totalAmountOfMirrors: 0,
                        totalAmountOfCollects: 4,
                        totalAmountOfComments: 6,
                    },
                    metadata: {
                        name: "Post by @roadwaves",
                        description:
                            "Gm  & happy sun cycle to @stani.lens ☀️🥳🎁",
                        content: "Gm  & happy sun cycle to @stani.lens ☀️🥳🎁",
                        media: [],
                        attributes: [],
                    },
                    createdAt: "2023-01-13T13:55:44.000Z",
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
    },
    {
        root: {
            __typename: "Post",
            id: "0x2d11-0xec",
            profile: {
                id: "0x2d11",
                name: "Cryptonose",
                bio: '🌿  Visionary Art Fan     "The best things in life will always be free"     🌿         #GDAO                                                                               ',
                attributes: [
                    {
                        displayType: null,
                        traitType: "string",
                        key: "location",
                        value: "Poland",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "website",
                        value: "https://vault.governordao.org/?ref=0x7F202a4b8Cdb2176cD64e55f3Db3cbF5c7d2cf6F",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "twitter",
                        value: "Kryptonos1",
                    },
                    {
                        displayType: null,
                        traitType: "boolean",
                        key: "hasPrideLogo",
                        value: "true",
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
                followNftAddress: "0x68625e732AE40a2438C1b7Eb4d340830485Db6D0",
                metadata:
                    "https://arweave.net/wdZYMOiclKgejUB9kFtegoRtrCLaEDS832Hee5vQEA4",
                isDefault: true,
                handle: "kryptonos1.lens",
                picture: {
                    original: {
                        url: "ipfs://Qmed6DnRT5hoMajvm7xX98oy5FSVvDxEgDjjd4Wqo3stfU",
                        mimeType: null,
                    },
                },
                coverPicture: {
                    original: {
                        url: "ipfs://QmSa84yaBNXVWafU63M2vESiNSGmmX6hZRZRsBtpBD2JKZ",
                        mimeType: null,
                    },
                },
                ownedBy: "0x7F202a4b8Cdb2176cD64e55f3Db3cbF5c7d2cf6F",
                dispatcher: {
                    address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                },
                stats: {
                    totalFollowers: 153,
                    totalFollowing: 268,
                    totalPosts: 63,
                    totalComments: 56,
                    totalMirrors: 148,
                    totalPublications: 267,
                    totalCollects: 131,
                },
                followModule: null,
            },
            stats: {
                totalAmountOfMirrors: 10,
                totalAmountOfCollects: 8,
                totalAmountOfComments: 1,
            },
            metadata: {
                name: "Post by @kryptonos1.lens",
                description: null,
                content:
                    "ETHERMAIL       🌿                                                                                                                                                                        We are building the **bridge between web 2.0 and web 3.0 email communication**, while bringing back to users **full ownership, control, and sovereignty of their inbox.**  #lens #wav3s #ethermail #web3                                                                                                                                                                                 Receive a free drop   -     https://ethermail.io/?afid=630e1bae4060a13b07bcb928",
                media: [
                    {
                        original: {
                            url: "ipfs://bafybeig5ytumwi6lfx4zbhaj235glozjqzxcc6dtxhiycyoava3izgabj4",
                            mimeType: "image/png",
                        },
                    },
                ],
                attributes: [
                    {
                        displayType: "string",
                        traitType: "type",
                        value: "image",
                    },
                ],
            },
            createdAt: "2023-01-10T08:35:18.000Z",
            collectModule: {
                __typename: "FreeCollectModuleSettings",
                type: "FreeCollectModule",
                followerOnly: false,
                contractAddress: "0x23b9467334bEb345aAa6fd1545538F3d54436e96",
            },
            referenceModule: {},
            appId: "lenster",
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
                id: "0xe222-0xad",
                profile: {
                    id: "0xe222",
                    name: "Cristian Valdivia",
                    bio: "Building @wav3s Obsessed with Lens.  Posts in english/español",
                    attributes: [
                        {
                            displayType: null,
                            traitType: "string",
                            key: "location",
                            value: "Santiago, Chile",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "website",
                            value: "https://www.cristianvaldivia.cl/",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "statusEmoji",
                            value: "🌊",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "statusMessage",
                            value: "Working in wav3s ",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "app",
                            value: "Orb",
                        },
                        {
                            displayType: null,
                            traitType: "json",
                            key: "projects",
                            value: "[]",
                        },
                        {
                            displayType: null,
                            traitType: "json",
                            key: "skills",
                            value: "[]",
                        },
                        {
                            displayType: null,
                            traitType: "json",
                            key: "experience",
                            value: "[]",
                        },
                        {
                            displayType: null,
                            traitType: "json",
                            key: "education",
                            value: "[]",
                        },
                    ],
                    isFollowedByMe: false,
                    isFollowing: false,
                    followNftAddress:
                        "0x3a736Ab66c38a05f1AE3c3C9901d2Da1511e8231",
                    metadata:
                        "https://arweave.net/wI98NJ3TgcZ_AiHNeXWC0CpqCuECHH5v822EaxkVvj4",
                    isDefault: true,
                    handle: "cristianvaldivia.lens",
                    picture: {
                        original: {
                            url: "ipfs://bafkreib75vvqtckmck6zs7v7lntc7pan45jbugmcc6633z3aflvprryr4i",
                            mimeType: null,
                        },
                    },
                    coverPicture: {
                        original: {
                            url: "https://ik.imagekit.io/orbapp/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/orbapp/tr:n-attachment,tr:di-placeholder.webp/https://lens.infura-ipfs.io/ipfs/bafybeic4hvzrm6qdr26kjexdnv5lw7txpetrycjegqugnqxxxntt2tyd6q",
                            mimeType: null,
                        },
                    },
                    ownedBy: "0x3aeC2276326CDC8E9a8A4351c338166e67105AC3",
                    dispatcher: {
                        address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                    },
                    stats: {
                        totalFollowers: 96,
                        totalFollowing: 162,
                        totalPosts: 30,
                        totalComments: 60,
                        totalMirrors: 83,
                        totalPublications: 173,
                        totalCollects: 17,
                    },
                    followModule: null,
                },
                stats: {
                    totalAmountOfMirrors: 0,
                    totalAmountOfCollects: 0,
                    totalAmountOfComments: 0,
                },
                metadata: {
                    name: "Comment by @cristianvaldivia.lens",
                    description: null,
                    content: "Why some guys cannot do a mirror to this??",
                    media: [],
                    attributes: [
                        {
                            displayType: "string",
                            traitType: "type",
                            value: "text_only",
                        },
                    ],
                },
                createdAt: "2023-01-13T13:41:36.000Z",
                collectModule: {
                    __typename: "RevertCollectModuleSettings",
                    type: "RevertCollectModule",
                },
                referenceModule: {},
                appId: "lenster",
                collectedBy: null,
                hidden: false,
                reaction: null,
                mirrors: [],
                hasCollectedByMe: false,
                mainPost: {
                    id: "0x2d11-0xec",
                    profile: {
                        id: "0x2d11",
                        name: "Cryptonose",
                        bio: '🌿  Visionary Art Fan     "The best things in life will always be free"     🌿         #GDAO                                                                               ',
                        attributes: [
                            {
                                displayType: null,
                                traitType: "string",
                                key: "location",
                                value: "Poland",
                            },
                            {
                                displayType: null,
                                traitType: "string",
                                key: "website",
                                value: "https://vault.governordao.org/?ref=0x7F202a4b8Cdb2176cD64e55f3Db3cbF5c7d2cf6F",
                            },
                            {
                                displayType: null,
                                traitType: "string",
                                key: "twitter",
                                value: "Kryptonos1",
                            },
                            {
                                displayType: null,
                                traitType: "boolean",
                                key: "hasPrideLogo",
                                value: "true",
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
                            "0x68625e732AE40a2438C1b7Eb4d340830485Db6D0",
                        metadata:
                            "https://arweave.net/wdZYMOiclKgejUB9kFtegoRtrCLaEDS832Hee5vQEA4",
                        isDefault: true,
                        handle: "kryptonos1.lens",
                        picture: {
                            original: {
                                url: "ipfs://Qmed6DnRT5hoMajvm7xX98oy5FSVvDxEgDjjd4Wqo3stfU",
                                mimeType: null,
                            },
                        },
                        coverPicture: {
                            original: {
                                url: "ipfs://QmSa84yaBNXVWafU63M2vESiNSGmmX6hZRZRsBtpBD2JKZ",
                                mimeType: null,
                            },
                        },
                        ownedBy: "0x7F202a4b8Cdb2176cD64e55f3Db3cbF5c7d2cf6F",
                        dispatcher: {
                            address:
                                "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                        },
                        stats: {
                            totalFollowers: 153,
                            totalFollowing: 268,
                            totalPosts: 63,
                            totalComments: 56,
                            totalMirrors: 148,
                            totalPublications: 267,
                            totalCollects: 131,
                        },
                        followModule: null,
                    },
                    stats: {
                        totalAmountOfMirrors: 10,
                        totalAmountOfCollects: 8,
                        totalAmountOfComments: 1,
                    },
                    metadata: {
                        name: "Post by @kryptonos1.lens",
                        description: null,
                        content:
                            "ETHERMAIL       🌿                                                                                                                                                                        We are building the **bridge between web 2.0 and web 3.0 email communication**, while bringing back to users **full ownership, control, and sovereignty of their inbox.**  #lens #wav3s #ethermail #web3                                                                                                                                                                                 Receive a free drop   -     https://ethermail.io/?afid=630e1bae4060a13b07bcb928",
                        media: [
                            {
                                original: {
                                    url: "ipfs://bafybeig5ytumwi6lfx4zbhaj235glozjqzxcc6dtxhiycyoava3izgabj4",
                                    mimeType: "image/png",
                                },
                            },
                        ],
                        attributes: [
                            {
                                displayType: "string",
                                traitType: "type",
                                value: "image",
                            },
                        ],
                    },
                    createdAt: "2023-01-10T08:35:18.000Z",
                    collectModule: {
                        __typename: "FreeCollectModuleSettings",
                        type: "FreeCollectModule",
                        followerOnly: false,
                        contractAddress:
                            "0x23b9467334bEb345aAa6fd1545538F3d54436e96",
                    },
                    referenceModule: {},
                    appId: "lenster",
                    collectedBy: null,
                    hidden: false,
                    reaction: null,
                    mirrors: [],
                    hasCollectedByMe: false,
                },
            },
        ],
    },
    {
        root: {
            __typename: "Comment",
            id: "0xf9f6-0xe6",
            profile: {
                id: "0xf9f6",
                name: "disruptor",
                bio: "Disruptor 🇪🇺  Mail: disruptor@skiff.com 🇪🇺 blockchain could change our future \n#web3 #blockchain #polygon #ethereum #lens #ens ",
                attributes: [
                    {
                        displayType: null,
                        traitType: "string",
                        key: "location",
                        value: "Europe - Zurich",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "twitter",
                        value: "disruptorDOT",
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
                followNftAddress: "0x9b4b6a0Dd27CaFe4A6ac489E0bBbd25afFc3fb78",
                metadata:
                    "https://arweave.net/E4e8QJKy4sdAeGUA58-ZIIR8AdRhFqPHegZRmgB6T6w",
                isDefault: true,
                handle: "disruptor.lens",
                picture: {
                    original: {
                        url: "ipfs://bafkreihab3zezcshhwtksaqlcu3yybyz2zjbej2fsf33bbwkegzvfeeecy",
                        mimeType: null,
                    },
                },
                coverPicture: {
                    original: {
                        url: "ipfs://bafkreice2bxp4jh5kvdafivnlh6rxv2iyzjztncdahqrzkni73jhvvm33i",
                        mimeType: null,
                    },
                },
                ownedBy: "0xB84914F420b6DE809AC1eD3d4427D90ed596B41C",
                dispatcher: {
                    address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                },
                stats: {
                    totalFollowers: 184,
                    totalFollowing: 73,
                    totalPosts: 127,
                    totalComments: 42,
                    totalMirrors: 61,
                    totalPublications: 230,
                    totalCollects: 98,
                },
                followModule: null,
            },
            stats: {
                totalAmountOfMirrors: 0,
                totalAmountOfCollects: 0,
                totalAmountOfComments: 1,
            },
            metadata: {
                name: "Comment by @disruptor.lens",
                description: null,
                content: "Good Morning. It’s Friday the 13th.",
                media: [
                    {
                        original: {
                            url: "ipfs://bafkreiafs3fi7cjunv5mihho3msf7hymhvs7ub3v3cjihpuep3veqm55ci",
                            mimeType: "image/jpeg",
                        },
                    },
                ],
                attributes: [
                    {
                        displayType: "string",
                        traitType: "type",
                        value: "image",
                    },
                ],
            },
            createdAt: "2023-01-13T12:35:34.000Z",
            collectModule: {
                __typename: "RevertCollectModuleSettings",
                type: "RevertCollectModule",
            },
            referenceModule: {},
            appId: "lenster",
            collectedBy: null,
            hidden: false,
            reaction: null,
            mirrors: [],
            hasCollectedByMe: false,
            mainPost: {
                id: "0x011f55-0x08b8",
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
                    followNftAddress:
                        "0xc1Bf666ACD14DAd62d55457417E69D8705c3d2f0",
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
                    totalAmountOfMirrors: 9,
                    totalAmountOfCollects: 14,
                    totalAmountOfComments: 7,
                },
                metadata: {
                    name: "GM IS DEAD 💀",
                    description:
                        "GM IS DEAD 💀\n#gm\n—-------\nIf you liked this content, please consider giving a like, mirror (retweet) and follow this channel at @chriscomrie.lens :) \n#LMCC\n\n\nConsider subscribing to a new newsletter about Top News, Alpha and Highlights from this week in Web3 Social here: https://forms.gle/2DhjikvMBp6LBZci7\n\nLooking for investment? Fill out this form: https://forms.gle/YXmhXGpM51uAd6gq8\n\nYou can also find me on twitter at @ christafarious\n\nJoin Phaver app with my code to access Lens on mobile: https://phaver.app.link/chriscomrie\n\nIf you like this video you might also like other popular ones like:\n\nULTIMATE BEGINNERS GUIDE LENS PROTOCOL https://lenstube.xyz/watch/0x011f55-0x05d7\n\nNEW TREND FOR CREATORS TO 💰 MONETIZE COMMUNITY https://lenstube.xyz/watch/0x011f55-0x0752\n\nMUSEUM OF LENS🌿 - MOLENS- EXPLAINED https://lenstube.xyz/watch/0x011f55-0x04f5\n\n #bytes",
                    content:
                        "GM IS DEAD 💀\n\nGM IS DEAD 💀\n#gm\n—-------\nIf you liked this content, please consider giving a like, mirror (retweet) and follow this channel at @chriscomrie.lens :) \n#LMCC\n\n\nConsider subscribing to a new newsletter about Top News, Alpha and Highlights from this week in Web3 Social here: https://forms.gle/2DhjikvMBp6LBZci7\n\nLooking for investment? Fill out this form: https://forms.gle/YXmhXGpM51uAd6gq8\n\nYou can also find me on twitter at @ christafarious\n\nJoin Phaver app with my code to access Lens on mobile: https://phaver.app.link/chriscomrie\n\nIf you like this video you might also like other popular ones like:\n\nULTIMATE BEGINNERS GUIDE LENS PROTOCOL https://lenstube.xyz/watch/0x011f55-0x05d7\n\nNEW TREND FOR CREATORS TO 💰 MONETIZE COMMUNITY https://lenstube.xyz/watch/0x011f55-0x0752\n\nMUSEUM OF LENS🌿 - MOLENS- EXPLAINED https://lenstube.xyz/watch/0x011f55-0x04f5\n\n #bytes",
                    media: [
                        {
                            original: {
                                url: "ipfs://bafybeibhwdnxcbwknlkreqfg5wsxmmod7vpd355urktkmdjnbwlozqmaq4",
                                mimeType: "video/mp4",
                            },
                        },
                    ],
                    attributes: [
                        {
                            displayType: "string",
                            traitType: "handle",
                            value: "chriscomrie.lens",
                        },
                        {
                            displayType: "string",
                            traitType: "app",
                            value: "lenstube",
                        },
                        {
                            displayType: "string",
                            traitType: "durationInSeconds",
                            value: "8.70",
                        },
                    ],
                },
                createdAt: "2023-01-13T12:28:24.000Z",
                collectModule: {
                    __typename: "FreeCollectModuleSettings",
                    type: "FreeCollectModule",
                    followerOnly: false,
                    contractAddress:
                        "0x23b9467334bEb345aAa6fd1545538F3d54436e96",
                },
                referenceModule: null,
                appId: "lenstube-bytes",
                collectedBy: null,
                hidden: false,
                reaction: null,
                mirrors: [],
                hasCollectedByMe: false,
            },
        },
        electedMirror: null,
        mirrors: [],
        collects: [],
        reactions: [],
        comments: [
            {
                id: "0x011f55-0x08ba",
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
                    followNftAddress:
                        "0xc1Bf666ACD14DAd62d55457417E69D8705c3d2f0",
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
                    name: "Post by @chriscomrie.lens",
                    description: "Hahahah Watch ur back!",
                    content: "Hahahah Watch ur back!",
                    media: [],
                    attributes: [],
                },
                createdAt: "2023-01-13T13:39:58.000Z",
                collectModule: {
                    __typename: "FreeCollectModuleSettings",
                    type: "FreeCollectModule",
                    followerOnly: true,
                    contractAddress:
                        "0x23b9467334bEb345aAa6fd1545538F3d54436e96",
                },
                referenceModule: null,
                appId: "buttrfly",
                collectedBy: null,
                hidden: false,
                reaction: null,
                mirrors: [],
                hasCollectedByMe: false,
                mainPost: {
                    id: "0x011f55-0x08b8",
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
                        followNftAddress:
                            "0xc1Bf666ACD14DAd62d55457417E69D8705c3d2f0",
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
                            address:
                                "0xD1FecCF6881970105dfb2b654054174007f0e07E",
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
                        totalAmountOfMirrors: 9,
                        totalAmountOfCollects: 14,
                        totalAmountOfComments: 7,
                    },
                    metadata: {
                        name: "GM IS DEAD 💀",
                        description:
                            "GM IS DEAD 💀\n#gm\n—-------\nIf you liked this content, please consider giving a like, mirror (retweet) and follow this channel at @chriscomrie.lens :) \n#LMCC\n\n\nConsider subscribing to a new newsletter about Top News, Alpha and Highlights from this week in Web3 Social here: https://forms.gle/2DhjikvMBp6LBZci7\n\nLooking for investment? Fill out this form: https://forms.gle/YXmhXGpM51uAd6gq8\n\nYou can also find me on twitter at @ christafarious\n\nJoin Phaver app with my code to access Lens on mobile: https://phaver.app.link/chriscomrie\n\nIf you like this video you might also like other popular ones like:\n\nULTIMATE BEGINNERS GUIDE LENS PROTOCOL https://lenstube.xyz/watch/0x011f55-0x05d7\n\nNEW TREND FOR CREATORS TO 💰 MONETIZE COMMUNITY https://lenstube.xyz/watch/0x011f55-0x0752\n\nMUSEUM OF LENS🌿 - MOLENS- EXPLAINED https://lenstube.xyz/watch/0x011f55-0x04f5\n\n #bytes",
                        content:
                            "GM IS DEAD 💀\n\nGM IS DEAD 💀\n#gm\n—-------\nIf you liked this content, please consider giving a like, mirror (retweet) and follow this channel at @chriscomrie.lens :) \n#LMCC\n\n\nConsider subscribing to a new newsletter about Top News, Alpha and Highlights from this week in Web3 Social here: https://forms.gle/2DhjikvMBp6LBZci7\n\nLooking for investment? Fill out this form: https://forms.gle/YXmhXGpM51uAd6gq8\n\nYou can also find me on twitter at @ christafarious\n\nJoin Phaver app with my code to access Lens on mobile: https://phaver.app.link/chriscomrie\n\nIf you like this video you might also like other popular ones like:\n\nULTIMATE BEGINNERS GUIDE LENS PROTOCOL https://lenstube.xyz/watch/0x011f55-0x05d7\n\nNEW TREND FOR CREATORS TO 💰 MONETIZE COMMUNITY https://lenstube.xyz/watch/0x011f55-0x0752\n\nMUSEUM OF LENS🌿 - MOLENS- EXPLAINED https://lenstube.xyz/watch/0x011f55-0x04f5\n\n #bytes",
                        media: [
                            {
                                original: {
                                    url: "ipfs://bafybeibhwdnxcbwknlkreqfg5wsxmmod7vpd355urktkmdjnbwlozqmaq4",
                                    mimeType: "video/mp4",
                                },
                            },
                        ],
                        attributes: [
                            {
                                displayType: "string",
                                traitType: "handle",
                                value: "chriscomrie.lens",
                            },
                            {
                                displayType: "string",
                                traitType: "app",
                                value: "lenstube",
                            },
                            {
                                displayType: "string",
                                traitType: "durationInSeconds",
                                value: "8.70",
                            },
                        ],
                    },
                    createdAt: "2023-01-13T12:28:24.000Z",
                    collectModule: {
                        __typename: "FreeCollectModuleSettings",
                        type: "FreeCollectModule",
                        followerOnly: false,
                        contractAddress:
                            "0x23b9467334bEb345aAa6fd1545538F3d54436e96",
                    },
                    referenceModule: null,
                    appId: "lenstube-bytes",
                    collectedBy: null,
                    hidden: false,
                    reaction: null,
                    mirrors: [],
                    hasCollectedByMe: false,
                },
            },
        ],
    },
    {
        root: {
            __typename: "Post",
            id: "0x011f55-0x08b9",
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
                totalAmountOfMirrors: 2,
                totalAmountOfCollects: 4,
                totalAmountOfComments: 2,
            },
            metadata: {
                name: "Post by @chriscomrie",
                description:
                    "Join @0xtommythomas.lens and I LIVE on Twitter spaces today 12pm EST talking NSFW NFTs, LEWD FRIENDS and WL GIVEAWAY 👀🍑. RSVP https://twitter.com/i/spaces/1djGXlXPWoPGZ",
                content:
                    "Join @0xtommythomas.lens and I LIVE on Twitter spaces today 12pm EST talking NSFW NFTs, LEWD FRIENDS and WL GIVEAWAY 👀🍑. RSVP https://twitter.com/i/spaces/1djGXlXPWoPGZ",
                media: [
                    {
                        original: {
                            url: "ipfs://QmXwdmLuzpUpXWedPSb5fecoWu3he5rQGAdPLEYErL3BeT",
                            mimeType: "image/jpeg",
                        },
                    },
                ],
                attributes: [],
            },
            createdAt: "2023-01-13T13:36:46.000Z",
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
        comments: [],
    },
    {
        root: {
            __typename: "Comment",
            id: "0xf71a-0x8a",
            profile: {
                id: "0xf71a",
                name: "internetfase",
                bio: "multi-genre music producer guy\n\nyoutube: https://bit.ly/3Eq6W2A\nspotify: https://spoti.fi/3TPTgDK",
                attributes: [
                    {
                        displayType: null,
                        traitType: "string",
                        key: "website",
                        value: "https://linktr.ee/internetfase",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "twitter",
                        value: "internetfase",
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
                followNftAddress: "0xCd97e7E644B823b34f53577f5853650d648f99fa",
                metadata:
                    "https://arweave.net/rWS9NbnoBFlfl_j9KyPJVKb9suayLbF0kr0vGeWoCYs",
                isDefault: true,
                handle: "internetfase.lens",
                picture: {
                    original: {
                        url: "ipfs://QmPrUsqHhg7QLKFKDNQVkgy7AQybiw78bLVSXn1iGvABmW",
                        mimeType: null,
                    },
                },
                coverPicture: {
                    original: {
                        url: "ipfs://bafkreiatw37p5sfs77m4bhpalzfc35dazdu5lsvh5ynb5oc534k5ig2m34",
                        mimeType: null,
                    },
                },
                ownedBy: "0x1BdEbAf12ec0CE61bCfc4c8e2bB15f1286fbfE2A",
                dispatcher: {
                    address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                },
                stats: {
                    totalFollowers: 421,
                    totalFollowing: 54,
                    totalPosts: 45,
                    totalComments: 63,
                    totalMirrors: 39,
                    totalPublications: 147,
                    totalCollects: 415,
                },
                followModule: null,
            },
            stats: {
                totalAmountOfMirrors: 10,
                totalAmountOfCollects: 27,
                totalAmountOfComments: 6,
            },
            metadata: {
                name: "Comment by @internetfase",
                description:
                    "would love to see album art that’s attached to audio be clickable so it can be viewed in full-size 😎🙏🌿",
                content:
                    "would love to see album art that’s attached to audio be clickable so it can be viewed in full-size 😎🙏🌿",
                media: [],
                attributes: [],
            },
            createdAt: "2023-01-09T05:14:29.000Z",
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
                id: "0x05-0x11e4",
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
                    totalAmountOfMirrors: 62,
                    totalAmountOfCollects: 0,
                    totalAmountOfComments: 182,
                },
                metadata: {
                    name: "Post by @stani.lens",
                    description:
                        "How could @lenster.lens be improved? Need honest feedback",
                    content:
                        "How could @lenster.lens be improved? Need honest feedback",
                    media: [],
                    attributes: [
                        {
                            displayType: "string",
                            traitType: "type",
                            value: "text_only",
                        },
                    ],
                },
                createdAt: "2023-01-09T00:50:22.000Z",
                collectModule: {
                    __typename: "RevertCollectModuleSettings",
                    type: "RevertCollectModule",
                },
                referenceModule: {},
                appId: "lenster",
                collectedBy: null,
                hidden: false,
                reaction: null,
                mirrors: [],
                hasCollectedByMe: false,
            },
        },
        electedMirror: null,
        mirrors: [],
        collects: [],
        reactions: [],
        comments: [
            {
                id: "0x0d-0x02da",
                profile: {
                    id: "0x0d",
                    name: "Yoginth",
                    bio: "engineering at @aaveaave 👻 and @lensprotocol 🌿 // creator of @lensterxyz 🌸 // fighting for human privacy 🛡️ // opinions are mine",
                    attributes: [
                        {
                            displayType: null,
                            traitType: "string",
                            key: "location",
                            value: "India 🇮🇳",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "website",
                            value: "https://nf.td/yogi",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "twitter",
                            value: "yogicodes",
                        },
                        {
                            displayType: null,
                            traitType: "boolean",
                            key: "hasPrideLogo",
                            value: "true",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "statusEmoji",
                            value: "🌈",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "statusMessage",
                            value: "Hacking",
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
                        "0x540CA34e166a134Dd649385679F3FE4447E0Ae33",
                    metadata:
                        "https://arweave.net/dmGsnN2_TUvOzJ-9uLyFjET-4vs7yPJargIdLu2MekQ",
                    isDefault: true,
                    handle: "yoginth.lens",
                    picture: {
                        original: {
                            url: "ipfs://bafybeigcmbs2wfkccazb5xifosfxymrt33j7u2smgfhxt7khlzwtddxl4m",
                            mimeType: null,
                        },
                    },
                    coverPicture: {
                        original: {
                            url: "ipfs://bafkreigo4ovkqvfpgqiscfkgflcrp33uhjz2g5jaxgxiwncmriqdarkpf4",
                            mimeType: null,
                        },
                    },
                    ownedBy: "0x3A5bd1E37b099aE3386D13947b6a90d97675e5e3",
                    dispatcher: {
                        address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                    },
                    stats: {
                        totalFollowers: 47450,
                        totalFollowing: 95,
                        totalPosts: 123,
                        totalComments: 506,
                        totalMirrors: 366,
                        totalPublications: 995,
                        totalCollects: 99342,
                    },
                    followModule: null,
                },
                stats: {
                    totalAmountOfMirrors: 0,
                    totalAmountOfCollects: 0,
                    totalAmountOfComments: 1,
                },
                metadata: {
                    name: "Comment by @yoginth.lens",
                    description: null,
                    content:
                        "Thanks for the feedback, we listened to you and this is now available for all audio posts in @lenster.lens 🕺🌸",
                    media: [],
                    attributes: [
                        {
                            displayType: "string",
                            traitType: "type",
                            value: "text_only",
                        },
                    ],
                },
                createdAt: "2023-01-13T13:31:38.000Z",
                collectModule: {
                    __typename: "RevertCollectModuleSettings",
                    type: "RevertCollectModule",
                },
                referenceModule: {},
                appId: "lenster",
                collectedBy: null,
                hidden: false,
                reaction: null,
                mirrors: [],
                hasCollectedByMe: false,
                mainPost: {
                    id: "0x05-0x11e4",
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
                            address:
                                "0xD1FecCF6881970105dfb2b654054174007f0e07E",
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
                        totalAmountOfMirrors: 62,
                        totalAmountOfCollects: 0,
                        totalAmountOfComments: 182,
                    },
                    metadata: {
                        name: "Post by @stani.lens",
                        description:
                            "How could @lenster.lens be improved? Need honest feedback",
                        content:
                            "How could @lenster.lens be improved? Need honest feedback",
                        media: [],
                        attributes: [
                            {
                                displayType: "string",
                                traitType: "type",
                                value: "text_only",
                            },
                        ],
                    },
                    createdAt: "2023-01-09T00:50:22.000Z",
                    collectModule: {
                        __typename: "RevertCollectModuleSettings",
                        type: "RevertCollectModule",
                    },
                    referenceModule: {},
                    appId: "lenster",
                    collectedBy: null,
                    hidden: false,
                    reaction: null,
                    mirrors: [],
                    hasCollectedByMe: false,
                },
            },
        ],
    },
    {
        root: {
            __typename: "Comment",
            id: "0x0100c0-0x010b",
            profile: {
                id: "0x0100c0",
                name: "Stanislav Titusko 🌿",
                bio: "Head of communication at KonnektrHQ",
                attributes: [
                    {
                        displayType: null,
                        traitType: "string",
                        key: "location",
                        value: "Charleville",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "website",
                        value: "https://konnektr.xyz/",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "twitter",
                        value: "stastitus",
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
                followNftAddress: "0x7f5064941d143b8F77ED70eb9092D2b7Ed713b72",
                metadata:
                    "https://arweave.net/qbPrt2iO4nXqrJYTFcsCSKUZgFvYVGDmM_bIQQoirJY",
                isDefault: true,
                handle: "1_cryptoman.lens",
                picture: {
                    original: {
                        url: "ipfs://bafybeia7agc6t3am2ffk5awgriyfpxt7tago7yapniakka4aygeejzsori",
                        mimeType: null,
                    },
                },
                coverPicture: null,
                ownedBy: "0x1C87869225399b62206cFCeD6Fe883d0ac725C11",
                dispatcher: {
                    address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                },
                stats: {
                    totalFollowers: 1228,
                    totalFollowing: 707,
                    totalPosts: 147,
                    totalComments: 96,
                    totalMirrors: 26,
                    totalPublications: 269,
                    totalCollects: 238,
                },
                followModule: null,
            },
            stats: {
                totalAmountOfMirrors: 0,
                totalAmountOfCollects: 0,
                totalAmountOfComments: 2,
            },
            metadata: {
                name: "Comment by @1_cryptoman",
                description: "so i just need to send my nft from mm to rainbow",
                content: "so i just need to send my nft from mm to rainbow",
                media: [],
                attributes: [],
            },
            createdAt: "2023-01-13T13:06:10.000Z",
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
                id: "0x011f55-0x0885",
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
                    followNftAddress:
                        "0xc1Bf666ACD14DAd62d55457417E69D8705c3d2f0",
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
                    totalAmountOfMirrors: 1,
                    totalAmountOfCollects: 0,
                    totalAmountOfComments: 24,
                },
                metadata: {
                    name: "Post by @chriscomrie.lens",
                    description: null,
                    content:
                        "Tell me u Lens without telling me u Lens... ill go first... same page three different windows hahah",
                    media: [
                        {
                            original: {
                                url: "ipfs://bafybeigkxtph7x4fh4gpledtia6dw6pu3byiy27lcxdluadry5rrn7ax54",
                                mimeType: "image/png",
                            },
                        },
                    ],
                    attributes: [
                        {
                            displayType: "string",
                            traitType: "type",
                            value: "image",
                        },
                    ],
                },
                createdAt: "2023-01-11T20:30:57.000Z",
                collectModule: {
                    __typename: "RevertCollectModuleSettings",
                    type: "RevertCollectModule",
                },
                referenceModule: {},
                appId: "lenster",
                collectedBy: null,
                hidden: false,
                reaction: null,
                mirrors: [],
                hasCollectedByMe: false,
            },
        },
        electedMirror: null,
        mirrors: [],
        collects: [],
        reactions: [],
        comments: [
            {
                id: "0x7868-0x02bf",
                profile: {
                    id: "0x7868",
                    name: "Tim Jeffries",
                    bio: "Exploring web3 enabled productivity systems to help us work in healthy and sustainable ways. \nDAO Ops for @w3adao.lens\nConsulting @ https://thegoodcup.com.au",
                    attributes: [
                        {
                            displayType: null,
                            traitType: "string",
                            key: "location",
                            value: "Waddawurrung Country, Australia 🐨 🦘",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "website",
                            value: "https://beta.portrait.gg/timjeffries.eth",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "twitter",
                            value: "timjeffries",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "statusEmoji",
                            value: "⚡",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "statusMessage",
                            value: "creating web3 productivity",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "app",
                            value: "Orb",
                        },
                        {
                            displayType: null,
                            traitType: "json",
                            key: "projects",
                            value: "[]",
                        },
                        {
                            displayType: null,
                            traitType: "json",
                            key: "skills",
                            value: "[]",
                        },
                        {
                            displayType: null,
                            traitType: "json",
                            key: "experience",
                            value: "[]",
                        },
                        {
                            displayType: null,
                            traitType: "json",
                            key: "education",
                            value: "[]",
                        },
                    ],
                    isFollowedByMe: false,
                    isFollowing: false,
                    followNftAddress:
                        "0x45c2C9BB6271e102e950B6FBABD9f9898403FfB4",
                    metadata:
                        "https://arweave.net/rmfBKAtKo4w_z6GriGFd2bcFi8GJ2Zan45yl8jZ6jVA",
                    isDefault: true,
                    handle: "timjeffries.lens",
                    picture: {
                        original: {
                            url: "https://lens.infura-ipfs.io/ipfs/QmPLJvGTWvNvYP9N3h1CjK7oom2RUB5sPxy5AZyRqzLaU7",
                            mimeType: null,
                        },
                    },
                    coverPicture: {
                        original: {
                            url: "https://ik.imagekit.io/orbapp/tr:n-attachment,tr:di-placeholder.webp/https://lens.infura-ipfs.io/ipfs/bafkreigr4uxkvrheyk4fn4hzxjzqznm3ooyqjvdt6nlgitinzoyqexnxla",
                            mimeType: null,
                        },
                    },
                    ownedBy: "0x58D04cAf815C64905c6265743561A5bB1595B4f9",
                    dispatcher: {
                        address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                    },
                    stats: {
                        totalFollowers: 971,
                        totalFollowing: 279,
                        totalPosts: 97,
                        totalComments: 519,
                        totalMirrors: 85,
                        totalPublications: 701,
                        totalCollects: 1651,
                    },
                    followModule: null,
                },
                stats: {
                    totalAmountOfMirrors: 0,
                    totalAmountOfCollects: 0,
                    totalAmountOfComments: 0,
                },
                metadata: {
                    name: "Comment by @timjeffries",
                    description:
                        "Unless you import your wallet that’s holding the NFT.",
                    content:
                        "Unless you import your wallet that’s holding the NFT.",
                    media: [],
                    attributes: [],
                },
                createdAt: "2023-01-13T13:30:10.000Z",
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
                mainPost: {
                    id: "0x011f55-0x0885",
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
                        followNftAddress:
                            "0xc1Bf666ACD14DAd62d55457417E69D8705c3d2f0",
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
                            address:
                                "0xD1FecCF6881970105dfb2b654054174007f0e07E",
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
                        totalAmountOfMirrors: 1,
                        totalAmountOfCollects: 0,
                        totalAmountOfComments: 24,
                    },
                    metadata: {
                        name: "Post by @chriscomrie.lens",
                        description: null,
                        content:
                            "Tell me u Lens without telling me u Lens... ill go first... same page three different windows hahah",
                        media: [
                            {
                                original: {
                                    url: "ipfs://bafybeigkxtph7x4fh4gpledtia6dw6pu3byiy27lcxdluadry5rrn7ax54",
                                    mimeType: "image/png",
                                },
                            },
                        ],
                        attributes: [
                            {
                                displayType: "string",
                                traitType: "type",
                                value: "image",
                            },
                        ],
                    },
                    createdAt: "2023-01-11T20:30:57.000Z",
                    collectModule: {
                        __typename: "RevertCollectModuleSettings",
                        type: "RevertCollectModule",
                    },
                    referenceModule: {},
                    appId: "lenster",
                    collectedBy: null,
                    hidden: false,
                    reaction: null,
                    mirrors: [],
                    hasCollectedByMe: false,
                },
            },
        ],
    },
    {
        root: {
            __typename: "Post",
            id: "0x02a6-0xef",
            profile: {
                id: "0x02a6",
                name: "Starny",
                bio: "Belgian, passionate about blockchain, NFT and especially DeFi. \n\nDeFi & Technical Writer @mimo_dao.lens\nHead Of Community @paladin.lens\nFighter @luchadores.lens\n\nMore about me ? Visit my IPFS website 👇",
                attributes: [
                    {
                        displayType: null,
                        traitType: "string",
                        key: "location",
                        value: "BE",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "website",
                        value: "https://starny.eth.limo",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "twitter",
                        value: "StarnyDeFi",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "statusEmoji",
                        value: "🤑",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "statusMessage",
                        value: "Bottom is in",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "app",
                        value: "Orb",
                    },
                    {
                        displayType: null,
                        traitType: "json",
                        key: "projects",
                        value: "[]",
                    },
                    {
                        displayType: null,
                        traitType: "json",
                        key: "skills",
                        value: '[{"title":"Merge maxi","icon":null,"nfts":[],"poaps":[{"tokenId":"5728274","chain":"xdai","owner":"0x79603115df2ba00659adc63192325cf104ca529c","created":"2022-10-09 09:02:30","event":{"id":65873,"fancy_id":"ultra-sound-poap-event-2022","name":"ultra sound POAP","event_url":"https://ultrasound.money","image_url":"https://assets.poap.xyz/ultra-sound-poap-event-2022-logo-1663527819992.gif","country":"","city":"","description":"celebrating the ultra sound fam 🦇🔊👪\\r\\n\\r\\na special POAP for 1,559 pre-merge believers\\r\\n\\r\\nmeet the meme spreaders on ultrasound.money","year":2022,"start_date":"15-Sep-2022","end_date":"15-Sep-2022","expiry_date":"15-Sep-2023","supply":1378}}]},{"title":"Luchadores fighter","icon":null,"nfts":[{"contractName":"Starny","contractAddress":"0x77942dD6124e9b191C9bea665d8BC79bd8655CB7","symbol":"STARNY","tokenId":"1","name":"Starny 1/1","description":"My Luchadores","contentURI":"Invalid uri","chainId":1,"collectionName":"Starny","ercType":"ERC721","originalContent":{"original":{"url":null,"width":null,"height":null,"mimeType":null},"contractAddress":null,"tokenId":null,"uri":"ipfs://bafkreiaunyk7lt5zdxcn52krloucu7z7wr42yeoymncc7fbhcmzoornbfa?id=1","verified":null,"metaType":"unknown"},"owners":[{"amount":1,"address":"0x79603115Df2Ba00659ADC63192325CF104ca529C"}]}],"poaps":[]}]',
                    },
                    {
                        displayType: null,
                        traitType: "json",
                        key: "experience",
                        value: "[]",
                    },
                    {
                        displayType: null,
                        traitType: "json",
                        key: "education",
                        value: "[]",
                    },
                ],
                isFollowedByMe: false,
                isFollowing: false,
                followNftAddress: "0x0D29A64d4AAF097B0999733Fc2f7aB0B4d588684",
                metadata:
                    "https://arweave.net/8hrjBmA-KfDLo0NRtKoUZ7TAa05vbVTvER0zVjdAGmI",
                isDefault: true,
                handle: "starny.lens",
                picture: {
                    original: {
                        url: "ipfs://bafybeiagbaiptkfva6lt4x3gd6elcftvwowsblzfc7hdmlbjxj7vcnukvq",
                        mimeType: null,
                    },
                },
                coverPicture: {
                    original: {
                        url: "https://ik.imagekit.io/lensterimg/tr:n-attachment,tr:di-placeholder.webp/https://lens.infura-ipfs.io/ipfs/QmQ6gYXNYRVKhXQQexk1oDrjYot2Cikkd2tLVjHWfKbPqs",
                        mimeType: null,
                    },
                },
                ownedBy: "0x79603115Df2Ba00659ADC63192325CF104ca529C",
                dispatcher: {
                    address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                },
                stats: {
                    totalFollowers: 2885,
                    totalFollowing: 152,
                    totalPosts: 47,
                    totalComments: 112,
                    totalMirrors: 129,
                    totalPublications: 288,
                    totalCollects: 160,
                },
                followModule: null,
            },
            stats: {
                totalAmountOfMirrors: 0,
                totalAmountOfCollects: 0,
                totalAmountOfComments: 0,
            },
            metadata: {
                name: "Post by @starny.lens",
                description: null,
                content:
                    "**TEST**: I just contributed to the KZG Ceremony to scale Ethereum using 0x79603…529 at ceremony.ethereum.org",
                media: [],
                attributes: [
                    {
                        displayType: "string",
                        traitType: "type",
                        value: "text_only",
                    },
                ],
            },
            createdAt: "2023-01-13T13:29:48.000Z",
            collectModule: {
                __typename: "RevertCollectModuleSettings",
                type: "RevertCollectModule",
            },
            referenceModule: {},
            appId: "lenster",
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
        comments: [],
    },
    {
        root: {
            __typename: "Comment",
            id: "0x013cee-0x1b6c",
            profile: {
                id: "0x013cee",
                name: "Gotenks 👻",
                bio: "Certified Shit Poster 🌿 | ADHD is My Superpower 🔋\nToken Gated Telegram: https://guild.xyz/ghostgang100x\n#GhostGang100x @ghostgang100x 🎫                              ",
                attributes: [
                    {
                        displayType: null,
                        traitType: "json",
                        key: "projects",
                        value: "[]",
                    },
                    {
                        displayType: null,
                        traitType: "json",
                        key: "skills",
                        value: "[]",
                    },
                    {
                        displayType: null,
                        traitType: "json",
                        key: "experience",
                        value: "[]",
                    },
                    {
                        displayType: null,
                        traitType: "json",
                        key: "education",
                        value: "[]",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "location",
                        value: "Hyperbolic Time Chamber",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "website",
                        value: "https://www.lensfrens.xyz/gotenks.lens",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "twitter",
                        value: "gotenks_lens",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "app",
                        value: "Orb",
                    },
                ],
                isFollowedByMe: false,
                isFollowing: false,
                followNftAddress: "0xc5282caab62Fefad557763f8aC37c7F432c9cA92",
                metadata:
                    "https://arweave.net/6RPejOkwatOYpdx5poqj1RwqvT3EWCNNfIxawpIfMrY",
                isDefault: true,
                handle: "gotenks.lens",
                picture: {
                    original: {
                        url: "ipfs://QmcPnji4vyW1CZXFnr9wjLuG81z1bQAZr9udyhtf2HjRNg",
                        mimeType: null,
                    },
                },
                coverPicture: {
                    original: {
                        url: "https://ik.imagekit.io/orbapp/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/orbapp/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/orbapp/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/orbapp/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/orbapp/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/orbapp/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/orbapp/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/orbapp/tr:n-attachment,tr:di-placeholder.webp/https://lens.infura-ipfs.io/ipfs/QmTa5mvmfmvcNVSfREjyTMi5QYmyQuXkTMHxFgR1N52AU4",
                        mimeType: null,
                    },
                },
                ownedBy: "0x4E59eECCcA4A2A4B129F8b122d937f90Cce2f1Aa",
                dispatcher: {
                    address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                },
                stats: {
                    totalFollowers: 3202,
                    totalFollowing: 385,
                    totalPosts: 1356,
                    totalComments: 4054,
                    totalMirrors: 1614,
                    totalPublications: 7024,
                    totalCollects: 17393,
                },
                followModule: null,
            },
            stats: {
                totalAmountOfMirrors: 0,
                totalAmountOfCollects: 0,
                totalAmountOfComments: 1,
            },
            metadata: {
                name: "Comment by @gotenks",
                description:
                    "Check the prices on opensea for number 1 Crystals 🤯",
                content: "Check the prices on opensea for number 1 Crystals 🤯",
                media: [],
                attributes: [],
            },
            createdAt: "2023-01-13T13:17:48.000Z",
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
                id: "0x013cee-0x1b6b",
                profile: {
                    id: "0x013cee",
                    name: "Gotenks 👻",
                    bio: "Certified Shit Poster 🌿 | ADHD is My Superpower 🔋\nToken Gated Telegram: https://guild.xyz/ghostgang100x\n#GhostGang100x @ghostgang100x 🎫                              ",
                    attributes: [
                        {
                            displayType: null,
                            traitType: "json",
                            key: "projects",
                            value: "[]",
                        },
                        {
                            displayType: null,
                            traitType: "json",
                            key: "skills",
                            value: "[]",
                        },
                        {
                            displayType: null,
                            traitType: "json",
                            key: "experience",
                            value: "[]",
                        },
                        {
                            displayType: null,
                            traitType: "json",
                            key: "education",
                            value: "[]",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "location",
                            value: "Hyperbolic Time Chamber",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "website",
                            value: "https://www.lensfrens.xyz/gotenks.lens",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "twitter",
                            value: "gotenks_lens",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "app",
                            value: "Orb",
                        },
                    ],
                    isFollowedByMe: false,
                    isFollowing: false,
                    followNftAddress:
                        "0xc5282caab62Fefad557763f8aC37c7F432c9cA92",
                    metadata:
                        "https://arweave.net/6RPejOkwatOYpdx5poqj1RwqvT3EWCNNfIxawpIfMrY",
                    isDefault: true,
                    handle: "gotenks.lens",
                    picture: {
                        original: {
                            url: "ipfs://QmcPnji4vyW1CZXFnr9wjLuG81z1bQAZr9udyhtf2HjRNg",
                            mimeType: null,
                        },
                    },
                    coverPicture: {
                        original: {
                            url: "https://ik.imagekit.io/orbapp/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/orbapp/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/orbapp/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/orbapp/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/orbapp/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/orbapp/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/orbapp/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/orbapp/tr:n-attachment,tr:di-placeholder.webp/https://lens.infura-ipfs.io/ipfs/QmTa5mvmfmvcNVSfREjyTMi5QYmyQuXkTMHxFgR1N52AU4",
                            mimeType: null,
                        },
                    },
                    ownedBy: "0x4E59eECCcA4A2A4B129F8b122d937f90Cce2f1Aa",
                    dispatcher: {
                        address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                    },
                    stats: {
                        totalFollowers: 3202,
                        totalFollowing: 385,
                        totalPosts: 1356,
                        totalComments: 4054,
                        totalMirrors: 1614,
                        totalPublications: 7024,
                        totalCollects: 17393,
                    },
                    followModule: null,
                },
                stats: {
                    totalAmountOfMirrors: 1,
                    totalAmountOfCollects: 10,
                    totalAmountOfComments: 16,
                },
                metadata: {
                    name: "Post by @gotenks",
                    description:
                        "All I need is new smurf items\n\nThe wait is killing me\n\nIf anyone wants to send me some feel free 😎\n\n@thesmurfssociety.lens",
                    content:
                        "All I need is new smurf items\n\nThe wait is killing me\n\nIf anyone wants to send me some feel free 😎\n\n@thesmurfssociety.lens",
                    media: [
                        {
                            original: {
                                url: "https://media0.giphy.com/media/J2iueH6VZQbkCmiHG1/giphy.gif?cid=d7bb39f5fpila4pz1o052oc9fk65gb2ikjfomn0esld8ojqu&rid=giphy.gif&ct=g",
                                mimeType: "image/jpeg",
                            },
                        },
                    ],
                    attributes: [],
                },
                createdAt: "2023-01-13T13:13:42.000Z",
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
        electedMirror: null,
        mirrors: [],
        collects: [],
        reactions: [],
        comments: [
            {
                id: "0x7868-0x02be",
                profile: {
                    id: "0x7868",
                    name: "Tim Jeffries",
                    bio: "Exploring web3 enabled productivity systems to help us work in healthy and sustainable ways. \nDAO Ops for @w3adao.lens\nConsulting @ https://thegoodcup.com.au",
                    attributes: [
                        {
                            displayType: null,
                            traitType: "string",
                            key: "location",
                            value: "Waddawurrung Country, Australia 🐨 🦘",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "website",
                            value: "https://beta.portrait.gg/timjeffries.eth",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "twitter",
                            value: "timjeffries",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "statusEmoji",
                            value: "⚡",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "statusMessage",
                            value: "creating web3 productivity",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "app",
                            value: "Orb",
                        },
                        {
                            displayType: null,
                            traitType: "json",
                            key: "projects",
                            value: "[]",
                        },
                        {
                            displayType: null,
                            traitType: "json",
                            key: "skills",
                            value: "[]",
                        },
                        {
                            displayType: null,
                            traitType: "json",
                            key: "experience",
                            value: "[]",
                        },
                        {
                            displayType: null,
                            traitType: "json",
                            key: "education",
                            value: "[]",
                        },
                    ],
                    isFollowedByMe: false,
                    isFollowing: false,
                    followNftAddress:
                        "0x45c2C9BB6271e102e950B6FBABD9f9898403FfB4",
                    metadata:
                        "https://arweave.net/rmfBKAtKo4w_z6GriGFd2bcFi8GJ2Zan45yl8jZ6jVA",
                    isDefault: true,
                    handle: "timjeffries.lens",
                    picture: {
                        original: {
                            url: "https://lens.infura-ipfs.io/ipfs/QmPLJvGTWvNvYP9N3h1CjK7oom2RUB5sPxy5AZyRqzLaU7",
                            mimeType: null,
                        },
                    },
                    coverPicture: {
                        original: {
                            url: "https://ik.imagekit.io/orbapp/tr:n-attachment,tr:di-placeholder.webp/https://lens.infura-ipfs.io/ipfs/bafkreigr4uxkvrheyk4fn4hzxjzqznm3ooyqjvdt6nlgitinzoyqexnxla",
                            mimeType: null,
                        },
                    },
                    ownedBy: "0x58D04cAf815C64905c6265743561A5bB1595B4f9",
                    dispatcher: {
                        address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                    },
                    stats: {
                        totalFollowers: 971,
                        totalFollowing: 279,
                        totalPosts: 97,
                        totalComments: 519,
                        totalMirrors: 85,
                        totalPublications: 701,
                        totalCollects: 1651,
                    },
                    followModule: null,
                },
                stats: {
                    totalAmountOfMirrors: 0,
                    totalAmountOfCollects: 0,
                    totalAmountOfComments: 2,
                },
                metadata: {
                    name: "Comment by @timjeffries",
                    description: "",
                    content: "",
                    media: [
                        {
                            original: {
                                url: "https://media3.giphy.com/media/48M4FVK5UeRNglWAyk/giphy.gif?cid=d7bb39f5pyakfqf66c3034q979nvc5dpb8y2ngtqbprw7rc2&rid=giphy.gif&ct=g",
                                mimeType: "image/jpeg",
                            },
                        },
                    ],
                    attributes: [],
                },
                createdAt: "2023-01-13T13:28:58.000Z",
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
                mainPost: {
                    id: "0x013cee-0x1b6b",
                    profile: {
                        id: "0x013cee",
                        name: "Gotenks 👻",
                        bio: "Certified Shit Poster 🌿 | ADHD is My Superpower 🔋\nToken Gated Telegram: https://guild.xyz/ghostgang100x\n#GhostGang100x @ghostgang100x 🎫                              ",
                        attributes: [
                            {
                                displayType: null,
                                traitType: "json",
                                key: "projects",
                                value: "[]",
                            },
                            {
                                displayType: null,
                                traitType: "json",
                                key: "skills",
                                value: "[]",
                            },
                            {
                                displayType: null,
                                traitType: "json",
                                key: "experience",
                                value: "[]",
                            },
                            {
                                displayType: null,
                                traitType: "json",
                                key: "education",
                                value: "[]",
                            },
                            {
                                displayType: null,
                                traitType: "string",
                                key: "location",
                                value: "Hyperbolic Time Chamber",
                            },
                            {
                                displayType: null,
                                traitType: "string",
                                key: "website",
                                value: "https://www.lensfrens.xyz/gotenks.lens",
                            },
                            {
                                displayType: null,
                                traitType: "string",
                                key: "twitter",
                                value: "gotenks_lens",
                            },
                            {
                                displayType: null,
                                traitType: "string",
                                key: "app",
                                value: "Orb",
                            },
                        ],
                        isFollowedByMe: false,
                        isFollowing: false,
                        followNftAddress:
                            "0xc5282caab62Fefad557763f8aC37c7F432c9cA92",
                        metadata:
                            "https://arweave.net/6RPejOkwatOYpdx5poqj1RwqvT3EWCNNfIxawpIfMrY",
                        isDefault: true,
                        handle: "gotenks.lens",
                        picture: {
                            original: {
                                url: "ipfs://QmcPnji4vyW1CZXFnr9wjLuG81z1bQAZr9udyhtf2HjRNg",
                                mimeType: null,
                            },
                        },
                        coverPicture: {
                            original: {
                                url: "https://ik.imagekit.io/orbapp/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/orbapp/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/orbapp/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/orbapp/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/orbapp/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/orbapp/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/orbapp/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/orbapp/tr:n-attachment,tr:di-placeholder.webp/https://lens.infura-ipfs.io/ipfs/QmTa5mvmfmvcNVSfREjyTMi5QYmyQuXkTMHxFgR1N52AU4",
                                mimeType: null,
                            },
                        },
                        ownedBy: "0x4E59eECCcA4A2A4B129F8b122d937f90Cce2f1Aa",
                        dispatcher: {
                            address:
                                "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                        },
                        stats: {
                            totalFollowers: 3202,
                            totalFollowing: 385,
                            totalPosts: 1356,
                            totalComments: 4054,
                            totalMirrors: 1614,
                            totalPublications: 7024,
                            totalCollects: 17393,
                        },
                        followModule: null,
                    },
                    stats: {
                        totalAmountOfMirrors: 1,
                        totalAmountOfCollects: 10,
                        totalAmountOfComments: 16,
                    },
                    metadata: {
                        name: "Post by @gotenks",
                        description:
                            "All I need is new smurf items\n\nThe wait is killing me\n\nIf anyone wants to send me some feel free 😎\n\n@thesmurfssociety.lens",
                        content:
                            "All I need is new smurf items\n\nThe wait is killing me\n\nIf anyone wants to send me some feel free 😎\n\n@thesmurfssociety.lens",
                        media: [
                            {
                                original: {
                                    url: "https://media0.giphy.com/media/J2iueH6VZQbkCmiHG1/giphy.gif?cid=d7bb39f5fpila4pz1o052oc9fk65gb2ikjfomn0esld8ojqu&rid=giphy.gif&ct=g",
                                    mimeType: "image/jpeg",
                                },
                            },
                        ],
                        attributes: [],
                    },
                    createdAt: "2023-01-13T13:13:42.000Z",
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
    },
    {
        root: {
            __typename: "Comment",
            id: "0x013cee-0x1b69",
            profile: {
                id: "0x013cee",
                name: "Gotenks 👻",
                bio: "Certified Shit Poster 🌿 | ADHD is My Superpower 🔋\nToken Gated Telegram: https://guild.xyz/ghostgang100x\n#GhostGang100x @ghostgang100x 🎫                              ",
                attributes: [
                    {
                        displayType: null,
                        traitType: "json",
                        key: "projects",
                        value: "[]",
                    },
                    {
                        displayType: null,
                        traitType: "json",
                        key: "skills",
                        value: "[]",
                    },
                    {
                        displayType: null,
                        traitType: "json",
                        key: "experience",
                        value: "[]",
                    },
                    {
                        displayType: null,
                        traitType: "json",
                        key: "education",
                        value: "[]",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "location",
                        value: "Hyperbolic Time Chamber",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "website",
                        value: "https://www.lensfrens.xyz/gotenks.lens",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "twitter",
                        value: "gotenks_lens",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "app",
                        value: "Orb",
                    },
                ],
                isFollowedByMe: false,
                isFollowing: false,
                followNftAddress: "0xc5282caab62Fefad557763f8aC37c7F432c9cA92",
                metadata:
                    "https://arweave.net/6RPejOkwatOYpdx5poqj1RwqvT3EWCNNfIxawpIfMrY",
                isDefault: true,
                handle: "gotenks.lens",
                picture: {
                    original: {
                        url: "ipfs://QmcPnji4vyW1CZXFnr9wjLuG81z1bQAZr9udyhtf2HjRNg",
                        mimeType: null,
                    },
                },
                coverPicture: {
                    original: {
                        url: "https://ik.imagekit.io/orbapp/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/orbapp/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/orbapp/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/orbapp/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/orbapp/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/orbapp/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/orbapp/tr:n-attachment,tr:di-placeholder.webp/https://ik.imagekit.io/orbapp/tr:n-attachment,tr:di-placeholder.webp/https://lens.infura-ipfs.io/ipfs/QmTa5mvmfmvcNVSfREjyTMi5QYmyQuXkTMHxFgR1N52AU4",
                        mimeType: null,
                    },
                },
                ownedBy: "0x4E59eECCcA4A2A4B129F8b122d937f90Cce2f1Aa",
                dispatcher: {
                    address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                },
                stats: {
                    totalFollowers: 3202,
                    totalFollowing: 385,
                    totalPosts: 1356,
                    totalComments: 4054,
                    totalMirrors: 1614,
                    totalPublications: 7024,
                    totalCollects: 17393,
                },
                followModule: null,
            },
            stats: {
                totalAmountOfMirrors: 1,
                totalAmountOfCollects: 0,
                totalAmountOfComments: 2,
            },
            metadata: {
                name: "Comment by @gotenks",
                description: "When @orbapp.lens latest update lands 👻",
                content: "When @orbapp.lens latest update lands 👻",
                media: [
                    {
                        original: {
                            url: "https://media4.giphy.com/media/3oxHQjRHcp4w9oi24M/giphy.gif?cid=d7bb39f5oh6obdueknb5soea69fvpwq0gxmtatflmjtsc6et&rid=giphy.gif&ct=g",
                            mimeType: "image/jpeg",
                        },
                    },
                ],
                attributes: [],
            },
            createdAt: "2023-01-13T13:10:14.000Z",
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
                id: "0x011f55-0x0885",
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
                    followNftAddress:
                        "0xc1Bf666ACD14DAd62d55457417E69D8705c3d2f0",
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
                    totalAmountOfMirrors: 1,
                    totalAmountOfCollects: 0,
                    totalAmountOfComments: 24,
                },
                metadata: {
                    name: "Post by @chriscomrie.lens",
                    description: null,
                    content:
                        "Tell me u Lens without telling me u Lens... ill go first... same page three different windows hahah",
                    media: [
                        {
                            original: {
                                url: "ipfs://bafybeigkxtph7x4fh4gpledtia6dw6pu3byiy27lcxdluadry5rrn7ax54",
                                mimeType: "image/png",
                            },
                        },
                    ],
                    attributes: [
                        {
                            displayType: "string",
                            traitType: "type",
                            value: "image",
                        },
                    ],
                },
                createdAt: "2023-01-11T20:30:57.000Z",
                collectModule: {
                    __typename: "RevertCollectModuleSettings",
                    type: "RevertCollectModule",
                },
                referenceModule: {},
                appId: "lenster",
                collectedBy: null,
                hidden: false,
                reaction: null,
                mirrors: [],
                hasCollectedByMe: false,
            },
        },
        electedMirror: null,
        mirrors: [],
        collects: [],
        reactions: [],
        comments: [
            {
                id: "0x7868-0x02bc",
                profile: {
                    id: "0x7868",
                    name: "Tim Jeffries",
                    bio: "Exploring web3 enabled productivity systems to help us work in healthy and sustainable ways. \nDAO Ops for @w3adao.lens\nConsulting @ https://thegoodcup.com.au",
                    attributes: [
                        {
                            displayType: null,
                            traitType: "string",
                            key: "location",
                            value: "Waddawurrung Country, Australia 🐨 🦘",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "website",
                            value: "https://beta.portrait.gg/timjeffries.eth",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "twitter",
                            value: "timjeffries",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "statusEmoji",
                            value: "⚡",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "statusMessage",
                            value: "creating web3 productivity",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "app",
                            value: "Orb",
                        },
                        {
                            displayType: null,
                            traitType: "json",
                            key: "projects",
                            value: "[]",
                        },
                        {
                            displayType: null,
                            traitType: "json",
                            key: "skills",
                            value: "[]",
                        },
                        {
                            displayType: null,
                            traitType: "json",
                            key: "experience",
                            value: "[]",
                        },
                        {
                            displayType: null,
                            traitType: "json",
                            key: "education",
                            value: "[]",
                        },
                    ],
                    isFollowedByMe: false,
                    isFollowing: false,
                    followNftAddress:
                        "0x45c2C9BB6271e102e950B6FBABD9f9898403FfB4",
                    metadata:
                        "https://arweave.net/rmfBKAtKo4w_z6GriGFd2bcFi8GJ2Zan45yl8jZ6jVA",
                    isDefault: true,
                    handle: "timjeffries.lens",
                    picture: {
                        original: {
                            url: "https://lens.infura-ipfs.io/ipfs/QmPLJvGTWvNvYP9N3h1CjK7oom2RUB5sPxy5AZyRqzLaU7",
                            mimeType: null,
                        },
                    },
                    coverPicture: {
                        original: {
                            url: "https://ik.imagekit.io/orbapp/tr:n-attachment,tr:di-placeholder.webp/https://lens.infura-ipfs.io/ipfs/bafkreigr4uxkvrheyk4fn4hzxjzqznm3ooyqjvdt6nlgitinzoyqexnxla",
                            mimeType: null,
                        },
                    },
                    ownedBy: "0x58D04cAf815C64905c6265743561A5bB1595B4f9",
                    dispatcher: {
                        address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                    },
                    stats: {
                        totalFollowers: 971,
                        totalFollowing: 279,
                        totalPosts: 97,
                        totalComments: 519,
                        totalMirrors: 85,
                        totalPublications: 701,
                        totalCollects: 1651,
                    },
                    followModule: null,
                },
                stats: {
                    totalAmountOfMirrors: 1,
                    totalAmountOfCollects: 0,
                    totalAmountOfComments: 0,
                },
                metadata: {
                    name: "Comment by @timjeffries",
                    description: "",
                    content: "",
                    media: [
                        {
                            original: {
                                url: "https://media2.giphy.com/media/dBawUzuSi9nLjxyjg4/giphy.gif?cid=d7bb39f5zq0tmg0ihs79r1bz2ittqzp5plnhb1rz1km620pv&rid=giphy.gif&ct=g",
                                mimeType: "image/jpeg",
                            },
                        },
                    ],
                    attributes: [],
                },
                createdAt: "2023-01-13T13:25:00.000Z",
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
                mainPost: {
                    id: "0x011f55-0x0885",
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
                        followNftAddress:
                            "0xc1Bf666ACD14DAd62d55457417E69D8705c3d2f0",
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
                            address:
                                "0xD1FecCF6881970105dfb2b654054174007f0e07E",
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
                        totalAmountOfMirrors: 1,
                        totalAmountOfCollects: 0,
                        totalAmountOfComments: 24,
                    },
                    metadata: {
                        name: "Post by @chriscomrie.lens",
                        description: null,
                        content:
                            "Tell me u Lens without telling me u Lens... ill go first... same page three different windows hahah",
                        media: [
                            {
                                original: {
                                    url: "ipfs://bafybeigkxtph7x4fh4gpledtia6dw6pu3byiy27lcxdluadry5rrn7ax54",
                                    mimeType: "image/png",
                                },
                            },
                        ],
                        attributes: [
                            {
                                displayType: "string",
                                traitType: "type",
                                value: "image",
                            },
                        ],
                    },
                    createdAt: "2023-01-11T20:30:57.000Z",
                    collectModule: {
                        __typename: "RevertCollectModuleSettings",
                        type: "RevertCollectModule",
                    },
                    referenceModule: {},
                    appId: "lenster",
                    collectedBy: null,
                    hidden: false,
                    reaction: null,
                    mirrors: [],
                    hasCollectedByMe: false,
                },
            },
        ],
    },
    {
        root: {
            __typename: "Comment",
            id: "0x019d96-0x0274",
            profile: {
                id: "0x019d96",
                name: "James Finnerty",
                bio: "Audio Engineer | Theatre Manager | Musician | NFT Creator",
                attributes: [
                    {
                        displayType: null,
                        traitType: null,
                        key: "pinnedPublicationId",
                        value: "0x019d96-0x4d",
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
                        value: "1.3",
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
                        value: "Hey Lens Fam!\n\n\n\nSince getting started on Lens I've realized how much potential there is in the creator community that is growing here. I've set up this wagmi fund for several reasons:\n\n\n\n1) To collect tips from people who are stoked about my work.\n\n\n\n2) To help me continue to support other creators in the community by collecting their work.\n\n\n\n3) To provide funding to assist in the creation of new content; whether it be purchasing new plug-ins, creating a wav3s campaign, airdrops, giveaways, etc. I want to see the community around me thriving!\n\n\n\n4) To connect with angels who will help me grow my own set of wings to fly! 🦋\n\n\n\nThis is such a unique time where we are seeing the potential of decentralized social and its value within the web3 community. I haven't been excited about something like this for some time, so I'm all in! Join me on the journey!\n\n\n\nPeace!\n\nJames",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "theme",
                        value: '{"h":189,"s":0.94,"l":0.43,"a":1}',
                    },
                    {
                        displayType: null,
                        traitType: "boolean",
                        key: "hasPrideLogo",
                        value: "true",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "statusEmoji",
                        value: "🌍",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "statusMessage",
                        value: "Making new connections",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "website",
                        value: "jamesfinnerty.ca",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "twitter",
                        value: "jjamesfinnertyy",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "location",
                        value: "Toronto, Canada",
                    },
                    {
                        displayType: null,
                        traitType: "string",
                        key: "app",
                        value: "Buttrfly",
                    },
                ],
                isFollowedByMe: false,
                isFollowing: false,
                followNftAddress: "0x8584988430cF9d1a6Ce5E7DE96024f8A14B5f02F",
                metadata:
                    "https://arweave.net/b5qY3R0rejJ8bHET7M5CzUV4sbJXP8Vv5FZjZzOL6dk",
                isDefault: true,
                handle: "jamesfinnerty.lens",
                picture: {
                    original: {
                        url: "ipfs://QmVtfXbyicSxq1nXTKptPvMGnEqaNa7k8buL4NDH3nCmRg",
                        mimeType: null,
                    },
                },
                coverPicture: {
                    original: {
                        url: "ipfs://bafybeieecww3f3a5gq2ccjvgzbaipz73s3zfyiym537wtw2of2lkrx2rgu",
                        mimeType: null,
                    },
                },
                ownedBy: "0xeA47dc95d96Db80AD330CB0A810b7b3507E22aB4",
                dispatcher: {
                    address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                },
                stats: {
                    totalFollowers: 298,
                    totalFollowing: 168,
                    totalPosts: 56,
                    totalComments: 451,
                    totalMirrors: 132,
                    totalPublications: 639,
                    totalCollects: 527,
                },
                followModule: null,
            },
            stats: {
                totalAmountOfMirrors: 0,
                totalAmountOfCollects: 0,
                totalAmountOfComments: 2,
            },
            metadata: {
                name: "Comment by @jamesfinnerty",
                description:
                    "It’s a great way to keep sites and ideas from getting buried. I feel that organizng things visually in an easel might keep the ideas in the forefront a bit more. I’m a big bookmark collector, but when urls just get stored away in files that you don’t see regularly it’s easy to forget about them.",
                content:
                    "It’s a great way to keep sites and ideas from getting buried. I feel that organizng things visually in an easel might keep the ideas in the forefront a bit more. I’m a big bookmark collector, but when urls just get stored away in files that you don’t see regularly it’s easy to forget about them.",
                media: [],
                attributes: [],
            },
            createdAt: "2023-01-13T13:13:54.000Z",
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
                id: "0x8e-0x0664",
                profile: {
                    id: "0x8e",
                    name: "Christina",
                    bio: "Stay curious 🌎 // Head of Growth @LensProtocol // Building the future of social\n\n🎧: My music NFTs -- > https://www.oohlala.xyz/playlist/1e0f9f81-f545-4c6d-b0ec-68201189f2f4\n📖:  Working in Public  ",
                    attributes: [
                        {
                            displayType: null,
                            traitType: "string",
                            key: "website",
                            value: "https://www.lensfrens.xyz/christina.lens",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "twitter",
                            value: "0xchristina",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "statusEmoji",
                            value: "🤠",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "statusMessage",
                            value: "Back to binging Lens content",
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
                        "0xC6F8c8C3c0CA71d4CC9ff1D4217Ac52113B5D950",
                    metadata:
                        "https://arweave.net/J1i7XB7ALCTVf2yH8OC0T1A3_TmGCrNMS0-VCF6usb8",
                    isDefault: true,
                    handle: "christina.lens",
                    picture: {
                        original: {
                            url: "ipfs://bafkreianwlir2groq5l52zdnikon4rtgjcostjosaadbbfekgpzhaprmri",
                            mimeType: null,
                        },
                    },
                    coverPicture: {
                        original: {
                            url: "ipfs://bafybeidf34banytwg6vjr3hdyb4jd5nggd434o53kuuwlre2tfaue6kvbe",
                            mimeType: null,
                        },
                    },
                    ownedBy: "0xA7d53695aF1FD11E0b75d37695290C102D59D743",
                    dispatcher: {
                        address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                    },
                    stats: {
                        totalFollowers: 20839,
                        totalFollowing: 869,
                        totalPosts: 370,
                        totalComments: 641,
                        totalMirrors: 835,
                        totalPublications: 1846,
                        totalCollects: 6895,
                    },
                    followModule: null,
                },
                stats: {
                    totalAmountOfMirrors: 18,
                    totalAmountOfCollects: 0,
                    totalAmountOfComments: 27,
                },
                metadata: {
                    name: "Post by @christina.lens",
                    description:
                        'Lens Community,\n\n\n\nAs we kick off the new year, I wanted to share an incredible piece that I came across, which inspired me to think about how we might experiment with ways to relate online in 2023. \n\n\n\nhttps://www.robinsloan.com/lab/new-avenues/\n\n\n\nIts as if this article was written for us with this opening line - *"It’s so powerfully obvious to me, it might as well be written in ten-foot letters of flame: the platforms of the last decade are done."*\n\n\n\nSome tips from the article:\n\n\n\n- Try the new new new thing (always!!) \n\n\n\n- Think deeply about discovery online\n\n\n\n- Climb into an overlay \n\n\n\n- Make a thing with which you can talk about the thing \n\n\n\nThank you to everyone here in our beta who invested their time and energy experimenting & exploring with us last year. We hope you enjoyed the journey as much as we did. We started out with just a few active users, and now I struggle to keep up with all the cool stuff happening here (I am loosing sleep)! \n\n\n\nIt\'s thanks to you, our early adopters, that we\'ve gotten this far! \n\n\n\n*"The good stuff is always lonely in the beginning. Nothing meaningful will get made if its potential makers all wimp out too soon, because they get scared by the sparse crowd, the empty room."*\n\n\n\nLet\'s continue to build for the long term...*"The timeline isn’t settled."*\n\n\n\nDon\'t forget to scroll to the bottom of the article 😉',
                    content:
                        'Lens Community,\n\n\n\nAs we kick off the new year, I wanted to share an incredible piece that I came across, which inspired me to think about how we might experiment with ways to relate online in 2023. \n\n\n\nhttps://www.robinsloan.com/lab/new-avenues/\n\n\n\nIts as if this article was written for us with this opening line - *"It’s so powerfully obvious to me, it might as well be written in ten-foot letters of flame: the platforms of the last decade are done."*\n\n\n\nSome tips from the article:\n\n\n\n- Try the new new new thing (always!!) \n\n\n\n- Think deeply about discovery online\n\n\n\n- Climb into an overlay \n\n\n\n- Make a thing with which you can talk about the thing \n\n\n\nThank you to everyone here in our beta who invested their time and energy experimenting & exploring with us last year. We hope you enjoyed the journey as much as we did. We started out with just a few active users, and now I struggle to keep up with all the cool stuff happening here (I am loosing sleep)! \n\n\n\nIt\'s thanks to you, our early adopters, that we\'ve gotten this far! \n\n\n\n*"The good stuff is always lonely in the beginning. Nothing meaningful will get made if its potential makers all wimp out too soon, because they get scared by the sparse crowd, the empty room."*\n\n\n\nLet\'s continue to build for the long term...*"The timeline isn’t settled."*\n\n\n\nDon\'t forget to scroll to the bottom of the article 😉',
                    media: [],
                    attributes: [
                        {
                            displayType: "string",
                            traitType: "type",
                            value: "text_only",
                        },
                    ],
                },
                createdAt: "2023-01-02T17:16:49.000Z",
                collectModule: {
                    __typename: "RevertCollectModuleSettings",
                    type: "RevertCollectModule",
                },
                referenceModule: {},
                appId: "lenster",
                collectedBy: null,
                hidden: false,
                reaction: null,
                mirrors: [],
                hasCollectedByMe: false,
            },
        },
        electedMirror: null,
        mirrors: [],
        collects: [],
        reactions: [],
        comments: [
            {
                id: "0x7868-0x02bb",
                profile: {
                    id: "0x7868",
                    name: "Tim Jeffries",
                    bio: "Exploring web3 enabled productivity systems to help us work in healthy and sustainable ways. \nDAO Ops for @w3adao.lens\nConsulting @ https://thegoodcup.com.au",
                    attributes: [
                        {
                            displayType: null,
                            traitType: "string",
                            key: "location",
                            value: "Waddawurrung Country, Australia 🐨 🦘",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "website",
                            value: "https://beta.portrait.gg/timjeffries.eth",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "twitter",
                            value: "timjeffries",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "statusEmoji",
                            value: "⚡",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "statusMessage",
                            value: "creating web3 productivity",
                        },
                        {
                            displayType: null,
                            traitType: "string",
                            key: "app",
                            value: "Orb",
                        },
                        {
                            displayType: null,
                            traitType: "json",
                            key: "projects",
                            value: "[]",
                        },
                        {
                            displayType: null,
                            traitType: "json",
                            key: "skills",
                            value: "[]",
                        },
                        {
                            displayType: null,
                            traitType: "json",
                            key: "experience",
                            value: "[]",
                        },
                        {
                            displayType: null,
                            traitType: "json",
                            key: "education",
                            value: "[]",
                        },
                    ],
                    isFollowedByMe: false,
                    isFollowing: false,
                    followNftAddress:
                        "0x45c2C9BB6271e102e950B6FBABD9f9898403FfB4",
                    metadata:
                        "https://arweave.net/rmfBKAtKo4w_z6GriGFd2bcFi8GJ2Zan45yl8jZ6jVA",
                    isDefault: true,
                    handle: "timjeffries.lens",
                    picture: {
                        original: {
                            url: "https://lens.infura-ipfs.io/ipfs/QmPLJvGTWvNvYP9N3h1CjK7oom2RUB5sPxy5AZyRqzLaU7",
                            mimeType: null,
                        },
                    },
                    coverPicture: {
                        original: {
                            url: "https://ik.imagekit.io/orbapp/tr:n-attachment,tr:di-placeholder.webp/https://lens.infura-ipfs.io/ipfs/bafkreigr4uxkvrheyk4fn4hzxjzqznm3ooyqjvdt6nlgitinzoyqexnxla",
                            mimeType: null,
                        },
                    },
                    ownedBy: "0x58D04cAf815C64905c6265743561A5bB1595B4f9",
                    dispatcher: {
                        address: "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                    },
                    stats: {
                        totalFollowers: 971,
                        totalFollowing: 279,
                        totalPosts: 97,
                        totalComments: 519,
                        totalMirrors: 85,
                        totalPublications: 701,
                        totalCollects: 1651,
                    },
                    followModule: null,
                },
                stats: {
                    totalAmountOfMirrors: 0,
                    totalAmountOfCollects: 0,
                    totalAmountOfComments: 0,
                },
                metadata: {
                    name: "Post by @timjeffries.lens",
                    description:
                        "Yeah that’s right. It feels more like a scrapbook. Got the visual vibe. Super helpful for gathering and early organising stage I’d day. ",
                    content:
                        "Yeah that’s right. It feels more like a scrapbook. Got the visual vibe. Super helpful for gathering and early organising stage I’d day. ",
                    media: [],
                    attributes: [],
                },
                createdAt: "2023-01-13T13:22:34.000Z",
                collectModule: {
                    __typename: "FreeCollectModuleSettings",
                    type: "FreeCollectModule",
                    followerOnly: true,
                    contractAddress:
                        "0x23b9467334bEb345aAa6fd1545538F3d54436e96",
                },
                referenceModule: null,
                appId: "buttrfly",
                collectedBy: null,
                hidden: false,
                reaction: null,
                mirrors: [],
                hasCollectedByMe: false,
                mainPost: {
                    id: "0x8e-0x0664",
                    profile: {
                        id: "0x8e",
                        name: "Christina",
                        bio: "Stay curious 🌎 // Head of Growth @LensProtocol // Building the future of social\n\n🎧: My music NFTs -- > https://www.oohlala.xyz/playlist/1e0f9f81-f545-4c6d-b0ec-68201189f2f4\n📖:  Working in Public  ",
                        attributes: [
                            {
                                displayType: null,
                                traitType: "string",
                                key: "website",
                                value: "https://www.lensfrens.xyz/christina.lens",
                            },
                            {
                                displayType: null,
                                traitType: "string",
                                key: "twitter",
                                value: "0xchristina",
                            },
                            {
                                displayType: null,
                                traitType: "string",
                                key: "statusEmoji",
                                value: "🤠",
                            },
                            {
                                displayType: null,
                                traitType: "string",
                                key: "statusMessage",
                                value: "Back to binging Lens content",
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
                            "0xC6F8c8C3c0CA71d4CC9ff1D4217Ac52113B5D950",
                        metadata:
                            "https://arweave.net/J1i7XB7ALCTVf2yH8OC0T1A3_TmGCrNMS0-VCF6usb8",
                        isDefault: true,
                        handle: "christina.lens",
                        picture: {
                            original: {
                                url: "ipfs://bafkreianwlir2groq5l52zdnikon4rtgjcostjosaadbbfekgpzhaprmri",
                                mimeType: null,
                            },
                        },
                        coverPicture: {
                            original: {
                                url: "ipfs://bafybeidf34banytwg6vjr3hdyb4jd5nggd434o53kuuwlre2tfaue6kvbe",
                                mimeType: null,
                            },
                        },
                        ownedBy: "0xA7d53695aF1FD11E0b75d37695290C102D59D743",
                        dispatcher: {
                            address:
                                "0xD1FecCF6881970105dfb2b654054174007f0e07E",
                        },
                        stats: {
                            totalFollowers: 20839,
                            totalFollowing: 869,
                            totalPosts: 370,
                            totalComments: 641,
                            totalMirrors: 835,
                            totalPublications: 1846,
                            totalCollects: 6895,
                        },
                        followModule: null,
                    },
                    stats: {
                        totalAmountOfMirrors: 18,
                        totalAmountOfCollects: 0,
                        totalAmountOfComments: 27,
                    },
                    metadata: {
                        name: "Post by @christina.lens",
                        description:
                            'Lens Community,\n\n\n\nAs we kick off the new year, I wanted to share an incredible piece that I came across, which inspired me to think about how we might experiment with ways to relate online in 2023. \n\n\n\nhttps://www.robinsloan.com/lab/new-avenues/\n\n\n\nIts as if this article was written for us with this opening line - *"It’s so powerfully obvious to me, it might as well be written in ten-foot letters of flame: the platforms of the last decade are done."*\n\n\n\nSome tips from the article:\n\n\n\n- Try the new new new thing (always!!) \n\n\n\n- Think deeply about discovery online\n\n\n\n- Climb into an overlay \n\n\n\n- Make a thing with which you can talk about the thing \n\n\n\nThank you to everyone here in our beta who invested their time and energy experimenting & exploring with us last year. We hope you enjoyed the journey as much as we did. We started out with just a few active users, and now I struggle to keep up with all the cool stuff happening here (I am loosing sleep)! \n\n\n\nIt\'s thanks to you, our early adopters, that we\'ve gotten this far! \n\n\n\n*"The good stuff is always lonely in the beginning. Nothing meaningful will get made if its potential makers all wimp out too soon, because they get scared by the sparse crowd, the empty room."*\n\n\n\nLet\'s continue to build for the long term...*"The timeline isn’t settled."*\n\n\n\nDon\'t forget to scroll to the bottom of the article 😉',
                        content:
                            'Lens Community,\n\n\n\nAs we kick off the new year, I wanted to share an incredible piece that I came across, which inspired me to think about how we might experiment with ways to relate online in 2023. \n\n\n\nhttps://www.robinsloan.com/lab/new-avenues/\n\n\n\nIts as if this article was written for us with this opening line - *"It’s so powerfully obvious to me, it might as well be written in ten-foot letters of flame: the platforms of the last decade are done."*\n\n\n\nSome tips from the article:\n\n\n\n- Try the new new new thing (always!!) \n\n\n\n- Think deeply about discovery online\n\n\n\n- Climb into an overlay \n\n\n\n- Make a thing with which you can talk about the thing \n\n\n\nThank you to everyone here in our beta who invested their time and energy experimenting & exploring with us last year. We hope you enjoyed the journey as much as we did. We started out with just a few active users, and now I struggle to keep up with all the cool stuff happening here (I am loosing sleep)! \n\n\n\nIt\'s thanks to you, our early adopters, that we\'ve gotten this far! \n\n\n\n*"The good stuff is always lonely in the beginning. Nothing meaningful will get made if its potential makers all wimp out too soon, because they get scared by the sparse crowd, the empty room."*\n\n\n\nLet\'s continue to build for the long term...*"The timeline isn’t settled."*\n\n\n\nDon\'t forget to scroll to the bottom of the article 😉',
                        media: [],
                        attributes: [
                            {
                                displayType: "string",
                                traitType: "type",
                                value: "text_only",
                            },
                        ],
                    },
                    createdAt: "2023-01-02T17:16:49.000Z",
                    collectModule: {
                        __typename: "RevertCollectModuleSettings",
                        type: "RevertCollectModule",
                    },
                    referenceModule: {},
                    appId: "lenster",
                    collectedBy: null,
                    hidden: false,
                    reaction: null,
                    mirrors: [],
                    hasCollectedByMe: false,
                },
            },
        ],
    },
]

const Feed = () => {
    const loadMore = async () => {}

    return (
        <InfiniteScroll
            dataLength={[]?.length ?? 0}
            scrollThreshold={SCROLL_THRESHOLD}
            hasMore={true}
            next={loadMore}
            style={{
                height: "100%",
                // overflow: "auto",
                overflow: "visible",
                // "-webkit-overflow-scrolling": "none",
            }}
            loader={<InfiniteLoader />}
        >
            <Card className=" xs320:w-11/12 md900:w-auto ">
                {feedItems?.map((publication, index) => (
                    <SinglePublication
                        key={`${publication?.root.id}_${index}`}
                        feedItem={publication as FeedItem}
                        publication={publication.root as KytePublication}
                    />
                ))}
            </Card>
        </InfiniteScroll>
    )
}

export default Feed
