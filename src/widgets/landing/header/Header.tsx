import { Box, styled } from '@mui/material'
import Bilingual from '../../../assets/icons/svgs/bilingual-logo.svg'
import Button from '../../../shared/UI/Button'
import { useAppDispatch } from '../../../hooks/hooks'
import { authActions } from '../../../redux/auth/auth.slice'

const Header = () => {
   const dispatch = useAppDispatch()

   const logOut = () => {
      dispatch(authActions.logOut())
   }

   return (
      <Container>
         <StyledBox>
            <ContentBox>
               <Box>
                  <img src={Bilingual} alt="Bilingual" />
               </Box>
               <RightBox>
                  <ul>
                     <li className="tests">
                        <p>TESTS</p>
                     </li>
                     <li className="submited">
                        <p>SUBMITTED RESULTS</p>
                     </li>
                     <li>
                        <Button customVariant="Octonary" onClick={logOut}>
                           LOG OUT
                        </Button>
                     </li>
                  </ul>
               </RightBox>
            </ContentBox>
         </StyledBox>
      </Container>
   )
}

export default Header

const Container = styled('div')(() => ({
   width: '100%',
   height: '100%',
   maxHeight: 94,
   display: 'flex',
   justifyContent: 'center',
}))

const StyledBox = styled('div')(() => ({
   width: '100%',
   maxWidth: '1440px',
   height: '100%',
   maxHeight: 94,
   display: 'flex',
   justifyContent: 'center',
}))

const ContentBox = styled('div')(() => ({
   width: '100%',
   maxWidth: '1300px',
   height: '100%',
   maxHeight: 94,
   display: 'flex',
   justifyContent: 'space-between',
   padding: '26px 0',
}))

const RightBox = styled('div')(() => ({
   width: '100%',
   maxWidth: '411px',
   height: '100%',
   maxHeight: 94,
   '& ul': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      '& .tests': {
         fontSize: '15px',
         color: 'rgba(58, 16, 229, 1)',
         fontWeight: 700,
         fontFamily: 'Poppins',
      },
      '& .submited': {
         fontSize: '15px',
         color: 'rgba(76, 72, 89, 1)',
         fontWeight: 700,
         fontFamily: 'Poppins',
      },
      '& button': {
         fontSize: 14,
      },
   },
   '& li': {
      listStyle: 'none',
   },
}))
