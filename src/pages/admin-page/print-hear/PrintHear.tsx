import React, { useState } from 'react'
import styled from '@emotion/styled'
import ListenAndSelectUI from '../../../features/UI/listen-and-select/ListenAndSelectUI'
import Input from '../../../shared/UI/Input'
import Button from '../../../shared/UI/Button'
import playVector from '../../../assets/icons/svgs/playVector.svg'

const options = [
   { value: 'option1', label: 'Option 1' },
   { value: 'option2', label: 'Option 2' },
]

const optionSecond = [
   { value: 'option111', label: 'Option 1111' },
   { value: 'option2222', label: 'Option 2222' },
]

const App: React.FC = () => {
   const [inputValue, setInputValue] = useState<number | ''>('')

   const handleInputChange = (value: number) => {
      setInputValue(value)
      console.log(inputValue)
   }

   return (
      <Container>
         <StyledBox>
            <StyledContent>
               <ListenAndSelectUI
                  options={options}
                  optionsSecond={optionSecond}
                  children={
                     <>
                        <StyledText>Number off</StyledText>
                        <StyledText>Replays</StyledText>
                        <StyledNumber type="number" />
                        <StyledBtn customVariant="primary">Upload</StyledBtn>
                        <StyledButton>
                           <img src={playVector} alt="playVector" />
                        </StyledButton>
                        <StyledTextSpan>
                           File_name_of_the_audio_file.mp3
                        </StyledTextSpan>
                        <br />
                        <br />
                        <StyledPtext>Correct answer</StyledPtext>
                        <StyledInput type="text" />
                        <div>
                           <StyledButtons customVariant="Octonary">
                              Go back
                           </StyledButtons>
                           <StyledSaveBtn customVariant="secondary">
                              Save
                           </StyledSaveBtn>
                        </div>
                     </>
                  }
                  onInputChange={handleInputChange}
               />
            </StyledContent>
         </StyledBox>
      </Container>
   )
}

export default App

const Container = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   justifyContent: 'center',
   backgroundColor: '#d7e1f8',
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

const StyledText = styled('p')`
   width: 80px;
   height: 36px;
   padding-top: 12px;
   font-family: sans-serif;
   font-size: 16px;
   font-weight: 500;
   line-height: 17.6px;
   text-align: left;
`

const StyledNumber = styled(Input)`
   width: 55px;
   height: 42px;
`

const StyledBtn = styled(Button)`
   margin-left: 20px;
   width: 130px;
   height: 50px;
   padding: 13px 24px;
   border-radius: 8px;
   font-family: sans-serif;
   font-size: 16px;
   line-height: 20.41px;
   letter-spacing: 0.02em;
   text-align: center;
   font-weight: bold;
`

const StyledButton = styled(Button)`
   width: 46px;
   height: 46px;
   margin-left: 15px;
   padding: 0;

   img {
      width: 20px;
      height: 20px;
   }
`

const StyledTextSpan = styled('span')`
   width: 233px;
   height: 18px;
   font-family: sans-serif;
   font-size: 16px;
   font-weight: 400;
   line-height: 18.08px;
   margin-left: 20px;
`

const StyledPtext = styled('p')`
   position: relative;
   top: 10px;
   font-family: sans-serif;
   font-size: 16px;
   font-weight: 500;
   line-height: 16px;
   text-align: left;
`

const StyledInput = styled(Input)`
   margin-top: 20px;
`

const StyledButtons = styled(Button)`
   margin-left: 36.25rem;
   border: none;
   border: 3px solid #3a10e5;
   border-radius: 8px;
   color: #3a10e5;
   font-family: sans-serif;
   font-size: 14px;
   line-height: 16.41px;
   letter-spacing: 0.02em;
   text-align: center;
   margin-top: 20px;

   &:hover {
      border-color: #3a10e5;
      background-color: transparent;
      color: #3a10e5;
   }
`

const StyledSaveBtn = styled(Button)`
   width: 100px;
   height: 50px;
   border-radius: 8px;
   font-family: sans-serif;
   font-size: 14px;
   line-height: 16.41px;
   letter-spacing: 0.02em;
   text-align: center;
   color: white;
   margin-left: 20px;
   margin-top: 20px;
`
