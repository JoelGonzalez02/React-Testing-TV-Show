import axios from 'axios';

const fetchShows = () => {
  return axios
    .get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")
    .then(res => res);
};

export default fetchShows;