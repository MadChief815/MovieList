import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: { api_key: 'your_tmdb_api_key' },
});

export const fetchMovies = async () => {
  try {
      const response = await api.get('/movie/popular');
      return response.data.results || [];
  } catch (error) {
      console.error("Error fetching movies:", error);
      return [];
  }
};

export const searchMovies = async (query) => {
  if (!query) return [];
  try {
      const response = await api.get('/search/movie', { params: { query } });
      return response.data.results || [];
  } catch (error) {
      console.error("Error searching movies:", error);
      return [];
  }
};