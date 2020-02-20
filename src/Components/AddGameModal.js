import React, { useState } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

const AddGameModal = () => {
  const { show, setShow } = useState({
    show: false,
  });

  function handleOpen() {
    setShow(true);
  }

  function handleClose() {
    setShow(false);
  }

  return (
    <Modal
      trigger={<Button onClick={handleOpen}>Show Modal</Button>}
      open={show}
      onClose={handleClose}
    >
      <Header icon="browser" content="Cookies policy" />
      <Modal.Content>
        <h3>This website uses cookies to ensure the best user experience.</h3>
      </Modal.Content>
      <Modal.Actions>
        <Button color="green" onClick={handleClose} inverted>
          <Icon name="checkmark" /> Got it
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default AddGameModal;
