import { Box, styled, Typography } from '@mui/material'
import AccessibleIcon from '../../assets/icons/svgs/accessible.svg?react'
import SpeechIcon from '../../assets/icons/svgs/speech.svg?react'
import ExtensiveIcon from '../../assets/icons/svgs/extensive.svg?react'
import TutoringIcon from '../../assets/icons/svgs/tutoring.svg?react'

import EnglishBook from '../../assets/icons/svgs/book.svg?react'

const PartThree = () => {
   return (
      <Container>
         <Box className="">
            <Typography className="title">
               Unparalleled user
               <br /> experience
            </Typography>

            <Typography className="description">
               The most effective way to perfect a language is by immersing
               yourself in it. Rosetta Stone for Enterprise delivers an
               effective end-to-end experience, founded on a wealth of carefully
               structured content. Each learner has the opportunity to balance
               independent study with optional online tutoring in a way that
               fits their schedule and language learning goals.
            </Typography>

            <Box className="boxes-container">
               <Box>
                  <AccessibleIcon />
                  <Typography>Accessible anytime, anywhere</Typography>
               </Box>

               <Box>
                  <SpeechIcon />
                  <Typography>Leading speech recognition</Typography>
               </Box>

               <Box>
                  <ExtensiveIcon />
                  <Typography>Extensive business content</Typography>
               </Box>

               <Box>
                  <TutoringIcon />
                  <Typography>
                     Unlimited live
                     <br /> tutoring
                  </Typography>
               </Box>
            </Box>
         </Box>

         <Box sx={{ margin: 'auto' }}>
            <EnglishBook />
         </Box>
      </Container>
   )
}

export default PartThree

const Container = styled(Box)(() => ({
   display: 'flex',
   gap: 104,
   margin: '0 auto',
   backgroundColor: '#fef6e8',
   width: '100%',
   padding: '0 100px',
   paddingBottom: '120px',

   '& .title': {
      color: '#3752B4',
      fontWeight: '700',
      fontSize: '40px',
   },

   '& .description': {
      fontWeight: '300',
      width: '640px',
      marginTop: '34px',
   },

   '& .boxes-container': {
      paddingTop: '43px',
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridTemplateRows: 'repeat(2, auto)',
      gap: '53px',

      '& .MuiBox-root': {
         display: 'flex',
         gap: '26px',
         textAlign: 'center',
         fontWeight: '300',

         '& .MuiTypography-root': {
            textAlign: 'left',
            fontWeight: '300',
            width: '160px',
         },
      },
   },
}))
