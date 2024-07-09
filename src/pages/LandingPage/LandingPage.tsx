import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { FC } from 'react'
import QuestionTypes from './components/QuestionTypes'

const LandingPage: FC = () => {
   return <Container>
      <QuestionTypes/>
   </Container>
}

export default LandingPage

const Container = styled(Box)({
   width: '100%',
   maxWidth: '1440px',
   minWidth: '1024px',
   margin: '0 auto',
})
