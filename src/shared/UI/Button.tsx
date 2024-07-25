import { Button as MuiButton, ButtonProps, styled } from '@mui/material'
import { FC, MouseEvent } from 'react'

interface CustomButtonProps extends ButtonProps {
   children: React.ReactNode
   onClick?: (event: MouseEvent<HTMLButtonElement>) => void
   type?: 'button' | 'submit' | 'reset'
   customVariant?: 'primary' | 'secondary' | 'Octonary' | 'Undenary' | 'Nonary'
}

const Button: FC<CustomButtonProps> = ({
   onClick,
   type = 'button',
   customVariant = 'primary',
   children,
   disabled,
   variant,
   ...rest
}) => {
   return (
      <StyledButton
         sx={{ cursor: 'pointer' }}
         onClick={onClick}
         type={type}
         customVariant={customVariant}
         disabled={disabled}
         variant={variant}
         childrenContent={children}
         {...rest}
      >
         {children}
      </StyledButton>
   )
}

export default Button

const buttonStyles = {
   primary: (childrenContent: React.ReactNode) => ({
      backgroundColor:
         childrenContent === 'CANCEL' ? '#fff' : 'rgba(58, 16, 229, 1)',
      color: childrenContent === 'CANCEL' ? 'rgba(58, 16, 229, 1)' : '#fff',
      padding: '10px 24px 10px 24px',
      fontSize: '14px',
      fontWeight: '700',
      borderRadius: '8px',
      border: childrenContent === 'CANCEL' ? 'solid 2px blue' : 'none',

      '&:hover': {
         backgroundColor: 'rgba(58, 16, 229, 0.9)',
         color: '#fff',
      },
      '&:active': {
         backgroundColor: 'rgba(48, 7, 218, 1)',
      },
      '&.Mui-disabled': {
         backgroundColor: childrenContent === 'NEXT' ? '#c4c4c4' : '#fefeff',
         color: childrenContent === 'NEXT' ? '#fefeff' : '#c4c4c4',
         border:
            childrenContent === 'NEXT'
               ? '2px solid #fefeff'
               : '2px solid #c4c4c4',
      },
   }),
   secondary: {
      backgroundColor: 'rgba(42, 185, 48, 1)',
      color: '#ffffff',
      padding: '12.5px 20px',
      fontSize: '14px',
      borderRadius: '8px',
      '&:hover': {
         backgroundColor: '#31cf38',
      },
      '&:active': {
         backgroundColor: '#08af10',
      },
      '&.Mui-disabled': {
         backgroundColor: '#fefeff',
         color: '#c4c4c4',
         border: '2px solid #c4c4c4',
      },
   },
   Octonary: {
      backgroundColor: 'rgba(255, 255, 255, 1)',
      color: 'rgba(76, 76, 76, 1)',
      padding: '13px 24px 13px 24px',
      fontSize: '14px',
      borderRadius: '8px',
      border: '2px solid rgba(76, 72, 89, 1)',

      '&:hover': {
         backgroundColor: 'rgba(58, 16, 229, 1)',
         border: '2px solid rgba(58, 16, 229, 1)',

         color: '#ffffff',
      },
      '&:active': {
         backgroundColor: 'rgba(48, 7, 218, 1)',
      },

      '&.Mui-disabled': {
         backgroundColor: '#fefeff',
         color: '#c4c4c4',
         border: '2px solid #c4c4c4',
      },
   },
   Undenary: {
      width: '200px',
      height: '60px',
      backgroundImage: 'url(https://i.postimg.cc/138RYYKW/button.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '15px',
      paddingBottom: '15px',
      transition: 'opacity 0.3s ease-in-out',
      '&:hover': {
         opacity: 0.8,
      },
      '&:active': {
         opacity: 1,
      },
   },
   Nonary: {
      color: 'black',
      backgroundColor: '#f2f2f7',
      padding: '13px 24px',
      borderRadius: '12px',
      '&:hover': {
         backgroundColor: '#f3eded',
         border: 'none',
      },
      '&:active': {
         backgroundColor: '#e9e3e3',
      },
   },
}

const StyledButton = styled(MuiButton)<{
   customVariant: keyof typeof buttonStyles
   childrenContent: React.ReactNode
}>(({ customVariant, childrenContent }) => ({
   ...(typeof buttonStyles[customVariant] === 'function'
      ? buttonStyles[customVariant](childrenContent)
      : buttonStyles[customVariant]),
}))
