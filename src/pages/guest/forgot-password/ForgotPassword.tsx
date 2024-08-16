import { styled } from '@mui/material'
import SignInX from '../../../assets/icons/svgs/siginx/↳ Sign in/System.svg'
import singInImgBilingual from '../../../assets/icons/svgs/singInImgBilingual/↳ Sign in/Layer 2.svg'
import Input from '../../../shared/UI/Input'
import Button from '../../../shared/UI/Button'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { forgotPassword,  } from '../../../redux/auth/auth.thunk'
import { useAppDispatch } from '../../../hooks/hooks'

const schema = yup.object().shape({
   email: yup.string().email('Incorect email').required('Email is required'),
   link: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required('Incorect Password'),
})

interface FormData {
   email: string
   link: string
}

const ForgotPassword = () => {
   const navigate = useNavigate()
   const dispatch = useAppDispatch()

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FormData>({
      resolver: yupResolver(schema),
   })

   const onSubmit: SubmitHandler<FormData> = (data) => {
      console.log('Form is valid, submit the form:', data)
      try {
         dispatch(forgotPassword({ data, navigate }))
      } catch (error) {
         console.error('Error during signUp:', error)
      }
   }

   const NaviateToSiginIn = () => {
      navigate('/auth/sign-in')
   }

   const NaviateToSiginUp = () => {
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
                        <p>Password recovery</p>
                     </SignInText>

                     <InputEmail
                        label="Email"
                        {...register('email')}
                        error={Boolean(errors.email)}
                        helperText={errors.email?.message}
                     />
                     <InputPassword
                        label="link"
                        type="text"
                        {...register('link')}
                        error={Boolean(errors.link)}
                        helperText={errors.link?.message}
                     />
                     <ButtonSignIn type="submit">SEND</ButtonSignIn>
                     <LinkContainer>
                        <Button onClick={NaviateToSiginIn}>SIGN IN</Button>
                        <Button onClick={NaviateToSiginUp}>SIGN UP</Button>
                     </LinkContainer>
                  </SignInContainer>
               </StyledContent>
            </StyledBox>
         </Container>
      </form>
   )
}

export default ForgotPassword

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

      }
   },
}))
