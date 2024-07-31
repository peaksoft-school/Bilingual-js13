import { createAsyncThunk } from '@reduxjs/toolkit'
 import { routes } from '../../utils/routes/routes'

export const logoutHandler = createAsyncThunk('auth/logout', () => {
   localStorage.clear()
})

type Role = "GUEST" | "USER" | "ADMIN"

interface UserData {
    token: string;
    email: string;
    role: Role;
    firstName: string;
    lastName: string;
}

interface SignInParams {
    userData: any;
    navigate: (path: string) => void
}

export const signIn = createAsyncThunk(
   'auth/signIn',
   async ({ userData, navigate }: SignInParams) => {
      try {
         const data:UserData = {
            token: 'asd',
            email: 'asdf',
            role: 'ADMIN',
            firstName: 'adfs',
            lastName: 'adsfsd'

         } 
         localStorage.setItem(
            'BILINGUAL',
            JSON.stringify({
               token: data.token,
               role: data.role,
               email: data.email,
               firstName: data.firstName,
               lastName: data.lastName,
            })
         )
        if (routes[data.role]){
            navigate(routes[data.role].index);
        }else {
            throw new Error(`Unknown role: ${data.role}`)
        }
         return data
      } catch (error) {
        console.log(error);
      }
   }
)
