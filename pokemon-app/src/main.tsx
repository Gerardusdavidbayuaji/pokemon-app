import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/';
import './styles/index.css';
import DetailsPokemon from './pages/details-pokemon/details-pokemon';
import ListPokemon from './pages/list-pokemon/list-pokemon';
import CostomLayoutPokemon from './components/costom-layout-alert';
import MyPokemon from './pages/my-pokemon/my-pokemon';
import FooterMyPokemon from './components/footer-mypokemon';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MyPokemon />
  </React.StrictMode>
)
