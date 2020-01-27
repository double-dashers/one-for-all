import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import Header from '../Components/Header';
import logo from '../logo.svg';
import '../App.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
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
