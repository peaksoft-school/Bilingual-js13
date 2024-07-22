import { FC } from 'react'
import {  styled } from '@mui/material'
import { palette } from '../../../shared/theme/theme'
import Button from '../../../shared/UI/Button'

import TestsItem from './TestsItem'
import TestsEmpty from './TestsEmpty'

interface DataTestItem {
   id?: number
   text?: string
}

export const DATA_TEST: DataTestItem[] = [
]

const Tests: FC = () => {
   return (
      <>
         <ContainerBox>
            <StyledButton>
               <span>+</span> ADD NEW TEST
            </StyledButton>
            {DATA_TEST.length === 0 ? <TestsEmpty/> : <TestsItem/>}
         </ContainerBox>
      </>
   )
}

export default Tests

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




