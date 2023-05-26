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
      return {
        temp: currentElement.temp_c,
        condition: currentElement.condition.text,
        icon: currentElement.condition.icon,
      };
    });
};
