import React, {useState} from 'react';
import './App.css';
import { Search } from './components/Search';
import { PokemonPage } from './components/PokemonPage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1 id="site-title">Pokédex App</h1>
        <Routes>
          <Route path="/" element={<Search/>}/>
          <Route path="/pokemon/" element={<PokemonPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
