import { KytePublication } from "@/src/types"
import { Tooltip } from "@/src/components/UI/Tooltip"
import { apps } from "@constants/apps"
import { STATIC_IMAGES_URL } from "@constants/index"
import type { FC } from "react"

interface Props {
    publication: KytePublication
}

const Source: FC<Props> = ({ publication }) => {
    const { appId } = publication
    const show = apps.includes(appId)

    if (!show) {
        return null
    }

    return (
        <Tooltip content={appId} placement="top">
            <img
                className="h-4 w-4 rounded-full"
                src={`${STATIC_IMAGES_URL}/source/${appId}.jpeg`}
                alt={appId}
            />
        </Tooltip>
    )
}

export default Source
