import { Box, Modal, Typography, styled } from "@mui/material"
import { ImageModalX, ModalButtonDelete, ModalType, StyleTertiaryTypography } from "./Modal"
import Button from "../Button"
import ModadBigX from '../../../assets/icons/svgs/Modal-big-x.svg'
import ModadXIcon from '../../../assets/icons/svgs/modal-x-icon.svg'
import { FC } from "react"


const Tertiary: FC<ModalType>  = ({customVariant,open, children, onCloseCancel,onCloseYes, ...rest}) => {
  return (
    <>
               <Modal
                  open={open}
                  onClose={onCloseCancel}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  {...rest}
               >
                  <Box
                     sx={StyleTertiary}
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
  )
}

export default Tertiary

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

 const BoxFlex = styled('div')(() => ({
    width: '100%',
    maxWidth: '220px',
    display: 'flex',
    gap: '1rem;',
 }))