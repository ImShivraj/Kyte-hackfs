import { Tooltip } from "@/src/components/UI/Tooltip"
import ChatBubbleIcon from "@mui/icons-material/ChatBubble"
import humanize from "@lib/humanize"
import nFormatter from "@lib/nFormatter"
import Link from "next/link"
import { useState, type FC } from "react"
import { KytePublication } from "src/types"
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined"
import CommentModal from "../../posts/CommentModal"

interface Props {
    publication: KytePublication
    isFullPublication: boolean
}

const Comment: FC<Props> = ({ publication, isFullPublication }) => {
    const [open, setOpen] = useState(false)
    const count =
        publication.__typename === "Mirror"
            ? publication?.mirrorOf?.stats?.totalAmountOfComments
            : publication?.stats?.totalAmountOfComments
    const iconClassName = isFullPublication
        ? "w-[17px] sm:w-[20px]"
        : "w-[15px] sm:w-[18px]"

    const handleOpen = () => setOpen(!open)

    const commentCount = count > 0 && !isFullPublication && nFormatter(count)

    return (
        <div className="text-blue-500 flex items-center space-x-1">
            <button className=" transition-all" aria-label="Comment">
                {/* <Link href={`/posts/${publication.id}`}> */}
                <div className="p-1.5   hover:bg-opacity-20">
                    <div className="  flex  text-[#B0B0B0] 6996EF]">
                        <CommentModal
                            open={open}
                            handleOpen={handleOpen}
                            commentCount={commentCount}
                        />
                    </div>
                    {/* <Tooltip
                            placement="top"
                            content={
                                count > 0
                                    ? `${humanize(count)} Comments`
                                    : `Comment`
                            }
                            withDelay
                        >
                            <QuestionAnswerOutlinedIcon className={iconClassName} />
                        </Tooltip> */}
                </div>
                {/* </Link> */}
            </button>
        </div>
    )
}

export default Comment
