import React from "react";
import logo from "./logo.svg";
import { Menu, Grid, Image } from "semantic-ui-react";
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
          <Menu.Item name="home">Home</Menu.Item>

          <Menu.Item name="profile">Profile</Menu.Item>

          <Menu.Item name="sign-in">Sign in</Menu.Item>
        </Menu>
      </header>
      {/* Top section */}
      <div style={{ border: "solid black", padding: "2vw" }}>
        <Grid stackable columns={1}>
          <Grid.Column>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={logo} className="App-logo" alt="logo" />
            </div>
          </Grid.Column>
        </Grid>
      </div>
      {/* Grid section */}
      <div>
        <Grid
          stackable
          columns={4}
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "1.5vw",
            paddingTop: "0"
          }}
        >
          <Grid.Column
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <Image
              src="https://react.semantic-ui.com/images/wireframe/image.png"
              size="small"
              style={{
                display: "flex",
                justifyContent: "center"
              }}
            />
          </Grid.Column>
          <Grid.Column
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <Image
              src="https://react.semantic-ui.com/images/wireframe/image.png"
              size="small"
              style={{
                display: "flex",
                justifyContent: "center"
              }}
            />
          </Grid.Column>
          <Grid.Column
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <Image
              src="https://react.semantic-ui.com/images/wireframe/image.png"
              size="small"
              style={{
                display: "flex",
                justifyContent: "center"
              }}
            />
          </Grid.Column>
          <Grid.Column
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <Image
              src="https://react.semantic-ui.com/images/wireframe/image.png"
              size="small"
              style={{
                display: "flex",
                justifyContent: "center"
              }}
            />
          </Grid.Column>
          <Grid.Column
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <Image
              src="https://react.semantic-ui.com/images/wireframe/image.png"
              size="small"
              style={{
                display: "flex",
                justifyContent: "center",
                border: "solid black"
              }}
            />
          </Grid.Column>
          <Grid.Column
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <Image
              src="https://react.semantic-ui.com/images/wireframe/image.png"
              size="small"
              style={{
                display: "flex",
                justifyContent: "center"
              }}
            />
          </Grid.Column>
          <Grid.Column
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <Image
              src="https://react.semantic-ui.com/images/wireframe/image.png"
              size="small"
              style={{
                display: "flex",
                justifyContent: "center"
              }}
            />
          </Grid.Column>
          <Grid.Column
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <Image
              src="https://react.semantic-ui.com/images/wireframe/image.png"
              size="small"
              style={{
                display: "flex",
                justifyContent: "center"
              }}
            />
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
}

export default App;
