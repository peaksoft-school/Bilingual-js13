import { Box, styled, Typography } from '@mui/material'
import logo from '../../assets/logo/bilingual.png'
import Button from './Button'

const UiHeader = () => {
   const role = 'client'

   return (
      <Container>
         <img src={logo} alt="logo" />

         <ButtonsContainer>
            <Typography sx={{ color: '#3A10E5' }}>TESTS</Typography>
            <Typography sx={{ color: '#4C4859' }}>
               {role === 'client' ? 'MY RESULTS' : 'SUBMITTED RESULTS'}
            </Typography>

            <Button type="button" customVariant="Octonary">
               LOG OUT
            </Button>
         </ButtonsContainer>
      </Container>
   )
}

export default UiHeader

const Container = styled(Box)(() => ({
   maxWidth: '1440px',
   height: '94px',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center', // Added this line to vertically center the items
   padding: '0 120px',

   '& img': {
      width: '174px',
      height: '42px',
   },
}))

const ButtonsContainer = styled(Box)({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center', // Added this line to vertically center the items within the container
   gap: '60px',
})
