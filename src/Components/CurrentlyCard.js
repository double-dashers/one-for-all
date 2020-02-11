import React from 'react';
import { Card, Item, Icon, Rating } from 'semantic-ui-react';

const CurrentlyCard = () => {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>My current list</Card.Header>
        <Item.Group divided>
          <Item>
            <Item.Content verticalAlign="middle">
              <Item.Header>
                Animal Crossing: New Horizons
                <Icon color="red" name="game" />
              </Item.Header>
              <Item.Description>
                Animal Crossing: New Horizons is an upcoming life simulation video game developed
                and published by Nintendo. A part of the Animal Crossing series, it is set to be
                released for the Nintendo Switch on March 20, 2020.
              </Item.Description>
              <Item.Extra>
                <Rating icon="heart" maxRating={5} clearable />
              </Item.Extra>
            </Item.Content>
          </Item>
          <Item>
            <Item.Content verticalAlign="middle">
              <Item.Header>
                Persona 5: The Royal
                <Icon color="blue" name="game" />
              </Item.Header>
            </Item.Content>
          </Item>
          <Item>
            <Item.Content verticalAlign="middle">
              <Item.Header>
                Final Fantasy VII Remake
                <Icon color="blue" name="game" />
              </Item.Header>
            </Item.Content>
          </Item>
          <Item>
            <Item.Content verticalAlign="middle">
              <Item.Header>
                Astral Chain
                <Icon color="red" name="game" />
              </Item.Header>
            </Item.Content>
          </Item>
        </Item.Group>
      </Card.Content>
    </Card>
  );
};

export default CurrentlyCard;
