import React from 'react';
import { Card, List, Checkbox } from 'semantic-ui-react';

const CurrentlyCard = () => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>My current list</Card.Header>
        <List>
          <List.Item>
            <Checkbox label="Game #1" />
          </List.Item>
        </List>
      </Card.Content>
    </Card>
  );
};

export default CurrentlyCard;
