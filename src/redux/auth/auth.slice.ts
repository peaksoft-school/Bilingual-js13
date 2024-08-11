import { createSlice } from '@reduxjs/toolkit'

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
      role: 'ADMIN',
      email: '',
      isAuth: true,
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
})
