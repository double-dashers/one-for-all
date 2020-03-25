import axios from 'axios';

export default {
  getGames: async () => {
    const games = await axios.get('https://api.rawg.io/api/games?ordering=-rating');
    return games;
  },
};
