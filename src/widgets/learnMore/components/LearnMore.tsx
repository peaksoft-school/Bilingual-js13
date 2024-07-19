import LineLearnMore from '../../../assets/icons/svgs/LineLearnMore.svg'
import Built from './Built'
import ExpandBox from './ExpandBox'
import Innovative from './Innovative'
import SecureDesign from './SecureDesign'
import Button from '../../../shared/UI/Button'
import { Box, styled } from '@mui/material'
import { myButtonAnimation } from '../model/animateLogic'
import Convenient from './Convenient'

const LearnMore = () => {
   return (
      <ContainerBox>
         <MuiBox>
            <Title>Learn more</Title>

            <LineSvg>
               <img src={LineLearnMore} alt="LinerLearnMore" />
            </LineSvg>

            <ExpandBox />

            <Built />

            <Innovative />

            <Convenient />

            <SecureDesign />

            <ButtonLearnMore>
               <Button className="learn-more-button" customVariant="Undenary">
                  GET STARTED
               </Button>
            </ButtonLearnMore>
         </MuiBox>
      </ContainerBox>
   )
}

export default LearnMore

const ContainerBox = styled(Box)(() => {
   return {
      width: '100%',
      minHeight: '127.1875rem',
      height: '100%',
      padding: '1rem 8.1875rem 7.5rem 5rem',
      backgroundColor: '#fef5e8',
      position: 'relative',
      '& .learn-more-button': {
         cursor: 'pointer',
      },
   }
})

const MuiBox = styled(Box)(() => {
   return {
      maxWidth: '76.8125rem',
      width: '100%',
      minHeight: '119.6875rem',
      height: '100%',
   }
})

const Title = styled('h2')(() => {
   return {
      fontSize: '2.5rem',
      fontWeight: '700px',
      color: 'rgba(55, 82, 180, 1)',
      textAlign: 'center',
      fontFamily: 'Gilroy',
   }
})

const LineSvg = styled(Box)(() => {
   return {
      width: '24.375rem',
      height: '104.4375rem',
      position: 'absolute',
      top: '6.75rem',
      left: '32.9375rem',
      zIndex: '10',
   }
})

const ButtonLearnMore = styled('div')(() => {
   return {
      textAlign: 'center',
      marginLeft: '160px',
      cursor: 'pointer',
      animation: `${myButtonAnimation} 0.5s ease-in-out infinite alternate`,
   }
})
