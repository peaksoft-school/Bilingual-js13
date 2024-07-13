import { useState } from 'react';
import { Button } from '@mui/material';
import BasicModal from '../shared/UI/modals/Modal';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const modalOpenHandler = () => setModalOpen((prev) => !prev);

  const onCloseCancelHandlerApp = () => setModalOpen((prev) => !prev);

  const onCloseYesHandlerApp = () => {
    alert('helloo');
    setModalOpen((prev) => !prev);
  };

  return (
    <>
      <Button onClick={modalOpenHandler}>adfds</Button>
      <BasicModal
        open={modalOpen}
        customVariant="primary"
        onCloseCancel={onCloseCancelHandlerApp}
        onCloseYes={onCloseYesHandlerApp}
      >
      </BasicModal>
    </>
  );
};

export default App;
