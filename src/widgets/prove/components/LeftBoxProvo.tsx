import {
   LeftBoxProvoAnimateButton,
   LeftBoxProvoAnimateText,
} from '../model/AnimationProvo'
import { styled } from '@mui/material'
import Button from '../../../shared/UI/Button'

const AnimatedButton = styled(Button)`
   animation: ${LeftBoxProvoAnimateButton} 1s forwards;
`

export const LeftBoxProvo = () => {
   return (
      <>
         <LeftBoxProvoAnotherName>
            <AnimateBox>
               <TitleProvo>
                  Prove your English proficiency today with <br />
                  <span>BILINGUAL</span>
               </TitleProvo>
               <SubTitleProvo>
                  For nearly 30 years, learners have turned to Rosetta Stone to
                  build the fluency and confidence they need to speak new
                  languages.
               </SubTitleProvo>
            </AnimateBox>
            <AnimatedButton customVariant="Undenary">TO BEGIN</AnimatedButton>
         </LeftBoxProvoAnotherName>
      </>
   )
}

export default LeftBoxProvo

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
