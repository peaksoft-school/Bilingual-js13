import { FC, ReactNode } from 'react'
import Box from '@mui/material/Box'
import Button from '../Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { TextField, styled } from '@mui/material'
import ModadXIcon from '../../../assets/icons/svgs/modal-x-icon.svg'
import ModadBigX from '../../../assets/icons/svgs/Modal-big-x.svg'
import { styled as styledSystemMui } from '@mui/system'
import Switches from '../switches/Switches'
import Primary from './Primary'

export interface ModalType {
   children: ReactNode
   customVariant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary'
   open: boolean
   onCloseCancel?: () => void
   onCloseYes?: () => void
}

export const BasicModal: FC<ModalType> = ({
   children,
   customVariant = 'primary',
   open,
   onCloseCancel,
   onCloseYes,
   ...rest
}) => {
   return (
      <div>
         {customVariant === 'primary' && (
            <>
               {/* <Modal
                  open={open}
                  onClose={onCloseCancel}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  {...rest}
               >
                  <Box sx={style}>{children}</Box>
               </Modal> */}
               <Primary open={open} children={children} onCloseCancel={onCloseCancel} {...rest}/>
            </>
         )}

         {customVariant === 'secondary' && (
            <>
               <Modal
                  open={open}
                  onClose={onCloseCancel}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  {...rest}
               >
                  <Box sx={style}>
                     <TitleModal id="modal-modal-description">
                        Are you sure you want to log out?
                     </TitleModal>
                     <Typography sx={SecondaryStyleTypography}>
                        {children}
                     </Typography>
                     <ModalButton>
                        <Button onClick={onCloseCancel} customVariant="primary">
                           CANCEL
                        </Button>
                        <Button onClick={onCloseYes} customVariant="primary">
                           YES
                        </Button>
                     </ModalButton>
                  </Box>
               </Modal>
            </>
         )}

         {customVariant === 'tertiary' && (
            <>
               <Modal
                  open={open}
                  onClose={onCloseCancel}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  {...rest}
               >
                  <Box
                     sx={customVariant === 'tertiary' ? StyleTertiary : style}
                  >
                     <ImageModalX onClick={onCloseCancel}>
                        <img src={ModadXIcon} alt="ModadXIcon" />
                     </ImageModalX>
                     <ModalBigXIcon>
                        <img src={ModadBigX} alt="ModadBigX" />
                     </ModalBigXIcon>

                     <TitleModalDelete id="modal-modal-description">
                        Do you want delete?
                     </TitleModalDelete>
                     <SubTitleDelete>
                        You can’t restore this file
                     </SubTitleDelete>
                     <Typography sx={StyleTertiaryTypography}>
                        {' '}
                        {children}
                     </Typography>
                     <ModalButtonDelete>
                        <BoxFlex>
                           <Button onClick={onCloseCancel} variant="contained">
                              CANCEL
                           </Button>
                           <Button onClick={onCloseYes} variant="contained">
                              DELETE
                           </Button>
                        </BoxFlex>
                     </ModalButtonDelete>
                  </Box>
               </Modal>
            </>
         )}
         {customVariant === 'quaternary' && (
            <>
               <Modal
                  open={open}
                  onClose={onCloseCancel}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  {...rest}
               >
                  <Box
                     sx={
                        customVariant === 'quaternary' ? StyleQuaternary : style
                     }
                  >
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
                     <Typography sx={StyleTertiaryTypography}>
                        {children}
                     </Typography>
                     <ModalButtonDelete>
                        <BoxFlexQuaternary className="secondary-button-papa">
                           <Button
                              onClick={onCloseCancel}
                              customVariant="primary"
                           >
                              CANCEL
                           </Button>
                           <Button
                              onClick={onCloseYes}
                              customVariant="secondary"
                           >
                              SAVE
                           </Button>
                        </BoxFlexQuaternary>
                     </ModalButtonDelete>
                  </Box>
               </Modal>
            </>
         )}
      </div>
   )
}
export default BasicModal

// Primary

export const style = {
   position: 'absolute' as 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 407,
   minHeight: '9.875rem',
   bgcolor: 'background.paper',
   border: 'none',
   borderRadius: '.625rem',
   boxShadow: 24,
   p: '36px',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   flexDirection: 'column',
}

// secondary

const ModalButton = styled('div')(() => ({
   width: '58%',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   border: 'none',
   background: 'none',
   marginTop: '24px',
}))

const TitleModal = styled('p')(() => ({
   fontSize: '1rem',
   fontWeight: '400',
   fontFamily: 'Poppins',
   color: 'rgba(76, 72, 89, 1)',
}))

const SecondaryStyleTypography = {
   marginTop: '1rem',
}

// tertiary

const StyleTertiary = {
   position: 'absolute' as 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 520,
   minHeight: '9.875rem',
   bgcolor: 'background.paper',
   border: 'none',
   borderRadius: '.625rem',
   boxShadow: 24,
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   flexDirection: 'column',
}

const ImageModalX = styled('div')(() => ({
   alignSelf: 'end',
   marginTop: '22px',
   marginRight: '22px',
   cursor: 'pointer',
}))

const ModalBigXIcon = styled('div')(() => ({
   marginTop: '1rem',
   marginBottom: '3.1875rem',
}))

const TitleModalDelete = styled('h2')(() => ({
   fontSize: '1.25rem',
   fontFamily: 'Poppins',
   color: 'rgba(76, 72, 89, 1)',
   fontWeight: '700',
   marginBottom: '.4375rem',
}))

const SubTitleDelete = styled('div')(() => ({
   fontSize: '1rem',
   fontWeight: '400',
   fontFamily: 'Poppins',
   color: 'rgba(76, 72, 89, 1)',
   marginBottom: '3rem',
}))

const ModalButtonDelete = styled('div')(() => ({
   position: 'relative',
   width: '100%',
   height: '100%',
   minHeight: '5.875rem',
   backgroundColor: 'rgba(240, 241, 241, 1)',
   borderRadius: '.625rem',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
}))

const BoxFlex = styled('div')(() => ({
   width: '100%',
   maxWidth: '220px',
   display: 'flex',
   gap: '1rem;',
}))

const StyleTertiaryTypography = {
   margin: '-32px 24px 24px',
}

// quaternary

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
