import React from 'react';
import { Grid, Container, Card } from 'semantic-ui-react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  statusCard: {
    height: '650px',
  },
});

const Main = () => {
  const classes = useStyles();
  return (
    <Container fluid>
      <Grid stackable columns={4}>
        <Grid.Column mobile={16} tablet={4} computer={4}>
          <Card raised fluid className={classes.statusCard}>
            <Card.Content>
              <Card.Header>Backlog</Card.Header>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={4} computer={4}>
          <Card raised fluid className={classes.statusCard}>
            <Card.Content>
              <Card.Header>Currently</Card.Header>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={4} computer={4}>
          <Card raised fluid className={classes.statusCard}>
            <Card.Content>
              <Card.Header>Dropped</Card.Header>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={4} computer={4}>
          <Card raised fluid className={classes.statusCard}>
            <Card.Content>
              <Card.Header>Completed</Card.Header>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Main;
