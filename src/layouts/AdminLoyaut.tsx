import { Outlet } from 'react-router-dom'
import Header from '../widgets/landing/header/Header'

const AdminLoyaut = () => {
   return (
      <>
         <Header />
         <Outlet />
      </>
   )
}

export default AdminLoyaut
