import React from 'react';
import { Button, Card, Icon, Image } from 'semantic-ui-react';

const UserProfileCard = () => {
  return (
    <Card centered>
     
      <Card.Content>
      <Image
        size="small"
        floated="left"
        src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
      />
        <Card.Header>Arturo</Card.Header>
        <Card.Meta>
          <span className="position">CEO</span>
        </Card.Meta>
        <Card.Description>Arturo is a musician living in CDMX.</Card.Description>

        <Button centered color="blue" type="submit">
          Message
        </Button>
      </Card.Content>
      <Card.Content extra>
        <Icon name="user" />
        22 Friends
      </Card.Content>
    </Card>
  );
};

export default UserProfileCard;
