import { Tooltip } from "@components/UI/Tooltip"
import ChatBubbleIcon from "@mui/icons-material/ChatBubble"
import humanize from "@lib/humanize"
import nFormatter from "@lib/nFormatter"
import Link from "next/link"
import type { FC } from "react"
import { KytePublication } from "src/types"
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';

interface Props {
    publication: KytePublication
    isFullPublication: boolean
}

const Comment: FC<Props> = ({ publication, isFullPublication }) => {
    const count =
        publication.__typename === "Mirror"
            ? publication?.mirrorOf?.stats?.totalAmountOfComments
            : publication?.stats?.totalAmountOfComments
    const iconClassName = isFullPublication
        ? "w-[17px] sm:w-[20px]"
        : "w-[15px] sm:w-[18px]"

    return (
        <div className="text-blue-500 flex items-center space-x-1">
            <button
                className="focus:scale-90 transition-all"
                aria-label="Comment"
            >
                <Link href={`/posts/${publication.id}`}>
                    <div className="p-1.5 rounded-full hover:bg-blue-300 hover:bg-opacity-20">
                        <Tooltip
                            placement="top"
                            content={
                                count > 0
                                    ? `${humanize(count)} Comments`
                                    : `Comment`
                            }
                            withDelay
                        >
                            <QuestionAnswerOutlinedIcon className={iconClassName} />
                        </Tooltip>
                    </div>
                </Link>
            </button>
            {count > 0 && !isFullPublication && (
                <span className="text-[11px] sm:text-xs">
                    {nFormatter(count)}
                </span>
            )}
        </div>
    )
}

export default Comment
