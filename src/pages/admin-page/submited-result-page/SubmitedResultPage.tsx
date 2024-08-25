import { styled } from '@mui/material'
import checkSquare from '../../../assets/icons/svgs/check-square.svg'
import deleteIcon from '../../../assets/icons/svgs/delete.svg'
// import eye from '../../../assets/icons/svgs/eyePassword/↳ Sign in/eye.svg'

const SubmitedResultPageData = [
   {
      id: Math.random(),
      number: 1,
      name: 'Kubanov Farid',
      date: '08:15 20.11.2021',
      TestNumber: 'Test number 1',
      evaluated: 'Not evaluated',
      score: 0,
   },
   {
      id: Math.random(),
      number: 2,
      name: 'Azatov Ulan',
      date: '14:02 25.10.2021',
      TestNumber: 'Test number 2',
      evaluated: 'Not evaluated',
      score: 0,
   },
   {
      id: Math.random(),
      number: 3,
      name: 'Maratova Aijan',
      date: '11:25 27.09.2021',
      TestNumber: 'Test number 1',
      evaluated: 'Evaluated',
      score: 7,
   },
   {
      id: Math.random(),
      number: 4,
      name: 'Bekova Aliza',
      date: '11:25 27.09.2021',
      TestNumber: 'Test number 3',
      evaluated: 'Evaluated',
      score: 7,
   },
]

const SubmitedResultPage = () => {
   return (
      <>
         <Container>
            <StyledBox>
               <StyledContent>
                  <TableContainerBox>
                     <TheaderBox>
                        <p>#</p>
                        <p>User Name</p>
                        <p>Date of Submition</p>
                        <p>Test name</p>
                        <p>Status </p>
                        <p>Score</p>
                     </TheaderBox>
                     {SubmitedResultPageData.map((item) => (
                        <TBodyBox key={item.id}>
                           <p className="number">{item.number}</p>
                           <p className="name">{item.name}</p>
                           <p className="time">{item.date}</p>
                           <p className="testNumber">{item.TestNumber}</p>
                           <p className="evaluated">{item.evaluated}</p>
                           <p className="score">{item.score}</p>
                           <IconBox>
                              <img src={checkSquare} alt="checkSquare" />
                              <img src={deleteIcon} alt="deleteIcon" />
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

export default SubmitedResultPage

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
   padding: '51px 80px 100px',
}))

const TheaderBox = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   width: '100%',
   maxWidth: '792px',
   marginBottom: '20px',
   marginLeft: 11,
   '& p': {
      fontSize: 16,
      color: 'rgba(76, 72, 89, 1)',
      fontWeight: 600,
   },
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
      width: 81.5,
      marginRight: 5,
   },
   '& .name': {
      width: 161,
      marginRight: 5,
   },
   '& .time': {
      width: 217,
      marginRight: 5,
   },
   '& .testNumber': {
      width: 158,
      marginRight: 5,
   },
   '& .evaluated': {
      width: 124,
      marginRight: 5,
   },
   '& .score': {
      width: 99,
      marginRight: 5,
   },
}))

const IconBox = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   width: '100%',
   maxWidth: 60,
   '& img': {
      width: 20,
      height: 20,
   },
}))
