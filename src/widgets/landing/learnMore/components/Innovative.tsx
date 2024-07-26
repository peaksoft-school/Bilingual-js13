import {  styled } from '@mui/material'
import SecurityLearnMore from '../../../../assets/icons/svgs/SecurityLearnMore.svg'
import { InView } from 'react-intersection-observer'
import { FC } from 'react'
import { animationVariants } from '../model/animateLogic'
import { motion } from 'framer-motion'
import { BoxStyle } from './ExpandBox'

const Innovative: FC = () => {
   return (
      <>
         <InnovativeContainer>
            <InView triggerOnce={false}>
               {({ inView, ref }) => (
                  <InnovativeTypographyBox
                     ref={ref}
                     initial="hidden"
                     animate={inView ? 'visible' : 'hidden'}
                     variants={animationVariants}
                  >
                     <InnovativeTitle>Innovative test security</InnovativeTitle>
                     <InnovativeSubtitle>
                        Industry-leading security protocols, individual test
                        proctoring, and computer adaptive technology help
                        prevent fraud and cheating and ensure results you can
                        trust.
                     </InnovativeSubtitle>
                  </InnovativeTypographyBox>
               )}
            </InView>
            <BoxStyle>
               <img src={SecurityLearnMore} alt="SecurityLearnMore" />
            </BoxStyle>
         </InnovativeContainer>
      </>
   )
}

export default Innovative

const InnovativeContainer = styled('div')(() => {
   return {
      width: '100%',
      maxWidth: '58.5625rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '143px',
   }
})

const InnovativeTypographyBox = styled(motion.div)(() => {
   return {
      width: '100%',
      maxWidth: '30.875rem',
   }
})

const InnovativeTitle = styled('h2')(() => {
   return {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: 'rgba(35, 33, 42, 1)',
      marginBottom: '1rem',
      fontFamily: 'Poppins',
   }
})

const InnovativeSubtitle = styled('p')(() => {
   return {
      fontSize: '1rem',
      fontWeight: '400',
      lineHeight: '1.5rem',
      color: 'rgba(35, 33, 42, 1)',
      fontFamily: 'Poppins',
   }
})
