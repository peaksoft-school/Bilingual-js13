import { createSlice } from '@reduxjs/toolkit'
import { logoutHandler, signIn } from './auth.thunk'

const getInitialState = () => {
   const data = localStorage.getItem('BILINGUAL')

   if (data) {
      const parsedData = JSON.parse(data)
      return {
         token: parsedData.token,
         role: parsedData.role,
         email: parsedData.email,
         isAuth: true,
         firstName: parsedData.firstName,
         lastName: parsedData.lastName,
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

export const authSlice = createSlice({
   name: 'auth',
   initialState: getInitialState(),
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(logoutHandler.fulfilled,() => {
         return getInitialState()
      })
      builder.addCase(signIn.fulfilled, (state,action) => {
         state.email = action.payload?.email
         state.firstName = action.payload?.firstName
         state.lastName = action.payload?.lastName
         state.role = action.payload?.role
         state.token = action.payload?.token
         state.isAuth = true
         state.isAuth = true

      })
   }
})
