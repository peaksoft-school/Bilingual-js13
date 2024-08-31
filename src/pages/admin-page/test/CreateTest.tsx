import { styled } from '@mui/material'
import Header from '../../../widgets/landing/header/Header'
import { palette } from '../../../shared/theme/theme'
import Button from '../../../shared/UI/Button'
import TestsItem from '../../../features/UI/tests/TestsItem'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { useNavigate } from 'react-router-dom'
import Modal from '../../../shared/UI/modals/Modal'
import DeleteRed from '../../../assets/icons/svgs/delete-red.svg'
import { useState } from 'react'
import { DataTestItem, deleteDataTest } from '../../../redux/tests/tests.slice'

const CreateTest = () => {
   const { dataTest } = useAppSelector((state) => state.tests)
   const navigate = useNavigate()
   const dispatch = useAppDispatch()

   const [open, setOpen] = useState(false)
   const [dataTestS, setDataTestS] = useState<DataTestItem[]>(dataTest)
   const [selectedTestId, setSelectedTestId] = useState<number | undefined>(
      undefined
   )

   const handleGoBack = () => {
      navigate('/admin/test-interface')
   }

   const handleCloseModal = () => {
      setOpen(false)
   }

   const handleDelete = () => {
      if (selectedTestId !== undefined) {
         dispatch(deleteDataTest(selectedTestId))
         const updatedDataTest = dataTestS.filter(
            (item) => item.id !== selectedTestId
         )
         setDataTestS(updatedDataTest)
         localStorage.setItem('BILINGUAL', JSON.stringify(updatedDataTest))
      }
      setOpen(false)
   }

   const handleOpenModal = (
      id: number | undefined,
      event: React.MouseEvent<HTMLButtonElement>
   ) => {
      event.stopPropagation()
      setSelectedTestId(id)
      setOpen(true)
   }

   
   const handleUpdate = (id: number | undefined) => {
      if (id !== undefined) {
         const testItem = dataTestS.find((item) => item.id === id)
         if (testItem) {
            navigate(`/admin/create-description`, { state: { testItem } })
         }
      }
   }

   return (
      <>
         <Header />
         <Container>
            <StyledBox>
               <BoxContainer>
                  <ContainerBox>
                     <HeaderTest>
                        <h2>
                           <span>Title:</span> Take a free practice test and
                           estimate your score
                        </h2>
                        <p>
                           <span>Short Description:</span> Select real English
                           words
                        </p>
                        <h6>
                           <span>Duration:</span> Duration: 15:00
                        </h6>
                     </HeaderTest>
                     <ButtonQuestion>
                        <span>+</span> ADD MORE QUESTIONS
                     </ButtonQuestion>
                     <BoxTable>
                        <TestsTable>
                           <p>#</p>
                           <p className="name">Name</p>
                           <p>Duration</p>
                           <p>Question Type</p>
                        </TestsTable>
                     </BoxTable>
                     <BoxTest>
                        {dataTest.map((item) => (
                           <TestsItem
                              key={item.id}
                              {...item}
                              deleteHandler={(event) =>
                                 handleOpenModal(item.id, event)
                              }
                              handleUpdate ={() =>
                                 handleUpdate(item.id)
                              }
                           />
                        ))}
                        <div style={{ display: 'none' }}>
                           <Modal
                              open={open}
                              variant="secondary"
                              onClose={handleCloseModal}
                              boxContent={
                                 <ButtonBox>
                                    <Button onClick={handleCloseModal}>
                                       CANCEL
                                    </Button>
                                    <Button onClick={handleDelete}>
                                       DELETE
                                    </Button>
                                 </ButtonBox>
                              }
                           >
                              <ContainerModal>
                                 <img src={DeleteRed} alt="DeleteRed" />
                                 <h2>Do you want delete? </h2>
                                 <p>You can’t restore this file </p>
                              </ContainerModal>
                           </Modal>
                        </div>
                     </BoxTest>
                     <ButtonGoBack onClick={handleGoBack}>GO BACK</ButtonGoBack>
                  </ContainerBox>
               </BoxContainer>
            </StyledBox>
         </Container>
      </>
   )
}

export default CreateTest

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
   maxWidth: '1060px',
   height: '100%',
   minHeight: '356px',
   borderRadius: '20px',
   backgroundColor: palette.primary.white,
   boxShadow: '1px 1px 5px 1px rgba(0,0,0,0.15)',
   padding: '50px 80px',
   margin: '100px auto',
   display: 'flex',
   flexDirection: 'column',
}))

const HeaderTest = styled('div')(() => ({
   marginBottom: 44,
   '& h2, & p, & h6': {
      fontSize: 16,
      fontWeight: 500,
      fontFamily: 'Poppins',
      '& span': {
         color: 'rgba(55, 82, 180, 1)',
      },
   },
}))

const ButtonQuestion = styled(Button)(() => ({
   width: '100%',
   maxWidth: 233,
   alignSelf: 'end',
   marginBottom: 22,
   '& span': {
      marginRight: 8,
   },
}))

const BoxTable = styled('div')(() => ({
   width: '100%',
   borderTop: '2px solid rgba(212, 208, 208, 1)',
   paddingTop: 16,
}))

const TestsTable = styled('table')(() => ({
   width: '100%',
   maxWidth: 628,
   display: 'flex',
   justifyContent: 'space-between',
   marginLeft: 13,
   marginBottom: 14,
   fontWeight: 500,
   '& .name': {
      marginRight: 260,
   },
}))

const BoxTest = styled('div')(() => ({}))

const ButtonGoBack = styled(Button)(() => ({
   width: '100%',
   maxWidth: 114,
   backgroundColor: 'white',
   color: 'rgba(58, 16, 229, 1)',
   border: '2px solid rgba(58, 16, 229, 1)',
   alignSelf: 'end',
   marginTop: 32,
   fontWeight: 700,
   fontSize: 'Poppins',
}))

const ContainerModal = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   marginLeft: '0 auto',
   width: '100%',
   marginBottom: 48,
   '& img': {
      width: 66,
      height: 66,
      marginBottom: 51,
   },
   '& h2': {
      fontSize: 20,
      fontWeight: 700,
      color: 'rgba(76, 72, 89, 1)',
   },
   '& p': {
      fontSize: 16,
      fontWeight: 400,
      color: 'rgba(76, 72, 89, 1)',
   },
}))

const ButtonBox = styled('div')(() => ({
   marginLeft: '135px ',
   '& button': {
      marginLeft: 20,
   },
   marginTop: 20,
   position: 'relative',
   top: 20,
}))
