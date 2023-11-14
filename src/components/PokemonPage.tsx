import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import pokeball from '../images/pokeball.png';

export const PokemonPage = () => {
    const name: any = useParams();

    const [id, setId] = useState("");
    const [defaultForm, setDefaultForm] = useState("");
    const [sprite, setSprite] = useState(pokeball);
    const [type1, setType1] = useState("");
    const [type2, setType2] = useState("");

    const SetPokemonData = (name: string) => {
        fetch("https://pokeapi.co/api/v2/pokemon-species/" + name)
        .then(res => res.json())
        .then(json => {
            setId(json.id);
            GetDefaultForm(json.varieties);
        })
    }

    const GetDefaultForm = (varieties: any) => {
        varieties.map((form: any) => {
            if (form.is_default === true)
            setDefaultForm(form.pokemon.url);
            return form.pokemon.url;
        });
    }

    const DisplayDefaultForm = () => {
        fetch(defaultForm)
        .then(res => res.json())
        .then(json => {
            setSprite(json.sprites.front_default);
            GetTypes(json.types);
        })
    }

    const GetTypes = (types: any) => {
        types.map((type: any) => {
            if (type.slot === 1)
                setType1(type.type.name);
            if (type.slot === 2)
                setType2(type.type.name);
        })
    }

    useEffect(() => {
        SetPokemonData(name.name);
        DisplayDefaultForm();
    });

    return (
        <div>
            <p>{id}</p>
            <img src={sprite} alt={name.name} />
            <p>{type1}{type2 === "" ? "" : "/" + type2}</p>
        </div>
    )
}