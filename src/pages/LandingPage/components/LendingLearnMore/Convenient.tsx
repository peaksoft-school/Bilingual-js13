import DashboardLearnMore from '../../../../assets/icons/svgs/DashboardLearnMore.svg';
import { Box } from '@mui/material';
import { TitleConvenient, SubtitleConvenient, ConvenientContainer, ConvenientTypographyBox } from './StyleLearnMore';
import { InView } from 'react-intersection-observer';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { animationVariantsRight } from './animateLogic';



const Convenient: FC = () => {
  return (
    <ConvenientContainer>
      <ConvenientTypographyBox>
        <Box>
          <img src={DashboardLearnMore} alt="DashboardLearnMore" />
        </Box>
        <InView triggerOnce={false}>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={animationVariantsRight}
            >
              <TitleConvenient>Convenient results dashboard</TitleConvenient>
              <SubtitleConvenient>
                Access candidates’ certificates, video interviews, and writing samples through a free and secure dashboard. Quickly and easily view applicant data with filtering tools.
              </SubtitleConvenient>
            </motion.div>
          )}
        </InView>
      </ConvenientTypographyBox>
    </ConvenientContainer>
  );
};

export default Convenient;
