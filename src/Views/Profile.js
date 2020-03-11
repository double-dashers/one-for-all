import React, { Component } from 'react';
import { Grid, Container } from 'semantic-ui-react';
import { createUseStyles } from 'react-jss';
import TabMenu from '../Components/TabMenu';
import CurrentlyCard from '../Components/CurrentlyCard';
import UserProfileCard from '../Components/UserProfileCard';

const useStyles = createUseStyles({
  cardCol: {
    marginTop: '2vw',
  },
});

const Profile = () => {
  const classes = useStyles();

  render() {
    return (
      <Container fluid>
        <Grid stackable columns={2}>
          <Grid.Column mobile={16} tablet={6} computer={6}>
            <Grid.Row>
              <Grid.Column mobile={16} tablet={16} computer={16}>
                <UserProfileCard />
              </Grid.Column>
              <Grid.Column mobile={16} tablet={16} computer={16} className={classes.cardCol}>
                <CurrentlyCard />
              </Grid.Column>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={10} computer={10}>
            <TabMenu />
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default Profile;
