import {Outlet,useNavigate} from 'react-router-dom'
import { useAppDispatch } from '../hooks/hooks'
import { logoutHandler } from '../redux/auth/auth.thunk'


const AdminLoyaut = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const logOut = () => {
    dispatch(logoutHandler())
  }

  return (
    <div>
      <button onClick={logOut}>log out</button>
        <h1>Admin page</h1>
        <Outlet/>
    </div>
  )
}

export default AdminLoyaut