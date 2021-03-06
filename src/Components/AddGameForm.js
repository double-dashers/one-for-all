import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Dropdown } from 'semantic-ui-react';

const AddGameForm = props => {
  const { games, handleSubmit, handleChange, valueSelected } = props;

  const selectArray = games.map(game => ({ key: game.key, text: game.name, value: game.name }));

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>
          Select a game to add to your list!
          <Dropdown
            value={valueSelected}
            onChange={handleChange}
            fluid
            selection
            options={selectArray}
          />
        </label>
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

AddGameForm.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  games: PropTypes.array.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  valueSelected: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddGameForm;
