import React, { useState } from 'react';
import { Card, Item, Button, Icon } from 'semantic-ui-react';
import CurrentItem from './CurrentItem';

const newItem = {
  name: 'Woodle Tree Adventures',
  platform: 'red',
  description:
    'Woodle Tree Adventures is an old school platform game with a catchy and unique art style! Explore a total of 6 worlds and save the lands with the magical water drops youll find through your journey, bringing back peace and balance and finally becoming the new hero!',
};

const CurrentlyCard = () => {
  const [items, setItem] = useState([
    {
      name: 'Animal Crossing: New Horizons',
      platform: 'red',
      description:
        'Animal Crossing: New Horizons is an upcoming life simulation video game developed and published by Nintendo. A part of the Animal Crossing series, it is set to be released for the Nintendo Switch on March 20, 2020.',
    },

    {
      name: 'Persona 5: The Royal',
      platform: 'blue',
      description:
        'Persona 5 Royal features an additional Phantom Thief member named Kasumi Yoshizawa, a new Palace, new music, additional plot and social elements, a playable third semester, and support for the PlayStation 4 Pro, alongside many other changes and additions.',
    },

    {
      name: 'Granblue Versus',
      platform: 'blue',
      description:
        'Granblue Fantasy Versus is a 2.5D fighting game developed by Arc System Works for the PlayStation 4. It is based on the role-playing game Granblue Fantasy.',
    },
  ]);

  function addItem() {
    const newItems = [...items, { newItem }];
    setItem(newItems);
    console.log('item was added!');
  }

  return (
    <Card raised fluid>
      <Card.Content>
        <Card.Header
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          My current list{' '}
          <Button circular icon color="teal" onClick={addItem}>
            <Icon name="add circle" />
          </Button>
        </Card.Header>
        <Item.Group divided style={{ maxHeight: '250px', overflow: 'auto' }}>
          {items.map(item => (
            <CurrentItem
              key={item.name}
              name={item.name}
              description={item.description}
              platform={item.platform}
            />
          ))}
        </Item.Group>
      </Card.Content>
    </Card>
  );
};

export default CurrentlyCard;
