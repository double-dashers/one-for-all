import React, { useState } from 'react';
import { Menu, Sidebar, Icon } from 'semantic-ui-react';

const MobileHeader = () => {
  const [visible, setVisible] = useState();

  function handleVisible() {
    setVisible(true);
  }

  return (
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        onHide={() => setVisible(false)}
        vertical
        visible={visible}
        width="thin"
      >
        <Menu.Item as="a">
          <Icon name="home" />
          Home
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="gamepad" />
          Games
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="camera" />
          Channels
        </Menu.Item>
      </Sidebar>

      <Sidebar.Pusher dimmed={visible}>
        <Menu>
          <Menu.Item onClick={handleVisible} style={{ flexGrow: '1' }}>
            <img src="https://react.semantic-ui.com/logo.png" alt="placeholder" />
          </Menu.Item>
        </Menu>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

export default MobileHeader;
