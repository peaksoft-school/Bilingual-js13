import { keyframes } from '@mui/material'

export const LeftBoxProvoAnimateText = keyframes`
  from {
    transform: translateX(-80px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 100;

  }
`

export const LeftBoxProvoAnimateButton = keyframes`
  from {
    transform: translateY(-400px) rotate(-240deg);
    opacity: 0;
  }
  to {
    transform: translateY(0px) rotate(0deg);
    opacity: 1;
  }
`

export const GraduationHatBoxAnimate = keyframes`
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 100;

  }
`
