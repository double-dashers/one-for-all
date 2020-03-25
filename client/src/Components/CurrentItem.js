import React from 'react';
import PropTypes from 'prop-types';
import { Item, Rating, Icon, Progress, Button } from 'semantic-ui-react';
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

const CurrentItem = props => {
  const { name, description, platform, progress, deleteItem, index } = props;
  const classes = useStyles();
  return (
    <Item>
      <Item.Content verticalAlign="middle">
        <Item.Header className={classes.itemHeader}>
          <div>
            {name}
            <Icon color={platform} name="game" className={classes.itemIcon} />
          </div>
          <Button value={index} size="mini" circular icon color="red" onClick={deleteItem}>
            <Icon name="remove" />
          </Button>
        </Item.Header>
        <Item.Description>{description}</Item.Description>
        <Item.Extra>
          {progress ? (
            <Progress percent={35} indicating progress size="small">
              Current progress
            </Progress>
          ) : (
            <Rating icon="heart" maxRating={5} clearable />
          )}
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

CurrentItem.defaultProps = {
  progress: false,
};

CurrentItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  platform: PropTypes.string.isRequired,
  progress: PropTypes.bool,
  deleteItem: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default CurrentItem;
