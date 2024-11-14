import axios from 'axios';

const NEWS_API_BASE_URL = 'https://newsapi.org/v2';
const GUARDIAN_API_BASE_URL = 'https://content.guardianapis.com';
const NYT_API_BASE_URL = 'https://api.nytimes.com/svc/search/v2';

export const fetchNewsFromNewsAPI = async (query) => {
  const response = await axios.get(`${NEWS_API_BASE_URL}/everything`, {
    params: {
      q: query,
      apiKey: process.env.REACT_APP_NEWS_API_KEY,
    },
  });
  return response.data.articles;
};

export const fetchNewsFromGuardian = async (query) => {
  const response = await axios.get(`${GUARDIAN_API_BASE_URL}/search`, {
    params: {
      q: query,
      apiKey: process.env.REACT_APP_GUARDIAN_API_KEY,
    },
  });
  return response.data.response.results;
};

export const fetchNewsFromNYT = async (query) => {
  const response = await axios.get(`${NYT_API_BASE_URL}/articlesearch.json`, {
    params: {
      q: query,
      'api-key': process.env.REACT_APP_NYT_API_KEY,
    },
  });
  return response.data.response.docs;
};
