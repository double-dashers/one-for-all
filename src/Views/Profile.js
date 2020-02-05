import React, { Component } from 'react';
import { Grid, Card, Image, Icon, Container, Header } from 'semantic-ui-react';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Grid
          container
          stackable
          doubling
          columns={2}
         
          style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          
        >
          <Grid.Column style={{
            
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }} computer={4}>
            <Card>
              <Image
                src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>El Arturo</Card.Header>
                <Card.Meta>
                  <span className="date">Joined in 2020</span>
                </Card.Meta>
                <Card.Description>
                  Arturo is a musician living in El Superama de la Condesa.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="user" />
                  22 Friends
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column style={{
            
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }} computer={8}>
            <Container fluid text>
              <Header as="h2">El Profile</Header>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
                aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt.
                Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
                ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus
                varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                Curabitur ullamcorper ultricies nisi.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
                aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt.
                Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
                ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus
                varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                Curabitur ullamcorper ultricies nisi.
              </p>
            </Container>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Profile;
