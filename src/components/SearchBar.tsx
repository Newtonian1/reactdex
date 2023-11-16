import React, {useState} from "react";
import "./SearchBar.css"
import {FaSearch} from "react-icons/fa";

export const SearchBar = ({setResults}: any) => {
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
                return input && pokemon && pokemon.name && formatString(pokemon.name).includes(formatString(input))
            });
            setResults(results);
        });
    }

    function formatString(name: string) {
        //handles edge cases like Jangmo-o line and Paradox Pokemon
        return name.toLowerCase()
                   .replaceAll("-","")
                   .replaceAll(" ","")
                   .replaceAll("'","")
                   .replaceAll(".","")
                   .replaceAll(":","")
                   .replaceAll("é","e");
    }

    return (
        <div className="search-wrapper">
            <FaSearch id="search-icon"/>
            <input type="text" placeholder="Search for a Pokémon" onChange={e => handleInput(e.target.value)}/>
        </div>
    )
};
