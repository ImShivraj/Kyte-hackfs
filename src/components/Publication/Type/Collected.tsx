import Slug from "@components/Shared/Slug"
import Username from "@components/Shared/Username"
import { LibraryBooks } from "@mui/icons-material"
import formatAddress from "@lib/formatAddress"
import { POLYGONSCAN_URL } from "@constants/index"
import Link from "next/link"
import type { FC } from "react"
import { Comment, Post } from "@lens/generated"

interface Props {
    publication: Post | Comment
}

const Collected: FC<Props> = ({ publication }) => {
    return (
        <div className="flex items-center pb-4 space-x-1 lt-text-gray-500 text-[13px]">
            <LibraryBooks className="w-4 h-4" />
            {publication?.collectedBy?.defaultProfile ? (
                <Username
                    profile={publication?.collectedBy?.defaultProfile}
                    className="max-w-xs truncate"
                />
            ) : (
                <a
                    href={`${POLYGONSCAN_URL}/address/${publication?.collectedBy?.address}`}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <Slug
                        slug={formatAddress(publication?.collectedBy?.address)}
                    />
                </a>
            )}
            <Link href={`/posts/${publication?.id}`}>
                <span>
                    collected the <b>{publication.__typename?.toLowerCase()}</b>
                </span>
            </Link>
        </div>
    )
}

export default Collected
