import React from 'react';
import { Menu } from 'semantic-ui-react';

const Header = () => {
  return (
    <Menu stackable>
      <Menu.Item style={{ flexGrow: '1' }}>
        <img src="https://react.semantic-ui.com/logo.png" alt="placeholder" />
      </Menu.Item>
      <Menu.Item name="profile">Profile</Menu.Item>
      <Menu.Item name="sign-in">Sign in</Menu.Item>
    </Menu>
  );
};

export default Header;
