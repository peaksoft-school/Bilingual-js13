import { Box, Modal } from '@mui/material'
import { FC } from 'react'
import { ModalType } from './Modal'

const Primary: FC<ModalType> = ({ open, children, onClose, ...rest }) => (
   <>
      <Modal
         open={open}
         onClose={onClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
         {...rest}
      >
         <Box sx={style}>{children}</Box>
      </Modal>
   </>
)

export default Primary

const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 407,
   minHeight: '9.875rem',
   bgcolor: 'background.paper',
   border: 'none',
   borderRadius: '.625rem',
   boxShadow: 24,
}
