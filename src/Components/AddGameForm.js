import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Dropdown } from 'semantic-ui-react';

const AddGameForm = props => {
  const { games } = props;
  const selectArray = games.map(game => ({ key: game.key, text: game.name, value: game.name }));
  const [value, setValue] = useState();
  function handleChange() {
    setValue(value);
  }

  return (
    <Form>
      <Form.Field>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>
          Select a game to add to your list!
          <Dropdown value={value} onChange={handleChange} fluid selection options={selectArray} />
        </label>
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

AddGameForm.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  games: PropTypes.array.isRequired,
};

export default AddGameForm;
