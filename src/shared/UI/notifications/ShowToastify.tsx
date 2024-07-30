import { Box, styled } from '@mui/material'
import { toast, ToastOptions } from 'react-toastify'
import ErrorOutline from '../../../assets/icons/svgs/error-outline.svg?react'
import SuccessIcon from '../../../assets/icons/svgs/success-icon.svg?react'
import CancelIcon from '../../../assets/icons/svgs/cancel-icon.svg?react'

type ToastType = 'success' | 'error'

export const showToastify = (
   type: ToastType,
   title: React.ReactNode,
   message: React.ReactNode
) => {
   let icon
   if (type === 'success') {
      icon = <SuccessIcon />
   } else {
      icon = <ErrorOutline />
   }

   toast[type](
      <>
         <Icon>{icon}</Icon>
         <Title>{title}</Title>
         <Message>{message}</Message>
      </>,
      {
         position: 'top-right',
         autoClose: 600,
         hideProgressBar: true,
         closeOnClick: true,
         pauseOnHover: true,
         closeButton: <CustomCloseButton />,
      } as ToastOptions
   )
}

const Icon = styled(Box)(() => ({
   position: 'absolute',
   top: '24px',
}))

const Title = styled('h4')(() => ({
   color: '#4C4859',
   fontFamily: 'Gilroy',
   paddingLeft: '32px',
}))

const Message = styled('p')(() => ({
   paddingLeft: '32px',
   marginTop: '8px',
   color: '#646464',
   fontFamily: 'Poppins',
}))

const CustomCloseButton = styled(CancelIcon)(() => ({
   width: '24px',
   height: '24px',
   padding: '6px',
   cursor: 'pointer',
   fill: '#828282',
   position: 'absolute',
   top: '10px',
   right: '10px',

   '&:hover': {
      fill: 'black',
   },
}))
