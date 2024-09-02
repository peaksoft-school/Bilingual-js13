import { Box, styled, TextareaAutosize } from '@mui/material'
import ListenAndSelectUI from '../../../features/UI/listen-and-select/ListenAndSelectUI'
import Button from '../../../shared/UI/Button'
import Switches from '../../../shared/UI/switches/Switches'
import DeleteIcon from '../../../assets/icons/svgs/delete.svg'
import { useNavigate } from 'react-router-dom'
import { optionSecond } from '../listen-select/options'

const options = [
   { value: 'option1', label: 'Option 1' },
   { value: 'option2', label: 'Option 2' },
]

const TestItemData = [
   {
      id: Math.random(),
      number: 1,
      title: 'Table content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed',
   },
   {
      id: Math.random(),
      number: 2,
      title: 'Table content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed',
   },
   {
      id: Math.random(),
      number: 3,
      title: 'Table content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed',
   },
   {
      id: Math.random(),
      number: 4,
      title: 'Table content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed',
   },
]

const SelectIdea = () => {
   const navigate = useNavigate()

   const handleInputChange = (value: string | number) => {
      const selectedOption = optionSecond.find(
         (option) => option.value === value
      )
      if (selectedOption) {
         navigate(selectedOption.route)
      } else {
         console.log('Маршрут не найден для значения:', value)
      }
   }

   return (
      <>
         <Container>
            <StyledBox>
               <StyledContent>
                  <ListenAndSelectUI
                     options={options}
                     optionsSecond={optionSecond}
                     onInputChange={handleInputChange}
                     children={
                        <>
                           <InputBox>
                              <label
                                 style={{ cursor: 'pointer', marginTop: 6 }}
                              >
                                 <p
                                    style={{
                                       marginTop: 24,
                                    }}
                                 >
                                    Passage
                                 </p>
                                 <TextareaAutosizeStyle placeholder="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem." />
                              </label>

                              <ButtonAddOption>
                                 <Button>
                                    <span>+</span> ADD OPTION
                                 </Button>
                              </ButtonAddOption>

                              {TestItemData.map((item) => (
                                 <TestItemBox key={item.id}>
                                    <Box className="number">
                                       <h2>{item.number}</h2>
                                    </Box>
                                    <Box>
                                       <p>{item.title}</p>
                                    </Box>
                                    <DeleteSwitchesBox>
                                       <Box className="switches">
                                          <Switches variant="Secondary" />
                                       </Box>
                                       <Box className="delete">
                                          <img
                                             src={DeleteIcon}
                                             alt="DeleteIcon"
                                          />
                                       </Box>
                                    </DeleteSwitchesBox>
                                 </TestItemBox>
                              ))}

                              <ButtonBox>
                                 <Button className="goBack">GO BACK</Button>
                                 <Button customVariant="secondary">SAVE</Button>
                              </ButtonBox>
                           </InputBox>
                        </>
                     }
                  />
               </StyledContent>
            </StyledBox>
         </Container>
      </>
   )
}

export default SelectIdea

const Container = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   justifyContent: 'center',
   backgroundColor: '#d7e1f8',
   height: '100%',
   minHeight: '601px',
}))

const StyledBox = styled('div')(() => ({
   width: '100%',
   maxWidth: '1440px',
}))

const StyledContent = styled('div')(() => ({
   width: '100%',
   maxWidth: '1300px',
   display: 'flex',
   justifyContent: 'center',
   marginTop: '68px',
}))

const InputBox = styled('div')(() => ({
   marginTop: 24,
   '& p': {
      marginBottom: 12,
   },
}))

const ButtonBox = styled('div')(() => ({
   textAlign: 'end',
   marginTop: 32,
   '& .goBack': {
      backgroundColor: 'white',
      color: 'rgba(58, 16, 229, 1)',
      border: '2px solid rgba(58, 16, 229, 1)',
      marginRight: 16,
   },
}))

const TextareaAutosizeStyle = styled(TextareaAutosize)(() => ({
   width: '100%',
   height: '100%',
   minHeight: 172,
   padding: 10,
}))

const ButtonAddOption = styled('div')(() => ({
   marginTop: 32,
   marginBottom: 22,
   textAlign: 'end',
   '& button': {
      '& span': {
         marginRight: 15,
      },
   },
}))

const TestItemBox = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   gap: 26,
   border: '2px solid rgba(212, 208, 208, 1)',
   padding: '14px 16px 22px',
   borderRadius: 12,
   fontSize: 16,
   fontWeight: 400,
   lineHeight: '22px',
   color: 'rgba(76, 72, 89, 1)',
   marginBottom: 16,
   '& .number': {
      '& h2': {
         fontWeight: 400,
         fontSize: 16,
      },
   },
}))

const DeleteSwitchesBox = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'center',
   cursor: 'pointer',
   '& .switches': {
      position: 'relative',
      left: 15,
   },
   '& .delete': {
      marginTop: 10,
   },
}))
