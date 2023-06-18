import LoginModal from "@/src/components/Modal/LoginModal"
import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { lazy, useEffect, useState } from "react"
const Providers = lazy(() => import("@/src/components/Shared/Providers"))
import NextNProgress from "nextjs-progressbar"
import DashboardLayout from "@/src/components/Shared/DashboardLayout"
import useSidebarStore from "@/src/store/sidebarStore"
import CallModal from "@/src/components/call/CallModal"
import { PolybaseProvider } from '@polybase/react'
import { Polybase } from '@polybase/client'

const polybase = new Polybase({ defaultNamespace: 'kyte-prototype' })

export default function App({ Component, pageProps }: AppProps) {
    return (
        <PolybaseProvider polybase={polybase}>
            <Providers {...useSidebarStore}>
                <NextNProgress
                    showOnShallow={true}
                    transformCSS={() => {
                        return <style></style>
                    }}
                />
                <DashboardLayout>
                    <div className=" relative">
                        <CallModal />
                        <Component {...pageProps} />
                    </div>
                </DashboardLayout>
            </Providers>
        </PolybaseProvider>
    )
}
