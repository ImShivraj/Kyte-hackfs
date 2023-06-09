import React from "react"
import { Modal } from "@components/UI/Modal"
import GradientIcon from "@components/utils/GradientIcon"
import { CheckCircleRounded, SwapHorizRounded } from "@mui/icons-material"
import { useModalStore } from "@store/modal"
import { useAppPersistStore, useAppStore } from "@store/app"
import getAvatar from "@lib/getAvatar"
import formatHandle from "@lib/formatHandle"
import clsx from "clsx"
import { Profile } from "@/src/graphql/generated"

const SwitchProfileModal = () => {
    const { showSwitchModal, setShowSwitchModal } = useModalStore()
    const { profiles, setCurrentProfile, currentProfile } = useAppStore()
    const { setProfileId } = useAppPersistStore()
    return (
        <Modal
            title={`Change Profile`}
            icon={
                <GradientIcon
                    Icon={SwapHorizRounded}
                    width="24px"
                    height="24px"
                    margin="none"
                />
            }
            size="sm"
            show={showSwitchModal}
            onClose={() => setShowSwitchModal(false)}
        >
            {profiles?.map((profile: Profile, index: number) => (
                <div
                    key={profile?.id}
                    className="block text-sm text-gray-700 rounded-lg cursor-pointer dark:text-gray-200 mb-5 px-2"
                >
                    <button
                        type="button"
                        className={clsx(
                            currentProfile?.id === profile?.id && "bg-gray-100",
                            "flex items-center justify-between py-1.5 pl-[12px] pr-[18px] space-x-2 w-full rounded-lg hover:bg-gray-100"
                        )}
                        onClick={() => {
                            if (currentProfile?.id !== profile?.id) {
                                setShowSwitchModal(false)
                            }
                            const selectedProfile = profiles[index]
                            setCurrentProfile(selectedProfile)
                            setProfileId(selectedProfile.id)
                        }}
                    >
                        <div className="flex items-center gap-2">
                            <img
                                className="w-9 h-9 object-cover rounded-full border dark:border-gray-700"
                                onError={({ currentTarget }) => {
                                    currentTarget.src = getAvatar(
                                        profile,
                                        false
                                    )
                                }}
                                src={getAvatar(profile)}
                                alt={formatHandle(profile?.handle)}
                            />
                            <div className="truncate text- font-semibold">
                                {formatHandle(profile?.handle)}
                            </div>
                        </div>

                        {currentProfile?.id === profile?.id && (
                            <CheckCircleRounded className="w-4 h-4 text-green-500" />
                        )}
                    </button>
                </div>
            ))}
        </Modal>
    )
}

export default SwitchProfileModal
