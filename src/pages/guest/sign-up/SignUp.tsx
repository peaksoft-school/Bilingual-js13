import { styled } from '@mui/material'
import SignInX from '../../../assets/icons/svgs/siginx/↳ Sign in/System.svg'
import singInImgBilingual from '../../../assets/icons/svgs/singInImgBilingual/↳ Sign in/Layer 2.svg'
import Input from '../../../shared/UI/Input'
import Button from '../../../shared/UI/Button'
import signUpWithGoogle from '../../../assets/icons/svgs/sign-up-with-google/↳ Sign in/Group 337507.svg'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { signUp } from '../../../redux/auth/auth.thunk'
import { useAppDispatch } from '../../../hooks/hooks'

const schema = yup.object().shape({
   firstName: yup.string().required('First name is required'),
   lastName: yup.string().required('Last name is required'),
   email: yup.string().email('Incorect email').required('Email is required'),
   password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required('Incorect Password'),
})

interface FormData {
   firstName: string
   lastName: string
   email: string
   password: string
}

const SignUp = () => {
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
         dispatch(signUp({ data, navigate }))
      } catch (error) {
         console.error('Error during signUp:', error)
      }
   }

   const NaviateToSiginIn = () => {
      navigate('/auth/sign-in')
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
                        <p>Create an Account</p>
                     </SignInText>
                     <InputFirstName
                        label="First name"
                        {...register('firstName')}
                        error={Boolean(errors.firstName)}
                        helperText={errors.firstName?.message}
                     />
                     <InputLastName
                        label="Last name"
                        {...register('lastName')}
                        error={Boolean(errors.lastName)}
                        helperText={errors.lastName?.message}
                     />
                     <InputEmail
                        label="Email"
                        {...register('email')}
                        error={Boolean(errors.email)}
                        helperText={errors.email?.message}
                     />
                     <InputPassword
                        label="Password"
                        type="password"
                        {...register('password')}
                        error={Boolean(errors.password)}
                        helperText={errors.password?.message}
                     />
                     <ButtonSignIn type="submit">SIGN UP</ButtonSignIn>
                     <ButtonWithGoogleBox>
                        <ButtonWithGoogle>
                           <img src={signUpWithGoogle} alt="signUpWithGoogle" />
                           SIGN UP WITH GOOGLE
                        </ButtonWithGoogle>
                     </ButtonWithGoogleBox>
                     <DontHaveAccauntBox>
                        <p>
                           ALREADY HAVE AN ACCOUNT?
                           <span onClick={NaviateToSiginIn}>
                              <a href="#"> LOG IN</a>
                           </span>
                        </p>
                     </DontHaveAccauntBox>
                  </SignInContainer>
               </StyledContent>
            </StyledBox>
         </Container>
      </form>
   )
}

export default SignUp

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
   minHeight: '716px',
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

const InputFirstName = styled(Input)(() => ({
   width: '100%',
   maxWidth: 500,
   marginBottom: 20,
}))

const InputLastName = styled(Input)(() => ({
   width: '100%',
   maxWidth: 500,
   marginBottom: 20,
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

const ButtonWithGoogleBox = styled('div')(() => ({
   width: '100%',
   maxWidth: 500,
   textAlign: 'center',
}))

const ButtonWithGoogle = styled(Button)(() => ({
   width: '100%',
   maxWidth: 280,
   border: '2px solid rgba(189, 189, 189, 1)',
   color: 'rgba(189, 189, 189, 1)',
   backgroundColor: 'white',
   fontWeight: 500,
   fontSize: 14,
   '& img': {
      marginRight: 10,
      width: 16,
      height: 16,
   },
   margin: '0 auto',
   '&:hover': {
      border: ' 2px solid rgba(58, 16, 229, 1)',
   },
}))

const DontHaveAccauntBox = styled('div')(() => ({
   marginTop: 24,
   width: '100%',
   maxWidth: 500,
   display: 'flex',
   justifyContent: 'center',
   fontSize: 16,
   fontWeight: 500,
   color: 'rgba(117, 117, 117, 1)',
   '& a': {
      textDecoration: 'none',
      color: 'rgba(58, 16, 229, 1)',
   },
}))
