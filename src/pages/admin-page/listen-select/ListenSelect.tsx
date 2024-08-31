import { useState } from 'react'
import { styled } from '@mui/material'
import ListenAndSelectUI from '../../../features/UI/listen-and-select/ListenAndSelectUI'
import Button from '../../../shared/UI/Button'

const options = [
   { value: 'option1', label: 'Option 1' },
   { value: 'option2', label: 'Option 2' },
]

const optionSecond = [
   { value: 'option111', label: 'Option 1111' },
   { value: 'option2222', label: 'Option 2222' },
]

const ListenSelect = () => {
   const [inputValue, setInputValue] = useState<number | ''>('')

   const handleInputChange = (value: number) => {
      setInputValue(value)
      console.log(inputValue)
   }

   return (
      <Container>
         <StyledBox>
            <ContentBox>
               <ListenAndSelectUI
                  options={options}
                  optionsSecond={optionSecond}
                  onInputChange={handleInputChange}
                  children={
                     <>
                        <ButtonBox>
                           <Button>
                              <span>+</span> Add Option
                           </Button>
                        </ButtonBox>{' '}
                     </>
                  }
               />
            </ContentBox>
         </StyledBox>
      </Container>
   )
}

export default ListenSelect

export const Container = styled('div')(() => ({
   width: '100%',
   height: '100%',
   minHeight: '601px',
   display: 'flex',
   justifyContent: 'center',
   backgroundColor: '#d7e1f8',
}))

export const StyledBox = styled('div')(() => ({
   width: '100%',
   maxWidth: '1440px',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
}))

export const ContentBox = styled('div')(() => ({
   width: '100%',
   maxWidth: '1300px',
   display: 'flex',
   justifyContent: 'center',
}))

export const ListenSelectBox = styled('div')(() => ({
   width: '100%',
   maxWidth: '980px',
   height: '100%',
   minHeight: 366,
   padding: '50px 80px',
   borderRadius: 20,
   backgroundColor: 'rgba(255, 255, 255, 1)',
}))

export const InputSelectBox = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
}))

export const InputBox = styled('div')(() => ({
   '& p': {
      fontWeight: 500,
      fontSize: 16,
      lineHeight: '18,3px',
      color: 'rgba(75, 71, 89, 1)',
      marginBottom: 8,
      maxHeight: 94,
   },
}))

export const SelectType = styled('div')(() => ({
   marginTop: 24,
}))

export const ButtonBox = styled('div')(() => ({
   marginTop: 32,
   textAlign: 'end'
}))
