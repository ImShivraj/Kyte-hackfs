import LoginModal from "@/src/components/Modal/LoginModal"
import CommentModal from "@/src/components/posts/CommentModal"
import CreateNewPost from "@/src/components/posts/CreateNewPost"
import CreatePostModal from "@/src/components/posts/CreatePostModal"
import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { lazy, useEffect, useState } from "react"
const Providers = lazy(() => import("@/src/components/Shared/Providers"))
import NextNProgress from "nextjs-progressbar"
import DashboardLayout from "@/src/components/ui/DashboardLayout"
import useSidebarStore from "@/src/store/sidebarStore"

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
                    <Component {...pageProps} />
                </div>
            </DashboardLayout>
        </Providers>
    )
}
