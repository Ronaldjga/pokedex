import react, { useState } from "react";
import axios from "axios";
import { TableRandom } from "./table";

export function PokemonsBanner() {
    const [pokemonData, setPokemonData] = react.useState([])
    const [pokemonType, setPokemonType] = react.useState('')
    const [keyIndex, setKeyIndex] = react.useState(0)
    
    const [whatPokemon, setWhatPokemon] = react.useState('')
    
    const toArray = []

    react.useEffect(() => {
        getRandomPokemon()
    },[])



    const getRandomPokemon = () => {
        const randomIndice = Math.floor(Math.random() * 926);
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=927&offset=200`)
            .then(res => {
                toArray.push(res.data.results[randomIndice].name)
                console.log(toArray)

                const toArrayGetPokemon = [];
                axios.get(`https://pokeapi.co/api/v2/pokemon/${toArray}`)
                    .then(res => {
                        toArrayGetPokemon.push(res.data);
                        setPokemonType(res.data.types[0].type.name);
                        setPokemonData(toArrayGetPokemon);
                        console.log(res)
                    })
                    .catch(e => {
                        console.log(e)
                    })

                // toArray.push(res.data.results[randomIndice].name)
                // console.log(toArray)
                // console.log(whatPokemon)
                // setWhatPokemon(toArray.toString())
                // getPokemon(whatPokemon)
            })
            .catch(e => {
                console.log(e)
            })
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setKeyIndex(keyIndex + 1)
        
        getRandomPokemon()
        //getPokemon(whatPokemon)
    }

    return (
        <section className="w-full p-5">
            <h2
                className="max-w-screen-xl text-center sm:text-left mx-auto text-4xl font-black font-h2Title p-5 text-yellowPrimary">
                Pesquise Aleatorio
            </h2>
            <div className="max-w-screen-xl mx-auto px-2">
            <form
                    onSubmit={handleSubmit}
                    className="w-full flex justify-center p-2 gap-5"
                >
                    <button
                        onSubmit={handleSubmit}
                        className="w-full lg:w-2/4 py-2 my-5 px-5 text-2xl bg-yellowPrimary border-2 border-pink-900 hover:border-yellowPrimary hover:bg-pink-900 hover:text-white text-darkBluePrimary font-bold"
                    >
                        Gerar
                    </button>
                </form>
                {pokemonData.map((data) => {
                    return (
                        <div
                            key={keyIndex}
                            className="w-full md:w-5/6 flex flex-col sm:flex-row justify-center items-center p-2 mx-auto bg-gray-900 relative text-white border-2 rounded-md border-pink-900">
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
