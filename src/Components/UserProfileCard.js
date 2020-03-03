import React from 'react';
import { Grid, Button, Card, Icon, Image } from 'semantic-ui-react';

const UserProfileCard = () => {
  return (
    <Card centered fluid>
      <Card.Content>
        <Grid>
          <Grid.Column mobile={16} tablet={6} computer={8}>
            <Grid.Row>
              <Image
                size="small"
                floated="left"
                src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
              />
            </Grid.Row>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={6} computer={6}>
            <Grid.Row centered>
              <Card.Header>Arturo</Card.Header>
              <Card.Meta>
                <span className="position">CEO</span>
              </Card.Meta>
              <Card.Description>
                <span className="email">Avelo@gmail.com</span>
              </Card.Description>
              <Card.Description>
                <span className="phone">+22999348585</span>
              </Card.Description>
            </Grid.Row>
            <Grid.Row centered>
              <Button centered color="blue" type="submit">
                Message
              </Button>
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </Card.Content>
      <Card.Content extra>
        <Icon name="user" />
        22 Friends
      </Card.Content>
    </Card>
  );
};

export default UserProfileCard;
