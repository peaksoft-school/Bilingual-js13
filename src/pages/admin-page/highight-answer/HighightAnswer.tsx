import { styled, TextareaAutosize } from '@mui/material'
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

const HighightAnswer = () => {
   return (
      <>
         <Container>
            <StyledBox>
               <StyledContent>
                  <ListenAndSelectUI
                     options={options}
                     optionsSecond={optionSecond}
                     children={
                        <>
                           <InputBox>
                              <label
                                 style={{ cursor: 'pointer', marginTop: 6 }}
                              >
                                 <p>Question statement</p>
                                 <Input placeholder="“describe a time you were surprised. what happened?”" />
                              </label>
                              <label
                                 style={{ cursor: 'pointer', marginTop: 6 }}
                              >
                                 <p
                                    style={{
                                       marginTop: 24,
                                    }}
                                 >
                                    Question statement
                                 </p>
                                 <TextareaAutosizeStyle placeholder="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem." />
                              </label>

                              <HighlightAnswer>
                                 <h2>Highlight correct answer:</h2>

                                 <p>
                                    Sed ut perspiciatis unde omnis iste natus
                                    error sit voluptatem accusantium doloremque
                                    laudantium, totam rem aperiam, eaque ipsa
                                    quae ab illo inventore veritatis et quasi
                                    architecto beatae vitae dicta sunt
                                    explicabo. Nemo{' '}
                                    <span>
                                       enim ipsam voluptatem quia voluptas sit
                                       aspernatur aut odit aut fugit, sed quia
                                       consequuntur magni dolores eos qui
                                       ratione voluptatem sequi nesciunt. Neque
                                       porro quisquam est, qui dolorem ipsum
                                       quia dolor sit amet,
                                    </span>{' '}
                                    consectetur, adipisci velit, sed quia non
                                    numquam eius modi tempora incidunt ut labore
                                    et dolore magnam aliquam quaerat voluptatem.
                                 </p>
                              </HighlightAnswer>

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

export default HighightAnswer

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

const HighlightAnswer = styled('div')(() => ({
   marginTop: 30,
   '& h2': {
      fontSize: 16,
      fontWeight: 500,
      color: 'rgba(76, 72, 89, 1)',
   },
   '& p': {
      fontSize: 16,
      fontWeight: 400,
      color: 'rgba(76, 72, 89, 1)',
      lineHeight: '23px',
      '& span': {
         color: 'rgba(58, 16, 229, 1)',
      },
   },
}))
