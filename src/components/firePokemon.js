import react, { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";
import axios from "axios";
import { TableRandom } from "./table";

export function FireTypes() {
    const [pokemons, setPokemons] = react.useState([])
    const [pokemonType, setPokemonType] = react.useState('')
    
    const [pokemonData, setPokemonData] = react.useState([])
    
    const toArray = []
    const pegaNome = []

    react.useEffect(() => {
        getPokemons()
    }, [])

    const getPokemons = () => {
        axios.get(`https://pokeapi.co/api/v2/type/fire`)
            .then(res => {
                toArray.push(res.data.pokemon)
                toArray.forEach(function (nome, i) {
                    pegaNome.push(...nome)
                    setPokemons(pegaNome)
                    console.log(pokemons)
                })
            
            })
            .catch(e => {
                console.log(e)
            })
    }



    return (
        <section className="w-full">
            <div className="max-w-screen-xl mx-auto px-2 py-5">
                {}
                <div
                    className="grid grid-cols-3"
                >
                    {/* {pokemonData.forEach((nomePokemon, indice) => {
                        const PegaPfv = nomePokemon
                        return (
                            <div>
                                {pokemonData.map((data) => {
                                    return (
                                        <div
                                            key={data.id}
                                            className="w-full flex flex-col justify-center items-center p-4 mx-auto bg-gray-900 relative text-white">
                                            <img
                                                className="w-2/3 z-10"
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
                        )    
                        
                    })} */}
                </div>
            </div>
        </section>
    )
}