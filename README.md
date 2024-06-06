# Trybe

Este repositório contém atividades de aprendizagem desenvolvidas por Tatiane Marinho [linkedin](https://www.linkedin.com/in/marinhotatiane/) enquanto estudava na [Trybe](https://www.betrybe.com/).

_"A Trybe é uma escola do futuro para qualquer pessoa que queira melhorar de vida e construir uma carreira de sucesso em tecnologia, onde a pessoa só paga quando conseguir um bom trabalho."_

O programa conta com mais de 1.500 horas de aulas presenciais e online, aborda introdução ao desenvolvimento de software, front-end, back-end, ciência da computação, engenharia de software, metodologias ágeis e habilidades comportamentais.<br>

<details>
  <summary><strong>O que foi desenvolvido</strong></summary><br />

Um site de previsão do tempo consumindo dados diretamente de uma API.

</details>

<details>
<summary><strong>Dependências</strong></summary><br />
Para instalar as dependências :  - `npm install`

</details>

<details>
  <summary><strong>Linter</strong></summary><br />
 Foi desenvolvido pela Trybe.

</details>

<details>
<summary><strong>Testes</strong></summary><br />
**Testes desenvolvidos pela Trybe**

Todos os requisitos do projeto foram testados **automaticamente** por meio do [Cypress](https://www.cypress.io/how-it-works/). 

## Observações técnicas

Alguns requisitos seguiram um padrão pré-estabelecido para que os testes automáticos funcionem corretamente. 

</details>

<details>
<summary><strong>Estrutura do projeto</strong></summary>

Este projeto tem algumas funções já prontas, feitas pela Trybe, que foram complementadas com a resolução das questões.

</details>

# Requisitos Obrigatórios

## 1. Implemente a função `searchCities`

<details><summary>Implemente a função <code>searchCities</code> que se encontra no arquivo <code>helpers/weatherAPI.js</code></summary><br />

A função `searchCities` já está criada e é utilizada ao clicar no botão de pesquisar. Porém, ela não está funcionando, pois ainda não foi implementada. Você deve implementar a função para que ela retorne uma lista de cidades que correspondam ao termo de busca.

A função recebe um parâmetro `term`, que será o termo de busca. Por exemplo, se o usuário digitar "São Paulo" no campo de busca, o parâmetro `term` será "São Paulo".

Você deverá utilizar o endpoint de pesquisa de cidades para obter os dados das cidades que correspondam ao termo de busca.

<details><summary>Endpoint de pesquisa de cidades</summary><br />

  URL: `http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${TERMO_DE_BUSCA}`

  Em que:
  - `TERMO_DE_BUSCA` é o termo que você deseja pesquisar, por exemplo: `São Paulo`, `Rio de Janeiro` e `São José dos Campos`.
  - `TOKEN` é o token que você salvou no arquivo `.env` que consta na sessão `Acessando a API`.

  **Exemplo de requisição pesquisando por "Rio"**:
  
  URL: `http://api.weatherapi.com/v1/search.json?lang=pt&key=06a38ce1c71451241579789&q=Rio`

  ```json
  [
    {
        "id": 287907,
        "name": "Rio De Janeiro",
        "region": "Rio de Janeiro",
        "country": "Brazil",
        "lat": -22.9,
        "lon": -43.23,
        "url": "rio-de-janeiro-rio-de-janeiro-brazil"
    },
    {
        "id": 287839,
        "name": "Rio Branco",
        "region": "Acre",
        "country": "Brazil",
        "lat": -9.97,
        "lon": -67.8,
        "url": "rio-branco-acre-brazil"
    },
    {
        "id": 110688,
        "name": "Rio Cuarto",
        "region": "Cordoba",
        "country": "Argentina",
        "lat": -33.13,
        "lon": -64.35,
        "url": "rio-cuarto-cordoba-argentina"
    },
    {
        "id": 669733,
        "name": "Riobamba",
        "region": "Chimborazo",
        "country": "Ecuador",
        "lat": -1.67,
        "lon": -78.63,
        "url": "riobamba-chimborazo-ecuador"
    },
    {
        "id": 3176833,
        "name": "Rio Bravo",
        "region": "Tamaulipas",
        "country": "Mexico",
        "lat": 25.99,
        "lon": -98.09,
        "url": "rio-bravo-tamaulipas-mexico"
    }
  ]
  ```

</details>

Após realizar a requisição, você deve retornar uma lista de objetos. Caso a lista esteja vazia, você deverá exibir um alert com a mensagem "Nenhuma cidade encontrada" e retornar a lista vazia.
> 💡 Atenção: Utilize window.alert

</details>
<details><summary><strong>O que será verificado</strong></summary><br />

- Será validado se a função `searchCities`:
  - Chama o endpoint de pesquisa de cidades com o termo de busca.
  - Exibe um alert com a mensagem "Nenhuma cidade encontrada" caso a lista esteja vazia.

</details>

---

## 2. Implemente a função `getWeatherByCity`

<details><summary>Implemente a função <code>getWeatherByCity</code> que se encontra no arquivo <code>helpers/weatherAPI.js</code></summary><br />

A função `getWeatherByCity` recebe um parâmetro `cityURL` que será o URL da cidade obtido na requisição de pesquisa de cidades. Por exemplo, se o usuário pesquisar por "São Paulo", o parâmetro `cityURL` será "sao-paulo-sao-paulo-brazil".

<details><summary>Endpoint do tempo atual</summary><br />

  URL: `http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${URL_CIDADE}`

  Em que:
  - `URL_CIDADE` é o URL da cidade obtido na requisição anterior.
  - `TOKEN` é o token que está salvo no arquivo `.env`.

  **Exemplo de requisição pesquisando por "sao-paulo-sao-paulo-brazil"**:
  
  URL: `http://api.weatherapi.com/v1/current.json?lang=pt&key=06a38ce1c71451241579789&q=sao-paulo-sao-paulo-brazil`

  ```json
    {
      "location": {
          "name": "Sao Paulo",
          "region": "Sao Paulo",
          "country": "Brazil",
          "lat": -23.53,
          "lon": -46.62,
          "tz_id": "America/Sao_Paulo",
          "localtime_epoch": 1677457628,
          "localtime": "2023-02-23 21:27"
      },
      "current": {
          "last_updated_epoch": 1677456900,
          "last_updated": "2023-02-23 21:15",
          "temp_c": 25.0,
          "temp_f": 77.0,
          "is_day": 0,
          "condition": {
              "text": "Clear",
              "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
              "code": 1000
          },
          "wind_mph": 2.2,
          "wind_kph": 3.6,
          "wind_degree": 189,
          "wind_dir": "S",
          "pressure_mb": 1018.0,
          "pressure_in": 30.06,
          "precip_mm": 0.6,
          "precip_in": 0.02,
          "humidity": 65,
          "cloud": 0,
          "feelslike_c": 27.5,
          "feelslike_f": 81.5,
          "vis_km": 10.0,
          "vis_miles": 6.0,
          "uv": 1.0,
          "gust_mph": 8.5,
          "gust_kph": 13.7
      }
    }
  ```

</details>

Após realizar a requisição, a função deve retornar um objeto apenas com as informações do tempo atual da cidade. Seguindo o exemplo de requisição acima, o retorno da função deve ser:

```json
{
  "temp": 25.0, // temperatura em graus celsius
  "condition": "Clear",
  "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png"
}
```
> O retorno da função não precisa ser igual, portanto fique à vontade para mudar o retorno da forma que quiser. Esse é apenas um exemplo para que você possa entender quais informações são importantes.

</details>

<details><summary>Complemente a função <code>handleSearch</code> que se encontra no arquivo <code>helpers/pageFunctions.js</code></summary><br />

Dentro da função `handleSearch` no arquivo `helpers/pageFunctions.js`, a função `searchCities` já é chamada, porém seu retorno não é utilizado. Você deve utilizar o retorno da função `searchCities` para requisitar o tempo atual.
> A função `handleSearch` pode ser alterada da maneira que você quiser.

Para cada cidade retornada pela `searchCities`, você deve chamar a função `getWeatherByCity` passando o URL da cidade como parâmetro.
> Dica: Uma das formas de se aguardar por múltiplas requisições é utilizando o método [`Promise.all`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)

</details>

<details><summary><strong>O que será verificado</strong></summary><br />

- Será validado se a função `getWeatherByCity`:
  - Chama o endpoint do tempo atual com o URL de todas cidades encontradas.

</details>

---

## 3. Liste as cidades retornadas pela API

<details>
<summary>Após a chamada da API, renderize o retorno utilizando a função <code>createCityElement</code></summary><br />

  Com o resultado do tempo atual de todas cidades, adquirido no requisito 2, utilize a função `createCityElement` para criar os elementos HTML que representam as cidades retornadas pela API.

  > A função `createCityElement` já está implementada no arquivo `helpers/pageFunctions.js`.
  > Fique a vontade para alterar o código dessa função, caso necessário.

  Ela recebe como parâmetro um objeto que contém as seguintes informações:
  ```js
    {
      name: 'Rio de Janeiro',
      country: 'Brazil',
      temp: 25.0, // temperatura em graus celsius
      condition: 'Clear',
      icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
      url: 'rio-de-janeiro-rio-de-janeiro-brazil'
    }
  ```
  > Esse é o formato do objeto que a função `createCityElement` recebe. Caso queira alterar o formato do objeto, fique à vontade para alterar a função `createCityElement`.

  - Adicione cada elemento criado pela função `createCityElement` como filho do elemento `<ul id="cities">`.

</details>

<details>
<summary><strong>O que será verificado</strong></summary><br />

- Será validado se, ao pesquisar por uma cidade, o elemento `<ul id="cities">` será preenchido com os elementos HTML das cidades retornadas pela API com as informações do tempo atual.

</details>

---

## 4. Adicione um botão para ver a previsão de 7 dias de uma cidade

<details><summary>Crie um botão dentro do elemento de cada cidade</summary><br />

  Modifique a função `createCityElement`, de modo que ela crie um botão para cada cidade retornada pela API.

  Esse botão deve conter o texto "Ver previsão".

  Adicione ao botão o evento de click que, ao ser clicado, deve realizar a requisição da previsão de 7 dias da cidade.

  <details><summary>Endpoint da previsão do tempo</summary><br />

  URL: `http://api.weatherapi.com/v1/forecast.json?lang=pt&key=${TOKEN}&q=${URL_CIDADE}&days=${DIAS}`

  Em que:
  - `URL_CIDADE` é o URL da cidade.
  - `TOKEN` é o token que está salvo no arquivo `.env`.
  - `DIAS` é a quantidade de dias que você deseja obter a previsão. Nesse caso, sempre será 7 dias.

  **Exemplo de requisição pesquisando por "sao-paulo-sao-paulo-brazil":**

  URL: `http://api.weatherapi.com/v1/forecast.json?lang=pt&key=06a38ce1c71451241579789&q=sao-paulo-sao-paulo-brazil&days=7`

  Utilize apenas as informações contidas no array forecastday:
  ```json
  {
    "location": {/*...*/},
    "current": {/*...*/},
    "forecast": {
      "forecastday": [
        {
          "date": "2023-02-23",
          "date_epoch": 1677369600,
          "day": {
            "maxtemp_c": 30.6,
            "maxtemp_f": 87.1,
            "mintemp_c": 20.3,
            "mintemp_f": 68.5,
            "avgtemp_c": 25,
            "avgtemp_f": 76.9,
            "maxwind_mph": 8.9,
            "maxwind_kph": 14.4,
            "totalprecip_mm": 1.8,
            "totalprecip_in": 0.07,
            "totalsnow_cm": 0,
            "avgvis_km": 9.8,
            "avgvis_miles": 6,
            "avghumidity": 76,
            "daily_will_it_rain": 1,
            "daily_chance_of_rain": 87,
            "daily_will_it_snow": 0,
            "daily_chance_of_snow": 0,
            "condition": {
              "text": "Patchy rain possible",
              "icon": "//cdn.weatherapi.com/weather/64x64/day/176.png",
              "code": 1063
            },
            "uv": 5
          },
          "astro": {/*...*/},
          "hour": [/*...*/]
        },
        {/*Informações do segundo dia*/},
        {/*Informações do terceiro dia*/},
        /* etc */
      ]
    }
  }
  ```

</details>

  Utilize a função `showForecast` para exibir a previsão do tempo da cidade, que será mostrada na tela dentro de um modal.
  > A função `showForecast` já está implementada no arquivo `helpers/pageFunctions.js`

  Ela recebe como parâmetro um array com a previsão do tempo dos próximos dias, contendo as seguintes informações:

  ```js
    [
      {
        date: '2023-02-23',
        maxTemp: 30.6, // temperatura em graus celsius
        minTemp: 20.3, // temperatura em graus celsius
        condition: 'Patchy rain possible',
        icon: '//cdn.weatherapi.com/weather/64x64/day/176.png'
      },
      {/*Informações do segundo dia*/},
      {/*Informações do terceiro dia*/},
      /* etc */
    ]
  ```

</details>

<details>
<summary><strong>O que será verificado</strong></summary><br />

- Será validado se o botão tem o texto "Ver previsão".
- Será validado se todas as cidades retornadas pela API têm um botão "Ver previsão".
- Será validado se, ao clicar no botão "Ver previsão" de uma cidade, serão exibidas as informações da previsão do tempo da cidade.

</details>

<br>

*Exercicíos criado pela [Trybe](https://www.betrybe.com/).

<br>
