import { FC } from 'react'
import Switches from '../../../shared/UI/switches/Switches'
import { IconButton, styled } from '@mui/material'
import Delete from '../../../assets/icons/svgs/delete.svg?react'
import Update from '../../../assets/icons/svgs/update.svg?react'
import { palette } from '../../../shared/theme/theme'
import { DataTestItem } from '../../../pages/admin-page/test/CreateDescription'

interface TestsItemProps extends DataTestItem {
   deleteHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const TestsItem: FC<TestsItemProps> = ({
   title,
   number,
   duration,
   description,
   deleteHandler
}) => {
   return (
      <TextBox>
         <NumberTest>{number}</NumberTest>
         <NameTest>{title}</NameTest>
         <DurationTest>{duration}</DurationTest>
         <QuestionTypeTest>{description}</QuestionTypeTest>
         <TextIcons>
            <Switches variant="Primary" />
            <IconButton className="update-icon">
               <Update />
            </IconButton>
            <IconButton className="delete-icon" onClick={(event) => deleteHandler(event)}>
               <Delete />
            </IconButton>
         </TextIcons>
      </TextBox>
   )
}

export default TestsItem

const TextBox = styled('div')(() => ({
   width: '100%',
   minWidth: '900px',
   height: '100%',
   maxHeight: '70px',
   backgroundColor: palette.primary.white,
   boxShadow: '1px 1px 5px 1px rgba(0,0,0,0.15)',
   borderRadius: 8,
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   padding: '24px 16px',
   marginBottom: 20,
}))

const NumberTest = styled('h2')(() => ({
   fontSize: 16,
   fontWeight: 400,
   lineHeight: '18px',
   fontFamily: 'Poppins',
   color: 'rgba(76, 72, 89, 1)',
}))

const NameTest = styled('h3')(() => ({
   width: '100%',
   maxWidth: 304,
   fontSize: 16,
   fontWeight: 400,
   lineHeight: '18px',
   fontFamily: 'Poppins',
   marginRight: 20,
   color: 'rgba(76, 72, 89, 1)',
   whiteSpace: 'nowrap',        
   overflow: 'hidden',          
   textOverflow: 'ellipsis',    
}))

const DurationTest = styled('h4')(() => ({
   fontSize: 16,
   fontWeight: 400,
   lineHeight: '18px',
   fontFamily: 'Poppins',
   color: 'rgba(76, 72, 89, 1)',
   position: 'relative',
   marginRight: 10
}))

const QuestionTypeTest = styled('h5')(() => ({
   width: '100%',
   maxWidth: 188,
   fontSize: 16,
   fontWeight: 400,
   lineHeight: '18px',
   fontFamily: 'Poppins',
   color: 'rgba(76, 72, 89, 1)',
   marginRight: 10,
   whiteSpace: 'nowrap',        
   overflow: 'hidden',          
   textOverflow: 'ellipsis',    
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
