import { styled } from '@mui/material'
import SignInX from '../../../assets/icons/svgs/siginx/↳ Sign in/System.svg'
import singInImgBilingual from '../../../assets/icons/svgs/singInImgBilingual/↳ Sign in/Layer 2.svg'
import Input from '../../../shared/UI/Input'
import Switches from '../../../shared/UI/switches/Switches'
import Button from '../../../shared/UI/Button'
import signUpWithGoogle from '../../../assets/icons/svgs/sign-up-with-google/↳ Sign in/Group 337507.svg'

const SignIn = () => {
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
                     </SignInText>{' '}
                     <InputEmail label="Email" />
                     <InputPassword label="Password" />
                     <RememberBox>
                        <Switches variant="Tertiary" />
                        <p style={{ position: 'relative', right: 15 }}>
                           To remember me
                        </p>
                     </RememberBox>
                     <ButtonSignIn>SIGN IN</ButtonSignIn>
                     <ButtonWithGoogleBox>
                        <ButtonWithGoogle>
                           <img src={signUpWithGoogle} alt="signUpWithGoogle" />
                           SIGN UP WITH GOOGLE
                        </ButtonWithGoogle>
                     </ButtonWithGoogleBox>
                     <DontHaveAccauntBox>
                        <p>
                           DON'T HAVE AN ACCOUNT?{' '}
                           <span>
                              <a href="#">REGISTER</a>
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
   maxHeight: '620px',
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
      color: 'rgba(58, 16, 229, 1)'
   },
}))
