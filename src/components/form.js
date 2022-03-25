import react, { useState } from "react";
import axios from "axios";
import { Table, TableRandom } from "./table";

export function FormPokemon() {
    const [pokemon, setPokemon] = react.useState('pikachu');
    const [pokemonData, setPokemonData] = react.useState([])
    const [pokemonType, setPokemonType] = react.useState('')
    const [keyIndex, setKeyIndex] = react.useState(0)

    const getPokemon = () => {
        const toArray = [];
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then(res => {
                toArray.push(res.data);
                setPokemonType(res.data.types[0].type.name);
                setPokemonData(toArray);
                console.log(res)
            }).catch(e => {
            console.log(e)
        })
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
        <section className="w-full text-white">
            <div className="w-full max-w-screen-xl mx-auto">
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
                            className="w-3/4 flex flex-col sm:flex-row justify-center items-center p-2 mx-auto bg-gray-900 relative">
                            <img
                                className="w-full z-10"
                                key={data.id}
                                src={data.sprites.front_default}
                            />
                            <TableRandom
                                pokemonName={data.name}
                                pokemonTypes={data.types}
                                pokemonTypeOne={data.types[0].type.name}
                                pokemonTypeTwo={data.types.length > 1 ? data.types[1].type.name : ''}
                                height={`${Math.round(data.height * 10)} cm`}
                                weight={`${Math.round(data.weight / 10)} kg`}
                                baseExp={data.base_experience}
                            />
                        </div>
                    )
                })}
            </div>
        </section>

    )
}