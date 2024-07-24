import { Box, styled, Typography } from '@mui/material'
import Logo from '../../assets/logo/bilingual.svg?react'
import Button from './Button'

const Header = () => {
   const role = 'user'

   const openModal = () => {}

   return (
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

   '& .button': {
      color: '#4C4C4C',
      fontWeight: '700',
      fontSize: '14px',
      padding: ' 10px 24px 10px 24px',
   },
}))
