import DashboardLearnMore from '../../../../assets/icons/svgs/DashboardLearnMore.svg'
import { Box, styled } from '@mui/material'
import { InView } from 'react-intersection-observer'
import { FC } from 'react'
import { motion } from 'framer-motion'
import { animationVariantsRight } from '../model/animateLogic'
import { BoxStyle } from './ExpandBox'

const Convenient: FC = () => {
   return (
      <ConvenientContainer>
         <ConvenientTypographyBox>
            <BoxStyle>
               <img src={DashboardLearnMore} alt="DashboardLearnMore" />
            </BoxStyle>
            <InView triggerOnce={false}>
               {({ inView, ref }) => (
                  <motion.div
                     ref={ref}
                     initial="hidden"
                     animate={inView ? 'visible' : 'hidden'}
                     variants={animationVariantsRight}
                  >
                     <TitleConvenient>
                        Convenient results dashboard
                     </TitleConvenient>
                     <SubtitleConvenient>
                        Access candidates’ certificates, video interviews, and
                        writing samples through a free and secure dashboard.
                        Quickly and easily view applicant data with filtering
                        tools.
                     </SubtitleConvenient>
                  </motion.div>
               )}
            </InView>
         </ConvenientTypographyBox>
      </ConvenientContainer>
   )
}

export default Convenient

const ConvenientContainer = styled(Box)(() => ({
   width: '100%',
   marginBottom: '7.8125rem',
   display: 'flex',
   justifyContent: 'flex-end',
}))

const ConvenientTypographyBox = styled('div')(() => {
   return {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      maxWidth: '62.5rem',
   }
})

const TitleConvenient = styled('h2')(() => {
   return {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: 'rgba(35, 33, 42, 1)',
      marginBottom: '1rem',
      fontFamily: 'Poppins',
   }
})

const SubtitleConvenient = styled('p')(() => {
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
