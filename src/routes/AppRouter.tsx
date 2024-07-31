import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PrivatRouter from './PrivatRouter'
import { useAppSelector } from '../hooks/hooks'
import UserLoyaut from '../layouts/UserLoyaut'
import AdminLoyaut from '../layouts/AdminLoyaut'
import { userRoutes } from './userRouter'
import { guestRoutes } from './quesRoutes'
import { adminRoutes } from './adminRoutes'

const AppRouter = () => {
   const { isAuth, role } = useAppSelector((state) => state.auth)

   const router = createBrowserRouter([
      {
         path: '/',
         element: (
            <PrivatRouter
               isAuth={isAuth}
               role={role}
               isAllowed={['USER', 'GUEST']}
               component={<UserLoyaut />}
               fallBackPath="Admin"
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
         element: <h1>Not found</h1>
      },
   ])

   return <RouterProvider router={router} />
}

export default AppRouter
