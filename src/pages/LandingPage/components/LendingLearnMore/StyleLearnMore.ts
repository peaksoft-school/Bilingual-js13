import { Box, styled } from '@mui/material'
import { motion } from 'framer-motion'
import { myButtonAnimation } from './animateLogic'

export const ContainerBox = styled(Box)(() => {
   return {
      maxWidth: '90rem',
      width: '100%',
      minHeight: '127.1875rem',
      height: '100%',
      padding: '1rem 8.1875rem 7.5rem 5rem',
      backgroundColor: '#fef5e8',
      position: 'relative',
      zIndex: '-2',
      margin: '0 auto',
   }
})

export const MuiBox = styled(Box)(() => {
   return {
      maxWidth: '76.8125rem',
      width: '100%',
      minHeight: '119.6875rem',
      height: '100%',
   }
})

export const Title = styled('h2')(() => {
   return {
      fontSize: '2.5rem',
      fontWeight: '700px',
      color: 'rgba(55, 82, 180, 1)',
      textAlign: 'center',
      fontFamily: 'Gilroy',
   }
})

export const LineSvg = styled(Box)(() => {
   return {
      width: '24.375rem',
      height: '104.4375rem',
      position: 'absolute',
      top: '6.75rem',
      left: '32.9375rem',
      zIndex: '-1',
   }
})

// -----------------ExpandBox-style--------------------

export const ExpandBox = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   maxWidth: '52rem',
   width: '100%',
   marginTop: '3.875rem',
   marginBottom: '16.5625rem',
}))

export const TitleExpand = styled('h2')(() => {
   return {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: 'rgba(35, 33, 42, 1)',
      marginBottom: '1rem',
      fontFamily: 'Poppins',
   }
})

export const Subtitle = styled('p')(() => {
   return {
      fontSize: '1rem',
      fontWeight: '25rem',
      lineHeight: '1.5rem',
      color: 'rgba(35, 33, 42, 1)',
      width: '100%',
      maxWidth: '30.875rem',
      fontFamily: 'Poppins',
   }
})

// -----------------BuiltContainer-style--------------------

export const BuiltContainer = styled('div')(() => {
   return {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
      marginBottom: '6.5625rem',
   }
})

export const FlexContainer = styled('div')(() => {
   return {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      maxWidth: '62.32rem',
   }
})

export const BuiltTypography = styled(motion.div)(() => {
   return {
      width: '100%',
      maxWidth: '30.875rem',
   }
})

export const BuitlTitle = styled('h2')(() => {
   return {
      fontSize: '1.5rem',
      fontWeight: '37.5rem',
      color: 'rgba(35, 33, 42, 1)',
      marginBottom: '1rem',
      fontFamily: 'Poppins',
   }
})

export const BuiltSubTitle = styled('p')(() => {
   return {
      fontSize: '1rem',
      fontWeight: '400',
      lineHeight: '1.5rem',
      color: 'rgba(35, 33, 42, 1)',
      fontFamily: 'Poppins',
   }
})

// ----------------innovative-style------------------------

export const InnovativeContainer = styled('div')(() => {
   return {
      width: '100%',
      maxWidth: '58.5625rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '143px',
   }
})

export const InnovativeTypographyBox = styled(motion.div)(() => {
   return {
      width: '100%',
      maxWidth: '30.875rem',
   }
})

export const InnovativeTitle = styled('h2')(() => {
   return {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: 'rgba(35, 33, 42, 1)',
      marginBottom: '1rem',
      fontFamily: 'Poppins',
   }
})

export const InnovativeSubtitle = styled('p')(() => {
   return {
      fontSize: '1rem',
      fontWeight: '400',
      lineHeight: '1.5rem',
      color: 'rgba(35, 33, 42, 1)',
      fontFamily: 'Poppins',
   }
})

// ----------------Convenient-style------------------------

export const ConvenientContainer = styled(Box)(() => ({
   width: '100%',
   marginBottom: '7.8125rem',
   display: 'flex',
   justifyContent: 'flex-end',
}))

export const ConvenientTypographyBox = styled('div')(() => {
   return {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      maxWidth: '62.5rem',
   }
})

export const TitleConvenient = styled('h2')(() => {
   return {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: 'rgba(35, 33, 42, 1)',
      marginBottom: '1rem',
      fontFamily: 'Poppins',
   }
})

export const SubtitleConvenient = styled('p')(() => {
   return {
      fontSize: '1rem',
      fontWeight: '25rem',
      lineHeight: '1.5rem',
      color: 'rgba(35, 33, 42, 1)',
      width: '100%',
      maxWidth: '30.875rem',
      fontFamily: 'Poppins',
   }
})

// ----------------SecureDesign-style------------------------

export const SecureDesignContainer = styled('div')(() => {
   return {
      width: '100%',
      maxWidth: '61.6875rem',
      marginBottom: '8.75rem',
      display: 'flex',
      justifyContent: 'space-between',
   }
})

export const SecureDesignTypographyBox = styled(motion.div)(() => {
   return {
      width: '100%',
      maxWidth: '30.875rem',
   }
})

export const SecureDesignTitle = styled('h2')(() => {
   return {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: 'rgba(35, 33, 42, 1)',
      marginBottom: '1rem',
      fontFamily: 'Poppins',
   }
})

export const SecureDesignSubtitle = styled('p')(() => {
   return {
      fontSize: '1rem',
      fontWeight: '400',
      lineHeight: '1.5rem',
      color: 'rgba(35, 33, 42, 1)',
      width: '100%',
      maxWidth: '30.875rem',
      fontFamily: 'Poppins',
   }
})

// ----------------Button-style------------------------

export const ButtonLearnMore = styled('div')(() => {
   return {
      textAlign: 'center',
      marginLeft: '160px',
      animation: `${myButtonAnimation} 0.5s ease-in-out infinite alternate`,
   }
})
