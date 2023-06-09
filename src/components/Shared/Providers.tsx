import apolloClient from "@lib/apollo"
import { ApolloProvider } from "@apollo/client"
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit"
import React, { ReactNode } from "react"
import { polygonMumbai } from "viem/chains"
import { WagmiConfig, createConfig, configureChains } from "wagmi"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { publicProvider } from "wagmi/providers/public"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const { chains, publicClient, webSocketPublicClient } = configureChains(
    [polygonMumbai],
    [
        alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID || "" }),
        publicProvider(),
    ]
)

const { connectors } = getDefaultWallets({
    appName: "Kyte",
    projectId: "Kyte_01",
    chains,
})
const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
})

const Providers = ({ children }: { children: ReactNode }) => {
    const queryClient = new QueryClient()

    return (
        <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains}>
                <ApolloProvider client={apolloClient}>
                    <QueryClientProvider client={queryClient}>
                        {children}
                    </QueryClientProvider>
                </ApolloProvider>
            </RainbowKitProvider>
        </WagmiConfig>
    )
}

export default Providers
