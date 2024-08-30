import { Box, styled } from '@mui/material'
import Input from '../../../../shared/UI/Input'
import Button from '../../../../shared/UI/Button'

const EvaluateHighLight = () => {
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
                              <span>Question Title:</span> Highlight the answer
                              to the questoin below
                           </p>
                           <p>
                              <span>Duration (in minutes):</span> 0:30
                           </p>
                           <p>
                              <span>Question Type:</span> Highlight the answer
                           </p>
                        </LeftBox>
                        <RightBox>
                           <h2>Evaluation</h2>
                           <p>Score: (1-10)</p>
                           <Input type="number" />
                        </RightBox>
                     </SubTitleBox>

                     <MainBox>
                        <Box className="respond">
                           <p>Respond: </p>
                           <h3 className="sed">
                              Sed ut perspiciatis unde omnis iste natus error
                              sit voluptatem accusantium doloremque laudantium,
                              totam rem aperiam, eaque ipsa quae ab illo
                              inventore veritatis et quasi architecto beatae
                              vitae dicta sunt explicabo. Nemo enim ipsam
                              voluptatem quia voluptas sit aspernatur aut odit
                              aut fugit, sed quia consequuntur magni dolores eos
                              qui ratione voluptatem sequi nesciunt. Neque porro
                              quisquam est, qui dolorem ipsum quia dolor sit
                              amet, consectetur, adipisci velit, sed quia non
                              numquam eius modi tempora incidunt ut labore et
                              dolore magnam aliquam quaerat voluptatem.
                           </h3>
                        </Box>
                        <h2 className="question">
                           Question Statement:{' '}
                           <span className="time">
                              “Describe a time you were surprised? what
                              happened?”
                           </span>
                        </h2>
                        <Box className="respond correct">
                           <p className="answer">Correct answer:</p>
                           <h3>
                              No one rejects, dislikes, or avoids pleasure
                              itself, because it is pleasure, but because those
                              who do not know how to pursue pleasure rationally
                              encounter consequences that are extremely painful.
                           </h3>
                        </Box>
                        <h2>User’s Answer </h2>
                        <Box className="respond">
                           <p>Respond: </p>
                           <h3 className="but">
                              "But I must explain to you how all this mistaken
                              idea of denouncing pleasure and praising pain was
                              born and I will give you a complete account of the
                              system. Sed ut perspiciatis unde omnis iste natus
                              error sit voluptatem accusantium doloremque
                              laudantium, totam rem aperiam.
                           </h3>
                        </Box>
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

export default EvaluateHighLight

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

const MainBox = styled('div')(() => ({
   marginTop: 31,
   marginBottom: 32,
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
   '& h3': {
      color: 'rgba(58, 16, 229, 1)',
      fontSize: 16,
      fontWeight: 400,
      marginBottom: 8,
      marginLeft: 5,
      lineHeight: '18.8px',
      marginTop: 4,
   },
   '& .respond': {
      display: 'flex',
   },
   '& .sed': {
      color: 'rgba(76, 72, 89, 1)',
   },
   '& .question': {
      marginTop: 20,
      marginBottom: 20,
   },
   '& .but': {
      color: 'rgba(76, 72, 89, 1)',
   },
   '& .answer': {
      width: 230,
   },
   '& .correct': {
      marginTop: 20,
      marginBottom: 46,
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
