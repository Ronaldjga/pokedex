import react, { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";
import axios from "axios";
import Image from "next/image";


export default function HomePage() {
    const [pokemon, setPokemon] = react.useState('pikachu');
    const [pokemonData, setPokemonData] = react.useState([])
    const [pokemonType, setPokemonType] = react.useState('')
    const [keyIndex, setKeyIndex] = react.useState(0)
    
    const getPokemon = async () => {
        const toArray = [];
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
            const res = await axios.get(url)
            toArray.push(res.data);
            setPokemonType(res.data.types[0].type.name);
            setPokemonData(toArray);
            console.log(res)
        }   
        catch (e) {
            console.log(e)
        }
    }

    const handleChange = (e) => {
        setPokemon(e.target.value.toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setKeyIndex(keyIndex + 1)
        getPokemon()
    }

    return (
        <div className="bg-darkBluePrimary">
            <main className="max-w-screen-xl mx-auto text-white">
                <h1 className="text-5xl">Pokedex</h1>
                <div>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <input
                                className="text-black"
                                type={'text'}
                                value={pokemon}
                                onChange={handleChange}
                                placeholder="esolha seu pokemon"
                            />
                        </label>
                    </form>
                    
                </div>
            </main>
        </div>
    )
}