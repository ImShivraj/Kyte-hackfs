import clsx from "clsx"
import type { FC } from "react"

interface Props {
    slug: string
    prefix?: string
    className?: string
}

const Slug: FC<Props> = ({ slug, prefix, className = "" }) => {
    return (
        <span
            className={clsx(
                "text-blue-600 font-semibold",
                className
            )}
        >
            {prefix}
            {slug}
        </span>
    )
}

export default Slug
