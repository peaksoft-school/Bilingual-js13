import { FC } from 'react'
import { styled } from '@mui/material'
import { palette } from '../../../shared/theme/theme'
import Button from '../../../shared/UI/Button'
import TestsEmpty from './TestsEmpty'
import TestsItem from './TestsItem'

export interface DataTestItem {
   id?: number
   text?: string
}

export const DATA_TEST: DataTestItem[] = [{ text: 'dhe' }]

const Tests: FC = () => {
   return (
      <>
         <ContainerBox>
            <StyledButton>
               <span>+</span> ADD NEW TEST
            </StyledButton>
            {DATA_TEST.length === 0 ? (
               <TestsEmpty />
            ) : (
               DATA_TEST.map((item) => (
                  <TestsItem key={item.id} text={item.text} />
               ))
            )}
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
