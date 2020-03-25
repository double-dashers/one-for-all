import axios from 'axios';

export default {
  getGames: async () => {
    const games = await axios.get('https://api.rawg.io/api/games?ordering=-rating');
    return games;
  },
  searchGames: async query => {
    const games = await axios.get(
      `https://api.rawg.io/api/games?ordering=-rating&search=${query}&page_size=10`
    );
    return games;
  },
};
