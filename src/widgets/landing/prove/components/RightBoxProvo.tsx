import GraduationHat from '../../../../assets/icons/svgs/GraduationHat.svg'
import { motion } from 'framer-motion'
import PaperFirst from '../../../../assets/icons/svgs/PaperFirst.svg'
import ThirdPaperIcon from '../../../../assets/icons/svgs/ThirdPaperIcon.svg'
import SecondPaperIconShadow from '../../../../assets/icons/svgs/SecondPaperIconShadow.svg'
import FourthPaperIcon from '../../../../assets/icons/svgs/FourthPaperIcon.svg'
import NoteIcon from '../../../../assets/icons/svgs/NoteIcon.svg'
import FirstBook from '../../../../assets/icons/svgs/FirstBook.svg'
import SecondBookIcon from '../../../../assets/icons/svgs/SecondBookIcon.svg'
import ThirdBookIcon from '../../../../assets/icons/svgs/ThirdBookIcon.svg'
import ShadowBookIcon from '../../../../assets/icons/svgs/ShadowBookIcon.svg'
import { styled } from '@mui/material'
import { GraduationHatBoxAnimate } from '../model/AnimationProvo'

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
                  animate={{ y: 50, rotate: 0, opacity: 1 }}
                  initial={{ y: -100, rotate: 60, opacity: 0 }}
                  transition={{ ease: 'easeOut', duration: 2 }}
               >
                  <ThirdPaperIconProve src={ThirdPaperIcon} alt="PaperFirst" />
               </motion.div>

               <motion.div
                  animate={{ y: 50, rotate: 0, opacity: 1 }}
                  initial={{ y: -50, rotate: 60, opacity: 0 }}
                  transition={{ ease: 'easeOut', duration: 2 }}
                  style={{ position: 'absolute', zIndex: '10' }}
               >
                  <SecondPaperIconShadowProve
                     src={SecondPaperIconShadow}
                     alt="PaperFirst"
                  />
               </motion.div>

               <motion.div
                  animate={{ y: 50, rotate: 0, opacity: 1 }}
                  initial={{ y: 50, rotate: 100, opacity: 0 }}
                  transition={{ ease: 'easeOut', duration: 2 }}
               >
                  <FourthPaperIconProve
                     src={FourthPaperIcon}
                     alt="FourthPaperIcon"
                  />
               </motion.div>

               <motion.div
                  animate={{ y: 50, rotate: 0, opacity: 1 }}
                  initial={{ y: 50, rotate: 130, opacity: 0 }}
                  transition={{ ease: 'easeOut', duration: 2 }}
               >
                  <NoteIconProve src={NoteIcon} alt="PaperFirst" />
               </motion.div>

               <motion.div
                  animate={{ y: 50, rotate: 0, opacity: 1 }}
                  initial={{ y: -100, rotate: 10, opacity: 0 }}
                  transition={{ ease: 'easeOut', duration: 2 }}
                  style={{ position: 'absolute', zIndex: '1' }}
               >
                  <FirstBookProve src={FirstBook} alt="FirstBook" />
               </motion.div>

               <motion.div
                  animate={{ y: 50, x: 0, rotate: 0, opacity: 1 }}
                  initial={{ x: 100, rotate: 10, opacity: 0 }}
                  transition={{ ease: 'easeOut', duration: 2 }}
                  style={{ position: 'absolute', zIndex: '11' }}
               >
                  <SecondBookIconProve
                     src={SecondBookIcon}
                     alt="SecondBookIcon"
                  />
               </motion.div>

               <motion.div
                  animate={{ y: 50, x: 0, rotate: 0, opacity: 1 }}
                  initial={{ y: -100, x: -200, rotate: 10, opacity: 0 }}
                  transition={{ ease: 'easeOut', duration: 2 }}
               >
                  <ThirdBookIconProve src={ThirdBookIcon} alt="PaperFirst" />
               </motion.div>

               <motion.div
                  animate={{ y: 50, opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ ease: 'easeOut', duration: 2 }}
               >
                  <ShadowBookIconProve
                     src={ShadowBookIcon}
                     alt="ShadowBookIcon"
                  />
               </motion.div>
            </AllImagesBook>
         </BooksWithListBox>
      </RightBoxProvoAnotherName>
   )
}

export default RightBoxProvo

export const RightBoxProvoAnotherName = styled('div')(() => ({
   width: '100%',
   maxWidth: '37.125rem',
   height: '100%',
   maxHeight: '36.8125rem',
   marginTop: '4.4375rem',
}))

export const GraduationHatBox = styled('div')(() => ({
   width: '14.75rem',
   height: '15.1875rem',
   animation: `${GraduationHatBoxAnimate} 2s forwards`,
}))

export const BooksWithListBox = styled('div')(() => ({
   width: '37.125rem',
   height: '31.1875rem',
   position: 'relative',
   bottom: '9.5938rem',
}))

export const AllImagesBook = styled('div')(() => ({
   position: 'relative',
}))

export const PaperFirstProve = styled('img')(() => ({
   position: 'absolute',
   top: '-2.25rem ',
   right: '0',
}))

export const ThirdPaperIconProve = styled('img')(() => ({
   position: 'absolute',
   top: '1.25rem',
   left: '14.3125rem',
}))

export const SecondPaperIconShadowProve = styled('img')(() => ({
   position: 'absolute',
   top: '9.2125rem',
   left: '16.125rem',
}))

export const FourthPaperIconProve = styled('img')(() => ({
   position: 'absolute',
   top: '18.375rem',
   left: '0',
}))

export const NoteIconProve = styled('img')(() => ({
   position: 'absolute',
   top: '0.375rem',
   right: '1.375rem',
   zIndex: '22',
}))

export const FirstBookProve = styled('img')(() => ({
   position: 'absolute',
   top: '10.375rem',
   left: '14.375rem',
}))

export const SecondBookIconProve = styled('img')(() => ({
   position: 'absolute',
   top: '15.375rem',
   left: '15.625rem',
}))

export const ThirdBookIconProve = styled('img')(() => ({
   position: 'absolute',
   top: '19.915rem',
   left: '13.4375rem',
}))

export const ShadowBookIconProve = styled('img')(() => ({
   position: 'absolute',
   top: '22.8915rem',
   left: '72px',
}))
