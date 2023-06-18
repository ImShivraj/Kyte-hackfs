import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Dispatch } from "react"
import { useAccount, useNetwork, useSignMessage } from "wagmi"
import { setAccessToken } from "./helpers"
import { showNotification } from "@mantine/notifications"
import { useAppPersistStore, useAppStore } from "@/src/store/app"
import {
    useChallengeLazyQuery,
    Profile,
    useAuthenticateMutation,
    useAllProfilesLazyQuery,
} from "@lens/generated"
import usePolLogin from "../usePolybaseLogin"

export function useLogin(
    setHasProfile: Dispatch<boolean>,
    setProfiles: (profiles: Profile[]) => void,
    setCurrentProfile: (currentProfile: any) => void,
    setProfileId: (profileId: string | null) => void,
    setLoading: Dispatch<boolean>,
    setShowAuthModal: (showAuthModal: boolean) => void
) {
    const { address, connector, isConnected } = useAccount()
    const { chain } = useNetwork()

    const { currentProfile } = useAppStore()
    const { profileId } = useAppPersistStore()

    const [authenticate, { error: errorAuthenticate }] =
        useAuthenticateMutation()

    const [loadChallenge, { error: errorChallenge }] = useChallengeLazyQuery({
        fetchPolicy: "no-cache", // if cache old challenge persist issue (InvalidSignature)
        onError: () => console.log("some error occured.."),
    })

    const [getProfiles, { error: errorProfiles }] = useAllProfilesLazyQuery({
        fetchPolicy: "no-cache",
    })

    const client = useQueryClient()

    //todo -> add on error
    const { signMessageAsync } = useSignMessage({
        onError: (error) => {
            console.log("signinMessageAsync error", error)
            showNotification({
                title: "User notification",
                message: "Some error occured while signing in !",
                autoClose: 2500,
                styles: () => ({
                    root: {
                        zIndex: 1000000000,
                        width: "300px",
                        padding: "12.5px 5px 20px 22px",
                        "&::before": { backgroundColor: "#F20505" },
                    },
                }),
            })
        },
    })

    const isReadyToSign =
        connector?.id &&
        isConnected &&
        chain?.id === 80001 &&
        !currentProfile &&
        !profileId

    // 1. Write the actual async function
    async function login() {
        if (!address) return

        try {
            setLoading(true)
            // 1. Generate challenge which comes from the Lens API
            const challenge = await loadChallenge({
                variables: { request: { address } },
            })

            if (!challenge?.data?.challenge?.text)
                return console.log("Some error occured...")

            // 2. Sign the challenge with the user's wallet
            const signature = await signMessageAsync({
                message: challenge?.data?.challenge?.text,
            })

            // 3. Send the signed challenge to the Lens API
            const result = await authenticate({
                variables: { request: { address, signature } },
            })

            // 4. Receive a access token from the Lens API if  we succeed
            // 5. Store the access token inside local storage so we can use it.
            const accessToken = result.data?.authenticate.accessToken
            const refreshToken = result.data?.authenticate.refreshToken

            setAccessToken(accessToken, refreshToken)

            // Get authed profiles
            const { data: profilesData } = await getProfiles({
                variables: {
                    request: { ownedBy: [address] },
                },
            })

            if (
                !profilesData?.profiles ||
                profilesData?.profiles?.items.length === 0
            ) {
                setCurrentProfile(null)
                setProfileId(null)
                setHasProfile(false)
            } else {
                const profiles: any = profilesData?.profiles?.items
                    ?.slice()
                    ?.sort((a, b) => Number(a.id) - Number(b.id))
                    ?.sort((a, b) =>
                        a.isDefault === b.isDefault ? 0 : a.isDefault ? -1 : 1
                    )

                const currentProfile = profiles[0]

                setProfiles(profiles)

                setCurrentProfile(currentProfile)

                setProfileId(currentProfile.id)

                setShowAuthModal(false)
            }
        } catch (error) {
            console.log("Login error: ", error)
        } finally {
            setLoading(false)
        }

        // Now, let's ask react query to refetch the cache key
        // Refetch this cache key:  ["lens-user", address],
        client.invalidateQueries(["lens-user", address])
    }

    // 2. Return the useMutation hook wrapping the async function
    return useMutation(login)
}
