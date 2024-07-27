import { FC } from 'react'
import { DataTestItem } from './Tests'
import Switches from '../../../shared/UI/switches/Switches'
import { IconButton, styled } from '@mui/material'
import Delete from '../../../assets/icons/svgs/delete.svg?react'
import Update from '../../../assets/icons/svgs/update.svg?react'
import { palette } from '../../../shared/theme/theme'

const TestsItem: FC<DataTestItem> = ({ text }) => {
   return (
      <TextBox>
         <TestText>{text}</TestText>
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
   )
}

export default TestsItem

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
