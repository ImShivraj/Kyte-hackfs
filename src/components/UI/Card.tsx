import clsx from "clsx"
import type { ElementType, FC, MouseEvent, ReactNode } from "react"

interface CardProps {
    children: ReactNode
    as?: ElementType
    className?: string
    forceRounded?: boolean
    dataTest?: string
    onClick?: (event: MouseEvent<HTMLDivElement>) => void
}

export const Card: FC<CardProps> = ({
    children,
    as: Tag = "div",
    className = "",
    dataTest = "",
    onClick,
}) => {
    return (
        <>
            <Tag
                className={clsx("bg-white", className)}
                data-test={dataTest}
                onClick={onClick}
            >
                {children}
            </Tag>
        </>
    )
}
