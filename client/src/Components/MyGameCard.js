import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { Card, Image, Icon, Button } from 'semantic-ui-react';

const useStyles = createUseStyles({
  cardHeader: {
    display: 'flex !important',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const MyGameCard = props => {
  const { image, name, release, genres, index, deleteItem } = props;
  const classes = useStyles();
  return (
    <Card fluid>
      <Image src={image} style={{ maxHeight: '120px' }} />
      <Card.Content>
        <Card.Header className={classes.cardHeader}>
          {name}
          <Button value={index} size="mini" circular icon color="red" onClick={deleteItem}>
            <Icon name="remove" />
          </Button>
        </Card.Header>
        <Card.Meta>
          <span className="date">
            <Icon name="calendar" />
            {release}
          </span>
        </Card.Meta>
        {/* <Card.Description>
          Animal Crossing: New Horizons is an upcoming life simulation video game developed and
          published by Nintendo.
        </Card.Description> */}
      </Card.Content>
      <Card.Content extra>
        Genres:
        {genres.map(genre => (
          <a href="no-ref"> {genre} </a>
        ))}
      </Card.Content>
    </Card>
  );
};

MyGameCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  genres: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default MyGameCard;
