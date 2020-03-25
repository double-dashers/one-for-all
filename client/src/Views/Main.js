import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import KanbanContainer from '../Components/KanbanContainer';

const Main = () => {
  return (
    <Container fluid>
      <Grid stackable columns={4}>
        <Grid.Column mobile={16} tablet={4} computer={4}>
          <KanbanContainer status="Backlog" />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={4} computer={4}>
          <KanbanContainer status="Currently" />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={4} computer={4}>
          <KanbanContainer status="Dropped" />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={4} computer={4}>
          <KanbanContainer status="Finished" />
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Main;
