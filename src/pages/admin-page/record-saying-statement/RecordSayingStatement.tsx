import { styled } from '@mui/material'
import ListenAndSelectUI from '../../../features/UI/listen-and-select/ListenAndSelectUI'
import Input from '../../../shared/UI/Input'
import Button from '../../../shared/UI/Button'
import { useNavigate } from 'react-router-dom'
import { optionSecond } from '../listen-select/options'

const options = [
   { value: 'option1', label: 'Option 1' },
   { value: 'option2', label: 'Option 2' },
]

const RecordSayingStatement = () => {
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
                                 <p>Statement</p>
                                 <Input />
                              </label>
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

export default RecordSayingStatement

const Container = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   justifyContent: 'center',
   backgroundColor: '#d7e1f8',
   height: '100%',
   minHeight: '601px ',
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
