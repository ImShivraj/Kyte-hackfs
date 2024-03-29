import imageProxy from "@lib/imageProxy"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { ATTACHMENT } from "@constants/index"
import type { FC } from "react"
import { useEffect } from "react"

interface Props {
    url: string
}

const IFramelyReview: FC<Props> = ({ url }) => {
    const { isLoading, error, data } = useQuery(
        [url],
        () =>
            axios({
                url: "https://iframe.ly/api/iframely",
                params: { api_key: "258c8580bd477c9b886b49", url },
            }).then((res) => res.data),
        { enabled: Boolean(url) }
    )

    useEffect(() => {
        ;(window as any).iframely && (window as any).iframely.load()
    }, [])

    if (error || isLoading || !data) {
        return null
    }

    const og = {
        title: data?.meta?.title,
        description: data?.meta?.description,
        site: data?.meta?.site,
        url: data?.url,
        favicon: `https://www.google.com/s2/favicons?domain=${url}`,
        thumbnail:
            data?.links?.thumbnail &&
            imageProxy(data?.links?.thumbnail[0]?.href, ATTACHMENT),
        isSquare:
            data?.links?.thumbnail &&
            data?.links?.thumbnail[0]?.media?.width ===
                data?.links?.thumbnail[0]?.media?.height,
        html: data?.links?.player ? data?.links?.player[0]?.html : null,
    }

    if (!og.title) {
        return null
    }

    return <></>
}

export default IFramelyReview
