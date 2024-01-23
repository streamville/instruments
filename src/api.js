import axios from 'axios';
import SearchBar from './components/SearchBar';

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: 'Client-ID 6zLYW5JEsuKKgnlqhX8FC8PGXMeIZ7SYznfOH7HZIWM'
    },
    params: {
      query: term,
    }
  })
  
  return response.data.results;
};

export default searchImages;