import { Outlet,useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../hooks/hooks'
import { signIn } from '../redux/auth/auth.thunk'

const UserLoyaut = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
   const auth = () => {
    const data = {
      token: 'sdfsdfsd',
      email: 'SFASDFS',
      firstName: 'ADFSDF',
      lastName: 'SGFASFG',
    }
    dispatch(signIn({data,navigate}))
    navigate
   }
   return (
      <div>
         <h1>User page</h1>
         <button onClick={auth}>auth</button>
         <Outlet />
      </div>
   )
}

export default UserLoyaut
