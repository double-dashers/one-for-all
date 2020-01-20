import React from "react";
import logo from "./logo.svg";
import { Menu } from "semantic-ui-react";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <Menu stackable>
          <Menu.Item style={{ flexGrow: "1" }}>
            <img
              src="https://react.semantic-ui.com/logo.png"
              alt="placeholder"
            />
          </Menu.Item>
          <Menu.Item
            name="home"
            // active={activeItem === "home"}
            // onClick={this.handleItemClick}
            // link
            // as={Link}
            // to="/"
          >
            Home
          </Menu.Item>

          <Menu.Item
            name="profile"
            // active={activeItem === "testimonials"}
            // onClick={this.handleItemClick}
            // as={Link}
            // to="/profile"
          >
            Profile
          </Menu.Item>

          <Menu.Item
            name="sign-in"
            // active={activeItem === "sign-in"}
            // onClick={this.handleItemClick}
            // as={Link}
            // to="login"
          >
            Sign in
          </Menu.Item>
        </Menu>
      </header>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
