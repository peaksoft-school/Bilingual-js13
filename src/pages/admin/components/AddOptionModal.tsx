import { Controller, useForm } from 'react-hook-form'
import { Box, Checkbox, styled, TextField, Typography } from '@mui/material'
import Modal from '../../../shared/UI/modals/Modal'
import Button from '../../../shared/UI/Button'
import { useRef } from 'react'

interface AddOptionModalProps {
   open: boolean
   onClose: () => void
   onSubmit: (data: { text: string; isTrue: boolean }) => void
}

const AddOptionModal: React.FC<AddOptionModalProps> = ({
   open,
   onClose,
   onSubmit,
}) => {
   const { control, handleSubmit, reset } = useForm({
      defaultValues: {
         text: '',
         isTrue: false,
      },
      mode: 'onChange',
   })

   const formRef = useRef<HTMLFormElement | null>(null)

   const handleSaveClick = () => {
      if (formRef.current) {
         formRef.current.dispatchEvent(
            new Event('submit', { cancelable: true, bubbles: true })
         )
      }
   }

   return (
      <>
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
                  onSubmit(data)
                  reset()
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
                                 fieldState.error
                                    ? fieldState.error.message
                                    : ''
                              }
                           />
                        </>
                     )}
                  />
               </StyledMargin>
               <StyledFlexText>
                  <StyledTextOption>Is true option?</StyledTextOption>
                  <Controller
                     name="isTrue"
                     control={control}
                     render={({ field }) => (
                        <Checkbox
                           color="success"
                           {...field}
                           checked={field.value}
                        />
                     )}
                  />
               </StyledFlexText>
            </form>
         </Modal>
      </>
   )
}

export default AddOptionModal

const StyledTextOption = styled(Typography)({
   color: '#4C4859',
   fontSize: '16px',
   marginTop: '8px',
})

const StyledFlexText = styled(Box)({
   display: 'flex',
   marginLeft: '35px',
   position: 'relative',
   top: '-10px',
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
   height: '46px',
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

const StyledButton = styled(Button)({
   borderColor: 'blue',
   color: 'blue',
})
