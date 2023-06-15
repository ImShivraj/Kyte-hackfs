import { useState } from "react"
import { PhotoSizeSelectActualOutlined } from "@mui/icons-material"

interface Props {
    src: string
    alt?: string
    className: string
}

const ImageWithFallback = ({ src, alt, className }: Props) => {
    const [error, setError] = useState(false)

    const handleError = () => {
        setError(true)
    }

    return error ? (
        <div className="bg-[#e5e7eb] h-full w-[100px] min-w-[100px] rounded-[10px] flex items-center justify-center text-[45px]">
            <PhotoSizeSelectActualOutlined
                className="text-white"
                fontSize="inherit"
            />
        </div>
    ) : (
        <img src={src} className={className} onError={handleError} alt={alt} />
    )
}

export default ImageWithFallback
