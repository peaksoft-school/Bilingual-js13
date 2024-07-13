import {  styled } from '@mui/material'
import DesignLearnMore from '../../../assets/icons/svgs/DesignLearnMore.svg'
import { InView } from 'react-intersection-observer'
import { FC } from 'react'
import { animationVariants } from '../model/animateLogic'
import { motion } from 'framer-motion'
import { BoxStyle } from './ExpandBox'

const SecureDesign: FC = () => {
   return (
      <>
         <SecureDesignContainer>
            <InView triggerOnce={false}>
               {({ inView, ref }) => (
                  <SecureDesignTypographyBox
                     ref={ref}
                     initial="hidden"
                     animate={inView ? 'visible' : 'hidden'}
                     variants={animationVariants}
                  >
                     <SecureDesignTitle>Secure Design</SecureDesignTitle>

                     <SecureDesignSubtitle>
                        Adaptive test engine dynamically administers test
                        questions from a database of hundreds of thousands of
                        items. Someone would have to take the test more than
                        1,000 times to see a question repeated.
                     </SecureDesignSubtitle>
                  </SecureDesignTypographyBox>
               )}
            </InView>
            <BoxStyle>
               <img src={DesignLearnMore} alt="DesignLearnMore" />
            </BoxStyle>
         </SecureDesignContainer>
      </>
   )
}

export default SecureDesign

const SecureDesignContainer = styled('div')(() => {
   return {
      width: '100%',
      maxWidth: '61.6875rem',
      marginBottom: '8.75rem',
      display: 'flex',
      justifyContent: 'space-between',
   }
})

const SecureDesignTypographyBox = styled(motion.div)(() => {
   return {
      width: '100%',
      maxWidth: '30.875rem',
   }
})

const SecureDesignTitle = styled('h2')(() => {
   return {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: 'rgba(35, 33, 42, 1)',
      marginBottom: '1rem',
      fontFamily: 'Poppins',
   }
})

const SecureDesignSubtitle = styled('p')(() => {
   return {
      fontSize: '1rem',
      fontWeight: '400',
      lineHeight: '1.5rem',
      color: 'rgba(35, 33, 42, 1)',
      width: '100%',
      maxWidth: '30.875rem',
      fontFamily: 'Poppins',
   }
})
