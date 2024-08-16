import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { styled } from '@mui/material'
import SignInX from '../../../assets/icons/svgs/siginx/↳ Sign in/System.svg'
import singInImgBilingual from '../../../assets/icons/svgs/singInImgBilingual/↳ Sign in/Layer 2.svg'
import Input from '../../../shared/UI/Input'
import Switches from '../../../shared/UI/switches/Switches'
import Button from '../../../shared/UI/Button'
import signUpWithGoogle from '../../../assets/icons/svgs/sign-up-with-google/↳ Sign in/Group 337507.svg'
import { useNavigate } from 'react-router-dom'

type FormData = {
   email: string
   password: string
}

const schema = yup.object().shape({
   email: yup.string().email('Incorect email').required('Email is required'),
   password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required('Incorect Password'),
})

const SignIn = () => {
   const navigate = useNavigate()

   const {
      control,
      handleSubmit,
      formState: { errors },
   } = useForm({
      resolver: yupResolver(schema),
   })

   const onSubmit = (data: FormData) => {
      console.log(data)
   }

   const NaviateToSiginUp = () => {
      navigate('/auth/sign-up')
   }
   return (
      <>
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
                        <p>Sign in</p>
                     </SignInText>
                     <form onSubmit={handleSubmit(onSubmit)}>
                        <Controller
                           name="email"
                           control={control}
                           render={({ field }) => (
                              <InputEmail
                                 {...field}
                                 label="Email"
                                 error={!!errors.email}
                                 helperText={
                                    errors.email?.message as React.ReactNode
                                 }
                              />
                           )}
                        />
                        <Controller
                           name="password"
                           control={control}
                           render={({ field }) => (
                              <InputPassword
                                 {...field}
                                 label="Password"
                                 error={!!errors.password}
                                 helperText={
                                    errors.password?.message as React.ReactNode
                                 }
                              />
                           )}
                        />
                        <RememberBox>
                           <Switches variant="Tertiary" />
                           <p style={{ position: 'relative', right: 15 }}>
                              To remember me
                           </p>
                        </RememberBox>
                        <ButtonSignIn type="submit">SIGN IN</ButtonSignIn>
                     </form>
                     <ButtonWithGoogleBox>
                        <ButtonWithGoogle>
                           <img src={signUpWithGoogle} alt="signUpWithGoogle" />
                           SIGN UP WITH GOOGLE
                        </ButtonWithGoogle>
                     </ButtonWithGoogleBox>
                     <DontHaveAccauntBox>
                        <p>
                           DON'T HAVE AN ACCOUNT?
                           <span onClick={NaviateToSiginUp}>
                              <a href="#"> REGISTER</a>
                           </span>
                        </p>
                     </DontHaveAccauntBox>
                  </SignInContainer>
               </StyledContent>
            </StyledBox>
         </Container>
      </>
   )
}

export default SignIn

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
   minHeight: '620px',
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

const RememberBox = styled('div')(() => ({
   width: '100%',
   maxWidth: 180,
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   '& p': {
      color: 'rgba(117, 117, 117, 1)',
   },
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
      widht: 16,
      heiht: 16,
   },
   margin: '0 auto',
   '&:hover': {
      border: '2px solid rgba(58, 16, 229, 1)',
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
