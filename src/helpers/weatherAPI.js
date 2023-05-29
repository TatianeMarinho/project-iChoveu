// Remova os comentários a medida que for implementando as funções
const TOKEN = import.meta.env.VITE_TOKEN;

export const searchCities = (term) => {
// term = valor do input de busca
  const endoPointCity = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`;
  return fetch(endoPointCity)
    .then((Response) => Response.json())
    .then((data) => {
      if (data.length === 0) {
        window.alert('Nenhuma cidade encontrada');
      }
      return data;
    });
};

export const getWeatherByCity = (cityURL) => {
  // cityURL = url da cidade obtido na requisiçao de pesquisa de cidades
  const endoPointTempo = `http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${cityURL}`;

  return fetch(endoPointTempo)
    .then((Response) => Response.json())
    .then((data) => {
      const currentElement = data.current;
      const locationElement = data.location;
      return {
        name: locationElement.name,
        country: locationElement.country,
        temp: currentElement.temp_c,
        condition: currentElement.condition.text,
        icon: currentElement.condition.icon,
        url: cityURL,
      };
    });
};

export const getWeekByCity = async (cityURL) => {
  const DAYS = 7;
  const endoPointCityDays = `http://api.weatherapi.com/v1/forecast.json?lang=pt&key=${TOKEN}&q=${cityURL}&days=${DAYS}`;

  const arrayDias = await fetch(endoPointCityDays);
  const response = await arrayDias.json();
  const wDay = response.forecast.forecastday.map((info) => ({
    date: info.date,
    maxTemp: info.day.maxtemp_c,
    minTemp: info.day.mintemp_c,
    condition: info.day.condition.text,
    icon: info.day.condition.icon,
  }));
  return wDay;
};
