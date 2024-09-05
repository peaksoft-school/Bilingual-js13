import { styled } from '@mui/material'
import Button from '../../../shared/UI/Button'
import eye from '../../../assets/icons/svgs/eyePassword/↳ Sign in/eye.svg'

const EvalutionSubmitedPageData = [
   {
      id: Math.random(),
      number: 1,
      question: 'Select real English words',
      score: '0 out of 10',
      status: 'Not evaluated',
   },
   {
      id: Math.random(),
      number: 2,
      question: 'Listen and select English word',
      score: '0 out of 10',
      status: 'Not evaluated',
   },
   {
      id: Math.random(),
      number: 3,
      question: 'Describe Image',
      score: '8 out of 10',
      status: 'Evaluated',
   },
   {
      id: Math.random(),
      number: 4,
      question: 'Record Saying the statement ',
      score: '10 out of 10',
      status: 'Evaluated',
   },
]

const EvalutionSubmited = () => {
   return (
      <>
         <Container>
            <StyledBox>
               <StyledContent>
                  <TableContainerBox>
                     <TopPapa>
                        <LeftBox>
                           <p>
                              <span>User:</span> Askarov Marat
                           </p>
                           <p>
                              <span>Test:</span> Test number 1
                           </p>
                           <p>
                              <span>Date of submission:</span> 12.12.2022 16:45
                           </p>
                        </LeftBox>
                        <RightBox>
                           <p>
                              <span>Final Score:</span> 0
                           </p>
                           <p>
                              <span>Final Status:</span> Not Evelauted
                           </p>
                           <Button customVariant="Octonary">
                              SEND RESULTS TO USER’S EMAIL
                           </Button>
                        </RightBox>
                     </TopPapa>
                     <TableTh>
                        <GuestionBox>
                           <p>#</p>
                           <p>Question</p>
                        </GuestionBox>
                        <p>Score</p>
                        <p>Status</p>
                     </TableTh>
                     {EvalutionSubmitedPageData.map((item) => (
                        <TBodyBox key={item.id}>
                           <p className="number">{item.number}</p>
                           <p className="question">{item.question}</p>
                           <p className="score">{item.score}</p>
                           <p className="status">{item.status}</p>
                           <IconBox>
                              <img src={eye} alt="deleteIcon" />
                           </IconBox>
                        </TBodyBox>
                     ))}
                  </TableContainerBox>
               </StyledContent>
            </StyledBox>
         </Container>
      </>
   )
}

export default EvalutionSubmited

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
}))

const TopPapa = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   borderBottom: '2px solid rgba(212, 208, 208, 1)',
   paddingBottom: 22,
}))

const LeftBox = styled('div')(() => ({
   '& p': {
      marginBottom: 6,
      '& span': {
         color: 'rgba(55, 82, 180, 1)',
      },
   },
}))

const RightBox = styled('div')(() => ({
   '& p': {
      marginBottom: 6,
      color: 'red',
      '& span': {
         color: 'rgba(76, 72, 89, 1)',
      },
   },
   '& button': {
      marginTop: 32,
      color: 'rgba(212, 208, 208, 1)',
      borderColor: 'rgba(212, 208, 208, 1)',
   },
}))

const TableTh = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   width: '100%',
   maxWidth: 646,
   marginLeft: 18,
   marginTop: 25,
   marginBottom: 19,
}))

const GuestionBox = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   width: '100%',
   maxWidth: 120,
}))

const TBodyBox = styled('div')(() => ({
   display: 'flex',
   padding: 16,
   boxShadow: '1px 1px 5px 1px rgba(0, 0, 0, 0.06)',
   borderRadius: 12,
   marginBottom: 16,
   '& p': {
      fontWeight: 400,
      fontSize: 16,
   },
   '& .number': {
      width: 40.5,
      marginRight: 10,
   },
   '& .question': {
      width: 276.5,
      marginRight: 10,
   },
   '& .score': {
      width: 250.5,
      marginRight: 10,
   },
   '& .status': {
      width: 303,
   },
}))

const IconBox = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   width: '100%',
   maxWidth: 60,
   position: 'relative',
   left: 40,
   '& img': {
      width: 20,
      height: 20,
   },
}))
