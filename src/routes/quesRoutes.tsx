import ChangePassword from '../pages/guest/change-password/ChangePassword'
import ForgotPassword from '../pages/guest/forgot-password/ForgotPassword'
import ResetPassword from '../pages/guest/reset-password/ResetPassword'
import SignIn from '../pages/guest/sign-in/SignIn'
import SignUp from '../pages/guest/sign-up/SignUp'

export const guestRoutes = [
   {
      path: 'sign-in',
      element: <SignIn />,
   },
   {
      path: 'sign-up',
      element: <SignUp />,
   },
   {
      path: 'reset-password/:token',
      element: <ResetPassword />,
   },
   {
      path: 'forgot-password',
      element: <ForgotPassword />,
   },
   {
      path: 'change-password',
      element: <ChangePassword />,
   },
]
