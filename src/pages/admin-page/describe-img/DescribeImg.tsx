import React, { useState } from 'react'
import styled from '@emotion/styled'
import ListenAndSelectUI from '../../../features/UI/listen-and-select/ListenAndSelectUI'
import Input from '../../../shared/UI/Input'
import Button from '../../../shared/UI/Button'

const options = [
   { value: 'option1', label: 'Option 1' },
   { value: 'option2', label: 'Option 2' },
]

const optionSecond = [
   { value: 'option111', label: 'Option 1111' },
   { value: 'option2222', label: 'Option 2222' },
]

const DescribeImg: React.FC = () => {
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
                        <ImageUploadBox>
                           <UploadText>Upload image</UploadText>
                        </ImageUploadBox>
                        <FileNameText>
                           File_name_of_the_image_file.jpg
                        </FileNameText>
                        <CorrectAnswerText>Correct answer</CorrectAnswerText>
                        <InputWithMargin type="text" />
                        <GoBackButton customVariant="Octonary">
                           Go back
                        </GoBackButton>
                        <SaveButton customVariant="secondary">Save</SaveButton>
                     </>
                  }
                  onInputChange={handleInputChange}
               />
            </StyledContent>
         </StyledBox>
      </Container>
   )
}

export default DescribeImg

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

const ImageUploadBox = styled('div')`
   width: 181px;
   height: 178px;
   border-radius: 8px;
   text-align: center;
   display: flex;
   justify-content: center;
   align-items: center;
   border: 1px solid gray;
   margin-top: 20px;
`

const UploadText = styled('p')`
   color: #3a10e5;
   font-family: sans-serif;
   font-size: 16px;
   font-weight: 600;
   line-height: 18.3px;
   text-align: left;
`

const FileNameText = styled('span')`
   font-family: sans-serif;
   font-size: 16px;
   font-weight: 400;
   line-height: 18.08px;
   position: relative;
   left: 200px;
   bottom: 97.5px;
`

const CorrectAnswerText = styled('p')`
   position: relative;
   top: 10px;
   font-family: sans-serif;
   font-size: 16px;
   font-weight: 500;
   line-height: 16px;
   text-align: left;
`

const InputWithMargin = styled(Input)`
   margin-top: 20px;
`

const GoBackButton = styled(Button)`
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

const SaveButton = styled(Button)`
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
