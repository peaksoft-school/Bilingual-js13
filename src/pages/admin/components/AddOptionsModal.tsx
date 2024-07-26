import { useForm, SubmitHandler } from 'react-hook-form'
import {
   Modal,
   TextField,
   Checkbox,
   Button,
   Box,
   Typography,
   FormControlLabel,
} from '@mui/material'

interface Option {
   id: number
   text: string
   isTrue: boolean
}

interface AddOptionsModalProps {
   open: boolean
   handleClose: () => void
   addOption: (option: Option) => void
}

interface FormValues {
   text: string
   isTrue: boolean
}

const AddOptionsModal: React.FC<AddOptionsModalProps> = ({
   open,
   handleClose,
   addOption,
}) => {
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm<FormValues>()

   const onSubmit: SubmitHandler<FormValues> = (data) => {
      const newOption: Option = {
         id: Date.now(),
         text: data.text,
         isTrue: data.isTrue,
      }
      addOption(newOption)
      reset()
      handleClose()
   }

   return (
      <Modal open={open} onClose={handleClose}>
         <Box
            sx={{
               padding: 2,
               backgroundColor: 'white',
               margin: '20vh auto',
               width: '300px',
               borderRadius: 1,
            }}
         >
            <Typography variant="h6">Добавить опцию</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
               <TextField
                  label="Title"
                  fullWidth
                  margin="normal"
                  {...register('text', {
                     required: 'Это поле обязательно для заполнения',
                  })}
                  error={!!errors.text}
                  helperText={errors.text ? errors.text.message : ''}
               />
               <FormControlLabel
                  control={<Checkbox {...register('isTrue')} />}
                  label="Is true option?"
               />
               <Box
                  sx={{
                     display: 'flex',
                     justifyContent: 'space-between',
                  }}
               >
                  <Button onClick={handleClose} variant="contained">
                     GO BACK
                  </Button>
                  <Button type="submit" variant="contained" color="primary">
                     SAVE
                  </Button>
               </Box>
            </form>
         </Box>
      </Modal>
   )
}

export default AddOptionsModal
