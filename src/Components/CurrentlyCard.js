import React from 'react';
import { Card, Item, Button, Icon } from 'semantic-ui-react';
import CurrentItem from './CurrentItem';

const CurrentlyCard = () => {
  return (
    <Card raised fluid>
      <Card.Content>
        <Card.Header
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          My current list{' '}
          <Button icon>
            <Icon name="add circle" />
          </Button>
        </Card.Header>
        <Item.Group divided style={{ maxHeight: '250px', overflow: 'auto' }}>
          <CurrentItem
            name="Animal Crossing: New Horizons"
            platform="red"
            description="Animal Crossing: New Horizons is an upcoming life simulation video game developed and
          published by Nintendo. A part of the Animal Crossing series, it is set to be released for
          the Nintendo Switch on March 20, 2020."
          />
          <CurrentItem
            name="Persona 5: The Royal"
            platform="blue"
            description="Persona 5 Royal features an additional Phantom Thief member named Kasumi Yoshizawa, a new Palace, new music, 
            additional plot and social elements, a playable third semester, and support for the 
            PlayStation 4 Pro, alongside many other changes and additions."
          />
          <CurrentItem
            name="Granblue Versus"
            platform="blue"
            description="Granblue Fantasy Versus is a 2.5D fighting game developed by 
            Arc System Works for the PlayStation 4. It is based on the role-playing game Granblue Fantasy."
          />
        </Item.Group>
      </Card.Content>
    </Card>
  );
};

export default CurrentlyCard;
