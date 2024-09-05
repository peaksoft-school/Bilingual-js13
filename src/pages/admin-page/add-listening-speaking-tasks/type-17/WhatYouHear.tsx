import { styled } from '@mui/material'
import Input from '../../../../shared/UI/Input'
import Button from '../../../../shared/UI/Button'
import playIcon from '../../../../assets/icons/svgs/Play.svg'

const WhatYouHear = () => {
   return (
      <>
         <Container>
            <StyledBox>
               <StyledContent>
                  <TableContainerBox>
                     <Title>
                        <p className="user">
                           <span>User</span> Askarov Marat
                        </p>
                        <p>
                           <span>Test</span> Test number 1
                        </p>
                     </Title>

                     <SubTitleBox>
                        <LeftBox>
                           <h2>Test Question </h2>
                           <p>
                              <span>Question Title:</span> Type the statement
                              that you hear
                           </p>
                           <p>
                              <span>Duration (in minutes):</span> 0:30
                           </p>
                           <p>
                              <span>Question Type:</span> Type what you hear
                           </p>
                           <p>
                              <span>Mimimum number of words:</span> 3
                           </p>
                        </LeftBox>
                        <RightBox>
                           <h2>Evaluation</h2>
                           <p>Score: (1-10)</p>
                           <Input type="number" />
                        </RightBox>
                     </SubTitleBox>

                     <ButtonTextBox>
                        <Button>
                           <img src={playIcon} alt="playIcon" /> PLAY AUDIO
                        </Button>
                        <p>Correct ansver: “Hello, how is it going?”</p>
                     </ButtonTextBox>

                     <MainBox>
                        <h2>User’s Answer </h2>
                        <p>
                           <span>Entered Statement:</span> “Hello, how is it
                           going?”
                        </p>
                        <p>Number of plays: 1</p>
                     </MainBox>

                     <ButtonBox>
                        <Button className="goBack">GO BACK</Button>
                        <Button customVariant="secondary">SAVE</Button>
                     </ButtonBox>
                  </TableContainerBox>
               </StyledContent>
            </StyledBox>
         </Container>
      </>
   )
}

export default WhatYouHear

const Container = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   justifyContent: 'center',
   backgroundColor: '#d7e1f8',
   height: '100%',
   minHeight: '601px',
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
   marginTop: '68px',
}))

const TableContainerBox = styled('div')(() => ({
   width: '100%',
   maxWidth: '1093px',
   height: '100%',
   backgroundColor: 'white',
   boxShadow: '1px 1px 5px 1px rgba(196, 196, 196, 0.6)',
   borderRadius: 12,
   padding: '80px 50px',
   marginBottom: 113,
}))

const Title = styled('div')(() => ({
   marginBottom: 50,
   '& p': {
      fontSize: 18,
      fontWeight: 400,
      color: 'rgba(76, 72, 89, 1)',
      '& span': {
         color: 'rgba(55, 82, 180, 1)',
      },
   },
   '& .user': {
      marginTop: 6,
   },
}))

const SubTitleBox = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
}))

const LeftBox = styled('div')(() => ({
   '& h2': {
      fontSize: 18,
      fontWeight: 600,
      color: 'rgba(76, 72, 89, 1)',
      marginBottom: 14,
   },
   '& p': {
      fontSize: 16,
      fontWeight: 400,
      color: 'rgba(76, 72, 89, 1)',
      marginBottom: 8,
      '& span': {
         color: 'rgba(55, 82, 180, 1)',
      },
   },
}))

const RightBox = styled('div')(() => ({
   '& h2': {
      fontSize: 18,
      fontWeight: 600,
      color: 'rgba(76, 72, 89, 1)',
      marginBottom: 4,
   },
   '& p': {
      fontSize: 16,
      fontWeight: 400,
      color: 'rgba(55, 82, 180, 1)',
      marginBottom: 12,
   },
   '& input': {
      width: '100%',
      maxWidth: '94px',
   },
}))

const ButtonTextBox = styled('div')(() => ({
   marginTop: 40,
   marginBottom: 46,
   display: 'flex',
   '& button': {
      '& img': {
         marginRight: 8,
      },
   },
   '& p': {
      marginLeft: 18,
      marginTop: 10,
      fontSize: 16,
      fontWeight: 400,
      color: 'rgba(76, 72, 89, 1)',
   },
}))

const MainBox = styled('div')(() => ({
   marginBottom: 24,
   '& h2': {
      fontSize: 18,
      fontWeight: 500,
      color: 'rgba(76, 72, 89, 1)',
      marginBottom: 14,
   },
   '& p': {
      fontSize: 16,
      fontWeight: 500,
      color: 'rgba(76, 72, 89, 1)',
      marginBottom: 8,
   },
}))

const ButtonBox = styled('div')(() => ({
   textAlign: 'end',
   '& .goBack': {
      border: '2px solid rgba(58, 16, 229, 1)',
      backgroundColor: 'white',
      color: 'rgba(58, 16, 229, 1)',
      marginRight: 16,
   },
}))
