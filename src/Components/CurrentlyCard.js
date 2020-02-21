import React, { useState } from 'react';
import { Card, Item, Button, Icon, Modal } from 'semantic-ui-react';
import CurrentItem from './CurrentItem';
import AddGameForm from './AddGameForm';

const staticItems = [
  {
    key: 0,
    name: 'Mega Man Zero/ZX Legacy Collection',
    platform: 'red',
    description:
      'Mega Man Zero/ZX Legacy Collection brings together six classic titles in one game: Mega Man Zero 1, 2, 3, and 4, as well as Mega Man ZX and ZX Advent.',
  },
  {
    key: 1,
    name: 'Woodle Tree Adventures',
    platform: 'red',
    description:
      'Woodle Tree Adventures is an old school platform game with a catchy and unique art style! Explore a total of 6 worlds and save the lands with the magical water drops youll find through your journey, bringing back peace and balance and finally becoming the new hero!',
  },
  {
    key: 2,
    name: 'Doom Eternal',
    platform: 'blue',
    description:
      'Doom Eternal is an upcoming first-person shooter video game developed by id Software and published by Bethesda Softworks.',
  },
  {
    key: 3,
    name: 'Dreams',
    platform: 'blue',
    description:
      "Dreams is a game creation system developed by Media Molecule and published by Sony Interactive Entertainment for the PlayStation 4. The game allows players to create user-generated content in the form of fully-fledged games, mechanics, assets, 3D sculptures, music, and art, which can then be shared or remixed to be used in other's creations.",
  },
  {
    key: 4,
    name: 'Tokyo Mirage Sessions #FE Encore',
    platform: 'red',
    description:
      'An expanded port of the game for the Nintendo Switch, titled Tokyo Mirage Sessions ♯FE Encore, was released on January 17, 2020. The port includes new story content and additional party members along with new music.',
  },
];

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
  const [modal, setModal] = useState(false);
  const [selection, setSelection] = useState('');

  function handleChange(e, { value }) {
    setSelection(value);
  }

  function deleteItem() {
    const { value } = this;
    const newItems = [...items];
    newItems.splice(value, 1);
    setItem(newItems);
  }

  function openModal() {
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  function addItem(selectedItem) {
    const newItems = [...items, selectedItem];
    setItem(newItems);
    setModal(false);
  }
  function handleSubmit() {
    const myItem = staticItems.find(item => item.name === selection);
    addItem(myItem);
  }

  return (
    <Card raised fluid>
      <Card.Content>
        <Card.Header
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          My current list
          <Modal
            trigger={
              <Button circular icon color="teal" onClick={openModal}>
                <Icon name="add circle" />
              </Button>
            }
            open={modal}
            onClose={closeModal}
          >
            <Modal.Header>Select a game to add!</Modal.Header>
            <Modal.Content>
              <AddGameForm
                games={staticItems}
                handleSubmit={handleSubmit}
                valueSelected={selection}
                handleChange={handleChange}
              />
            </Modal.Content>
          </Modal>
        </Card.Header>
        <Item.Group divided style={{ maxHeight: '425px', overflow: 'auto', paddingTop: '5px' }}>
          {items.map((item, index) => (
            <CurrentItem
              key={item.name}
              name={item.name}
              description={item.description}
              platform={item.platform}
              deleteItem={deleteItem}
              index={index}
            />
          ))}
        </Item.Group>
      </Card.Content>
    </Card>
  );
};

export default CurrentlyCard;
