import React, {useState} from "react";
import "./SearchResults.css"

export const SearchResults = ({results}: any) => {

    function formatName(name: string) {
        const exceptions: string[] = ["jangmo-o", "hakamo-o", "kommo-o", "ho-oh"];
        //Don't remove dashes from Jangmo-o line & Ho-oh (Getting the proper names would require roughly 15.1 gazillion API calls)
        if (!exceptions.includes(name)) {
            name = name.replaceAll("-", " ");
        }
        //Handles dashes for Paradox Pokemon and Tapus
        if (name === "porygon z")
        return "Porygon-Z";
        //Casual Porygon line favoritism
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
        name = name.split(" ")
                   .map(name => name.charAt(0).toUpperCase() + name.slice(1))
                   .join(" ");
        return name;
    }

    return (
    <div className="results">
        {results.map((result: any, id: number) => {
            return <div className="search-result" key={id}>{formatName(result.name)}</div>;
        })}
    </div>
    )
}