import { FC } from 'react'
import { Box, Modal, styled } from '@mui/material'
import { ModalType } from './Modal'
import Button from '../Button'
import ModadXIcon from '../../../assets/icons/svgs/exit-model.svg'

const Secondary: FC<ModalType> = ({
   open,
   children,
   onClick,
   onClose,
   buttonChange,
   boxContent,
   ...rest
}) => (
   <>
      <Modal
         open={open}
         onClose={onClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
         {...rest}
      >
         <Box sx={StyleTertiary}>
            <ImageModalX onClick={onClose}>
               <img src={ModadXIcon} alt="ModadXIcon" />
            </ImageModalX>

            <Box style={{marginTop: children ? '' : '20px'}}>{children}</Box>

            <ModalButtonDelete>
               {buttonChange === 'true' ? (
                  <>
                     <BoxFlexTrue>
                        <Button onClick={onClose} variant="contained">
                           CANCEL
                        </Button>
                        <Button onClick={onClick} variant="contained">
                           DELETE
                        </Button>
                     </BoxFlexTrue>
                  </>
               ) : buttonChange === 'false' ? (
                  <>
                     <BoxFlexFalse>
                        <Button onClick={onClose}>CANCEL</Button>
                        <Button onClick={onClick} customVariant="secondary">
                           SAVE
                        </Button>
                     </BoxFlexFalse>
                  </>
               ) : (
                  boxContent
               )}
            </ModalButtonDelete>
         </Box>
      </Modal>
   </>
)

export default Secondary

const StyleTertiary = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 520,
   minHeight: '9.875rem',
   bgcolor: 'background.paper',
   border: 'none',
   borderRadius: '.625rem',
   boxShadow: 24,
   overflow: 'hidden',
}

export const BoxFlexTrue = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   gap: '15px',
   height: '100%',
   minHeight: '5.875rem',
}))

export const BoxFlexFalse = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'end',
   gap: '15px',
   height: '100%',
   minHeight: '5.875rem',
   marginRight: '60px',
}))

const ImageModalX = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'end',
   cursor: 'pointer',
   marginTop: '22px',
   marginRight: '22px',
}))

const ModalButtonDelete = styled('div')(() => ({
   position: 'relative',
   width: '100%',
   height: '100%',
   minHeight: '5.875rem',
   backgroundColor: 'rgba(240, 241, 241, 1)',
   borderBottomLeftRadius: '.625rem',
   borderBottomRightRadius: '.625rem',
}))
