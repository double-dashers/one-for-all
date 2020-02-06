import React, { Component } from 'react';
import { Grid, Container } from 'semantic-ui-react';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container>
        <Grid stackable columns={2}>
          Something here
        </Grid>
      </Container>
    );
  }
}

export default Profile;
