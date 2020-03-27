/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Form, Button, Segment, Dimmer, Loader, List } from 'semantic-ui-react';
import api from '../utils/API';

const useStyles = createUseStyles({
  mySegment: { height: '100px' },
});

const SearchAndAdd = () => {
  const [search, setSearch] = useState('');
  const [games, setGames] = useState();
  const [loading, setLoading] = useState(false);

  const classes = useStyles();

  async function handleSearch() {
    setLoading(true);
    const myResult = await api.searchGames(search);
    if (myResult) {
      setLoading(false);
      setGames(myResult.data.results);
    }
  }

  function handleChange(e, { value }) {
    setSearch(value);
  }

  let section;

  if (loading) {
    section = (
      <Segment className={classes.mySegment}>
        <Dimmer active inverted>
          <Loader>Loading</Loader>
        </Dimmer>
      </Segment>
    );
  } else if (games) {
    section = (
      <List bulleted>
        {games.map((game) => (
          <List.Item key={game.name}>{game.name}</List.Item>
        ))}
      </List>
    );
  } else {
    section = (
      <Form onSubmit={handleSearch}>
        <Form.Input
          placeholder="The Legend of Zelda Breath of the Wild"
          value={search}
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </Form>
    );
  }

  return <div>{section}</div>;
};

export default SearchAndAdd;
