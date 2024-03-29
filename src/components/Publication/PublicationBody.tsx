import Attachments from "@components/Shared/Attachments"
import IFramely from "@components/Shared/IFramely"
import Markup from "@components/Shared/Markup"
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined"
import getURLs from "@lib/getURLs"
import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"
import type { FC } from "react"

import DecryptedPublicationBody from "./DecryptedPublicationBody"
import { KytePublication } from "src/types"

interface Props {
    publication: KytePublication
}

const PublicationBody: FC<Props> = ({ publication }) => {
    const { pathname } = useRouter()
    const showMore =
        publication?.metadata?.content?.length > 450 &&
        pathname !== "/posts/[id]"

    if (publication?.metadata?.encryptionParams) {
        return <DecryptedPublicationBody encryptedPublication={publication} />
    }

    return (
        <div className="break-words">
            <Markup
                className={clsx(
                    { "line-clamp-5": showMore },
                    "whitespace-pre-wrap break-words leading-md linkify text-md font-[500] leading-5"
                )}
            >
                {publication?.metadata?.content}
            </Markup>
            {showMore && (
                <div className="mt-4 text-sm lt-text-gray-500 font-bold flex items-center space-x-1">
                    <RemoveRedEyeOutlinedIcon className="h-4 w-4" />
                    <Link href={`/posts/${publication?.id}`}>Show more</Link>
                </div>
            )}
            {publication?.metadata?.media?.length > 0 ? (
                <Attachments
                    attachments={publication?.metadata?.media}
                    publication={publication}
                />
            ) : (
                publication?.metadata?.content &&
                getURLs(publication?.metadata?.content)?.length > 0 && (
                    <IFramely
                        url={getURLs(publication?.metadata?.content)[0]}
                    />
                )
            )}
        </div>
    )
}

export default PublicationBody
