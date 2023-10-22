import React, {useState} from "react";
import "./SearchBar.css"
import {FaSearch} from "react-icons/fa";

export const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");

    function handleInput(input: string) {
        setSearchInput(input);
        fetchData(input);
    }

    function fetchData(input: string) {
        fetch("https://pokeapi.co/api/v2/pokemon-species/?limit=9999")
        .then((response) => response.json())
        .then((json) => {
            const results = json.results.filter((pokemon: any) => {
                return pokemon && pokemon.name && pokemon.name.toLowerCase().includes(input.toLowerCase())
            });
            console.log(results);
        });
    }

    return (
        <div className="search-wrapper">
            <FaSearch id="search-icon"/>
            <input type="text" placeholder="Search for a Pokémon" onChange={e => handleInput(e.target.value)}/>
            <p>{searchInput}</p>
        </div>
    )
};
