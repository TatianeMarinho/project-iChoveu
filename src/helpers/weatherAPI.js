// Remova os comentários a medida que for implementando as funções
const TOKEN = import.meta.env.VITE_TOKEN;

export const searchCities = (term) => {
// term = valor do input de busca
  const endoPointCity = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`;
  return fetch(endoPointCity)
    .then((Response) => Response.json())
    .then((data) => {
      if (!data) {
        throw new Error('Nenhuma cidade encontrada');
      }
      return data;
    });
};

export const getWeatherByCity = (/* cityURL */) => {
//   seu código aqui
};
