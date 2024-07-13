import { Box, Modal, TextField, Typography, styled } from '@mui/material'
import {
   ImageModalX,
   ModalButtonDelete,
   ModalType,
} from './Modal'
import { FC } from 'react'
import Switches from '../switches/Switches'
import Button from '../Button'
import { styled as styledSystemMui } from '@mui/system'
import ModadXIcon from '../../../assets/icons/svgs/modal-x-icon.svg'

const Quaternary: FC<ModalType> = ({
   customVariant,
   open,
   children,
   onCloseCancel,
   onCloseYes,
   ...rest
}) => {
   return (
      <>
         <Modal
            open={open}
            onClose={onCloseCancel}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            {...rest}
         >
            <Box sx={StyleQuaternary}>
               <ImageModalX onClick={onCloseCancel}>
                  <img src={ModadXIcon} alt="ModadXIcon" />
               </ImageModalX>

               <TitleModalQuaternary id="modal-modal-description">
                  Title
               </TitleModalQuaternary>
               <TextFieldStyled />
               <LabelQuaternary>
                  Is true option? <Switches variant="Quaternary" />
               </LabelQuaternary>
               <Typography sx={StyleQuaternaryTypography}>
                  {children}
               </Typography>
               <ModalButtonDelete>
                  <BoxFlexQuaternary className="secondary-button-papa">
                     <Button onClick={onCloseCancel} customVariant="primary">
                        CANCEL
                     </Button>
                     <Button onClick={onCloseYes} customVariant="secondary">
                        SAVE
                     </Button>
                  </BoxFlexQuaternary>
               </ModalButtonDelete>
            </Box>
         </Modal>
      </>
   )
}

export default Quaternary

const StyleQuaternary = {
   position: 'absolute' as 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 637,
   minHeight: '9.875rem',
   bgcolor: 'background.paper',
   border: 'none',
   borderRadius: '.625rem',
   boxShadow: 24,
   display: 'flex',
   justifyContent: 'center',
   flexDirection: 'column',
}

const TitleModalQuaternary = styled('div')(() => ({
   fontSize: '1rem',
   fontWeight: '500',
   color: 'rgba(75, 71, 89, 1)',
   fontFamily: 'Popins',
   marginLeft: '3.75rem',
   marginRigth: '3.75rem',
   marginTop: '2.5rem',
   marginBottom: '1.875rem',
}))

const TextFieldStyled = styled(TextField)(() => ({
   margin: '0 3.75rem 1.25rem',
}))

const LabelQuaternary = styledSystemMui('label')(() => ({
   margin: '0 3.75rem 5.125rem',
   cursor: 'pointer',
   display: 'flex',
   alignItems: 'center',
   gap: '.875rem',
}))

const BoxFlexQuaternary = styled('div')(() => ({
   width: '81%',
   display: 'flex',
   gap: '1rem;',
   justifyContent: 'end',
}))

export const StyleQuaternaryTypography = {
   margin: '-70px 60px 24px',
}
