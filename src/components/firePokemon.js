import react, { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";
import axios from "axios";

export function FireTypes() {
    const [pokemons, setPokemons] = react.useState([])
    const [pokemonType, setPokemonType] = react.useState('')
    const toArray = []

    react.useEffect(() => {
        getPokemons()
    }, [])

    const getPokemons = () => {
        axios.get(`https://pokeapi.co/api/v2/type/fire`)
            .then(res => {
                toArray.push(res.data.pokemon.pokemon.name)
                toArray.forEach(function(nome, i) {
                    console.log('[forEach]', nome, i);
                })
                //console.log(toArray)
            })
            .catch(e => {
                console.log(e)
            })
    }



    return (
        <section className="w-full">
            <div className="max-w-screen-xl mx-auto px-2 py-5">
                {pokemons.map((data) => {
                    return (
                        <div
                            key={keyIndex}
                            className="w-3/4 flex flex-col sm:flex-row justify-center items-center p-2 mx-auto bg-gray-900 relative text-white">
                            <img
                                className="w-full z-10"
                                key={data.id}
                                src={data.sprites.front_default}
                            />
                            <TableRandom
                                pokemonName={data.name}
                                pokemonType={pokemonType}
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