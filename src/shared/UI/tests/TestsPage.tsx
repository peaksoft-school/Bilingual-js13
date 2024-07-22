import { FC } from 'react'
import { IconButton, styled } from '@mui/material'
import { palette } from '../../theme/theme'
import Button from '../Button'
import Switches from '../switches/Switches'
import Update from '../../../assets/icons/svgs/update.svg?react'
import Delete from '../../../assets/icons/svgs/delete.svg?react'

interface DataTestItem {
   id: number
   text: string
}

const DATA_TEST: DataTestItem[] = []

const TestsPage: FC = () => {
   return (
      <>
         <ContainerBox>
            <StyledButton>
               <span>+</span> ADD NEW TEST
            </StyledButton>
            {DATA_TEST.length === 0 ? (
               <TextBox>
                  <TestTextNoTask>Нет задачи</TestTextNoTask>
                  <TextIcons>
                     <Switches variant="Primary" />
                     <IconButton className="update-icon">
                        <Update />
                     </IconButton>
                     <IconButton className="delete-icon">
                        <Delete />
                     </IconButton>
                  </TextIcons>
               </TextBox>
            ) : (
               DATA_TEST.map((item) => (
                  <TextBox key={item.id}>
                     <TestText>{item.text}</TestText>
                     <TextIcons>
                        <Switches variant="Primary" />
                        <IconButton className="update-icon">
                           <Update />
                        </IconButton>
                        <IconButton className="delete-icon">
                           <Delete />
                        </IconButton>
                     </TextIcons>
                  </TextBox>
               ))
            )}
         </ContainerBox>
      </>
   )
}

export default TestsPage

const ContainerBox = styled('div')(() => ({
   width: '100%',
   maxWidth: '1060px',
   height: '100%',
   borderRadius: '20px',
   backgroundColor: palette.primary.white,
   boxShadow: '1px 1px 5px 1px rgba(0,0,0,0.15)',
   padding: '50px 80px',
   margin: ' 100px auto',
   display: 'flex',
   flexDirection: 'column',
}))

const StyledButton = styled(Button)(() => ({
   display: 'block',
   alignSelf: 'end',
   '& span': {
      marginRight: 8,
   },
   marginBottom: 36.5,
}))

const TestText = styled('h3')(() => ({
   fontSize: 16,
   fontWeight: 400,
   lineHeight: '18px',
   fontFamily: 'Poppins',
   marginRight: 20,
   color: 'rgba(76, 72, 89, 1)',
}))

const TestTextNoTask = styled('h3')(() => ({
   fontSize: 20,
   fontWeight: 500,
   fontFamily: 'Poppins',
   marginRight: 20,
   color: 'rgba(76, 72, 89, 1)',
}))

const TextBox = styled('div')(() => ({
   width: '100%',
   minWidth: '900px',
   height: '100%',
   minHeight: '70px',
   backgroundColor: palette.primary.white,
   boxShadow: '1px 1px 5px 1px rgba(0,0,0,0.15)',
   borderRadius: 8,
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   padding: '24px 16px',
   marginBottom: 20,
}))

const TextIcons = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   '& .update-icon': {
      marginLeft: -15,
   },
   '& .delete-icon': {
      marginLeft: -5,
   },
}))
