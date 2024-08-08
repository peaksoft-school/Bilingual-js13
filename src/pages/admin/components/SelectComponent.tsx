import { styled, Typography } from '@mui/material'
import Select from '../../../shared/UI/select/Select'
import { SelectChangeEvent } from '@mui/material/Select'

interface SelectComponentProps {
   value: string | number
   onChange: (event: SelectChangeEvent<string | number>) => void
}

const SelectComponent: React.FC<SelectComponentProps> = ({
   value,
   onChange,
}) => {
   const options = [
      { value: 10, label: 'Listen and select word' },
      { value: 20, label: 'Type what you hear' },
      { value: 30, label: 'Record saying statement' },
      { value: 40, label: 'Respond in at least N words' },
      { value: 50, label: 'Describe image' },
   ]

   return (
      <>
         <StyledText>Type</StyledText>
         <Select
            value={value}
            options={options}
            onChange={onChange}
            placeholder="Select real English words"
         />
      </>
   )
}

export default SelectComponent

const StyledText = styled(Typography)({
   margin: '15px',
})
