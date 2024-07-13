import { FC } from "react"
import { ModalType, style, } from "./Modal"
import { Box, Modal, Typography, styled } from "@mui/material"
import Button from "../Button"


const Secondary: FC<ModalType> = ({open, children, onCloseCancel,onCloseYes, ...rest}) => {
  return (
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
  )
}

export default Secondary


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