import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/';
import './styles/index.css';
import DetailsPokemon from './pages/details-pokemon/details-pokemon';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DetailsPokemon />
  </React.StrictMode>
)
