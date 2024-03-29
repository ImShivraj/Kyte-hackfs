import { Button } from "@/src/components/UI/Button"
import { Modal } from "@/src/components/UI/Modal"
import { Spinner } from "@/src/components/UI/Spinner"
import { WarningMessage } from "@/src/components/UI/WarningMessage"
import { PriorityHigh, Remove, Add } from "@mui/icons-material"
// import { getModule } from "@lib/getModule"
// @ts-ignore
import { useGenerateModuleCurrencyApprovalDataLazyQuery } from "lens"
import type { Dispatch, FC } from "react"
import { useState } from "react"
import { useSendTransaction, useWaitForTransaction } from "wagmi"
import { showNotification } from "@mantine/notifications"

interface Props {
    title?: string
    module: any
    allowed: boolean
    setAllowed: Dispatch<boolean>
}

const AllowanceButton: FC<Props> = ({
    title = `Allow`,
    module,
    allowed,
    setAllowed,
}) => {
    const [showWarningModal, setShowWarningModal] = useState(false)
    const [generateAllowanceQuery, { loading: queryLoading }] =
        useGenerateModuleCurrencyApprovalDataLazyQuery()

    // const {
    //     data: txData,
    //     isLoading: transactionLoading,
    //     sendTransaction,
    // } = useSendTransaction({
    //     request: {},
    //     mode: "recklesslyUnprepared",
    //     onError,
    // })

    // const { isLoading: waitLoading } = useWaitForTransaction({
    //     hash: txData?.hash,
    //     onSuccess: () => {
    //         showNotification({
    //             title: "Default notification",
    //             message: `Module ${
    //                 allowed ? "disabled" : "enabled"
    //             } successfully!`,
    //         })
    //         setShowWarningModal(false)
    //         setAllowed(!allowed)
    //         Analytics.track(`module_${allowed ? "disabled" : "enabled"}`)
    //     },
    //     onError,
    // })

    const handleAllowance = (
        currencies: string,
        value: string,
        selectedModule: string
    ) => {
        // generateAllowanceQuery({
        //     variables: {
        //         request: {
        //             currency: currencies,
        //             value: value,
        //             [getModule(module.module).field]: selectedModule,
        //         },
        //     },
        // }).then((res) => {
        //     const data = res?.data?.generateModuleCurrencyApprovalData
        //     sendTransaction?.({
        //         recklesslySetUnpreparedRequest: {
        //             from: data?.from,
        //             to: data?.to,
        //             data: data?.data,
        //         },
        //     })
        // })
    }

    return allowed ? (
        <Button
            variant="warning"
            icon={
                // queryLoading || transactionLoading || waitLoading
                false

                    ? (
                        <Spinner variant="warning" size="xs" />
                    ) : (
                        <Remove className="w-4 h-4" />
                    )
            }
            onClick={() => handleAllowance(module.currency, "0", module.module)}
        >
            Revoke
        </Button>
    ) : (
        <>
            <Button
                variant="success"
                icon={<Add className="w-4 h-4" />}
                onClick={() => setShowWarningModal(!showWarningModal)}
            >
                {title}
            </Button>
            <Modal
                title={`Warning`}
                icon={<PriorityHigh className="w-5 h-5 text-yellow-500" />}
                show={showWarningModal}
                onClose={() => setShowWarningModal(false)}
            >
                <div className="p-5 space-y-3">
                    <WarningMessage
                        title={`Handle with care!`}
                        message={
                            <div className="leading-6">
                                Please be aware that by allowing this module,
                                the amount indicated will be automatically
                                deducted when you <b>collect</b> and{" "}
                                <b>super follow</b>.
                            </div>
                        }
                    />
                    <Button
                        variant="success"
                        icon={
                            // queryLoading ||
                            //     transactionLoading ||
                            //     waitLoading 
                            false
                                ? (
                                    <Spinner variant="success" size="xs" />
                                ) : (
                                    <Add className="w-4 h-4" />
                                )
                        }
                        onClick={() =>
                            handleAllowance(
                                module.currency,
                                Number.MAX_SAFE_INTEGER.toString(),
                                module.module
                            )
                        }
                    >
                        {title}
                    </Button>
                </div>
            </Modal>
        </>
    )
}

export default AllowanceButton
