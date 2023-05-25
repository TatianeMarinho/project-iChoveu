import { handleSearch } from './helpers/pageFunctions';
import './style.css';

const token = import.meta.env.VITE_TOKEN;

document.getElementById('search-form')
  .addEventListener('submit', handleSearch);

document.getElementById('close-forecast')
  .addEventListener('click', () => {
    document.getElementById('forecast-container').classList.add('hidden');
  });
