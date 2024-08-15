import { FC } from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import { SelectChangeEvent } from '@mui/material/Select'
import { styled, Paper, Select as SelectMui, Box } from '@mui/material'

interface CustomSelectProps {
   value: string | number
   options?: Array<{ value: string | number; label: string }>
   optionsSecond?: Array<{ value: string | number; label: string }>
   onChange: (event: SelectChangeEvent<string | number>) => void
   placeholder?: string
   selectSx?: object  
   menuItemSx?: object  
   paperSx?: object  
   onSelectChange?: (value: string | number) => void

}

const Select: FC<CustomSelectProps> = ({
   value,
   options,
   optionsSecond,
   onChange,
   placeholder,
   selectSx,
   menuItemSx,
   paperSx,
}) => {
   const handleChange = (event: SelectChangeEvent<unknown>) => {
      onChange(event as SelectChangeEvent<string | number>)
   }

   return (
      <Box>
         <FormControl>
            <StyledSelect
               value={value}
               onChange={handleChange}
               displayEmpty
               inputProps={{ 'aria-label': 'Without label' }}
               MenuProps={{
                  PaperProps: {
                     component: StyledPaper,
                     style: {
                        maxHeight: 200,
                        width: 819,
                        borderRadius: '0px 0px 8px 8px',
                     },
                     sx: paperSx,  
                  },
               }}
               sx={selectSx}  
            >
               {placeholder && (
                  <StyledMenuItem value="" sx={menuItemSx}>
                     <p>{placeholder}</p>
                  </StyledMenuItem>
               )}
               {options?.map((item) => (
                  <StyledMenuItem key={item.value} value={item.value} sx={menuItemSx}>
                     {item.label}
                  </StyledMenuItem>
               ))}
               {optionsSecond?.map((item) => (
                  <StyledMenuItem key={item.value} value={item.value} sx={menuItemSx}>
                     {item.label}
                  </StyledMenuItem>
               ))}
            </StyledSelect>
         </FormControl>
      </Box>
   )
}

export default Select

const StyledSelect = styled(SelectMui)({
   width: '819px',
   borderRadius: '12px',
   marginLeft: '15px',
})

const StyledPaper = styled(Paper)({
   '&::-webkit-scrollbar': {
      width: '10px',
   },
   '&::-webkit-scrollbar-track': {
      background: 'white',
   },
   '&::-webkit-scrollbar-thumb': {
      background: '#9A9A9A',
      borderRadius: '15px',
   },
   paddingRight: '10px',
})

const StyledMenuItem = styled(MenuItem)({
   '&:hover': {
      backgroundColor: '#dfd9fb',
   },
   '&.Mui-selected': {
      backgroundColor: 'transparent !important',
   },
})
