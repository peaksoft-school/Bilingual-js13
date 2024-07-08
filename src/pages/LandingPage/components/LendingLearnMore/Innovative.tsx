import { Box } from '@mui/material';
import { InnovativeContainer, InnovativeSubtitle, InnovativeTitle, InnovativeTypographyBox } from './StyleLearnMore';
import SecurityLearnMore  from '../../../../assets/icons/svgs/SecurityLearnMore.svg';
import { InView } from 'react-intersection-observer'
import { FC } from 'react'
import {animationVariants} from './animateLogic'

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
        variants={animationVariants}>
          <InnovativeTitle>Innovative test security</InnovativeTitle>
          <InnovativeSubtitle>
            Industry-leading security protocols, individual test proctoring, and
            computer adaptive technology help prevent fraud and cheating and
            ensure results you can trust.
          </InnovativeSubtitle>
        </InnovativeTypographyBox>
             )}
             </InView>
        <Box>
          <img src={SecurityLearnMore} alt="SecurityLearnMore" />
        </Box>
      </InnovativeContainer>
    </>
  );
};

export default Innovative;
