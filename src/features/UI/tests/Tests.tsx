import { FC } from 'react'
import { styled } from '@mui/material'
import { palette } from '../../../shared/theme/theme'
import Button from '../../../shared/UI/Button'
import TestsEmpty from './TestsEmpty'
import TestsItem from './TestsItem'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../../hooks/hooks'

const Tests: FC = () => {
   const navigate = useNavigate()
   const { dataTest } = useAppSelector((state) => state.tests)

   const handleClick = () => {
      navigate('/admin/create-description')
   }
   return (
      <>
         <ContainerBox>
            <StyledButton onClick={handleClick}>
               <span>+</span> ADD NEW TEST
            </StyledButton>
            {dataTest.length === 0 ? (
               <TestsEmpty />
            ) : (
               dataTest.map((item) => <TestsItem key={item.id} {...item} />)
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
   minHeight: '314px',
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
