import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'
import { AxiosError } from 'axios'

interface AuthPayload {
   data: {
      firstName?: string
      lastName?: string
      email?: string
      password?: string
   }
   navigate: (path: string) => void
}

export const signUp = createAsyncThunk(
   'sign/signup',
   async ({ data, navigate }: AuthPayload, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.post('/api/auth/signUp', data)
         navigate('/')
         return response.data
      } catch (error) {
         const axiosError = error as AxiosError
         return rejectWithValue(axiosError.message)
      }
   }
)

export const signIn = createAsyncThunk(
   'sign/signIn',
   async ({ data, navigate }: AuthPayload, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.post('/api/auth/signIn', data)
         navigate('/')
         return response.data
      } catch (error) {
         const axiosError = error as AxiosError
         return rejectWithValue(axiosError.message)
      }
   }
)

export const forgotPassword = createAsyncThunk(
   'forgot/forgotPassword',
   async ({ data, navigate }: AuthPayload, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.post('/api/auth/forgotPassword', data)
         navigate('/auth/reset-password')
         return response.data
      } catch (error) {
         const axiosError = error as AxiosError
         return rejectWithValue(axiosError.message)
      }
   }
)
