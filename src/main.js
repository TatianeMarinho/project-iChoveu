import { handleSearch/* , showForecast  */ } from './helpers/pageFunctions';
/* import { getWeekByCity } from './helpers/weatherAPI'; */
import './style.css';

document.getElementById('search-form')
  .addEventListener('submit', handleSearch);

/* document.getElementsByClassName('city-forecast-button')
  .addEventListener('click', async () => {
    const arrayDays = await getWeekByCity(url);
    showForecast(arrayDays);
  }); */

document.getElementById('close-forecast')
  .addEventListener('click', () => {
    document.getElementById('forecast-container').classList.add('hidden');
  });
