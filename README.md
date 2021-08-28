**<h1 align="center">Weather App</h1>**

<div align="center">
  <img width="75%" src="./.github/web.png" />
  <img width="23.62%" src="./.github/mobile.png" />
</div>

**[Demonstração](https://weather-app-joaomoschetta.herokuapp.com/)**

[Figma (layout)](https://www.figma.com/proto/5usL5CIGCmWA8nvNslOWu9/Weather-app?node-id=1%3A2&scaling=min-zoom)

<br>

## ❓ **Sobre**

Aplicação desenvolvida com React, feita para aprimorar conhecimento prático nas tecnologias utilizadas. Possui as seguintes funcionalidades:
- Clima atual
- Previsão dos próximos 3 dias
- Clima das 24 horas do dia atual


## 💻 **Tech**

Esse projeto foi construído com [create-react-app](https://create-react-app.dev/).<br>

A aplicação **consome a API [weatherapi](https://www.weatherapi.com/)**. Todos os dados fornecidos são baseados na localização atual do usuário. Os componentes foram **desenvolvidos utilizando [TDD](https://pt.wikipedia.org/wiki/Test-driven_development)**, todos possuem testes unitários. Essas foram as tecnologias e ferramentas utilizadas:

- [React.js](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- Testado com [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/) e [Jest](https://jestjs.io/)
- [Saas](https://github.com/sass/node-sass)
- [Axios](https://github.com/axios/axios)


## ⚙️ **Execute o projeto**

### Variáveis ambientes

Crie um arquivo **.env.local** na raiz do projeto e insira:
```
REACT_APP_WEATHER_API_KEY="insira sua chave"
```
Voce pode obter sua chave em [weatherapi.com](https://www.weatherapi.com/docs/).

### Execute localmente
```
yarn start
```

Roda o projeto no modo desenvolvimento.<br>
Abra http://localhost:3000 para visualizar no navegador.

### Teste
```
yarn test
```

## 📝 **Licença**

O projeto nao tem licença, sinta-se livre para utiliza-lo da maneira que desejar.