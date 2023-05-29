import LoginModal from "@/src/components/Modal/LoginModal"
import CommentModal from "@/src/components/posts/CommentModal"
import CreateNewPost from "@/src/components/posts/CreateNewPost"
import CreatePostModal from "@/src/components/posts/CreatePostModal"
import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { lazy } from "react"
const Providers = lazy(() => import("@/src/components/Shared/Providers"))

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Providers>
            <div className=" relative">
                <input
                    type="checkbox"
                    id="my-modal"
                    className="modal-toggle "
                />
                <div className="modal">
                    <CreatePostModal />

                    {/* <CommentModal /> */}
                    <LoginModal />
                </div>
                <Component {...pageProps} />
            </div>
        </Providers>
    )
}
