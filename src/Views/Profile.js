import React from 'react';
import { Grid, Container, Segment, Image } from 'semantic-ui-react';
import { createUseStyles } from 'react-jss';
import TabMenu from '../Components/TabMenu';
import CurrentlyCard from '../Components/CurrentlyCard';

const useStyles = createUseStyles({
  cardCol: {
    marginTop: '2vw',
  },
});

const Profile = () => {
  const classes = useStyles();

  return (
    <Container fluid>
      <Grid stackable columns={2}>
        <Grid.Column mobile={16} tablet={6} computer={6}>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={16} computer={16}>
              <Segment>
                <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
              </Segment>
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
};

export default Profile;
