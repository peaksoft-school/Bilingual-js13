import GlobusLearnMore from '../../../../assets/icons/svgs/GlobusLearnMore.svg';
import { Box } from '@mui/material';
import { ExpandBox as ExpandBoxGlobus } from './StyleLearnMore';
import { TitleExpand,Subtitle } from './StyleLearnMore';
import { InView } from 'react-intersection-observer'
import { FC } from 'react'
import {animationVariants} from './animateLogic'
import { motion } from 'framer-motion';

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
        variants={animationVariants}>
          <TitleExpand>Expand your applicant pool</TitleExpand>
          <Subtitle>
            Tap into a diverse pool of candidates from 210+ countries and
            territories of origin, who have taken the Bilingual English Test
            because of its radical accessibility.
          </Subtitle>
        </Box>
           )}
           </InView>
        <Box>
          <img src={GlobusLearnMore} alt="GlobusLearnMore" />
        </Box>
      </ExpandBoxGlobus>
    </>
  );
};

export default ExpandBox;
