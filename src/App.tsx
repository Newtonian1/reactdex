import React, {useState} from 'react';
import './App.css';
import { Search } from './components/Search';
import { PokemonPage } from './components/PokemonPage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/" id="site-title">Pokédex App</Link>
        <Routes>
          <Route path="/" element={<Search/>}/>
          <Route path="pokemon/:name" element={<PokemonPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
