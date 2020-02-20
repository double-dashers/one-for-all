import React from 'react';
import PropTypes from 'prop-types';
import { Item, Rating, Icon, Progress, Button } from 'semantic-ui-react';

const CurrentItem = props => {
  const { name, description, platform, progress } = props;
  return (
    <Item>
      <Item.Content verticalAlign="middle">
        <Item.Header
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <div>
            {name}
            <Icon color={platform} name="game" style={{ paddingLeft: '10px' }} />
          </div>
          <Button size="mini" circular icon color="red">
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
};

export default CurrentItem;
