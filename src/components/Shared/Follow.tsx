import type { ApolloCache } from "@apollo/client"
import { Button } from "@components/UI/Button"
import { Spinner } from "@components/UI/Spinner"
import { PersonAddAltOutlined } from "@mui/icons-material"
// @ts-ignore
import { LENSHUB_PROXY } from "@constants/index"
import {
    useBroadcastMutation,
    useCreateFollowTypedDataMutation,
    useProxyActionMutation,
    // @ts-ignore
} from "lens"
import type { Dispatch, FC } from "react"
import { useAppStore } from "src/store/app"
import { useAccount, useContractWrite, useSignTypedData } from "wagmi"
import { Profile } from "@lens/generated"
import { showNotification } from "@mantine/notifications"

interface Props {
    profile: Profile
    setFollowing: Dispatch<boolean>
    showText?: boolean
}

const Follow: FC<Props> = ({ profile, showText = false, setFollowing }) => {
    const userSigNonce = useAppStore((state) => state.userSigNonce)
    const setUserSigNonce = useAppStore((state) => state.setUserSigNonce)
    const currentProfile = useAppStore((state) => state.currentProfile)
    const { address } = useAccount()

    // const { isLoading: signLoading, signTypedDataAsync } = useSignTypedData({
    //     onError,
    // })

    const onCompleted = () => {
        setFollowing(true)
        showNotification({
            title: "User Notification",
            message: "Followed Successfully !",
        })
    }

    const updateCache = (cache: ApolloCache<any>) => {
        cache.modify({
            id: `Profile:${profile?.id}`,
            fields: {
                isFollowedByMe: () => true,
            },
        })
    }

    // const { isLoading: writeLoading, write } = useContractWrite({
    //     address: LENSHUB_PROXY,
    //     abi: LensHubProxy,
    //     functionName: "followWithSig",
    //     mode: "recklesslyUnprepared",
    //     onSuccess: onCompleted,
    //     onError,
    // })

    const createFollow = async () => {
        if (!currentProfile) {
            return
        }

        try {
            if (profile?.followModule) {
            } else {
            }
        } catch {}
    }

    // const isLoading = signLoading || writeLoading
    // || broadcastLoading

    return (
        <Button
            className="text-sm !px-3 !py-1.5"
            outline
            onClick={createFollow}
            variant="success"
            aria-label="Follow"
            disabled={false}
            icon={
                false ? (
                    <Spinner variant="success" size="xs" />
                ) : (
                    <PersonAddAltOutlined className="w-4 h-4" />
                )
            }
        >
            {showText && `Follow`}
        </Button>
    )
}

export default Follow
