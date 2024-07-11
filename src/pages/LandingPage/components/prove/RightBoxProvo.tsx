import GraduationHat from '../../../../assets/icons/svgs/GraduationHat.svg';
import {
  AllImagesBook,
  BooksWithListBox,
  FirstBookProve,
  FourthPaperIconProve,
  GraduationHatBox,
  NoteIconProve,
  PaperFirstProve,
  RightBoxProvoAnotherName,
  SecondBookIconProve,
  SecondPaperIconShadowProve,
  ShadowBookIconProve,
  ThirdBookIconProve,
  ThirdPaperIconProve,
} from './StyleProve';
import { motion } from 'framer-motion';
import PaperFirst from '../../../../assets/icons/svgs/PaperFirst.svg';
import ThirdPaperIcon from '../../../../assets/icons/svgs/ThirdPaperIcon.svg';
import SecondPaperIconShadow from '../../../../assets/icons/svgs/SecondPaperIconShadow.svg';
import FourthPaperIcon from '../../../../assets/icons/svgs/FourthPaperIcon.svg';
import NoteIcon from '../../../../assets/icons/svgs/NoteIcon.svg';
import FirstBook from '../../../../assets/icons/svgs/FirstBook.svg';
import SecondBookIcon from '../../../../assets/icons/svgs/SecondBookIcon.svg';
import ThirdBookIcon from '../../../../assets/icons/svgs/ThirdBookIcon.svg';
import ShadowBookIcon from '../../../../assets/icons/svgs/ShadowBookIcon.svg';

export const RightBoxProvo = () => {
  return (
    <RightBoxProvoAnotherName>
      <GraduationHatBox>
        <img src={GraduationHat} alt="GraduationHat" />
      </GraduationHatBox>
      <BooksWithListBox>
        <AllImagesBook>
          <motion.div
            animate={{ y: 50, opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ ease: 'easeOut', duration: 2 }}
          >
            <PaperFirstProve src={PaperFirst} alt="PaperFirst" />
          </motion.div>

          <motion.div
            animate={{ y: 50,rotate: 0, opacity: 1 }}
            initial={{ y: -100,rotate: 60, opacity: 0 }}
            transition={{ ease: 'easeOut', duration: 2 }}
          >
            <ThirdPaperIconProve src={ThirdPaperIcon} alt="PaperFirst" />
          </motion.div>

          <motion.div
             animate={{ y: 50,rotate: 0, opacity: 1 }}
             initial={{ y: -50,rotate: 60, opacity: 0 }}
            transition={{ ease: 'easeOut', duration: 2 }}
            style={{ position: 'absolute', zIndex: '10' }}
          >
            <SecondPaperIconShadowProve
              src={SecondPaperIconShadow}
              alt="PaperFirst"
            />
          </motion.div>

          <motion.div
             animate={{ y: 50,rotate: 0, opacity: 1 }}
             initial={{ y: 50,rotate: 100, opacity: 0 }}
            transition={{ ease: 'easeOut', duration: 2 }}
          >
            <FourthPaperIconProve src={FourthPaperIcon} alt="FourthPaperIcon" />
          </motion.div>

          <motion.div
           animate={{ y: 50,rotate: 0, opacity: 1 }}
           initial={{ y: 50,rotate: 130, opacity: 0 }}
            transition={{ ease: 'easeOut', duration: 2 }}
          >
            <NoteIconProve src={NoteIcon} alt="PaperFirst" />
          </motion.div>

          <motion.div
         animate={{ y: 50,rotate: 0, opacity: 1 }}
         initial={{ y: -100,rotate: 10, opacity: 0 }}
            transition={{ ease: 'easeOut', duration: 2 }}
            style={{ position: 'absolute', zIndex: '1' }}
          >
            <FirstBookProve src={FirstBook} alt="FirstBook" />
          </motion.div>

          <motion.div
         animate={{ y: 50,x: 0,rotate: 0, opacity: 1 }}
         initial={{ x: 100,rotate: 10, opacity: 0 }}
            transition={{ ease: 'easeOut', duration: 2 }}
            style={{ position: 'absolute', zIndex: '11' }}
          >
            <SecondBookIconProve src={SecondBookIcon} alt="SecondBookIcon" />
          </motion.div>

          <motion.div
            animate={{ y: 50,x: 0,rotate: 0, opacity: 1 }}
            initial={{ y: -100,x: -200,rotate: 10, opacity: 0 }}
            transition={{ ease: 'easeOut', duration: 2 }}
          >
            <ThirdBookIconProve src={ThirdBookIcon} alt="PaperFirst" />
          </motion.div>

          <motion.div
            animate={{ y: 50, opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ ease: 'easeOut', duration: 2 }}
          >
            <ShadowBookIconProve src={ShadowBookIcon} alt="ShadowBookIcon" />
          </motion.div>
        </AllImagesBook>
      </BooksWithListBox>
    </RightBoxProvoAnotherName>
  );
};

export default RightBoxProvo;
