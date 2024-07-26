import { Box, IconButton, Checkbox, Typography, Button } from '@mui/material'

interface Option {
   id: number
   text: string
   isTrue: boolean
}

interface OptionsListProps {
   options: Option[]
   deleteOption: (id: number) => void
   updateOption: (updatedOption: Option) => void
}

const OptionsList: React.FC<OptionsListProps> = ({
   options,
   deleteOption,
   updateOption,
}) => {
   const handleCheckboxChange =
      (id: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
         const updatedOption = options.find((option) => option.id === id)
         if (updatedOption) {
            updateOption({ ...updatedOption, isTrue: event.target.checked })
         }
      }

   return (
      <Box>
         {options.map((option, index) => (
            <Box sx={{ display: 'flex', alignItems: 'center' }} key={option.id}>
               <Typography>{index + 1}</Typography>
               <Typography>{option.text}</Typography>
               <Checkbox
                  checked={option.isTrue}
                  onChange={handleCheckboxChange(option.id)}
               />
               <IconButton onClick={() => deleteOption(option.id)}>
                  <Button variant="contained">Delete</Button>
               </IconButton>
            </Box>
         ))}
      </Box>
   )
}

export default OptionsList
