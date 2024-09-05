import { styled } from '@mui/material'
import Modal from '../../../shared/UI/modals/Modal'
import { useState } from 'react'
import Button from '../../../shared/UI/Button'

const SelectIdeaModal = () => {
   const [open, setOpen] = useState(true)

   const handleOpen = () => {
      setOpen(true)
   }

   const handleClose = () => {
      setOpen(false)
   }

   return (
      <>
         <Container>
            <StyledBox>
               <StyledContent>
                  <Modal
                     open={open}
                     onClose={handleClose}
                     onClick={handleOpen}
                     variant="secondary"
                     boxContent={
                        <>
                           <ButtonContainer>
                              <Button className="goBack">GO BACK</Button>
                              <Button
                                 customVariant="secondary"
                                 className="save"
                              >
                                 SAVE
                              </Button>
                           </ButtonContainer>
                        </>
                     }
                  >
                     <label>
                        <p>Title</p>
                     </label>
                  </Modal>
               </StyledContent>
            </StyledBox>
         </Container>
      </>
   )
}

export default SelectIdeaModal

const Container = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   justifyContent: 'center',
   backgroundColor: '#d7e1f8',
   height: '100%',
   minHeight: '601px',
}))

const StyledBox = styled('div')(() => ({
   width: '100%',
   maxWidth: '1440px',
}))

const StyledContent = styled('div')(() => ({
   width: '100%',
   maxWidth: '1300px',
   display: 'flex',
   justifyContent: 'center',
   marginTop: '68px',
}))

const ButtonContainer = styled('div')(() => ({
   textAlign: 'end',
   '& button': {
      margin: '26px 0',
      marginRight: 20,
   },
   '& .save': {
      marginRight: 60,
   },
   '& .goBack': {
      backgroundColor: 'white',
      color: 'rgba(58, 16, 229, 1)',
      border: '2px solid rgba(58, 16, 229, 1)'
   },
}))
