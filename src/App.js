import React from "react";
import logo from "./logo.svg";
import { Menu } from "semantic-ui-react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default App;
