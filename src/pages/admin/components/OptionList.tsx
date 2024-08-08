import Checkbox from '@mui/material/Checkbox'
import Basket from '../../../assets/icons/svgs/Basket.svg'
import { Box, styled } from '@mui/material'

interface Option {
   id: number
   text: string
   isTrue: boolean
}

interface OptionListProps {
   optionsList: Option[]
   onCheckboxChange: (id: number) => void
   onDelete: (id: number) => void
}

const OptionList: React.FC<OptionListProps> = ({
   optionsList,
   onCheckboxChange,
   onDelete,
}) => {
   return (
      <StyledContainer>
         {optionsList.map((option) => (
            <StyledItem key={option.id}>
               <StyledText>
                  <span>{option.id}</span>
                  <span>{option.text}</span>
               </StyledText>
               <StyledFlexItem>
                  <Checkbox
                     color="success"
                     checked={option.isTrue}
                     onChange={() => onCheckboxChange(option.id)}
                     sx={{
                        color: option.isTrue ? 'green' : 'default',
                        '& .Mui-checked': {
                           color: 'green',
                        },
                     }}
                  />
                  <StyledBasket
                     onClick={() => onDelete(option.id)}
                     src={Basket}
                     alt="basket"
                  />
               </StyledFlexItem>
            </StyledItem>
         ))}
      </StyledContainer>
   )
}

export default OptionList

const StyledContainer = styled(Box)({
   display: 'flex',
   flexWrap: 'wrap',
   width: '100%',
   maxWidth: '900px',
   gap: '20px',
   marginLeft: '15px',
   marginTop: '25px',
})

const StyledItem = styled(Box)({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   width: '261px',
   height: '46px',
   borderRadius: '8px',
   border: '2px solid #D4D0D0',
   padding: '0 8px',
})

const StyledText = styled('span')({
   fontSize: '16px',
   display: 'flex',
   gap: '20px',
   marginLeft: '10px',
   color: '#4C4859',
})

const StyledFlexItem = styled(Box)({
   display: 'flex',
   alignItems: 'center',
   gap: '8px',
})

const StyledBasket = styled('img')({
   cursor: 'pointer',
})
