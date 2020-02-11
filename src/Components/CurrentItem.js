import React from 'react';
import PropTypes from 'prop-types';
import { Item, Rating, Icon } from 'semantic-ui-react';

const CurrentItem = props => {
  const { name, description, platform } = props;
  return (
    <Item>
      <Item.Content verticalAlign="middle">
        <Item.Header>
          {name}
          <Icon color={platform} name="game" />
        </Item.Header>
        <Item.Description>{description}</Item.Description>
        <Item.Extra>
          <Rating icon="heart" maxRating={5} clearable />
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

CurrentItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  platform: PropTypes.string.isRequired,
};

export default CurrentItem;
