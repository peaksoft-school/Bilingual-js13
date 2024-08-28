import { styled } from '@mui/material'
import SignInX from '../../../assets/icons/svgs/siginx/↳ Sign in/System.svg'
import singInImgBilingual from '../../../assets/icons/svgs/singInImgBilingual/↳ Sign in/Layer 2.svg'
import Input from '../../../shared/UI/Input'
import Button from '../../../shared/UI/Button'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigate, useParams } from 'react-router-dom'
import { resetPassword } from '../../../redux/auth/auth.thunk'
import { useAppDispatch } from '../../../hooks/hooks'

const schema = yup.object().shape({
   newPassword: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required('Incorect Password'),
   confirmPassword: yup
      .string()
      .oneOf([yup.ref('newPassword'), undefined], 'Passwords must match')
      .required('Incorect Password'),
})

interface FormData {
   newPassword: string
   confirmPassword: string
}

const ResetPassword = () => {
   const navigate = useNavigate()
   const dispatch = useAppDispatch()
   const { token } = useParams()
   console.log(token)

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FormData>({
      resolver: yupResolver(schema),
   })

   const onSubmit: SubmitHandler<FormData> = ({
      newPassword,
      confirmPassword,
   }) => {
  if (newPassword === confirmPassword) {
      if (token) {
         dispatch(
            resetPassword({
               navigate,
               newPassword,
               token,
            })
         )
      } else {
         console.error('Token is missing')
      }
   }
   }

   const navigateToSignIn  = () => {
      navigate('/auth/sign-in')
   }

   const navigateToSignUp  = () => {
      navigate('/auth/sign-up')
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <Container>
            <StyledBox>
               <StyledContent>
                  <SignInContainer>
                     <ImgBox>
                        <img src={SignInX} alt="SignInX" />
                     </ImgBox>
                     <SingInImgBilingualBox>
                        <img
                           src={singInImgBilingual}
                           alt="singInImgBilingual"
                        />
                     </SingInImgBilingualBox>
                     <SignInText>
                        <p>Password reset</p>
                     </SignInText>

                     <InputEmail
                        label="New Password"
                        {...register('newPassword')}
                        error={Boolean(errors.newPassword)}
                        helperText={errors.newPassword?.message}
                     />
                     <InputPassword
                        label="Confirm your new password"
                        {...register('confirmPassword')}
                        error={Boolean(errors.confirmPassword)}
                        helperText={errors.confirmPassword?.message}
                     />
                     <ButtonSignIn type="submit">Reset password</ButtonSignIn>
                     <LinkContainer>
                        <Button onClick={navigateToSignIn }>SIGN IN</Button>
                        <Button onClick={navigateToSignUp }>SIGN UP</Button>
                     </LinkContainer>
                  </SignInContainer>
               </StyledContent>
            </StyledBox>
         </Container>
      </form>
   )
}

export default ResetPassword

const Container = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   justifyContent: 'center',
}))

const StyledBox = styled('div')(() => ({
   width: '100%',
   maxWidth: '1440px',
}))

const StyledContent = styled('div')(() => ({
   width: '100%',
   maxWidth: '1300px',
   display: 'flex',
   justifyContent: 'center',
}))

const SignInContainer = styled('div')(() => ({
   width: '100%',
   maxWidth: '616px',
   height: '100%',
   marginTop: '74px',
   backgroundColor: 'white',
   borderRadius: 10,
   padding: '20px 20px 64px 58px',
   display: 'flex',
   flexDirection: 'column',
}))

const ImgBox = styled('div')(() => ({
   textAlign: 'end',
   '& img': {
      width: 34,
      height: 34,
   },
}))

const SingInImgBilingualBox = styled('div')(() => ({
   textAlign: 'center',
   marginTop: 12,
   '& img': {
      width: 46,
      height: 40,
   },
}))

const SignInText = styled('div')(() => ({
   marginTop: 12,
   marginBottom: 32,
   textAlign: 'center',
   '& p': {
      fontSize: 24,
      fontWeight: 500,
      color: 'rgba(76, 72, 89, 1)',
   },
}))

const InputEmail = styled(Input)(() => ({
   width: '100%',
   maxWidth: 500,
}))

const InputPassword = styled(Input)(() => ({
   width: '100%',
   maxWidth: 500,
   marginTop: 20,
   marginBottom: 10,
}))

const ButtonSignIn = styled(Button)(() => ({
   marginTop: 30,
   fontWeight: 500,
   marginBottom: 34,
   width: '100%',
   maxWidth: 500,
}))

const LinkContainer = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   width: '100%',
   maxWidth: 500,
   '& Button': {
      color: '#3a10e5',
      backgroundColor: 'white',
      '&:hover': {
         backgroundColor: '#3a10e5',
      },
   },
}))
