import LoginModal from "@/src/components/Modal/LoginModal"
import CreatePostModal from "@/src/components/posts/CreatePostModal"
import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { lazy, useEffect, useState } from "react"
const Providers = lazy(() => import("@/src/components/Shared/Providers"))
import NextNProgress from "nextjs-progressbar"
import DashboardLayout from "@/src/components/Shared/DashboardLayout"
import useSidebarStore from "@/src/store/sidebarStore"
import CallModal from "@/src/components/call/CallModal"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Providers {...useSidebarStore}>
            <NextNProgress
                showOnShallow={true}
                transformCSS={() => {
                    return <style></style>
                }}
            />
            <DashboardLayout>
                <div className=" relative">
                    <input
                        type="checkbox"
                        id="my-modal"
                        className="modal-toggle "
                    />
                    <div className="modal">
                        <CreatePostModal />
                        <LoginModal />
                    </div>
                    <CallModal />
                    <Component {...pageProps} />
                </div>
            </DashboardLayout>
        </Providers>
    )
}
