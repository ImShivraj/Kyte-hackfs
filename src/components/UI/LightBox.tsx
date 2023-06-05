
import type { FC } from "react"
import React from 'react';
import {
  Dialog,
  DialogBody,
} from "@material-tailwind/react";


interface Props {
  show: boolean
  url: string | null
  onClose: () => void
}

export const LightBox: FC<Props> = ({ show, url, onClose }) => {
  return (
    <React.Fragment>
      <Dialog size="xl" open={show} handler={onClose}>
        <DialogBody divider={true} className="p-0">
          <img
            alt="nature"
            className="h-[48rem] w-full object-cover object-center"
            src={url ?? ""}
          />
        </DialogBody>
      </Dialog>
    </React.Fragment>
  );
}
