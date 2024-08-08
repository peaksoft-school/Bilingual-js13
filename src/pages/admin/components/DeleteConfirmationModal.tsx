import Modal from '../../../shared/UI/modals/Modal'
import Button from '../../../shared/UI/Button'
import Typography from '@mui/material/Typography'
import Cross from '../../../assets/icons/svgs/Cross.svg'
import { Box, styled } from '@mui/material'

interface DeleteConfirmationModalProps {
   open: boolean
   onClose: () => void
   onConfirm: () => void
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
   open,
   onClose,
   onConfirm,
}) => {
   return (
      <Modal
         open={open}
         variant="secondary"
         onClose={onClose}
         boxContent={
            <StyledButton>
               <Button onClick={onClose}>CANCEL</Button>
               <Button onClick={onConfirm}>DELETE</Button>
            </StyledButton>
         }
      >
         <div>
            <StyledFlexCross>
               <StyledBackgroundCross>
                  <img src={Cross} alt="Cross" />
               </StyledBackgroundCross>
            </StyledFlexCross>
            <StyledConfirmText>Do you want delete?</StyledConfirmText>
            <StyledConfirmFile>You can't restore this file</StyledConfirmFile>
         </div>
      </Modal>
   )
}

export default DeleteConfirmationModal

const StyledFlexCross = styled(Box)({
   display: 'flex',
   justifyContent: 'center',
})

const StyledBackgroundCross = styled(Box)({
   width: '66px',
   height: '66px',
   borderRadius: '100%',
   backgroundColor: '#faeae9',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
})

const StyledConfirmText = styled(Typography)({
   fontSize: '20px',
   color: '#4C4859',
   fontWeight: 'bold',
   textAlign: 'center',
   position: 'relative',
   top: '30px',
})

const StyledConfirmFile = styled(Typography)({
   fontSize: '16px',
   color: '#4C4859',
   textAlign: 'center',
   position: 'relative',
   top: '30px',
})

const StyledButton = styled(Box)({
   display: 'flex',
   justifyContent: 'center',
   gap: '30px',
   margin: '70px',
   position: 'relative',
   top: '20px',
})
