import CreateNewPost from "@/src/components/posts/CreateNewPost";
import CreatePostModal from "@/src/components/posts/CreatePostModal";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className=" relative">
        <input type="checkbox" id="my-modal" className="modal-toggle " />
        <div className="modal">
          <CreatePostModal />
        </div>
        <Component {...pageProps} />
      </div>
    </>
  );
}
