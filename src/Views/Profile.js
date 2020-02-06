import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

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
          Something here
        </Grid>
      </div>
    );
  }
}

export default Profile;
