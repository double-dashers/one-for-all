/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import api from '../utils/API';

const SearchAndAdd = () => {
  const [search, setSearch] = useState('');
  const [games, setGames] = useState();

  async function handleSearch() {
    const myResult = await api.searchGames(search);
    setGames(myResult.data.results);
  }

  function handleChange(e, { value }) {
    setSearch(value);
  }

  return (
    <Form onSubmit={handleSearch}>
      <Form.Input
        placeholder="The Legend of Zelda Breath of the Wild"
        value={search}
        onChange={handleChange}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default SearchAndAdd;
