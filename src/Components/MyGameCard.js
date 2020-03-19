import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Icon } from 'semantic-ui-react';

const MyGameCard = props => {
  const { image, name, release, genres } = props;
  return (
    <Card fluid>
      <Image src={image} style={{ maxHeight: '120px' }} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
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
};

export default MyGameCard;
