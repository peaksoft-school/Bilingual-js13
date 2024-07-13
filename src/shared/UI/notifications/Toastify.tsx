import { styled } from '@mui/material'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Toastify = () => {
   return <StyledToastify icon={false} />
}

export default Toastify

const StyledToastify = styled(ToastContainer)(() => ({
   '& .Toastify__toast--success': {
      background: '#eafbe7',
      border: '1px solid #8CDB95',
   },
   '& .Toastify__toast--error': {
      background: '#fff1f0',
      border: '1px solid #fb9998',
   },

   '& .Toastify__toast-body': {
      padding: '16px 0px',
   },
}))
