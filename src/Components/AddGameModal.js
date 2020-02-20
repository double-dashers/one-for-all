import React, { useState } from 'react';
import { Header, Image, Modal } from 'semantic-ui-react';

const AddGameModal = props => {
  const { trigger, isOpen } = props;
  const [show, setShow] = useState(isOpen);

  function handleClose() {
    setShow(false);
  }

  return (
    <Modal trigger={trigger} open={isOpen} onClose={handleClose}>
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image
          wrapped
          size="medium"
          src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
        />
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>We have found the following gravatar image associated with your e-mail address.</p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default AddGameModal;
