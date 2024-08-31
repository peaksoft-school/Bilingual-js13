import { Controller, useForm } from 'react-hook-form'
import { Box, styled, TextField, Typography } from '@mui/material'
import Modal from '../../../shared/UI/modals/Modal'
import Button from '../../../shared/UI/Button'
import { useRef, useState } from 'react'

interface AddOptionModalProps {
   open: boolean
   onClose?: () => void
   onSubmit: (data?: { text: string; audioFile: File | null }) => void | string
}

const ListenSelectModal: React.FC<AddOptionModalProps> = ({
   open,
   onClose,
   onSubmit,
}) => {
   const { control, handleSubmit, reset } = useForm({
      defaultValues: {
         text: '',
         audioFile: null,
      },
      mode: 'onChange',
   })

   const formRef = useRef<HTMLFormElement | null>(null)
   const [selectedFile, setSelectedFile] = useState<File | null>(null)

   const handleSaveClick = () => {
      if (formRef.current) {
         formRef.current.dispatchEvent(
            new Event('submit', { cancelable: true, bubbles: true })
         )
      }
   }

   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files[0]) {
         setSelectedFile(event.target.files[0])
      }
   }

   return (
      <Modal
         open={open}
         variant="secondary"
         onClose={onClose}
         boxContent={
            <StyledFlexButton>
               <StyledButton customVariant="Octonary" onClick={onClose}>
                  GO BACK
               </StyledButton>
               <Button customVariant="secondary" onClick={handleSaveClick}>
                  Save
               </Button>
            </StyledFlexButton>
         }
      >
         <form
            ref={formRef}
            onSubmit={handleSubmit((data) => {
               onSubmit({ text: data.text, audioFile: selectedFile })
               reset()
               setSelectedFile(null)
            })}
         >
            <StyledMargin>
               <Controller
                  name="text"
                  control={control}
                  rules={{ required: 'Enter field' }}
                  render={({ field, fieldState }) => (
                     <>
                        <StyledText>Title</StyledText>
                        <StyledAddInput
                           {...field}
                           placeholder="Enter text"
                           error={!!fieldState.error}
                           helperText={
                              fieldState.error ? fieldState.error.message : ''
                           }
                        />
                     </>
                  )}
               />
            </StyledMargin>
            <StyledFlexText>
               <input
                  type="file"
                  accept="audio/*"
                  style={{ display: 'none' }}
                  id="audio-file"
                  onChange={handleFileChange}
               />
               <StyledButtonText>
                  <label htmlFor="audio-file">
                     <StyledButton component="span" customVariant="Octonary">
                        Uppload audio file
                     </StyledButton>
                  </label>
                  {selectedFile && (
                     <StyledFileName>{selectedFile.name}</StyledFileName>
                  )}
               </StyledButtonText>
            </StyledFlexText>
         </form>
      </Modal>
   )
}

export default ListenSelectModal

const StyledFlexText = styled(Box)({
   display: 'flex',
   position: 'relative',
   top: '-20px',
   margin: '30px',
   alignItems: 'center',
})

const StyledFlexButton = styled(Box)({
   display: 'flex',
   justifyContent: 'end',
   gap: '30px',
   position: 'relative',
   top: '20px',
   right: '50px',
})

const StyledAddInput = styled(TextField)({
   width: '450px',
   '& .MuiInputBase-root': {
      borderRadius: '8px',
   },
   '& .MuiOutlinedInput-notchedOutline': {
      borderRadius: '8px',
   },
})

const StyledMargin = styled(Box)({
   margin: '30px',
})


const StyledText = styled(Typography)({
   fontWeight: '500',
   marginBottom: '10px',
})

const StyledButtonText = styled(Box)({
   marginTop: '15px',
   display: 'flex',
})

const StyledButton = styled(Button)({
   borderColor: 'blue',
   color: 'blue',
   fontWeight: 'bold',
})

const StyledFileName = styled(Typography)({
   marginLeft: '15px',
   marginTop: '15px',
})
