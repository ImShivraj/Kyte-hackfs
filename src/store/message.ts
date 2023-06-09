import { create } from "zustand"
import { persist } from "zustand/middleware"
import { KONNEKTR_KEYS } from "@constants/index"
import { Profile } from "@gql/generated"
import {
    Client,
    ContentTypeId,
    Conversation,
    DecodedMessage,
    toNanoString,
} from "@xmtp/xmtp-js"
import getUniqueMessages from "@lib/getUniqueMessages"

type TabValues = "Following" | "Requested"
type MediumValues = "Lens" | "Wallet"

export interface MessageState {
    client: Client | undefined
    setClient: (client: Client | undefined) => void
    conversations: Map<string, Conversation>
    setConversations: (conversations: Map<string, Conversation>) => void
    addConversation: (key: string, newConversation: Conversation) => void
    messages: Map<string, DecodedMessage[]>
    setMessages: (messages: Map<string, DecodedMessage[]>) => void
    addMessages: (key: string, newMessages: DecodedMessage[]) => number
    messageProfiles: Map<string, Profile>
    setMessageProfiles: (messageProfiles: Map<string, Profile>) => void
    addProfileAndSelectTab: (key: string, profile: Profile) => void
    previewMessages: Map<string, DecodedMessage>
    setPreviewMessage: (key: string, message: DecodedMessage) => void
    setPreviewMessages: (previewMessages: Map<string, DecodedMessage>) => void
    selectedProfileId: string
    setSelectedProfileId: (selectedProfileId: string) => void
    selectedTab: TabValues
    setSelectedTab: (selectedTab: TabValues) => void
    selectedMedium: MediumValues
    setSelectedMedium: (setSelectedTab: MediumValues) => void
    selectedFiles: File[]
    setSelectedFiles: (selectedFiles: File[]) => void
    uploadingFiles: boolean
    setUploadingFiles: (selectedProfileId: boolean) => void
    audioMessageColorMapping: object
    setAudioMessageColorMapping: (audioMessageColorMapping: object) => void

    reset: () => void
}

export const useMessageStore = create<MessageState>()((set) => ({
    client: undefined,
    setClient: (client) => set(() => ({ client })),
    conversations: new Map(),
    setConversations: (conversations) => set(() => ({ conversations })),
    addConversation: (key: string, newConversation: Conversation) => {
        set((state) => {
            const conversations = new Map(state.conversations)
            conversations.set(key, newConversation)
            return { conversations }
        })
    },
    messages: new Map(),
    setMessages: (messages) => set(() => ({ messages })),
    addMessages: (key: string, newMessages: DecodedMessage[]) => {
        let numAdded = 0
        set((state) => {
            const messages = new Map(state.messages)
            const existing = state.messages.get(key) || []
            const updated = getUniqueMessages([...existing, ...newMessages])
            numAdded = updated.length - existing.length
            // If nothing has been added, return the old item to avoid unnecessary refresh
            if (!numAdded) {
                return { messages: state.messages }
            }
            messages.set(key, updated)
            return { messages }
        })
        return numAdded
    },
    messageProfiles: new Map(),
    setMessageProfiles: (messageProfiles) => set(() => ({ messageProfiles })),
    addProfileAndSelectTab: (key, profile) =>
        set((state) => {
            let profiles: Map<string, Profile>
            if (!state.messageProfiles.get(key)) {
                profiles = new Map(state.messageProfiles)
                profiles.set(key, profile)
            } else {
                profiles = state.messageProfiles
            }
            const selectedTab: TabValues = profile.isFollowedByMe
                ? "Following"
                : "Requested"
            return {
                messageProfiles: profiles,
                selectedTab: selectedTab,
            }
        }),
    previewMessages: new Map(),
    setPreviewMessage: (key: string, message: DecodedMessage) =>
        set((state) => {
            const newPreviewMessages = new Map(state.previewMessages)
            newPreviewMessages.set(key, message)
            return { previewMessages: newPreviewMessages }
        }),
    setPreviewMessages: (previewMessages) => set(() => ({ previewMessages })),
    selectedProfileId: "",
    setSelectedProfileId: (selectedProfileId) =>
        set(() => ({ selectedProfileId })),
    selectedTab: "Following",
    setSelectedTab: (selectedTab) => set(() => ({ selectedTab })),
    selectedMedium: "Lens",
    setSelectedMedium: (selectedMedium) => set(() => ({ selectedMedium })),
    selectedFiles: [],
    setSelectedFiles: (selectedFiles: File[]) => set(() => ({ selectedFiles })),

    uploadingFiles: false,
    setUploadingFiles: (uploadingFiles: boolean) =>
        set(() => ({ uploadingFiles })),
    audioMessageColorMapping: {},
    setAudioMessageColorMapping: (audioMessageColorMapping: object) =>
        set(() => ({ audioMessageColorMapping })),
    reset: () =>
        set((state) => {
            return {
                ...state,
                conversations: new Map(),
                messages: new Map(),
                messageProfiles: new Map(),
                previewMessages: new Map(),
                selectedTab: "Following",
            }
        }),
}))

interface MessagePersistState {
    viewedMessagesAtNs: Map<string, string | undefined>
    showMessagesBadge: Map<string, boolean>
    setShowMessagesBadge: (showMessagesBadge: Map<string, boolean>) => void
    clearMessagesBadge: (profileId: string) => void
    downloadedMessages: string[]
    addDownloadedMessage: (downloadedMessage: string) => void
}

export const useMessagePersistentStore = create<MessagePersistState>()(
    persist(
        (set) => ({
            viewedMessagesAtNs: new Map(),
            showMessagesBadge: new Map(),
            setShowMessagesBadge: (showMessagesBadge) =>
                set(() => ({ showMessagesBadge })),
            // The function updates the state of the messaging system by setting the current timestamp in nano seconds for the user's profileId in the "viewedMessagesAtNs" state and setting the "showMessagesBadge" state for the user's profileId to "false" to indicate that the message badge for this user has been cleared.
            clearMessagesBadge: (profileId: string) => {
                set((state) => {
                    const viewedAt = new Map(state.viewedMessagesAtNs)
                    viewedAt.set(profileId, toNanoString(new Date()))
                    if (!state.showMessagesBadge.get(profileId)) {
                        return { viewedMessagesAtNs: viewedAt }
                    }
                    const show = new Map(state.showMessagesBadge)
                    show.set(profileId, false)
                    return {
                        viewedMessagesAtNs: viewedAt,
                        showMessagesBadge: show,
                    }
                })
            },
            downloadedMessages: [],
            addDownloadedMessage: (downloadedMessage: string) => {
                set((state) => {
                    const oldDownloadedMessages = state.downloadedMessages
                    const newDownloadedMessages = oldDownloadedMessages.concat([
                        downloadedMessage,
                    ])
                    return { downloadedMessages: newDownloadedMessages }
                })
            },
        }),
        {
            name: KONNEKTR_KEYS.MESSAGE_STORE,
            serialize: (data) => {
                return JSON.stringify({
                    ...data,
                    state: {
                        ...data.state,
                        viewedMessagesAtNs: Array.from(
                            data.state.viewedMessagesAtNs
                        ),
                        showMessagesBadge: Array.from(
                            data.state.showMessagesBadge
                        ),
                    },
                })
            },
            deserialize: (value) => {
                const data = JSON.parse(value)
                data.state.viewedMessagesAtNs = new Map(
                    data.state.viewedMessagesAtNs
                )
                data.state.showMessagesBadge = new Map(
                    data.state.showMessagesBadge
                )
                return data
            },
        }
    )
)
