import { Box, Modal } from "@mui/material"
import { FC } from "react"
import  { ModalType, style } from './Modal'

const Primary: FC<ModalType> = ({open, children, onCloseCancel, ...rest}) => {
  return (
    <> <Modal
    open={open}
    onClose={onCloseCancel}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    {...rest}
 >
    <Box sx={style}>{children}</Box>
 </Modal></>
  )
}

export default Primary