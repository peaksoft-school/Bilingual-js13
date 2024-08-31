import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'
import { AxiosError } from 'axios'
import { showToastify } from '../../shared/UI/notifications/ShowToastify'

interface AuthPayload {
   data: {
      firstName?: string
      lastName?: string
      email?: string
      password?: string
      link?: string
   }
   navigate: (path: string) => void
}

export interface ErrorResponse {
   exceptionMessage?: string
}

export interface ForgotPasswordParams {
   email: string
   navigate: (path: string) => void
   link: string
}

export interface ForgotPasswordResponse {
   message: string
}

export interface resetPasswordParams {
   data: {
      token: string
      newPassword: string
      oldPassword: string
   }
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
         const axiosError = error as AxiosError<ErrorResponse>

         return rejectWithValue(
            axiosError.response?.data?.exceptionMessage || axiosError.message
         )
      }
   }
)

export const forgotPassword = createAsyncThunk<
   ForgotPasswordResponse,
   ForgotPasswordParams,
   { rejectValue: string }
>(
   'forgot/forgotPassword',
   async ({ email, navigate, link }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.post(
            `/api/auth/forgotPassword?email=${email}&link=${link}`
         )
         navigate('/')
         showToastify(
            'success',
            'Success!',
            'Your request was successfully completed.'
         )

         return response.data
      } catch (error) {
         const axiosError = error as AxiosError
         showToastify(
            'error',
            'Error',
            'An error occurred while processing your request.'
         )

         return rejectWithValue(axiosError.message)
      }
   }
)

export const resetPassword = createAsyncThunk<
   resetPasswordParams,
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   any,
   { rejectValue: string }
>(
   'reset/resetPassword',
   async ({ navigate, newPassword, token }, { rejectWithValue }) => {
      console.log(token, 'hello')
      try {
         const { data } = await axiosInstance.post(`/api/auth/resetPassword`, {
            token: token,
            newPassword: newPassword,
         })
         navigate('/')
         return data
      } catch (error) {
         const axiosError = error as AxiosError
         return rejectWithValue(axiosError.message)
      }
   }
)
