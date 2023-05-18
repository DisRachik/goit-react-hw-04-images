import axios from 'axios';

const API_KEY = '34931866-eb90fd9439f12cd327ebe10e3';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getImages = async (query, page) => {
  const params = {
    key: API_KEY,
    q: query,
    page,
    per_page: 12,
  };

  const response = await axios('', {
    params,
  });

  console.log(response);
};
