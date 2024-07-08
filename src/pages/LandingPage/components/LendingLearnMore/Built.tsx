import { BuiltContainer, FlexContainer,BuiltTypography,BuitlTitle,BuiltSubTitle } from './StyleLearnMore';
import TheScience from '../../../../assets/icons/svgs/TheScience.svg';
import { Box } from '@mui/material';
import { InView } from 'react-intersection-observer'
import { FC } from 'react'
import {animationVariantsRight} from './animateLogic'

const Built: FC = () => {
  return (
    <>
      <BuiltContainer className="built">
        <FlexContainer>
          <Box>
            <img src={TheScience} alt="TheScience" />
          </Box>
          <InView triggerOnce={false}>
               {({ inView, ref }) => (
          <BuiltTypography
          ref={ref}
                     initial="hidden"
                     animate={inView ? 'visible' : 'hidden'}
                     variants={animationVariantsRight}>
            <BuitlTitle>
              Built on the latest assessment sciencee
            </BuitlTitle>
            <BuiltSubTitle >
              The Duolingo English Test is a computer adaptive test backed by
              rigorous research, with results that are highly correlated with
              other major assessments such as the TOEFL and the IELTS.
            </BuiltSubTitle>
          </BuiltTypography>
             )}
             </InView>
        </FlexContainer>
      </BuiltContainer>
    </>
  );
};

export default Built;