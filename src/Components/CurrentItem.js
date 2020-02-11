import React from 'react';
import PropTypes from 'prop-types';
import { Item, Rating, Icon, Progress } from 'semantic-ui-react';

const CurrentItem = props => {
  const { name, description, platform, progress } = props;
  return (
    <Item>
      <Item.Content verticalAlign="middle">
        <Item.Header>
          {name}
          <Icon color={platform} name="game" style={{ paddingLeft: '10px' }} />
        </Item.Header>
        <Item.Description>{description}</Item.Description>
        <Item.Extra>
          {progress ? (
            <Progress percent={35} indicating progress style={{ paddingBottom: '10px' }}>
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
