import React, { Component } from 'react';
import { Grid, Container, Segment, Image } from 'semantic-ui-react';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container>
        <Grid stackable columns={2}>
          <Grid.Column mobile={16} tablet={6} computer={6}>
            <Segment>
              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            </Segment>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={10} computer={10}>
            <Segment>
              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default Profile;
