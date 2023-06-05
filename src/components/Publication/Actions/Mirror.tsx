import type { ApolloCache } from "@apollo/client"
import { Spinner } from "@/src/components/UI/Spinner"
import { Tooltip } from "@/src/components/UI/Tooltip"
import SyncAltIcon from "@mui/icons-material/SyncAlt"
import humanize from "@lib/humanize"
import { publicationKeyFields } from "@lib/keyFields"
import nFormatter from "@lib/nFormatter"
import clsx from "clsx"
import { CreateMirrorRequest } from "@lens/generated"
import {
    useBroadcastMutation,
    useCreateMirrorTypedDataMutation,
    useCreateMirrorViaDispatcherMutation,
    //@ts-ignore
} from "lens"
import type { FC } from "react"
import { useState } from "react"
import { useAppStore } from "src/store/app"
import { useContractWrite, useSignTypedData } from "wagmi"
import { KytePublication } from "src/types"
import { showNotification } from "@mantine/notifications"
import { HiArrowsUpDown } from "react-icons/hi2"

interface Props {
    publication: KytePublication
    isFullPublication: boolean
}

const Mirror: FC<Props> = ({ publication, isFullPublication }) => {
    const isMirror = publication.__typename === "Mirror"
    const userSigNonce = useAppStore((state) => state.userSigNonce)
    const setUserSigNonce = useAppStore((state) => state.setUserSigNonce)
    const currentProfile = useAppStore((state) => state.currentProfile)
    const count = isMirror
        ? publication?.mirrorOf?.stats?.totalAmountOfMirrors
        : publication?.stats?.totalAmountOfMirrors
    const [mirrored, setMirrored] = useState(
        publication?.mirrors?.length > 0 ||
            publication?.mirrorOf?.mirrors?.length > 0
    )

    const updateCache = (cache: ApolloCache<any>) => {
        cache.modify({
            id: publicationKeyFields(
                isMirror ? publication?.mirrorOf : publication
            ),
            fields: {
                stats: (stats) => ({
                    ...stats,
                    totalAmountOfMirrors: stats.totalAmountOfMirrors + 1,
                }),
            },
        })
    }

    const onCompleted = () => {
        setMirrored(true)
        showNotification({
            title: "Default notification",
            message: "Post has been mirrored!",
        })
    }

    // const { isLoading: writeLoading, write } = useContractWrite({
    //   address: LENSHUB_PROXY,
    //   abi: LensHubProxy,
    //   functionName: 'mirrorWithSig',
    //   mode: 'recklesslyUnprepared',
    //   onSuccess: onCompleted,
    //   onError
    // });

    // const [broadcast, { loading: broadcastLoading }] = useBroadcastMutation({
    //   onCompleted,
    //   update: updateCache
    // });

    // const [createMirrorTypedData, { loading: typedDataLoading }] = useCreateMirrorTypedDataMutation({
    //   onCompleted: async ({ createMirrorTypedData }) => {
    //     const { id, typedData } = createMirrorTypedData;
    //     const {
    //       profileId,
    //       profileIdPointed,
    //       pubIdPointed,
    //       referenceModule,
    //       referenceModuleData,
    //       referenceModuleInitData,
    //       deadline
    //     } = typedData.value;
    //     const signature = await signTypedDataAsync(getSignature(typedData));
    //     const { v, r, s } = splitSignature(signature);
    //     const sig = { v, r, s, deadline };
    //     const inputStruct = {
    //       profileId,
    //       profileIdPointed,
    //       pubIdPointed,
    //       referenceModule,
    //       referenceModuleData,
    //       referenceModuleInitData,
    //       sig
    //     };
    //     setUserSigNonce(userSigNonce + 1);
    //     // const { data } = await broadcast({ variables: { request: { id, signature } } });
    //     // if (data?.broadcast.__typename === 'RelayError') {
    //     //   return write?.({ recklesslySetUnpreparedArgs: [inputStruct] });
    //     // }
    //   },
    //   onError
    // });

    // const [createMirrorViaDispatcher, { loading: dispatcherLoading }] = useCreateMirrorViaDispatcherMutation({
    //   onCompleted,
    //   onError,
    //   update: updateCache
    // });

    const createViaDispatcher = async (request: CreateMirrorRequest) => {
        // const { data } = await createMirrorViaDispatcher({
        //   variables: { request }
        // });
        // if (data?.createMirrorViaDispatcher?.__typename === 'RelayError') {
        //   // await createMirrorTypedData({
        //   //   variables: {
        //   //     options: { overrideSigNonce: userSigNonce },
        //   //     request
        //   //   }
        //   // });
        // }
    }

    // const createMirror = async () => {
    //   if (!currentProfile) {
    //     return toast.error(SIGN_WALLET);
    //   }

    //   try {
    //     const request = {
    //       profileId: currentProfile?.id,
    //       publicationId: publication?.id,
    //       referenceModule: {
    //         followerOnlyReferenceModule: false
    //       }
    //     };

    //     if (currentProfile?.dispatcher?.canUseRelay) {
    //       return await createViaDispatcher(request);
    //     }

    //     return await createMirrorTypedData({
    //       variables: {
    //         options: { overrideSigNonce: userSigNonce },
    //         request
    //       }
    //     });
    //   } catch {}
    // };

    // const isLoading = typedDataLoading || dispatcherLoading || signLoading || writeLoading || broadcastLoading;
    const iconClassName = isFullPublication
        ? "w-[17px] sm:w-[20px]"
        : "w-[15px] sm:w-[18px]"

    return (
        <div
            className={clsx(
                mirrored ? "text-green-500" : "text-brand",
                "flex items-center space-x-1 text-text_gradient2"
            )}
        >
            <button
                // onClick={createMirror}
                // disabled={isLoading}
                className=" transition-all"
                aria-label="Mirror"
            >
                <div
                    className={clsx(
                        mirrored ? "hover:bg-green-300" : "hover:bg-brand-300",
                        "p-1.5  hover:bg-opacity-20"
                    )}
                >
                    {false ? (
                        <Spinner
                            variant={mirrored ? "success" : "primary"}
                            size="xs"
                        />
                    ) : (
                        <div className="transition-all ease-in-out active:scale-95 cursor-pointer flex  text-[#B581C8]">
                            <div className="">
                                <HiArrowsUpDown size={"1.4em"} />
                            </div>
                            {count > 0 && !isFullPublication && (
                                <span className=" font-semibold">
                                    &nbsp;{nFormatter(count)}
                                </span>
                            )}
                        </div>
                        // <Tooltip
                        //     placement="top"
                        //     content={
                        //         count > 0
                        //             ? `${humanize(count)} Mirrors`
                        //             : `Mirror`
                        //     }
                        //     withDelay
                        // >
                        //     <SyncAltIcon className={iconClassName} />
                        // </Tooltip>
                    )}
                </div>
            </button>
        </div>
    )
}

export default Mirror
