import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '519858e689cf4d3796f391d687537071',
  },
});
