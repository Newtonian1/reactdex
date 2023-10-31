import { SearchBar } from "./SearchBar";
import { SearchResults } from "./SearchResults";
import React, {useState} from 'react';
import './Search.css';

export const Search = () => {
    const [results, setResults] = useState([]);

    return (
        <div className="search-bar-container">
            <SearchBar setResults={setResults}/>
            <SearchResults results={results}/>
        </div>
    )
}