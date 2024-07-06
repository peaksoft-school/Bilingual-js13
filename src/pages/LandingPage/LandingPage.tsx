import { Box } from '@mui/material'
import LandingHeader from './components/LandingHeader'
import { styled } from '@mui/material/styles'
import { FC } from 'react'

const LandingPage: FC = () => {
   return (
      <Container>
         <LandingHeader />
      </Container>
   )
}

export default LandingPage

const Container = styled(Box)({
   width: '100%',
   maxWidth: '1440px',
   minWidth: '1024px',
   margin: '0 auto',
})
