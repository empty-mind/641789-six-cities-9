import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  CITY_PLACE_CARD_COUNT: 312,
};

ReactDOM.render(
  <React.StrictMode>
    <App cityPlacesCount={Setting.CITY_PLACE_CARD_COUNT} />
  </React.StrictMode>,
  document.getElementById('root'));
