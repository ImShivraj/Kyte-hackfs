import * as React from "react"
import { Global } from "@emotion/react"
import { styled } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { green, grey } from "@mui/material/colors"
import Box from "@mui/material/Box"
import SwipeableDrawer from "@mui/material/SwipeableDrawer"
import Image from "next/image"
import pfp from "@/src/assets/user.png"
import user from "@/src/assets/user_profile.png"
import { BiDotsHorizontal, BiLink } from "react-icons/bi"
import { BsExclamationTriangle, BsMicMute, BsThreeDots } from "react-icons/bs"
import { MdOutlineBookmarkBorder } from "react-icons/md"
import { links } from "@/pages/explore"
import { HiOutlineGlobeEuropeAfrica } from "react-icons/hi2"

const drawerBleeding = 56

interface Props {
    window?: () => Window
}

const Root = styled("div")(({ theme }) => ({
    height: "100%",
    backgroundColor: "fff",
}))

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: "#fff",
}))

const Puller = styled(Box)(({ theme }) => ({
    width: 56,
    height: 8,
    // backgroundColor: theme.palette.mode === "light" ? "#83B08C" : green[900],
    backgroundColor: "#83B08C",
    borderRadius: 3,
    position: "relative",
    margin: "8px auto",
}))

export default function ProfileDrawer(props: Props) {
    const { window } = props
    const [open, setOpen] = React.useState(false)

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen)
    }

    // This is used only for the example
    const container =
        window !== undefined ? () => window().document.body : undefined

    return (
        <Root>
            <CssBaseline />
            <Global
                styles={{
                    ".MuiDrawer-root > .MuiPaper-root": {
                        height: `400px`,
                        overflow: "visible",
                        borderTopLeftRadius: 25,
                        borderTopRightRadius: 25,
                        background: "fff",
                    },
                }}
            />
            {/* <Box sx={{ textAlign: "center", pt: 1 }}> */}
            <div onClick={toggleDrawer(true)} className=" mr-2 bg-transparent">
                <Image src={pfp} alt="user" />
            </div>
            {/* </Box> */}
            <SwipeableDrawer
                container={container}
                anchor="bottom"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <StyledBox
                    sx={{
                        position: "absolute",
                        // top: ,
                        borderTopLeftRadius: 25,
                        borderTopRightRadius: 25,
                        visibility: "visible",
                        right: 0,
                        left: 0,
                    }}
                >
                    <Puller />

                    <div className=" py-3 px-5 w-full">
                        <div className=" flex w-full items-start justify-start gap-3">
                            <Image
                                src={user}
                                width={72}
                                alt="user"
                                className=" "
                            />
                            <div className=" flex w-full items-start justify-between">
                                <div>
                                    <h1 className=" text-lg font-[700]">
                                        Lorem Ipsum
                                    </h1>
                                    <span className=" text-lightGratText1 text-base font-[600]">
                                        @lorem.ipsum
                                    </span>
                                    <div className=" flex mt-3 w-full ">
                                        <div className=" text-lightGratText1 text-sm">
                                            <span className=" font-[700] text-sm">
                                                99.9M
                                            </span>
                                            &nbsp;Following
                                        </div>
                                        <div className=" text-lightGratText1 text-sm ml-4">
                                            <span className=" font-[700] text-sm">
                                                99.9M
                                            </span>
                                            &nbsp;Followers
                                        </div>
                                    </div>
                                </div>
                                <div className=" p-2 border rounded-full w-max">
                                    <BsThreeDots size={"1.3em"} />
                                </div>
                            </div>
                        </div>

                        <div className=" mt-6">
                            <div className=" my-3 flex items-center gap-3 justify-start">
                                <BiLink size={"1.2em"} />
                                <span className=" font-[600] text-sm  ">
                                    Profile
                                </span>
                            </div>
                            <div className=" my-3 flex items-center gap-3 justify-start">
                                <MdOutlineBookmarkBorder size={"1.1em"} />
                                <span className=" font-[600] text-sm  ">
                                    Bookmarks
                                </span>
                            </div>
                            <div className=" my-3 flex items-center gap-3 justify-start">
                                <BsMicMute size={"1.1em"} />
                                <span className=" font-[600] text-sm  ">
                                    Settings
                                </span>
                            </div>
                            <div className=" my-3 flex items-center gap-3 justify-start">
                                <BsExclamationTriangle size={"1.1em"} />
                                <span className=" font-[600] text-sm  ">
                                    Log out
                                </span>
                            </div>
                        </div>

                        <div className=" mt-5 flex flex-wrap gap-x-6 gap-y-1 justify-start ">
                            {links.map((link, idx) => (
                                <a
                                    key={idx}
                                    href={link.link}
                                    className=" text-start text-lightGratText2  text-sm  md900:text-[12px] xl1450:text-[15px] font-[600] hover:bg-transparent"
                                >
                                    {idx === 0 ? (
                                        <span className=" ">&#169; Kyte</span>
                                    ) : (
                                        link.label
                                    )}
                                </a>
                            ))}
                        </div>
                        <div className=" mt-5 flex justify-start gap-x-6 items-center text-start text-lightGratText2 my-auto text-sm font-[600] hover:bg-transparent">
                            <div className=" text-lightGratText2 flex items-center gap-3">
                                <HiOutlineGlobeEuropeAfrica
                                    size={"1.5em"}
                                    color="#B0B0B0"
                                />
                                <span>English</span>
                            </div>
                            <div className=" text-lightGratText2">
                                <span>Storage Powered by Polybase</span>
                            </div>
                        </div>
                    </div>
                </StyledBox>
            </SwipeableDrawer>
        </Root>
    )
}
