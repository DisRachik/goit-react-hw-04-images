import axios from 'axios';

const API_KEY = '34931866-eb90fd9439f12cd327ebe10e3';
const PER_PAGE = 12;
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getImages = async (q, page) => {
  const params = {
    key: API_KEY,
    q,
    page,
    per_page: PER_PAGE,
  };

  const response = await axios('', {
    params,
  });
  return response.data;
};
