import TheScience from '../../../../assets/icons/svgs/TheScience.svg'
import { styled } from '@mui/material'
import { InView } from 'react-intersection-observer'
import { FC } from 'react'
import { animationVariantsRight } from '../model/animateLogic'
import { motion } from 'framer-motion'
import { BoxStyle } from './ExpandBox'

const Built: FC = () => {
   return (
      <>
         <BuiltContainer className="built">
            <FlexContainer>
               <BoxStyle>
                  <img src={TheScience} alt="TheScience" />
               </BoxStyle>
               <InView triggerOnce={false}>
                  {({ inView, ref }) => (
                     <BuiltTypography
                        ref={ref}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        variants={animationVariantsRight}
                     >
                        <BuitlTitle>
                           Built on the latest assessment sciencee
                        </BuitlTitle>
                        <BuiltSubTitle>
                           The Duolingo English Test is a computer adaptive test
                           backed by rigorous research, with results that are
                           highly correlated with other major assessments such
                           as the TOEFL and the IELTS.
                        </BuiltSubTitle>
                     </BuiltTypography>
                  )}
               </InView>
            </FlexContainer>
         </BuiltContainer>
      </>
   )
}

export default Built

const BuiltContainer = styled('div')(() => {
   return {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
      marginBottom: '6.5625rem',
   }
})

const FlexContainer = styled('div')(() => {
   return {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      maxWidth: '62.32rem',
   }
})

const BuiltTypography = styled(motion.div)(() => {
   return {
      width: '100%',
      maxWidth: '30.875rem',
   }
})

const BuitlTitle = styled('h2')(() => {
   return {
      fontSize: '1.5rem',
      fontWeight: '37.5rem',
      color: 'rgba(35, 33, 42, 1)',
      marginBottom: '1rem',
      fontFamily: 'Poppins',
   }
})

const BuiltSubTitle = styled('p')(() => {
   return {
      fontSize: '1rem',
      fontWeight: '400',
      lineHeight: '1.5rem',
      color: 'rgba(35, 33, 42, 1)',
      fontFamily: 'Poppins',
   }
})
