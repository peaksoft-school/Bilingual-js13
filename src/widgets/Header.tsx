import { Box, styled, Typography } from '@mui/material'
import Logo from '../assets/logo/bilingual.svg?react'
import { useState } from 'react'
import Button from '../shared/UI/Button'
import Modal from '../shared/UI/modals/Modal'

const Header = () => {
   const [isModalOpen, setModalOpen] = useState(false)
   const role = 'user'

   const openModal = () => setModalOpen(true)

   const closeModalHandler = () => setModalOpen(false)

   const logOutHandler = () => setModalOpen(false)

   return (
      <>
         <Container>
            <Logo />
            <ButtonsContainer>
               <Typography className="tests">TESTS</Typography>
               <Typography className="results">
                  {role === 'user' ? 'MY RESULTS' : 'SUBMITTED RESULTS'}
               </Typography>

               <Button
                  onClick={openModal}
                  className="button"
                  type="button"
                  customVariant="Octonary"
               >
                  LOG OUT
               </Button>
            </ButtonsContainer>
         </Container>

         <StyledModal open={isModalOpen} onClose={closeModalHandler}>
            <Box className="log-out">
               <Typography>Are you sure you want to log out?</Typography>

               <Box className="buttons-container">
                  <Button customVariant="primary" onClick={closeModalHandler}>
                     CANCEL
                  </Button>

                  <Button customVariant="primary" onClick={logOutHandler}>
                     YES
                  </Button>
               </Box>
            </Box>
         </StyledModal>
      </>
   )
}

export default Header

const Container = styled(Box)(() => ({
   maxWidth: '1440px',
   margin: '0 auto',
   height: '94px',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   padding: '0 120px',
   backgroundColor: 'white',

   '& .tests': {
      color: '#3a11e5',
      fontFamily: 'Gilroy',
      fontWeight: '600',
      cursor: 'pointer',
   },
   '& .results': {
      color: '#4C4859',
      fontFamily: 'Gilroy',
      fontWeight: '700',
      cursor: 'pointer',
   },
}))

const ButtonsContainer = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   gap: '60px',
   margin: 0,
   '& .button': {
      color: '#4C4C4C',
      fontWeight: '700',
      fontSize: '14px',
      padding: ' 10px 24px 10px 24px',
   },
}))

const StyledModal = styled(Modal)(() => ({
   position: 'absolute',

   '& .log-out': {
      padding: '36px 81px ',
      color: '#4C4C4C',
      fontWeight: '700',
      fontSize: '14px',
   },

   '& .buttons-container': {
      paddingTop: '36px',
      alignItems: 'center',
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
   },
}))
