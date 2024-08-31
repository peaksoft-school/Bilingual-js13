import { useState } from 'react'
import ListenAndSelectUI from '../../../features/UI/listen-and-select/ListenAndSelectUI'
import { styled } from '@mui/material'
import Button from '../../../shared/UI/Button'
import Switches from '../../../shared/UI/switches/Switches'
import Voluem from '../../../assets/icons/svgs/voluem.svg'
import ListenDelete from '../../../assets/icons/svgs/ListenDelete.svg'

const options = [
   { value: 'option1', label: 'Option 1' },
   { value: 'option2', label: 'Option 2' },
]

const optionSecond = [
   { value: 'option111', label: 'Option 1111' },
   { value: 'option2222', label: 'Option 2222' },
]

const ListenSelectAudioData = [
   { id: 1, text: 'WORD 1' },
   { id: 2, text: 'WORD 2' },
   { id: 3, text: 'WORD 3' },
   { id: 4, text: 'WORD 4' },
   { id: 5, text: 'WORD 5' },
   { id: 6, text: 'WORD 6' },
]

const ListenSelectAudio = () => {
   const [inputValue, setInputValue] = useState<number | ''>('')

   const handleInputChange = (value: number) => {
      setInputValue(value)
      console.log(inputValue)
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
                           <StyledButton>
                              <Button>
                                 <span style={{ marginRight: 20 }}>+</span>ADD
                                 OPTION
                              </Button>
                           </StyledButton>
                           <ListenSelectContainer>
                              {ListenSelectAudioData.map((item) => (
                                 <ListenText key={item.id}>
                                    <p>{item.id}</p>
                                    <img src={Voluem} alt="Voluem" />
                                    <h2>{item.text}</h2>
                                    <SwitchesBox>
                                       <Switches variant="Quaternary" />
                                    </SwitchesBox>
                                    <img
                                       src={ListenDelete}
                                       alt="ListenDelete"
                                    />
                                 </ListenText>
                              ))}
                           </ListenSelectContainer>
                           <ButtonContainer>
                              <StyledButtonBottom>GO BACK</StyledButtonBottom>
                              <Button customVariant="secondary">SAVE</Button>
                           </ButtonContainer>
                        </>
                     }
                  />
               </StyledContent>
            </StyledBox>
         </Container>
      </>
   )
}

export default ListenSelectAudio

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

const StyledButton = styled('div')(() => ({
   textAlign: 'end',
   marginTop: 32,
   marginBottom: 22,
}))

const ListenText = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   width: '100%',
   maxWidth: 240,
   height: '100%',
   maxHeight: 46,
   border: '2px solid rgba(212, 208, 208, 1)',
   borderRadius: 12,
   padding: '12px 16px',
   alignItems: 'center',
   '& p': {
      fontSize: 16,
      fontWeight: 400,
      color: 'rgba(76, 72, 89, 1)',
   },
   '& h2': {
      fontSize: 14,
      fontWeight: 500,
      color: 'rgba(76, 72, 89, 1)',
   },
}))

const SwitchesBox = styled('div')(() => ({
   position: 'relative',
   left: 29,
}))

const ListenSelectContainer = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   flexWrap: 'wrap',
   gap: 18,
   width: '100%',
   maxWidth: 765,
   marginBottom: 32,
}))

const StyledButtonBottom = styled(Button)(() => ({
   backgroundColor: 'white',
   color: 'rgba(58, 16, 229, 1)',
   border: '2px solid rgba(58, 16, 229, 1)',
   fontWeight: 600,
   marginRight: 16,
}))

const ButtonContainer = styled('div')(() => ({
   textAlign: 'end',
}))
