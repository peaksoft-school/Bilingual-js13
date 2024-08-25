import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
   forgotPassword,
   ForgotPasswordResponse,
   signIn,
   signUp,
} from './auth.thunk'

const getInitialState = () => {
   const userInfo = localStorage.getItem('BILINGUAL')

   if (userInfo) {
      const parsedUserInfo = JSON.parse(userInfo)
      return {
         token: parsedUserInfo.token,
         role: parsedUserInfo.role,
         email: parsedUserInfo.email,
         link: parsedUserInfo.link,
         isAuth: true,
         firstName: parsedUserInfo.firstName,
         lastName: parsedUserInfo.lastName,
         isLoading: false,
         error: parsedUserInfo.error,
         message: parsedUserInfo.message,
         toastify: parsedUserInfo.toastify
      }
   }
   return {
      token: '',
      role: 'GUEST',
      email: '',
      link: '',
      isAuth: false,
      firstName: '',
      lastName: '',
      isLoading: false,
      error: '',
      message: '',
      toastify: false
   }
}

interface SignUpResponse {
   token: string
   role: string
   email: string
   link: string
   firstName: string
   lastName: string
   message: string
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
         .addCase(signIn.pending, (state) => {
            state.isLoading = true
            state.error = ''
         })
         .addCase(
            signIn.fulfilled,
            (state, action: PayloadAction<SignUpResponse>) => {
               const { token, role, email } = action.payload
               state.token = token
               state.role = role
               state.email = email
               state.isAuth = true
               state.isLoading = false
               state.error = ''
            }
         )
         .addCase(signIn.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload as string
         })
         .addCase(forgotPassword.pending, (state) => {
            state.isLoading = true
            state.error = ''
         })
         .addCase(
            forgotPassword.fulfilled,
            (state, action: PayloadAction<ForgotPasswordResponse>) => {
               console.log(action)
               const { message } = action.payload
               state.isLoading = false
               state.error = ''
               state.message = message
               state.toastify = true
            }
         )
         .addCase(forgotPassword.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload as string
         })
   },
})

export default authSlice.reducer
