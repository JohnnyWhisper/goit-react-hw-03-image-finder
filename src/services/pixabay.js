
import PropTypes from 'prop-types';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '27856486-291f56898a3fd5d2554a3c81b';

const  fetchImagesApi = async (searchQuery, page) => {
    return fetch(
      `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    ).then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error('Requested images not found!'));
    });
  };
  
  fetchImagesApi.propTypes = {
    searchQuery: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
  };
  
  export default fetchImagesApi;