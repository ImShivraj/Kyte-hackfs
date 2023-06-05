import Attachments from "@components/Shared/Attachments"
import IFramely from "@components/Shared/IFramely"
import Markup from "@components/Shared/Markup"
import { Card } from "@/src/components/UI/Card"
import { ErrorMessage } from "@/src/components/UI/ErrorMessage"
import { Spinner } from "@/src/components/UI/Spinner"
import { Tooltip } from "@/src/components/UI/Tooltip"
import useNFT from "@components/utils/hooks/useNFT"
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined"
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined"
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined"
import FingerprintOutlinedIcon from "@mui/icons-material/FingerprintOutlined"
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined"
import WallpaperOutlinedIcon from "@mui/icons-material/WallpaperOutlined"
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined"
import type {
    CollectConditionOutput,
    Erc20OwnershipOutput,
    NftOwnershipOutput,
} from "@lens-protocol/sdk-gated/dist/graphql/types"
import formatHandle from "@lib/formatHandle"
import getURLs from "@lib/getURLs"
import axios from "axios"
import clsx from "clsx"
import {
    POLYGONSCAN_URL,
    RARIBLE_URL,
} from "@constants/index"
// @ts-ignore
import type { PublicationMetadataV2Input } from "lens"
// @ts-ignore
import { DecryptFailReason, useCanDecryptStatusQuery } from "lens"
import Link from "next/link"
import { useRouter } from "next/router"
import { LensGatedSDK } from '@lens-protocol/sdk-gated';
import type { FC, ReactNode } from "react"
import { useState } from "react"
import { useAppStore } from "src/store/app"
import { useToken } from "wagmi"
import { KytePublication } from "src/types"

interface DecryptMessageProps {
    icon: ReactNode
    children: ReactNode
}

const DecryptMessage: FC<DecryptMessageProps> = ({ icon, children }) => (
    <div className="flex items-center space-x-2">
        {icon}
        <span>{children}</span>
    </div>
)

interface Props {
    encryptedPublication: KytePublication
}

const DecryptedPublicationBody: FC<Props> = ({ encryptedPublication }) => {
    const { pathname } = useRouter()
    const currentProfile = useAppStore((state) => state.currentProfile)
    const [decryptedData, setDecryptedData] = useState<any>(null)
    const [decryptError, setDecryptError] = useState<any>(null)
    const [isDecrypting, setIsDecrypting] = useState(false)
    const [canDecrypt, setCanDecrypt] = useState<boolean>(
        encryptedPublication?.canDecrypt?.result
    )
    const [reasons, setReasons] = useState<any>(
        encryptedPublication?.canDecrypt.reasons
    )
    // const provider = useProvider()
    // const { data: signer } = useSigner()

    const showMore =
        encryptedPublication?.metadata?.content?.length > 450 &&
        pathname !== "/posts/[id]"

    useCanDecryptStatusQuery({
        variables: {
            request: { publicationId: encryptedPublication.id },
            profileId: currentProfile?.id ?? null,
        },
        pollInterval: 5000,
        skip: canDecrypt || !currentProfile,
        onCompleted: (data: any) => {
            setCanDecrypt(data.publication?.canDecrypt.result || false)
            setReasons(data.publication?.canDecrypt.reasons || [])
        },
    })

    const getCondition = (key: string) => {
        const criteria: any =
            encryptedPublication.metadata.encryptionParams?.accessCondition.or
                ?.criteria

        const getCriteria = (key: string) => {
            return criteria
                .map((item: any) => item[key])
                .find((item: any) => item)
        }

        if (getCriteria("and")?.criteria) {
            return getCriteria("and")
                .criteria.map((item: any) => item[key])
                .find((item: any) => item)
        }

        if (getCriteria("or")?.criteria) {
            return getCriteria("or")
                .criteria.map((item: any) => item[key])
                .find((item: any) => item)
        }

        return criteria.map((item: any) => item[key]).find((item: any) => item)
    }

    // Conditions
    const tokenCondition: Erc20OwnershipOutput = getCondition("token")
    const nftCondition: NftOwnershipOutput = getCondition("nft")
    const collectCondition: CollectConditionOutput = getCondition("collect")

    const { data: tokenData } = useToken({
        address: tokenCondition?.contractAddress,
        chainId: tokenCondition?.chainID,
        enabled: Boolean(tokenCondition),
    })

    const { data: nftData } = useNFT({
        address: nftCondition?.contractAddress,
        chainId: nftCondition?.chainID,
        enabled: Boolean(nftCondition),
    })

    // Style
    const cardClasses =
        "text-sm rounded-xl w-fit p-9 shadow-sm bg-gradient-to-tr from-brand-400 to-brand-600"

    if (!currentProfile) {
        return (
            <Card
                className={clsx(cardClasses, "!cursor-pointer")}
                onClick={(event) => {
                    event.stopPropagation()
                }}
            >
                <div className="text-white font-bold flex items-center space-x-1">
                    <LogoutOutlinedIcon className="h-5 w-5" />
                    <span>Login to decrypt</span>
                </div>
            </Card>
        )
    }

    // Status
    // Collect checks - https://docs.lens.xyz/docs/gated#collected-publication
    const hasNotCollectedPublication = reasons?.includes(
        DecryptFailReason.HasNotCollectedPublication
    )
    const collectNotFinalisedOnChain =
        !hasNotCollectedPublication &&
        reasons?.includes(DecryptFailReason.CollectNotFinalisedOnChain)
    // Follow checks - https://docs.lens.xyz/docs/gated#profile-follow
    const doesNotFollowProfile = reasons?.includes(
        DecryptFailReason.DoesNotFollowProfile
    )
    const followNotFinalisedOnChain =
        !doesNotFollowProfile &&
        reasons?.includes(DecryptFailReason.FollowNotFinalisedOnChain)
    // Token check - https://docs.lens.xyz/docs/gated#erc20-token-ownership
    const unauthorizedBalance = reasons?.includes(
        DecryptFailReason.UnauthorizedBalance
    )
    // NFT check - https://docs.lens.xyz/docs/gated#erc20-token-ownership
    const doesNotOwnNft = reasons?.includes(DecryptFailReason.DoesNotOwnNft)

    // const getDecryptedData = async () => {
    //     if (!signer || isDecrypting) {
    //         return
    //     }

    //     setIsDecrypting(true)
    //     const contentUri = getIPFSLink(encryptedPublication?.onChainContentURI)
    //     const { data } = await axios.get(contentUri)
    //     const sdk = await LensGatedSDK.create({
    //         provider,
    //         signer,
    //         env: LIT_PROTOCOL_ENVIRONMENT as any,
    //     })
    //     const { decrypted, error } = await sdk.gated.decryptMetadata(data)
    //     setDecryptedData(decrypted)
    //     setDecryptError(error)
    //     setIsDecrypting(false)
    // }

    if (!canDecrypt) {
        return (
            <Card
                className={clsx(cardClasses, "cursor-text")}
                onClick={(event) => event.stopPropagation()}
            >
                <div className="font-bold flex items-center space-x-2">
                    <LockOutlinedIcon className="h-5 w-5 text-green-300" />
                    <span className="text-white font-black text-base">
                        To view this
                    </span>
                </div>
                <div className="pt-3.5 space-y-2 text-white">
                    {/* Collect checks */}
                    {hasNotCollectedPublication && (
                        <DecryptMessage
                            icon={<BookmarksOutlinedIcon className="h-4 w-4" />}
                        >
                            Collect the{" "}
                            <Link
                                href={`/posts/${collectCondition?.publicationId}`}
                                className="font-bold lowercase underline"
                            >
                                {encryptedPublication?.__typename}
                            </Link>
                        </DecryptMessage>
                    )}
                    {collectNotFinalisedOnChain && (
                        <DecryptMessage
                            icon={
                                <BookmarksOutlinedIcon className="animate-pulse h-4 w-4" />
                            }
                        >
                            Collect finalizing on chain
                        </DecryptMessage>
                    )}

                    {/* Follow checks */}
                    {doesNotFollowProfile && (
                        <DecryptMessage
                            icon={
                                <PersonAddAltOutlinedIcon className="h-4 w-4" />
                            }
                        >
                            Follow{" "}
                            <Link
                                href={`/u/${formatHandle(
                                    encryptedPublication?.profile?.handle
                                )}`}
                                className="font-bold"
                            >
                                @
                                {formatHandle(
                                    encryptedPublication?.profile?.handle
                                )}
                            </Link>
                        </DecryptMessage>
                    )}
                    {followNotFinalisedOnChain && (
                        <DecryptMessage
                            icon={
                                <PersonAddAltOutlinedIcon className="animate-pulse h-4 w-4" />
                            }
                        >
                            Follow finalizing on chain
                        </DecryptMessage>
                    )}

                    {/* Token check */}
                    {unauthorizedBalance && (
                        <DecryptMessage
                            icon={<StorageOutlinedIcon className="h-4 w-4" />}
                        >
                            You need{" "}
                            <a
                                href={`${POLYGONSCAN_URL}/token/${tokenCondition.contractAddress}`}
                                className="font-bold underline"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {tokenCondition.amount} {tokenData?.symbol}
                            </a>{" "}
                            to unlock
                        </DecryptMessage>
                    )}

                    {/* NFT check */}
                    {doesNotOwnNft && (
                        <DecryptMessage
                            icon={<WallpaperOutlinedIcon className="h-4 w-4" />}
                        >
                            You need{" "}
                            <Tooltip
                                content={nftData?.contractMetadata?.name}
                                placement="top"
                            >
                                <a
                                    href={`${RARIBLE_URL}/collection/polygon/${nftCondition.contractAddress}/items`}
                                    className="font-bold underline"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {nftData?.contractMetadata?.symbol}
                                </a>
                            </Tooltip>{" "}
                            nft to unlock
                        </DecryptMessage>
                    )}
                </div>
            </Card>
        )
    }

    if (decryptError) {
        return (
            <ErrorMessage
                title={`Error while decrypting!`}
                error={decryptError}
            />
        )
    }

    if (!decryptedData) {
        return (
            <Card
                className={clsx(cardClasses, "!cursor-pointer")}
                onClick={(event) => {
                    event.stopPropagation()
                    // getDecryptedData()
                }}
            >
                <div className="text-white font-bold flex items-center space-x-1">
                    {isDecrypting ? (
                        <>
                            <Spinner size="xs" className="mr-1" />
                            <span>Decrypting</span>
                        </>
                    ) : (
                        <>
                            <FingerprintOutlinedIcon className="h-5 w-5" />
                            <span>
                                Decrypt{" "}
                                <span className="lowercase">
                                    {encryptedPublication.__typename}
                                </span>
                            </span>
                        </>
                    )}
                </div>
            </Card>
        )
    }

    const publication: PublicationMetadataV2Input = decryptedData

    return (
        <div className="break-words">
            <Markup
                className={clsx( 
                    { "line-clamp-5": showMore },
                    "whitespace-pre-wrap break-words leading-md linkify text-md"
                )}
            >
                {publication?.content}
            </Markup>
            {showMore && (
                <div className="mt-4 text-sm text-gray-500 font-bold flex items-center space-x-1">
                    <RemoveRedEyeOutlinedIcon className="h-4 w-4" />
                    <Link href={`/posts/${encryptedPublication?.id}`}>
                        Show more
                    </Link>
                </div>
            )}
            {publication?.media?.length ? (
                <Attachments attachments={publication?.media} />
            ) : publication?.content ? (
                getURLs(publication?.content)?.length > 0 && (
                    <IFramely url={getURLs(publication?.content)[0]} />
                )
            ) : null}
        </div>
    )
}

export default DecryptedPublicationBody
