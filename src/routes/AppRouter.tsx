import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PrivatRouter from './PrivatRouter'
import { useAppSelector } from '../hooks/hooks'
import UserLoyaut from '../layouts/UserLoyaut'
import AdminLoyaut from '../layouts/AdminLoyaut'
import { userRoutes } from './userRouter'
import { guestRoutes } from './quesRoutes'
import { adminRoutes } from './adminRoutes'
import ErrorPage from './ErrorPage'
import Landing from '../pages/landing-page/Landing'
import GuestLayout from '../layouts/GuestLayout'

const AppRouter = () => {
   const { isAuth, role } = useAppSelector((state) => state.auth)

   console.log(role)
   console.log(isAuth);
   

   const router = createBrowserRouter([
      {
         path: '/',
         element: (
            <PrivatRouter
               isAuth={role === 'GUEST' ? !isAuth : isAuth}
               role={role}
               isAllowed={['USER', 'GUEST']}
               component={<Landing />}
               fallBackPath="/admin"
            />
         ),
      },
      {
         path: '/auth',
         element: (
            <PrivatRouter
               isAuth={!isAuth}
               role={role}
               isAllowed={['GUEST']}
               component={<GuestLayout />}
               fallBackPath="/"
            />
         ),
         children: guestRoutes,
      },

      {
         path: '/user',
         element: (
            <PrivatRouter
               isAuth={isAuth}
               role={role}
               isAllowed={['USER']}
               component={<UserLoyaut />}
               fallBackPath="/"
            />
         ),
         children: userRoutes,
      },

      {
         path: '/admin',
         element: (
            <PrivatRouter
               isAuth={isAuth}
               role={role}
               isAllowed={['ADMIN']}
               component={<AdminLoyaut />}
               fallBackPath="/"
            />
         ),
         children: adminRoutes,
      },

      {
         path: '*',
         element: <ErrorPage />,
      },
   ])

   return <RouterProvider router={router} />
}

export default AppRouter
