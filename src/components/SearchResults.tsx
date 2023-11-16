import React, {useState} from "react";
import "./SearchResults.css"
import { Link } from 'react-router-dom';

export const SearchResults = ({results}: any) => {

    function formatName(name: string) {
        //Due to the structure of PokéAPI, using a switch case to format odd names is faster/better for performance than making calls to retrieve the formatted name
        switch (name) {
            case "nidoran-f":
                return "Nidoran ♀";
            case "nidoran-m":
                return "Nidoran ♂";
            case "farfetchd":
                return "Farfetch'd";
            case "mr-mime":
                return "Mr. Mime";
            case "ho-oh":
                return "Ho-Oh";
            case "mime-jr":
                return "Mime Jr.";
            case "porygon-z":
                /*
                      ⠀⠀⠀⠀⢀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⠀⣠⠤⠛⠋⠉⠉⠉⠛⢦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⣠⠶⠓⠂⠀⠀⠠⠤⠤⠀⠀⠙⣆⠀⠀⠀⠀⠀⠀⡠⢤⠀
                ⠀⠀⢀⢖⡃⠀⠀⠀⠀⢰⠀⣤⡄⠀⠀⠀⣹⠀⠀⠀⠀⢠⠔⠁⣼⠇
                ⢀⡞⠉⠀⠑⣄⠀⠀⠀⠘⠀⠀⠀⠐⠀⣠⠋⠀⠀⢠⠖⠉⠀⢰⠏⠀
                ⠈⠻⢄⣀⡀⢀⡇⠀⠀⠀⠀⠀⢀⡠⠟⠛⢤⣀⠜⠋⠀⠀⢠⠃⠀⠀
                ⠀⣠⣴⠁⢉⣽⠟⠶⠶⠶⠾⡿⠁⡇⠀⠀⠀⠀⠳⣤⠀⢠⠇⠀⠀⠀
                ⠰⣏⠈⠢⡎⠒⣄⠀⠀⢀⠶⢁⡠⠃⠀⠀⠀⠀⠀⢸⣄⠎⠀⠀⠀⠀
                ⠀⠈⠑⣤⣧⠀⠈⠑⡄⣾⣴⢋⡔⢫⡉⠉⠉⠉⠉⠙⣦⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⠛⣄⠀⡞⢃⡴⠋⠀⠀⢙⠦⠤⠤⠤⠤⠤⢽⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⠀⠈⠉⢹⣿⣀⠀⢀⡴⠋⠀⠀⠀⠀⣀⣤⠇⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⠀⠀⠀⢸⣇⠈⣶⠊⠀⠀⣀⣠⠤⠒⠋⠀⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⢤⣟⣤⠶⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                */
                return "Porygon-Z";
            case "flabebe":
                return "Flabébé";
            case "type-null":
                return "Type: Null";
            case "jangmo-o":
            case "hakamo-o":
            case "kommo-o":
                return name.charAt(0).toUpperCase() + name.slice(1);
            case "sirfetchd":
                return "Sirfetch'd";
            case "mr-rime":
                return "Mr. Rime";
            case "wo-chien":
            case "chien-pao":
            case "ting-lu":
            case "chi-yu":
                return name.split("-")
                           .map(name => name.charAt(0).toUpperCase() + name.slice(1))
                           .join("-");
            default:
                name = name.replaceAll("-", " ");
                name = name.split(" ")
                           .map(name => name.charAt(0).toUpperCase() + name.slice(1))
                           .join(" ");
                return name;
        }
    }

    return (
    <div className="results">
        {results.map((result: any, id: number) => {
            return <Link to={`/pokemon/${ result.name }`} className="search-result" key={id}>{formatName(result.name)}</Link>;
        })}
    </div>
    )
}