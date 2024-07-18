import { Box, styled, Typography } from '@mui/material'
import Logo from '../../assets/logo/bilingual.svg?react'
import Button from './Button'
import { color } from 'framer-motion'

const Header = () => {
   const role = 'user'

   return (
      <Container>
<Logo/>
         <ButtonsContainer>
            <Typography className='tests'>TESTS</Typography>
            <Typography className='results'>
               {role === 'user' ? 'MY RESULTS' : 'SUBMITTED RESULTS'}
            </Typography>

            <Button type="button" customVariant="Octonary">
               LOG OUT
            </Button>
         </ButtonsContainer>
      </Container>
   )
}

export default Header

const Container = styled(Box)((theme) => ({
   maxWidth: '1440px',
   margin: "0 auto",
   height: '94px',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center', 
   padding: '0 120px',

   '& .tests':{
color: 
   },
   '& .results':{

   },

}))

const ButtonsContainer = styled(Box)({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center', 
   gap: '60px',
})
