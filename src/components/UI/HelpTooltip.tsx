import "tippy.js/dist/tippy.css"

import { InfoRounded } from "@mui/icons-material/"
import Tippy from "@tippyjs/react"
import type { FC, ReactNode } from "react"

interface Props {
    content: ReactNode
}

const HelpTooltip: FC<Props> = ({ content }) => {
    if (!content) {
        return null
    }

    return (
        <Tippy
            placement="top"
            duration={0}
            className="p-2.5 tracking-wide !rounded-xl !leading-5 shadow-lg"
            content={<span>{content}</span>}
        >
            <InfoRounded className="lt-text-gray-500 h-[15px] w-[15px]" />
        </Tippy>
    )
}

export default HelpTooltip
