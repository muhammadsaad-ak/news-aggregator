import axios from 'axios';

const NEWS_API_BASE_URL = 'https://newsapi.org/v2/everything';
const GUARDIAN_API_BASE_URL = 'https://content.guardianapis.com/search';
const NYT_API_BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';


// newsService.js

export const fetchNewsFromNewsAPI = async (query, date, category) => {
    try {
        let url = `${NEWS_API_BASE_URL}?q=${query}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
      if (date) url += `&from=${date}`;
      if (category) url += `&category=${category}`;
      const response = await fetch(url);
  
      if (response.status === 401) throw new Error('Unauthorized: Invalid API Key');
      const data = await response.json();
  
      if (!data || !data.articles) throw new Error('No data found');
      return data.articles.map((article) => ({
        title: article.title,
        url: article.url,
        author: article.author || 'Unknown Author',
        publishedAt: article.publishedAt,
        source: article.source.name,
      }));
    } catch (error) {
      console.error('Error fetching articles from NewsAPI:', error);
      return [];
    }
  };
  
  export const fetchNewsFromGuardian = async (query, date, category) => {
    try {
        let url = `${GUARDIAN_API_BASE_URL}?q=${query}&api-key=${process.env.REACT_APP_GUARDIAN_API_KEY}`;
      if (date) url += `&from-date=${date}`;
      if (category) url += `&section=${category}`;
      const response = await fetch(url);
  
      if (response.status === 401) throw new Error('Unauthorized: Invalid API Key');
      const data = await response.json();
  
      if (!data || !data.response || !data.response.results) throw new Error('No data found');
      return data.response.results.map((article) => ({
        title: article.webTitle,
        url: article.webUrl,
        author: article.fields?.byline || 'Unknown Author',
        publishedAt: article.webPublicationDate,
        source: 'The Guardian',
      }));
    } catch (error) {
      console.error('Error fetching articles from The Guardian:', error);
      return [];
    }
  };
  
  export const fetchNewsFromNYT = async (query, date, category) => {
    try {
      let url =  `${NYT_API_BASE_URL}?q=${query}&api-key=${process.env.REACT_APP_NYT_API_KEY}`;
      if (date) url += `&begin_date=${date.replace(/-/g, '')}`;
      const response = await fetch(url);
  
      if (response.status === 401) throw new Error('Unauthorized: Invalid API Key');
      const data = await response.json();
  
      if (!data || !data.response || !data.response.docs) throw new Error('No data found');
      return data.response.docs.map((article) => ({
        title: article.headline.main,
        url: article.web_url,
        author: article.byline?.original || 'Unknown Author',
        publishedAt: article.pub_date,
        source: 'New York Times',
      }));
    } catch (error) {
      console.error('Error fetching articles from New York Times:', error);
      return [];
    }
  };
  