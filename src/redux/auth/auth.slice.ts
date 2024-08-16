import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { signUp } from './auth.thunk'

const getInitialState = () => {
   const userInfo = localStorage.getItem('BILINGUAL')

   if (userInfo) {
      const parsedUserInfo = JSON.parse(userInfo)
      return {
         token: parsedUserInfo.token,
         role: parsedUserInfo.role,
         email: parsedUserInfo.email,
         isAuth: true,
         firstName: parsedUserInfo.firstName,
         lastName: parsedUserInfo.lastName,
         isLoading: false,
         error: '',
      }
   }
   return {
      token: '',
      role: 'GUEST',
      email: '',
      isAuth: false,
      firstName: '',
      lastName: '',
      isLoading: false,
      error: '',
   }
}

interface SignUpResponse {
   token: string
   role: string
   email: string
   firstName: string
   lastName: string
}

export const authSlice = createSlice({
   name: 'auth',
   initialState: getInitialState(),
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(signUp.pending, (state) => {
            state.isLoading = true
            state.error = ''
         })
         .addCase(
            signUp.fulfilled,
            (state, action: PayloadAction<SignUpResponse>) => {
               const { token, role, email, firstName, lastName } =
                  action.payload
               state.token = token
               state.role = role
               state.email = email
               state.firstName = firstName
               state.lastName = lastName
               state.isAuth = true
               state.isLoading = false
               state.error = ''
               
            }
         )
         .addCase(signUp.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload as string
         })
   },
})

export default authSlice.reducer
