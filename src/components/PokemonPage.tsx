import React, {useState} from 'react';
import { useParams } from 'react-router-dom';

export const PokemonPage = () => {
    const name: any = useParams();

    return (
        <div>
            <p>{ "Pokemon: " + name.name}</p>
        </div>
    )
}