import axios from 'axios';

const url = 'https://api.myjson.com/bins/9x57s';

export default {
    getShows: () => axios.get(url).then(res => res.data),
}