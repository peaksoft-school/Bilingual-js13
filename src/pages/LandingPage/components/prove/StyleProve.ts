import { styled } from '@mui/material'
import ProveBackground from '../../../../assets/icons/svgs/ProveBackground.svg'
import BacgkroundSecond from '../../../../assets/icons/svgs/BacgkroundSecond.svg'
import {
   GraduationHatBoxAnimate,
   LeftBoxProvoAnimateText,
} from './AnimationProvo'

export const ProvoContainer = styled('div')(() => {
   return {
      width: '100%',
      // maxWidth: '90rem',
      height: '100%',
      minHeight: '40.625rem',
      margin: '0 auto',
      background: `no-repeat center center url(${ProveBackground})`,
      backgroundSize: 'cover',
   }
})

export const ProvoBackroundUrl = styled('div')(() => ({
   width: '100%',
   maxWidth: '90rem',
   height: '100%',
   minHeight: '41.25rem',
   margin: '0 auto',

   background: `no-repeat center center url(${BacgkroundSecond})`,
   position: 'relative',
   backgroundSize: 'cover',
}))

export const ProvoContent = styled('div')(() => ({
   margin: '0 5rem',
   height: '660px',
}))

export const ProvoFlex = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
}))

export const LeftBoxProvoAnotherName = styled('div')(() => ({
   width: '100%',
   maxWidth: '39.6875rem',
   marginTop: '4.4375rem',
}))

export const AnimateBox = styled('div')(() => ({
   animation: `${LeftBoxProvoAnimateText} 2s forwards`,
}))

export const TitleProvo = styled('h1')(() => ({
   fontSize: '3.75rem',
   fontWeight: '700',
   lineHeight: '4.5338rem',
   fontFamily: 'Gilroy',
   color: 'rgba(67, 64, 78, 1)',
   marginBottom: '1.8125rem',
   '& span': {
      fontWeight: '900',
      color: 'rgba(201, 61, 125, 1)',
   },
}))

export const SubTitleProvo = styled('p')(() => ({
   fontSize: '1.25rem',
   fontWeight: '25rem',
   fontFamily: 'Poppins',
   lineHeight: '1.875rem',
   color: 'rgba(35, 33, 42, 1)',
   marginBottom: '1.875rem',
}))

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
