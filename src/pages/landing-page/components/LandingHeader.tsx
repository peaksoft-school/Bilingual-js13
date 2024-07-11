import React, { useEffect, useState } from 'react'
import { AppBar, Toolbar, Box } from '@mui/material'
import logo from '../../../assets/logo/bilingual.png'
import { styled } from '@mui/material/styles'
import { motion } from 'framer-motion'
import Button from '../../../shared/UI/Button'

interface StyledAppBarProps {
   isSticky: boolean
}

const LandingHeader: React.FC = () => {
   const [isSticky, setIsSticky] = useState(false)

   useEffect(() => {
      const scrollHandler = () => {
         const scrollTop = window.scrollY
         setIsSticky(scrollTop > 0)
      }

      window.addEventListener('scroll', scrollHandler)

      return () => {
         window.removeEventListener('scroll', scrollHandler)
      }
   }, [])

   return (
      <StyledAppBar position="sticky" isSticky={isSticky}>
         <Toolbar className="toolbar">
            <Box className="box">
               <StyledLogo
                  initial="hidden"
                  animate={{ y: isSticky ? 0 : -15 }}
                  transition={{ type: 'spring', stiffness: 100 }}
                  src={logo}
                  alt="Logo"
               />
            </Box>
            <Box className="box">
               <Button type="button" customVariant="primary">
                  TO COME IN
               </Button>
               <Button
                  type="button"
                  customVariant="Octonary"
                  className="button"
               >
                  REGISTER
               </Button>
            </Box>
         </Toolbar>
      </StyledAppBar>
   )
}

const StyledAppBar = styled(AppBar)<StyledAppBarProps>(({ isSticky }) => ({
   transition: 'background-color 0.3s ease',
   backgroundColor: isSticky ? '#ffffff' : '#FCD200',
   boxShadow: isSticky ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',

   '& .toolbar': {
      justifyContent: 'space-between',
      margin: '24px 80px 12px 80px',
   },

   '& > .box': {
      display: 'flex',
      alignItems: 'center',
   },

   '& img': {
      width: '234px',
      height: '48px',
      cursor: 'pointer',
   },

   '& .button': {
      marginLeft: '22px',
      border: 'none',
   },
}))

const StyledLogo = styled(motion.img)({
   width: '234px',
   height: '48px',
   cursor: 'pointer',
   visibility: 'visible',
})

export default LandingHeader
