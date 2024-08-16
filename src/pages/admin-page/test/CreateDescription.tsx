import { useState, ChangeEvent } from 'react'
import { styled } from '@mui/material'
import Header from '../../../widgets/landing/header/Header'
import { palette } from '../../../shared/theme/theme'
import Input from '../../../shared/UI/Input'
import Button from '../../../shared/UI/Button'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { setDataTest, updateDataTest } from '../../../redux/tests/tests.slice'

export interface DataTestItem {
   id?: number
   title?: string
   number?: number
   duration?: string
   description?: string
   deleteHandler?: any

}

export let DATA_TEST: DataTestItem[] = []

const CreateDescription = () => {
   const navigate = useNavigate()
   const { dataTest } = useAppSelector((state) => state.tests)
   const dispatch = useAppDispatch()
   const location = useLocation()
   const testItem = location.state?.testItem as DataTestItem | undefined

   const [title, setTitle] = useState(testItem?.title || '')
   const [description, setDescription] = useState(testItem?.description || '')
   const [error, setError] = useState({ title: '', description: '' })

   const titleHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value)
      if (e.target.value !== '') setError((prev) => ({ ...prev, title: '' }))
   }

   const descriptionHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setDescription(e.target.value)
      if (e.target.value !== '') setError((prev) => ({ ...prev, description: '' }))
   }

   const handleGoBack = () => {
      navigate('/admin/test-interface')
   }

   const submitHandler = (e: React.FormEvent) => {
      e.preventDefault()

      let hasError = false
      if (title === '') {
         setError((prev) => ({ ...prev, title: 'Title is required' }))
         hasError = true
      }
      if (description === '') {
         setError((prev) => ({ ...prev, description: 'Description is required' }))
         hasError = true
      }

      if (hasError) return

      const newTestItem: DataTestItem = {
         id: testItem?.id || Math.random(),
         number: testItem ? testItem.number : dataTest.length + 1,
         title: title,
         duration: '1 min',
         description: description,
      }

      if (testItem) {
         dispatch(updateDataTest(newTestItem))
      } else {
         const updatedDataTest = [...dataTest, newTestItem]
         dispatch(setDataTest(updatedDataTest))
      }

      navigate('/admin/test-interface')
   }

   return (
      <>
         <Header />
         <Container>
            <StyledBox>
               <BoxContainer>
                  <form onSubmit={submitHandler}>
                     <ContainerBox>
                        <Title>
                           <label htmlFor="Title" className="title">
                              Title
                           </label>
                           <Input
                              value={title}
                              onChange={titleHandler}
                              id="Title"
                              style={{ marginTop: 12 }}
                           />
                           {error.title && (
                              <ErrorText>{error.title}</ErrorText>
                           )}
                        </Title>
                        <Description>
                           <label htmlFor="Description">
                              Short Description
                           </label>
                           <Input
                              value={description}
                              onChange={descriptionHandler}
                              id="Description"
                              style={{ marginTop: 12 }}
                           />
                           {error.description && (
                              <ErrorText>{error.description}</ErrorText>
                           )}
                        </Description>
                        <Buttons>
                           <ButtonGoBack
                              customVariant="primary"
                              onClick={handleGoBack}
                           >
                              GO BACK
                           </ButtonGoBack>
                           <Button customVariant="secondary" type="submit">
                              SAVE
                           </Button>
                        </Buttons>
                     </ContainerBox>
                  </form>
               </BoxContainer>
            </StyledBox>
         </Container>
      </>
   )
}

export default CreateDescription

const Container = styled('div')(() => ({
   width: '100%',
   minHeight: '600px',
   display: 'flex',
   justifyContent: 'center',
   backgroundColor: '#d7e1f8',
}))

const StyledBox = styled('div')(() => ({
   width: '100%',
   maxWidth: '1440px',
   display: 'flex',
   justifyContent: 'center',
}))

const BoxContainer = styled('div')(() => ({
   width: '100%',
   maxWidth: '1300px',
   margin: '0 auto',
   display: 'flex',
   flexDirection: 'column',
}))

const ContainerBox = styled('div')(() => ({
   width: '100%',
   maxWidth: '980px',
   borderRadius: '20px',
   backgroundColor: palette.primary.white,
   boxShadow: '1px 1px 5px 1px rgba(0,0,0,0.15)',
   padding: '50px 80px',
   margin: ' 100px auto',
   display: 'flex',
   flexDirection: 'column',
}))

const Title = styled('div')(() => ({
   '& label': {
      fontSize: 16,
      fontWeight: 500,
      color: 'rgba(75, 71, 89, 1)',
      marginTop: 120,
   },
}))

const Description = styled('div')(() => ({
   marginTop: 24,
   '& label': {
      fontSize: 16,
      fontWeight: 500,
      color: 'rgba(75, 71, 89, 1)',
   },
}))

const Buttons = styled('div')(() => ({
   display: 'flex',
   gap: 20,
   marginTop: 32,
   justifyContent: 'end',
}))

const ButtonGoBack = styled(Button)(() => ({
   backgroundColor: 'white',
   color: 'rgba(58, 16, 229, 1)',
   border: '2px solid rgba(58, 16, 229, 1)',
}))

const ErrorText = styled('span')(() => ({
   color: 'red',
   fontSize: 14,
   marginTop: 8,
   display: 'block',
}))
