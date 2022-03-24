import react, { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";
import axios from "axios";
import { TableRandom } from "./table";

export function FireTypes() {
    const [pokemons, setPokemons] = react.useState([])
    const [pokemonType, setPokemonType] = react.useState('')
    
    const [pokemonData, setPokemonData] = react.useState([])
    const [start, setStart] = react.useState(0)
    
    const toArray = []
    const pegaNome = []
    const allPokemons = [pokemonData]

    react.useEffect(() => {

        getPokemons()
    }, [])

    const getPokemons = async () => {
        if (start === 0) {
            setStart(2)
            await axios.get(`https://pokeapi.co/api/v2/type/fire`)
                .then(res => {
                    toArray.push(res.data.pokemon)
                    toArray.forEach((pokeObj, i) => {
                        pokeObj.forEach((url, i) => {
                            const toArrayGetPokemon = [];
                            axios.get(url.pokemon.url)
                                .then(res => {
                                    pokemonData.push(res.data);
                                    setPokemonType(res.data.types[0].type.name);
                                    //console.log(toArrayGetPokemon)
                                    //console.log(res)
                                })
                                .catch(e => {
                                    console.log(e)
                                })
                            //console.log(url.pokemon.url) url de cada um
                        })
                    })
                
                })
                .catch(e => {
                    console.log(e)
                })
            
        } else return
    }

    // const getOnePokemon = () => {
    //     const toArrayGetPokemon = [];
    //     axios.get(`https://pokeapi.co/api/v2/pokemon/ditto`)
    //         .then(res => {
    //             toArrayGetPokemon.push(res.data);
    //             setPokemonType(res.data.types[0].type.name);
    //             setPokemonData(toArrayGetPokemon);
    //             console.log(res)
    //         })
    //         .catch(e => {
    //         console.log(e)
    //         })
        
                
            
                
    // }



    return (
        <section className="w-full">
            <div className="max-w-screen-xl mx-auto px-2 py-5">
                <div
                    className="grid grid-cols-3 gap-3"
                >
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
            </div>
        </section>
    )
}