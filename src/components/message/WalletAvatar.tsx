import Blockies from "react-blockies"

type AvatarProps = {
    peerAddress: string
    className: string
}

const WalletAvatar = ({ peerAddress, className }: AvatarProps) => {
    return <Blockies seed={peerAddress.toLowerCase()} className={className} />
}

export default WalletAvatar
