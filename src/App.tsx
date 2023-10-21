import React from 'react';
import './App.css';
import {SearchBar} from "./components/SearchBar"

function App() {
  return (
    <div className="App">
      <h1 id="site-title">Pokédex App</h1>
      <div className="search-bar-container">
        <div className="search-bar">
          <SearchBar/>
        </div>   
        <div className="search-results">Search Results</div>
      </div>
    </div>
  );
}

export default App;
