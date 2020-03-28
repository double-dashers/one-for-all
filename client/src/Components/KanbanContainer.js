import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { Card, Modal, Icon, Button } from 'semantic-ui-react';
import MyGameCard from './MyGameCard';
import AddGameForm from './AddGameForm';
import SearchAndAdd from './SearchAndAdd';

const staticArray = [
  {
    name: 'Animal Crossing: New Horizons',
    image: 'http://images.nintendolife.com/56ac86549585a/ac.original.jpg',
    release: 'March 20th 2020',
    genres: ['Adventure', 'Simulation'],
  },
  {
    name: 'Trials of Mana ',
    image: 'https://nintendoeverything.com/wp-content/uploads/trials-of-mana.jpg',
    release: 'April 15th 2020',
    genres: ['Adventure', 'Role-Playing'],
  },
  {
    name: 'Persona 5 The Royal',
    image:
      'https://gematsu.com/wp-content/uploads/2019/04/Persona-5-The-Royal_2019_04-24-19_000.jpg',
    release: 'March 30th 2020',
    genres: ['Adventure', 'Role-Playing'],
  },
  {
    name: 'La Mulana 1+2',
    image: 'https://gematsu.com/wp-content/uploads/2019/08/La-Mulana-1-2-Collection_08-29-19.jpg',
    release: 'March 18th 2020',
    genres: ['Action', 'Adventure'],
  },
];

const useStyles = createUseStyles({
  statusCard: {
    height: '650px',
    overflow: 'hidden',
  },
  hoveredCard: {
    height: '650px',
    overflow: 'overlay',
  },
  cardHeader: {
    display: 'flex !important',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const KanbanContainer = (props) => {
  const [hovered, setHovered] = useState(false);
  const [modal, setModal] = useState(false);
  const [selection, setSelection] = useState('');
  const [items, setItem] = useState([]);

  function handleHover() {
    setHovered(!hovered);
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

  function deleteItem() {
    const { value } = this;
    const newItems = [...items];
    newItems.splice(value, 1);
    setItem(newItems);
  }

  function handleChange(e, { value }) {
    setSelection(value);
  }

  function handleSubmit() {
    const myItem = staticArray.find((item) => item.name === selection);
    addItem(myItem);
  }

  const classes = useStyles();
  const { status } = props;
  return (
    <Card
      raised
      fluid
      className={hovered ? classes.hoveredCard : classes.statusCard}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <Card.Content>
        <Card.Header className={classes.cardHeader}>
          {status}
          <Modal
            size="small"
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
              {/* <AddGameForm
                games={staticArray}
                handleSubmit={handleSubmit}
                valueSelected={selection}
                handleChange={handleChange}
              /> */}
              <SearchAndAdd />
            </Modal.Content>
          </Modal>
        </Card.Header>
        {items.map((item, index) => (
          <MyGameCard
            key={item.name}
            name={item.name}
            image={item.image}
            released={item.release}
            genres={item.genres}
            index={index}
            deleteItem={deleteItem}
          />
        ))}
      </Card.Content>
    </Card>
  );
};

KanbanContainer.propTypes = {
  status: PropTypes.string.isRequired,
};

export default KanbanContainer;
