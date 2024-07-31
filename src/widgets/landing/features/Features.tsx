import { Box, styled, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import AccessibleIcon from '../../../assets/icons/svgs/accessible.svg?react'
import SpeechIcon from '../../../assets/icons/svgs/speech.svg?react'
import ExtensiveIcon from '../../../assets/icons/svgs/extensive.svg?react'
import TutoringIcon from '../../../assets/icons/svgs/tutoring.svg?react'
import BookImage from '../../../assets/images/book.png'
import GlobusUserExperienceImage from '../../../assets/images/globus-user-experience.png'
import LearnImage from '../../../assets/images/learn.png'
import ReadingImage from '../../../assets/images/reading.png'

const Features = () => (
   <Container>
      <Box className="">
         <Typography className="title">
            Unparalleled user
            <br /> experience
         </Typography>

         <Typography className="description">
            The most effective way to perfect a language is by immersing
            yourself in it. Rosetta Stone for Enterprise delivers an effective
            end-to-end experience, founded on a wealth of carefully structured
            content. Each learner has the opportunity to balance independent
            study with optional online tutoring in a way that fits their
            schedule and language learning goals.
         </Typography>

         <Box className="boxes-container">
            <Box>
               <div>
                  <AccessibleIcon />
               </div>
               <Typography>Accessible anytime, anywhere</Typography>
            </Box>

            <Box>
               <div>
                  <SpeechIcon />
               </div>
               <Typography>Leading speech recognition</Typography>
            </Box>

            <Box>
               <div>
                  <ExtensiveIcon />
               </div>
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

      <StyledGlobusBox>
         <img src={GlobusUserExperienceImage} alt="globus" className="globus" />

         <StyledAnimationsImagesBox>
            <StyledBookImage
               src={BookImage}
               variants={PULSE_ANIMATION}
               initial="offscreen"
               whileInView="onscreen"
               animate="animate"
               loading="lazy"
               alt="book"
            />

            <StyledLearnImage
               src={LearnImage}
               variants={ANIMATE}
               initial="offscreen"
               whileInView="onscreen"
               animate="animate"
               loading="lazy"
               alt="learn"
            />

            <StyledReadingImage
               src={ReadingImage}
               variants={ANIMATE}
               initial="offscreen"
               whileInView="onscreen"
               animate="animate"
               loading="lazy"
               alt="reading"
            />
         </StyledAnimationsImagesBox>
      </StyledGlobusBox>
   </Container>
)

export default Features

const PULSE_ANIMATION = {
   animate: {
      scale: [0.9, 0.95, 0.9],

      transition: {
         duration: 2,
         repeat: Infinity,
      },
   },
}

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
         width: '235px',
         justifyContent: 'space-between',
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

const StyledGlobusBox = styled(Box)(({ theme }) => ({
   marginTop: '40px',
   [theme.breakpoints.down('lg')]: {
      position: 'absolute',
      left: '30rem',
   },

   '& > .globus': {
      marginTop: '1.0625rem',
      width: '27.52988rem',
      height: '26.25rem',
      marginLeft: '3rem',
   },
}))

const StyledAnimationsImagesBox = styled(Box)(() => ({
   position: 'relative',
   right: '48rem',
   bottom: '28rem',
}))

const StyledBookImage = styled(motion.img)(() => ({
   position: 'absolute',
   width: '22.11994rem',
   height: '18.65006rem',
   left: '52.5rem',
   top: '6.5rem',
   animation: `${PULSE_ANIMATION} 2s infinite`,
}))

const StyledLearnImage = styled(motion.img)(() => ({
   width: '5.312rem',
   height: '3.65719rem',
   position: 'relative',
   left: '52rem',
   top: '5rem',
}))

const StyledReadingImage = styled(motion.img)(() => ({
   width: '5.17588rem',
   height: '3.52131rem',
   position: 'relative',
   zIndex: '10',
   left: '66rem',
   top: '7rem',
}))

const ANIMATE = {
   offscreen: {
      opacity: 0,
   },

   onscreen: {
      opacity: 1,
      transition: {
         duration: 1,
         damping: 3,
      },
   },

   animate: {
      rotate: [-2, 3, -7, 4, 4],

      transition: {
         duration: 2,
         repeat: Infinity,
         repeatType: 'reverse' as 'reverse',
      },
   },
}
