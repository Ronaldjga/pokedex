import react, { useState } from "react";
import axios from "axios";
import { Table } from "./table";

export function PokemonsBanner() {
    const [pokemonData, setPokemonData] = react.useState([])
    const [pokemon, setPokemon] = react.useState('')
    const [pokemonType, setPokemonType] = react.useState('')
    const toArray = []
    
    
    // const randomPokemon = async () => {
    //     const randomPokemon = Math.floor(Math.random() * 300);
    //     try {
    //         const url = `https://pokeapi.co/api/v2/pokemon?limit=300&offset=200`
    //         await axios.get(url)
    //             .then(res => toArray.push(res.data.results))
    //         setPokemonData(...toArray)
    //     }
    //     catch (e) {
    //         console.log(e)
    //     }
    // }

    react.useEffect(() => {
        randomPokemon()
    },[])

    const randomPokemon = async () => {
        const randomPokemon = Math.floor(Math.random() * 300);
        try {
            const url = `https://pokeapi.co/api/v2/pokemon?limit=300&offset=200`
            const res = await axios.get(url)
            toArray.push(res.data.results)
            setPokemonData(...toArray)
            if (pokemonData.length >= 1) {
                 setPokemon(pokemonData[randomPokemon].name)
             }
            // console.log(res)
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
        <section className="w-full h-screen bg-red-400">
            <div className="max-w-screen-xl mx-auto px-2 py-5">
                <button
                    className=" bg-yellowPrimary text-darkBluePrimary font-bold py-2 px-2"
                    onClick={(e) => {
                        e.preventDefault
                        randomPokemon()
                        // console.log(pokemonData)
                        // console.log(pokemon)
                        // console.log(toArray)
                    }}
                >
                    gera pokemon Aleatorio
                </button>
                {console.log(pokemon)}
                
                {/* <PokeBanner
                   
                /> */}
                
            </div>
        </section>
    )
}

function PokeBanner(props) {
    const [pokemonSeach, setPokemonSeach] = react.useState('')
    const [pokemonStats, setPokemonStats] = react.useState([])
    const [pokemonType, setPokemonType] = react.useState('')
    const [keyIndex, setKeyIndex] = react.useState(0)



    const getPokemon = async () => {
        const toArray = [];
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemonSeach}`
            const res = await axios.get(url)
            toArray.push(res.data);
            setPokemonType(res.data.types[0].type.name);
            setPokemonStats(toArray);
            console.log(res)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            {console.log}
            {pokemonStats.map((data) => {
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
    )
}