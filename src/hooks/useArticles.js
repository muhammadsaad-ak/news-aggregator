// useArticles.js
import { useState, useEffect } from 'react';
import {
  fetchNewsFromGuardian,
  fetchNewsFromNewsAPI,
  fetchNewsFromNYT,
} from '../services/newsService';

const useArticles = (query, filters) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      let results = [];
      const queryToUse = query || 'latest news';

      try {
        if (filters.source === 'newsapi' || filters.source === '') {
            const queryToUse = query || 'undefined';
          results = await fetchNewsFromNewsAPI(queryToUse, filters.date, filters.category);
        }
        if (filters.source === 'guardian' || filters.source === '') {
          results = results.concat(await fetchNewsFromGuardian(queryToUse, filters.date, filters.category));
        }
        if (filters.source === 'nyt' || filters.source === '') {
          results = results.concat(await fetchNewsFromNYT(queryToUse, filters.date, filters.category));
        }
        setArticles(results);
      } catch (error) {
        console.error('Error fetching filtered articles:', error);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [query, filters]);

  return { articles, loading };
};

export default useArticles;
