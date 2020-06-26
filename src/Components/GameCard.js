import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, Button, Card, Icon, Image, Rating, GridColumn } from 'semantic-ui-react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  itemHeader: {
    display: 'flex !important',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemIcon: {
    paddingLeft: '10px',
  },
});

const GameCard = props => {
  const { name, description, platform, progress, deleteItem, index } = props;
  const classes = useStyles();
  return (
    <Card>
      <Card.Content>
        <Image
          fluid
          src="https://react.semantic-ui.com/images/wireframe/image.png"
          style={{ maxHeight: '120px' }}
        />
        <Card.Header>
          Animal Crossing New Horizons
          <Grid.Column>
            <Icon color="red" name="game" className={classes.itemIcon} />
          </Grid.Column>
          <Grid.Column floated="right">
            <Button size="mini" circular icon color="red">
              <Icon name="remove" />
            </Button>
          </Grid.Column>
        </Card.Header>
        <Card.Description>
          Animal Crossing: New Horizons is an upcoming life simulation video game developed and
          published by Nintendo. A part of the Animal Crossing series, it is set to be released for
          the Nintendo Switch on March 20, 2020.
        </Card.Description>
        <Card.Content extra>
          <Rating icon="heart" maxRating={5} clearable />
        </Card.Content>
      </Card.Content>
    </Card>
  );
};

GameCard.defaultProps = {
  progress: false,
};

GameCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  platform: PropTypes.string.isRequired,
  progress: PropTypes.bool,
  deleteItem: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default GameCard;
