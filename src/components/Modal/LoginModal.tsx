import { useModalStore } from "@/src/store/modal"
import React, { forwardRef } from "react"
import { TransitionProps } from "@mui/material/transitions"
import Login from "@components/Shared/Login"
import { Fragment, useState } from "react"
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react"

const LoginModal = () => {
    const { setShowAuthModal, showAuthModal } = useModalStore()

    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(!open)

    return (
        <Fragment>
            <Button onClick={handleOpen} variant="gradient">
                Open Dialog
            </Button>
            <Dialog
                dismiss={{
                    outsidePress: false,
                }}
                open={open}
                handler={handleOpen}
            >
                <DialogHeader>Its a simple dialog.</DialogHeader>
                <DialogBody divider>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus ad reprehenderit omnis perspiciatis aut odit! Unde
                    architecto perspiciatis, dolorum dolorem iure quia saepe
                    autem accusamus eum praesentium magni corrupti explicabo!
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button
                        variant="gradient"
                        color="green"
                        onClick={handleOpen}
                    >
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </Fragment>

        // <Dialog
        //     open={showAuthModal}
        //     TransitionComponent={Transition}
        //     keepMounted
        //     onClose={() => { }}
        //     aria-describedby="alert-dialog-slide-description"
        //     classes={{
        //         paper: "rounded-[15px] min-w-[650px]"
        //     }}
        // >
        //     <Login />
        // </Dialog>
    )
}

export default LoginModal
