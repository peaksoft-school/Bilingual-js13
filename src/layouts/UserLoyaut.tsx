import { Outlet } from 'react-router-dom'

const UserLoyaut = () => {
   return (
      <div>
         <h1>User page</h1>
         <button>auth</button>
         <Outlet />
      </div>
   )
}

export default UserLoyaut
