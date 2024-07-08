import { Box } from '@mui/material'
import {
   SecureDesignContainer,
   SecureDesignSubtitle,
   SecureDesignTitle,
   SecureDesignTypographyBox
} from './StyleLearnMore'
import DesignLearnMore from '../../../../assets/icons/svgs/DesignLearnMore.svg'
import { InView } from 'react-intersection-observer'
import { FC } from 'react'
import {animationVariants} from './animateLogic'



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
            <Box>
               <img src={DesignLearnMore} alt="DesignLearnMore" />
            </Box>
         </SecureDesignContainer>
      </>
   )
}

export default SecureDesign
