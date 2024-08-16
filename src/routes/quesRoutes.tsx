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
]
