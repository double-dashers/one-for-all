import React, { Component } from 'react';
import { Menu, Grid, Image } from 'semantic-ui-react';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <Router>
            <Menu stackable>
              <Menu.Item style={{ flexGrow: '1' }}>
                <img src="https://react.semantic-ui.com/logo.png" alt="placeholder" />
              </Menu.Item>
              <Menu.Item name="home" link as={Link} to="/">
                Home
              </Menu.Item>
              <Menu.Item name="profile" link as={Link} to="/profile">
                Profile
              </Menu.Item>

              <Menu.Item name="sign-in" link as={Link} to="/sign-in">
                Sign in
              </Menu.Item>
            </Menu>
          </Router>
        </header>
        {/* Top section */}
        <div style={{ border: 'solid black', padding: '2vw' }}>
          <Grid stackable columns={1}>
            <Grid.Column>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
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
              display: 'flex',
              justifyContent: 'center',
              padding: '1.5vw',
              paddingTop: '0',
            }}
          >
            <Grid.Column
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Image
                src="https://react.semantic-ui.com/images/wireframe/image.png"
                size="small"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              />
            </Grid.Column>
            <Grid.Column
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Image
                src="https://react.semantic-ui.com/images/wireframe/image.png"
                size="small"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              />
            </Grid.Column>
            <Grid.Column
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Image
                src="https://react.semantic-ui.com/images/wireframe/image.png"
                size="small"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              />
            </Grid.Column>
            <Grid.Column
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Image
                src="https://react.semantic-ui.com/images/wireframe/image.png"
                size="small"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              />
            </Grid.Column>
            <Grid.Column
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Image
                src="https://react.semantic-ui.com/images/wireframe/image.png"
                size="small"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  border: 'solid black',
                }}
              />
            </Grid.Column>
            <Grid.Column
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Image
                src="https://react.semantic-ui.com/images/wireframe/image.png"
                size="small"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              />
            </Grid.Column>
            <Grid.Column
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Image
                src="https://react.semantic-ui.com/images/wireframe/image.png"
                size="small"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              />
            </Grid.Column>
            <Grid.Column
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Image
                src="https://react.semantic-ui.com/images/wireframe/image.png"
                size="small"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              />
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Home;
