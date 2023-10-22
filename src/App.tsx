import React, {useState} from 'react';
import './App.css';
import {SearchBar} from "./components/SearchBar"
import {SearchResults} from "./components/SearchResults"

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <h1 id="site-title">Pokédex App</h1>
      <div className="search-bar-container">
        <SearchBar setResults={setResults}/>
        <SearchResults results={results}/>
      </div>
    </div>
  );
}

export default App;
