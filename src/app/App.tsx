import { FC, useState } from 'react';
import Modal from '../shared/UI/modals/Modal';
import Button from '../shared/UI/Button';

const App: FC = () => {
   const [open, setOpen] = useState(false);
   
   const handleOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   return (
      <div>
         <Button onClick={handleOpen} customVariant='primary'>CANCEL</Button>
         <Modal open={open} variant="secondary" onClose={handleClose} buttonChange='false' >

         </Modal>
      </div>
   );
};

export default App;
