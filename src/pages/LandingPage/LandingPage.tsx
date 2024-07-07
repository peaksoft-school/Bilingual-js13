import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { FC } from 'react'
import Reviews from './components/Reviews'

const LandingPage: FC = () => {
   return (
      <Container>
        <Reviews/>
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
