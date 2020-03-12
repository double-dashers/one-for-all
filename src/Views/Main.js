import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import { createUseStyles } from 'react-jss';

const Main = () => {
  return (
    <Container fluid>
      <Grid stackable columns={4}>
        <Grid.Column mobile={16} tablet={4} computer={4}></Grid.Column>
        <Grid.Column mobile={16} tablet={4} computer={4}></Grid.Column>
        <Grid.Column mobile={16} tablet={4} computer={4}></Grid.Column>
        <Grid.Column mobile={16} tablet={4} computer={4}></Grid.Column>
      </Grid>
    </Container>
  );
};

export default Main;
