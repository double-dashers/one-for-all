import React from 'react';
import { Grid, Container, Card } from 'semantic-ui-react';
import { createUseStyles } from 'react-jss';
import MyGameCard from '../Components/MyGameCard';

const staticArray = [
  {
    name: 'Animal Crossing: New Horizons',
    image: 'http://images.nintendolife.com/56ac86549585a/ac.original.jpg',
    release: 'March 20th 2020',
    genres: ['Adventure', 'Simulation'],
  },
  {
    name: 'Trials of Mana ',
    image: 'https://nintendoeverything.com/wp-content/uploads/trials-of-mana.jpg',
    release: 'April 15th 2020',
    genres: ['Adventure', 'Role-Playing'],
  },
  {
    name: 'Persona 5 The Royal',
    image:
      'https://gematsu.com/wp-content/uploads/2019/04/Persona-5-The-Royal_2019_04-24-19_000.jpg',
    release: 'March 30th 2020',
    genres: ['Adventure', 'Role-Playing'],
  },
  {
    name: 'La Mulana 1+2',
    image: 'https://gematsu.com/wp-content/uploads/2019/08/La-Mulana-1-2-Collection_08-29-19.jpg',
    release: 'March 18th 2020',
    genres: ['Action', 'Adventure'],
  },
];

const useStyles = createUseStyles({
  statusCard: {
    height: '650px',
    overflow: 'auto',
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
              {staticArray.map(item => (
                <MyGameCard
                  key={item.name}
                  name={item.name}
                  image={item.image}
                  release={item.release}
                  genres={item.genres}
                />
              ))}
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
