import GlobusLearnMore from '../../../../assets/icons/svgs/GlobusLearnMore.svg'
import { Box, styled } from '@mui/material'
import { InView } from 'react-intersection-observer'
import { FC } from 'react'
import { animationVariants } from '../model/animateLogic'
import { motion } from 'framer-motion'

const ExpandBox: FC = () => {
   return (
      <>
         <ExpandBoxGlobus>
            <InView triggerOnce={false}>
               {({ inView, ref }) => (
                  <Box
                     component={motion.div}
                     ref={ref}
                     initial="hidden"
                     animate={inView ? 'visible' : 'hidden'}
                     variants={animationVariants}
                  >
                     <TitleExpand>Expand your applicant pool</TitleExpand>
                     <Subtitle>
                        Tap into a diverse pool of candidates from 210+
                        countries and territories of origin, who have taken the
                        Bilingual English Test because of its radical
                        accessibility.
                     </Subtitle>
                  </Box>
               )}
            </InView>
            <BoxStyle>
               <img src={GlobusLearnMore} alt="GlobusLearnMore" />
            </BoxStyle>
         </ExpandBoxGlobus>
      </>
   )
}

export default ExpandBox

const ExpandBoxGlobus = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   maxWidth: '52rem',
   width: '100%',
   marginTop: '3.875rem',
   marginBottom: '16.5625rem',
}))

const TitleExpand = styled('h2')(() => {
   return {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: 'rgba(35, 33, 42, 1)',
      marginBottom: '1rem',
      fontFamily: 'Poppins',
   }
})

const Subtitle = styled('p')(() => {
   return {
      fontSize: '1rem',
      fontWeight: '25rem',
      lineHeight: '1.5rem',
      color: 'rgba(35, 33, 42, 1)',
      width: '100%',
      maxWidth: '30.875rem',
      fontFamily: 'Poppins',
   }
})

export const BoxStyle = styled('div')(() => ({
   position: 'relative',
   zIndex: '11'
}))