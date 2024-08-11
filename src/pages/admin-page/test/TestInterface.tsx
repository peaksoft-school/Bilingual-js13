import { IconButton, styled } from '@mui/material'
import Header from '../../../widgets/landing/header/Header'
import Switches from '../../../shared/UI/switches/Switches'
import Update from '../../../assets/icons/svgs/update.svg?react'
import Delete from '../../../assets/icons/svgs/delete.svg?react'
import { palette } from '../../../shared/theme/theme'
import Button from '../../../shared/UI/Button'
import { useNavigate } from 'react-router-dom'
import TestsEmpty from '../../../features/UI/tests/TestsEmpty'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { DataTestItem, deleteDataTest } from '../../../redux/tests/tests.slice'
import { useEffect } from 'react'
import Modal from '../../../shared/UI/modals/Modal'
import DeleteRed from '../../../assets/icons/svgs/delete-red.svg'

const TestInterface = () => {
   const { dataTest } = useAppSelector((state) => state.tests)
   const [dataTestS, setDataTestS] = useState<DataTestItem[]>(dataTest)
   const dispatch = useAppDispatch()
   const [open, setOpen] = useState(false)
   const [selectedTestId, setSelectedTestId] = useState<number | undefined>(
      undefined
   )

   useEffect(() => {
      setDataTestS(dataTest)
   }, [dataTest])

   const navigate = useNavigate()

   const handleClick = () => {
      navigate('/admin/create-description')
   }

   const handleOpenModal = (
      id: number | undefined,
      event: React.MouseEvent
   ) => {
      event.stopPropagation()
      setSelectedTestId(id)
      setOpen(true)
   }
   const handleCloseModal = (event: any) => {
      event.stopPropagation()
      setOpen(false)
   }

   const handleDelete = (event: any) => {
      if (selectedTestId !== undefined) {
         event.stopPropagation()

         dispatch(deleteDataTest(selectedTestId))
         const updatedDataTest = dataTestS.filter(
            (item) => item.id !== selectedTestId
         )
         setDataTestS(updatedDataTest)
         localStorage.setItem('BILINGUAL', JSON.stringify(updatedDataTest))
      }
      setOpen(false)
   }

   const handleUpdate = (id: number | undefined, event: React.MouseEvent) => {
      event.stopPropagation()
      if (id !== undefined) {
         const testItem = dataTestS.find((item) => item.id === id)
         if (testItem) {
            navigate(`/admin/create-description`, { state: { testItem } })
         }
      }
   }

   const handleGetInformation = () => {
      navigate('/admin/create-test')
   }

   return (
      <>
         <Header />
         <Container>
            <StyledBox>
               <BoxContainer>
                  <ContainerBox>
                     <StyledButton onClick={handleClick}>
                        <span>+</span> ADD NEW TEST
                     </StyledButton>
                     {dataTestS.length === 0 ? (
                        <TestsEmpty />
                     ) : (
                        dataTestS.map((item: DataTestItem) => (
                           <TextBox
                              key={item.id}
                              onClick={handleGetInformation}
                           >
                              <NameTest>{item.title}</NameTest>
                              <TextIcons>
                                 <Switches variant="Primary" />
                                 <IconButton
                                    className="update-icon"
                                    onClick={(event) =>
                                       handleUpdate(item.id, event)
                                    }
                                 >
                                    <Update />
                                 </IconButton>
                                 <IconButton
                                    onClick={(event) =>
                                       handleOpenModal(item.id, event)
                                    }
                                    className="delete-icon"
                                 >
                                    <Delete />
                                 </IconButton>
                              </TextIcons>
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
                           </TextBox>
                        ))
                     )}
                  </ContainerBox>
               </BoxContainer>
            </StyledBox>
         </Container>
      </>
   )
}

export default TestInterface

const Container = styled('div')(() => ({
   width: '100%',
   height: '100%',
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
   cursor: 'pointer'
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
