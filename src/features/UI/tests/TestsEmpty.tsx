import { styled } from '@mui/material'

const TestsEmpty = () => {
   return (
      <>
         <TextBoxSad>
            <TestTextNoTaskTitle>It's empty for now.</TestTextNoTaskTitle>
            <TestTextNoTask>
               Unfortunately, there are no tests suitable for you at this time.
            </TestTextNoTask>
         </TextBoxSad>
      </>
   )
}

export default TestsEmpty

const TestTextNoTask = styled('h3')(() => ({
   fontSize: 20,
   fontWeight: 500,
   fontFamily: 'Poppins',
   marginRight: 20,
   color: 'rgba(76, 72, 89, 1)',
   position: 'relative',
}))
const TestTextNoTaskTitle = styled('h3')(() => ({
   fontSize: 20,
   fontWeight: 700,
   fontFamily: 'Poppins',
   marginRight: 20,
   color: 'rgba(76, 72, 89, 1)',
   position: 'relative',
}))

const TextBoxSad = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   flexDirection: 'column',
   '& .sadSmile': {
      width: 200,
      height: 150,
   },
}))
