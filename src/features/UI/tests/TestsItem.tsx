import { IconButton, styled } from '@mui/material'
import { palette } from '../../../shared/theme/theme'
import Switches from '../../../shared/UI/switches/Switches'
import Delete from '../../../assets/icons/svgs/delete.svg?react'
import { DATA_TEST } from './Tests'
import Update from '../../../assets/icons/svgs/update.svg?react'

const TestsItem = () => {
   return (
      <>
         {DATA_TEST.map((item) => (
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
         ))}
      </>
   )
}

export default TestsItem

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

const TestText = styled('h3')(() => ({
   fontSize: 16,
   fontWeight: 400,
   lineHeight: '18px',
   fontFamily: 'Poppins',
   marginRight: 20,
   color: 'rgba(76, 72, 89, 1)',
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
