import react, { useState } from "react";
import axios from "axios";
import { Table, TableRandom } from "./table";

export function FormPokemon() {
    const [pokemon, setPokemon] = react.useState('');
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
        <section className="w-full  text-white p-5">
            <h2
                className="max-w-screen-xl text-center sm:text-left mx-auto text-4xl font-black font-h2Title p-5 text-yellowPrimary">
                Pesquise Pokemons
            </h2>
            <div className="w-full max-w-screen-xl mx-auto">
                <form
                    onSubmit={handleSubmit}
                    className="w-full flex flex-col md:flex-row items-center justify-center p-2 gap-5 md:mb-10"
                >
                    <input
                        className="text-black w-full md:w-2/3 p-2"
                        type={'text'}
                        value={pokemon}
                        onChange={handleChange}
                        placeholder="esolha seu pokemon"
                    />
                    <button
                        onSubmit={handleSubmit}
                        className="w-full md:w-1/4 p-2 bg-yellowPrimary border-2 border-pink-900 text-darkBluePrimary font-bold hover:bg-pink-900 hover:text-white hover:border-yellowPrimary"
                    >
                        Enviar
                    </button>
                </form>
                {pokemonData.map((data) => {
                    return (
                        <div
                            key={keyIndex}
                            className="w-full md:w-5/6 flex flex-col sm:flex-row justify-center items-center p-2 lg:p-5 mx-auto bg-gray-900 relative border-2 rounded-md border-pink-900 ">
                            <img
                                className="w-full z-10"
                                key={data.id}
                                src={data.sprites.front_default}
                                alt={data.id}
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