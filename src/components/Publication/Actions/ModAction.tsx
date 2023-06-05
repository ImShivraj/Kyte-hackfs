import { Button } from "@/src/components/UI/Button"
import {
    InsertLinkOutlined,
    ErrorOutlineOutlined,
    GppGoodOutlined,
} from "@mui/icons-material"

import type { FC } from "react"
import { useModalStore } from "@store/modal"
import { KytePublication } from "src/types"

interface Props {
    publication: KytePublication
}

const ModAction: FC<Props> = ({ publication }) => {
    const setShowReportModal = useModalStore(
        (state) => state.setShowReportModal
    )

    return (
        <span
            className="flex items-center gap-3 mt-3 text-sm"
            onClick={(event) => event.stopPropagation()}
        >
            <Button
                onClick={() => {
                    setShowReportModal(true, publication, {
                        type: "spamReason",
                        subReason: "FAKE_ENGAGEMENT",
                    })
                }}
                variant="warning"
                icon={<InsertLinkOutlined className="h-4 w-4" />}
                outline
            >
                Spam
            </Button>
            <Button
                onClick={() => {
                    setShowReportModal(true, publication)
                }}
                icon={<GppGoodOutlined className="h-4 w-4" />}
            >
                Others
            </Button>
            <Button
                onClick={() => {
                    window.open(`/posts/${publication?.id}`, "_blank")
                }}
                icon={<ErrorOutlineOutlined className="h-4 w-4" />}
                className="py-[6px]"
                outline
            />
        </span>
    )
}

export default ModAction
