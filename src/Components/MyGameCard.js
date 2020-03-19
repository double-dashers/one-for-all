import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

const ac = 'http://images.nintendolife.com/56ac86549585a/ac.original.jpg';

const MyGameCard = () => {
  return (
    <Card fluid>
      <Image src={ac} />
      <Card.Content>
        <Card.Header>Animal Crossing: New Horizons</Card.Header>
        <Card.Meta>
          <span className="date">
            <Icon name="calendar" />
            March 20th 2020
          </span>
        </Card.Meta>
        <Card.Description>
          Animal Crossing: New Horizons is an upcoming life simulation video game developed and
          published by Nintendo.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        Genres: <a href="noref">Adventure</a>, <a href="noref">Simulation</a>
      </Card.Content>
    </Card>
  );
};

export default MyGameCard;
