import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { LandingPage } from 'pages/LandingPage';

import './styles/global.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route
          path='/'
          component={LandingPage}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
