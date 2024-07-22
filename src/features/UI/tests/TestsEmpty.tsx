import { styled } from '@mui/material'
import { palette } from '../../../shared/theme/theme'
import SadSmile from '../../../assets/icons/svgs/sad-smile-removebg-preview.png'

const TestsEmpty = () => {
   return (
      <>
         <TextBoxSad>
            <img src={SadSmile} alt="SadSmile" className="sadSmile" />
            <TestTextNoTaskTitle>Пока здесь пусто</TestTextNoTaskTitle>
            <TestTextNoTask>
               К сожалению,сейчас нет подходящих вам заданий
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
   bottom: 40,
}))
const TestTextNoTaskTitle = styled('h3')(() => ({
   fontSize: 20,
   fontWeight: 700,
   fontFamily: 'Poppins',
   marginRight: 20,
   color: 'rgba(76, 72, 89, 1)',
   position: 'relative',
   bottom: 40,
}))

const TextBoxSad = styled('div')(() => ({
   width: '100%',
   maxWidth: '900px',
   height: '100%',
   minHeight: '70px',
   backgroundColor: palette.primary.white,
   boxShadow: '1px 1px 5px 1px rgba(0,0,0,0.15)',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   flexDirection: 'column',
   padding: '24px 16px',
   marginBottom: 20,
   '& .sadSmile': {
      width: 200,
      height: 150,
   },
}))
