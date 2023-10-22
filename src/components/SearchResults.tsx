import React, {useState} from "react";
import "./SearchResults.css"

export const SearchResults = ({results}: any) => {
    return (
    <div className="results">
        {results.map((result: any, id: number) => {
                return <div key={id}>{result.name}</div>;
        })}
    </div>
    )
}