import { Card, keyframes, styled } from '@mui/material'

export const ContainerUsefulVideo = styled('div')(() => {
   return {
      width: '100%',
      maxWidth: '90rem',
      padding: '0rem 5.9375rem 7.5rem 5.9375rem ',
      backgroundColor: '#fef5e8',
      margin: '0 auto',
   }
})

export const TitleUsefulVideo = styled('h2')(() => {
   return {
      fontSize: '2.5rem',
      fontWeight: '700',
      fontFamily: 'Gilroy',
      color: 'rgba(55, 82, 180, 1)',
      textAlign: 'center',
      marginBottom: '3rem',
   }
})

export const ContentUsefulVideo = styled('div')`
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
`

export const UsefulVideoAnimate = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.15);
  }
  100% {
    transform: scale(1.1);
    box-shadow: 10px 10px 50px 10px rgba(0, 0, 0, 1);
  }
`

export const AnimatedCard = styled(Card)`
   width: 100%;
   max-width: 370px;
   border-radius: 1rem;
   transition:
      transform 0.5s,
      box-shadow 0.5s;

   &:hover {
      transform: scale(1.1);
      box-shadow: 10px 10px 50px 10px rgba(0, 0, 0, 1);
   }
`
