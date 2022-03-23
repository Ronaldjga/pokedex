import react, { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";
import axios from "axios";
import Image from "next/image";
import { Table } from "../src/components/table";


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
                    <form
                        onSubmit={handleSubmit}
                        className="w-full flex justify-center p-2 gap-5"
                    >
                        <input
                            className="text-black w-2/4 p-2"
                            type={'text'}
                            value={pokemon}
                            onChange={handleChange}
                            placeholder="esolha seu pokemon"
                        />
                        <button
                            onSubmit={handleSubmit}
                            className="w-1/4 bg-yellowPrimary text-darkBluePrimary font-bold"
                        >
                            Enviar
                        </button>
                    </form>
                    {pokemonData.map((data) => {
                        return (
                            <div
                                key={keyIndex}
                                className="w-3/4 flex mx-auto bg-gray-900 relative">
                                <img
                                    className="w-full z-10"
                                    key={data.id}
                                    src={data.sprites.front_default}
                                />
                                <Table
                                    pokemonType={pokemonType}
                                    height={`${Math.round(data.height * 10)} cm`}
                                    weight={`${Math.round(data.weight / 10)} kg`}
                                    baseExp={data.base_experience}
                                />
                            </div>
                        )
                    })}
                </div>
            </main>
        </div>
    )
}