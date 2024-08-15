import { FC, useState } from 'react'
import { SelectChangeEvent, styled } from '@mui/material'
import Select from '../../../shared/UI/select/Select'
import Input from '../../../shared/UI/Input'

interface ListenAndSelectUIProps {
   options: Array<{ value: string | number; label: string }>
   optionsSecond: Array<{ value: string | number; label: string }>
   placeholder?: string
   onSelectChange?: (value: string | number) => void
   children: any
   onInputChange?: (value: number) => void
}

const ListenAndSelectUI: FC<ListenAndSelectUIProps> = ({
   options,
   optionsSecond,
   placeholder,
   onSelectChange,
   onInputChange,
   children,
}) => {
   const [select, setSelect] = useState<string | number>('')
   const [inputValue, setInputValue] = useState<string>('')

   const handleSelect = (e: SelectChangeEvent<string | number>) => {
      setSelect(e.target.value)
      if (onSelectChange) {
         onSelectChange(e.target.value)
      }
   }

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      setInputValue(value)
      if (onInputChange) {
         onInputChange(Number(value) || 0)
      }
   }

   return (
      <ListenSelectBox>
         <InputSelectBox>
            <label style={{ cursor: 'pointer', marginTop: 6 }}>
               <p>Title</p>
               <Select
                  value={select}
                  options={options}
                  onChange={handleSelect}
                  placeholder={placeholder}
                  selectSx={{
                     width: 697,
                     marginTop: '12px',
                     position: 'relative',
                     right: 20,
                  }}
                  menuItemSx={{ width: 697 }}
                  paperSx={{ maxWidth: 697 }}
               />
            </label>
            <InputBox>
               <p>
                  Duration <br /> (in minutes)
               </p>
               <Input
                  type="number"
                  value={inputValue}
                  onChange={handleInputChange}
                  sx={{ width: 94 }}
               />
            </InputBox>
         </InputSelectBox>
         <SelectType>
            <label style={{ cursor: 'pointer', marginTop: 16 }}>
               <p>Type</p>
               <Select
                  value={select}
                  optionsSecond={optionsSecond}
                  onChange={handleSelect}
                  placeholder={placeholder}
                  selectSx={{
                     width: 820,
                     marginTop: '12px',
                     position: 'relative',
                     right: 20,
                  }}
                  menuItemSx={{ width: 820 }}
                  paperSx={{ maxWidth: 820 }}
               />
            </label>
         </SelectType>
         {children}
      </ListenSelectBox>
   )
}

export default ListenAndSelectUI

export const ListenSelectBox = styled('div')(() => ({
   width: '100%',
   maxWidth: '980px',
   height: '100%',
   minHeight: 366,
   padding: '50px 80px',
   borderRadius: 20,
   backgroundColor: 'white',
}))

export const InputSelectBox = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
}))

export const InputBox = styled('div')(() => ({
   '& p': {
      fontWeight: 500,
      fontSize: 16,
      lineHeight: '18.3px',
      color: 'rgba(75, 71, 89, 1)',
      marginBottom: 8,
      maxHeight: 94,
   },
}))

export const SelectType = styled('div')(() => ({
   marginTop: 24,
}))
