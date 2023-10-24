import React, {useState} from "react";
import "./SearchResults.css"

export const SearchResults = ({results}: any) => {

    function formatName(name: string) {
        //Don't remove dashes from Jangmo-o line & Ho-oh (Getting the proper names would require roughly 15.1 gazillion API calls)
        const exceptions: string[] = ["jangmo-o", "jakamo-o", "kommo-o", "ho-oh"];
        //Handle dashes for paradox Pokemon
        if (!exceptions.includes(name)) {
            name = name.replaceAll("-", " ");
        }
        name = name.split(" ")
                   .map(name => name.charAt(0).toUpperCase() + name.slice(1))
                   .join(" ");
        return name;
    }

    return (
    <div className="results">
        {results.map((result: any, id: number) => {
            console.log(result);
            return <div key={id}>{formatName(result.name)}</div>;
        })}
    </div>
    )
}