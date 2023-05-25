import { useModalStore } from '@/src/store/modal'
import React, { forwardRef } from "react"
import { TransitionProps } from "@mui/material/transitions"
import {
    Dialog,
    Slide,
} from "@mui/material"
import Login from '@components/Shared/Login'

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />
})


const LoginModal = () => {
    const { setShowAuthModal, showAuthModal } = useModalStore()

    return (
        <Dialog
            open={showAuthModal}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => { }}
            aria-describedby="alert-dialog-slide-description"
            classes={{
                paper: "rounded-[15px] min-w-[650px]"
            }}
        >
            <Login />
        </Dialog>
    )
}

export default LoginModal