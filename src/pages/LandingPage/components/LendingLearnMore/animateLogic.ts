import { keyframes } from '@mui/material'


export const animationVariants = {
    hidden: { opacity: 0, x: '-16%' },
    visible: {
       opacity: 1,
       x: '0%',
       transition: { duration: 1, ease: 'easeOut' },
    },
  }

  export const animationVariantsRight = {
   hidden: { opacity: 0, x: '28%' },
   visible: {
     opacity: 1,
     x: '0%',
     transition: { duration: 1, ease: 'easeOut' },
   },
 };

 export const myButtonAnimation = keyframes`
  0% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
`;