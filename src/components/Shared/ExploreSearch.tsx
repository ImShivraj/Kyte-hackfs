import { Card } from "@components/UI/Card"
import { Input } from "@components/UI/Input"
import { Spinner } from "@components/UI/Spinner"
import { is0xAddress } from "@components/utils/matchers/is0xAddress"
import {
    CustomFiltersTypes,
    Profile,
    ProfileSearchResult,
    SearchRequestTypes,
    useSearchProfilesQuery,
} from "@gql/generated"
import getAvatar from "@lib/getAvatar"
import {
    AccountBalanceWalletOutlined,
    CloseRounded,
    SearchRounded,
} from "@mui/icons-material"
import { useAppStore } from "@store/app"
import clsx from "clsx"
import { useRouter } from "next/router"
import type { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react"
import { useRef, useState } from "react"

import UserProfile from "@components/Shared/UserProfile"
import useOnClickOutside from "@components/utils/hooks/useOnClickOutside"
import WalletAvatar from "@components/message/WalletAvatar"

interface Props {
    hideDropdown?: boolean
    onProfileSelected?: (profile: Profile) => void
    placeholder?: string
    modalWidthClassName?: string
    variant: "message" | "brand"
    bodyWidth: string
    inputHeight: string
    isWalletSearch?: boolean
    setShowModal?: Dispatch<SetStateAction<boolean>>
}

const ExploreSearch = ({
    hideDropdown = false,
    onProfileSelected,
    placeholder = `Search…`,
    modalWidthClassName = "max-w-md",
    variant,
    bodyWidth,
    inputHeight,
    isWalletSearch = false,
    setShowModal,
}: Props) => {
    const { push, pathname } = useRouter()
    const [searchText, setSearchText] = useState("")
    const dropdownRef = useRef(null)

    const [walletAddress, setWalletAddress] = useState("")
    const [isValidwalletAddress, setIsValidWalletAddress] = useState(false)

    const { currentProfile } = useAppStore()

    useOnClickOutside(dropdownRef, () => setSearchText(""))

    const { data: searchUsersData, isLoading: searchUsersLoading } =
        useSearchProfilesQuery(
            {
                request: {
                    type: SearchRequestTypes.Profile,
                    query: searchText,
                    customFilters: [CustomFiltersTypes.Gardeners],
                    limit: 8,
                },
            },
            {
                enabled: !!searchText.trim(),
                refetchOnWindowFocus: false,
                refetchOnReconnect: false,
            }
        )

    const handleSearch = (evt: ChangeEvent<HTMLInputElement>) => {
        const keyword = evt.target.value
        if (pathname !== "/search" && !hideDropdown) {
            setSearchText(keyword)
        }
    }

    const handleWalletAddrChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setWalletAddress(evt.target.value.trim())

        setIsValidWalletAddress(is0xAddress(evt.target.value.trim()))
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (isWalletSearch) {
            if (setShowModal && !(walletAddress === currentProfile?.ownedBy)) {
                push(`/messages/${walletAddress.toLowerCase()}`)
                setShowModal(false)

                setTimeout(() => {
                    setWalletAddress("")
                }, 2000)
            }
        }
    }

    const searchResult = searchUsersData?.search as ProfileSearchResult
    const isProfileSearchResult =
        searchResult && searchResult.hasOwnProperty("items")
    const profiles = isProfileSearchResult ? searchResult.items : []

    return (
        <div
            aria-hidden="true"
            className="w-[98%] mx-auto mt-3 -mb-2 rounded-xl"
        >
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    className={clsx(
                        isWalletSearch ? "py-0" : "py-20",
                        "px-3 text-sm text-black font-semibold"
                    )}
                    placeholder={placeholder}
                    value={isWalletSearch ? walletAddress : searchText}
                    iconLeft={
                        isWalletSearch ? (
                            <AccountBalanceWalletOutlined className="text-sideBarLink" />
                        ) : (
                            <SearchRounded className="text-sideBarLink" />
                        )
                    }
                    variant={variant}
                    inputHeight={inputHeight}
                    iconRight={
                        <CloseRounded
                            className={clsx(
                                "cursor-pointer",
                                searchText ? "visible" : "invisible"
                            )}
                            onClick={() => {
                                setSearchText("")
                            }}
                        />
                    }
                    onChange={
                        isWalletSearch ? handleWalletAddrChange : handleSearch
                    }
                    maxLength={isWalletSearch ? 42 : undefined}
                />
            </form>
            {!isWalletSearch &&
                pathname !== "/search" &&
                !hideDropdown &&
                searchText.length > 0 && (
                    <div
                        className={clsx(
                            `flex absolute justify-center items-stretch flex-col mt-2 z-50 shadow-lg  rounded-xl`,
                            modalWidthClassName
                        )}
                        ref={dropdownRef}
                        style={{ width: bodyWidth }}
                        // style={{ width: '250%' }}
                    >
                        <Card className="overflow-y-auto bg-white overflow-x-hidden p-2 max-h-[80vh] rounded-xl shadow-md">
                            {searchUsersLoading ? (
                                <div className="py-2 px-4 space-y-2 text-sm font-bold text-center">
                                    <Spinner
                                        size="sm"
                                        className="mx-auto"
                                        // variant={variant}
                                    />
                                    <div className="text-sideBarLink font-medium">
                                        Searching users
                                    </div>
                                </div>
                            ) : (
                                <>
                                    {profiles.map((profile: Profile) => (
                                        <div
                                            key={profile?.handle}
                                            className="py-2 px-4 w-full hover:bg-gray-100  cursor-pointer"
                                            onClick={() => {
                                                if (onProfileSelected) {
                                                    onProfileSelected(profile)
                                                }
                                                setSearchText("")
                                            }}
                                        >
                                            <UserProfile
                                                linkToProfile={
                                                    !onProfileSelected
                                                }
                                                profile={profile}
                                                showUserPreview={false}
                                                isBig={true}
                                            />
                                        </div>
                                    ))}
                                    {profiles.length === 0 && (
                                        <div className="py-2 px-4 text-sideBarLink font-medium text-center">
                                            No matching users
                                        </div>
                                    )}
                                </>
                            )}
                        </Card>
                    </div>
                )}

            {isWalletSearch && (
                <div
                    className={clsx(
                        isValidwalletAddress
                            ? "h-[48px] max-h-[48px]"
                            : "h-0 max-h-0",
                        "block text-sm text-gray-700 rounded-lg cursor-pointer mb-5 mt-4 overflow-hidden transition-all duration-300"
                    )}
                >
                    <button
                        type="button"
                        className="bg-gray-100 hover:bg-gray-200 transition-all duration-300 flex items-center justify-between py-1.5 pl-[7px] pr-[18px] space-x-2 w-full rounded-lg"
                        onClick={() => {
                            if (
                                setShowModal &&
                                !(walletAddress === currentProfile?.ownedBy)
                            ) {
                                push(`/messages/${walletAddress.toLowerCase()}`)
                                setShowModal(false)
                                setTimeout(() => {
                                    setWalletAddress("")
                                }, 2000)
                            }
                        }}
                    >
                        <div className="flex items-center gap-2">
                            <WalletAvatar
                                peerAddress={walletAddress}
                                className="min-w-[36px] h-[36px] w-[36px] min-h-[36px] max-h-[36px] max-w-[36px] rounded-full border object-cover"
                            />
                            <div className="truncate text- font-semibold">
                                <span
                                    className={"font-mono"}
                                    title={walletAddress}
                                >
                                    {walletAddress.slice(0, 6) +
                                        "..." +
                                        walletAddress.slice(-4)}
                                </span>
                            </div>
                        </div>

                        {walletAddress === currentProfile?.ownedBy && (
                            <img
                                // @ts-ignore
                                src={getAvatar(currentProfile)}
                                alt="profile-image"
                                className="w-[30px] h-[30px] rounded-full object-cover"
                            />
                        )}
                    </button>
                </div>
            )}
        </div>
    )
}

export default ExploreSearch
