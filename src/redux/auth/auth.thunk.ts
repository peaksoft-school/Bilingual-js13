import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'
import { AxiosError } from 'axios'

interface AuthPayload {
   data: {
      firstName: string
      lastName: string
      email: string
      password: string
   }
   navigate: (path: string) => void
}

export const signUp = createAsyncThunk(
    'sign/signup',
    async ({ data, navigate }: AuthPayload, { rejectWithValue }) => {
       try {
          const response = await axiosInstance.post('/api/auth/signUp', data);
          navigate('/sign-in');
          return response.data;
       } catch (error) {
          const axiosError = error as AxiosError;
          if (axiosError.response) {
             switch (axiosError.response.status) {
                case 400:
                   return rejectWithValue('Bad Request');
                case 404:
                   return rejectWithValue('Endpoint not found');
                default:
                   return rejectWithValue(axiosError.response.data || axiosError.message);
             }
          }
          return rejectWithValue(axiosError.message);
       }
    }
 );
 