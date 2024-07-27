import { useState } from 'react'
import { SelectChangeEvent } from '@mui/material/Select'
import SelectComponent from './SelectComponent'
import AddOptionModal from './AddOptionModal'
import OptionList from './OptionList'
import DeleteConfirmationModal from './DeleteConfirmationModal'
import Button from '../../../shared/UI/Button'
import { Box, styled } from '@mui/material'

interface Option {
   id: number
   text: string
   isTrue: boolean
}

const MainPage: React.FC = () => {
   const [age, setAge] = useState<string | number>('')
   const [open, setOpen] = useState(false)
   const [optionsList, setOptionsList] = useState<Option[]>([])
   const [showExtraButtons, setShowExtraButtons] = useState(false)
   const [deleteModalOpen, setDeleteModalOpen] = useState(false)
   const [optionToDelete, setOptionToDelete] = useState<number | null>(null)

   const handleChange = (event: SelectChangeEvent<string | number>) => {
      setAge(event.target.value as string | number)
   }

   const handleOpenModal = () => {
      setOpen(true)
   }

   const handleCloseModal = () => {
      setOpen(false)
   }

   const handleAddOption = (data: { text: string; isTrue: boolean }) => {
      setOptionsList([
         ...optionsList,
         { id: optionsList.length + 1, text: data.text, isTrue: data.isTrue },
      ])
      setShowExtraButtons(true)
      handleCloseModal()
   }

   const handleCheckboxChange = (id: number) => {
      setOptionsList(
         optionsList.map((opt) =>
            opt.id === id ? { ...opt, isTrue: !opt.isTrue } : opt
         )
      )
   }

   const handleDelete = (id: number) => {
      setOptionToDelete(id)
      setDeleteModalOpen(true)
   }

   const confirmDelete = () => {
      if (optionToDelete !== null) {
         setOptionsList(optionsList.filter((opt) => opt.id !== optionToDelete))
         setOptionToDelete(null)
      }
      setDeleteModalOpen(false)
   }

   return (
      <>
         <SelectComponent value={age} onChange={handleChange} />
         <AddOptionModal
            open={open}
            onClose={handleCloseModal}
            onSubmit={handleAddOption}
         />
         {age && (
            <Button customVariant="primary" onClick={handleOpenModal}>
               +ADD OPTIONS
            </Button>
         )}
         <OptionList
            optionsList={optionsList}
            onCheckboxChange={handleCheckboxChange}
            onDelete={handleDelete}
         />
         {showExtraButtons && (
            <StyledFlexButton>
               <StyledButton customVariant="Octonary">Go Back</StyledButton>
               <Button customVariant="secondary">Save</Button>
            </StyledFlexButton>
         )}
         <DeleteConfirmationModal
            open={deleteModalOpen}
            onClose={() => setDeleteModalOpen(false)}
            onConfirm={confirmDelete}
         />
      </>
   )
}

export default MainPage

const StyledButton = styled(Button)({
   borderColor: 'blue',
   color: 'blue',
})

const StyledFlexButton = styled(Box)({
   display: 'flex',
   gap: '15px',
})
