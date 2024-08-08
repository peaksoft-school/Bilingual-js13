import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PrivatRouter from './PrivatRouter'
import { useAppSelector } from '../hooks/hooks'
import UserLoyaut from '../layouts/UserLoyaut'
import AdminLoyaut from '../layouts/AdminLoyaut'
import { userRoutes } from './userRouter'
import { guestRoutes } from './quesRoutes'
import { adminRoutes } from './adminRoutes'
import ErrorPage from './ErrorPage'

const AppRouter = () => {
   const { isAuth, role } = useAppSelector((state) => state.auth)
   console.log(role)

   const router = createBrowserRouter([
      {
         path: '/',
         element: (
            <PrivatRouter
               isAuth={role === 'GUEST' ? !isAuth : isAuth}
               role={role}
               isAllowed={['USER', 'GUEST']}
               component={<UserLoyaut />}
               fallBackPath="/admin"
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
         element: <ErrorPage/>,
      },
   ])

   return <RouterProvider router={router} />
}

export default AppRouter
