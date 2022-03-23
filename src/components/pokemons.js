import react, { useState } from "react";
import axios from "axios";
import { Table, TableRandom } from "./table";

export function PokemonsBanner() {
    const [pokemonData, setPokemonData] = react.useState([])
    const [pokemonType, setPokemonType] = react.useState('')
    const [keyIndex, setKeyIndex] = react.useState(0)

    const [randomPokemon, setRandomPokemon] = react.useState([])
    const [whatPokemon, setWhatPokemon] = react.useState('')


    react.useEffect(() => {
        getRandomPokemon()
    },[randomPokemon])



    const getRandomPokemon = async () => {
        const randomIndice = Math.floor(Math.random() * 300);
        const toArray = []
        try {
            const url = `https://pokeapi.co/api/v2/pokemon?limit=300&offset=200`
            const res = await axios.get(url)
            toArray.push(res.data.results)
            setRandomPokemon(...toArray)
            const nome = randomPokemon[randomIndice].name
            setWhatPokemon(nome)
            // console.log(res)
        }
        catch (e) {
            console.log(e)
        }
    }

    const getPokemon = async (e) => {
        const toArray = [];
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${e}`
            const res = await axios.get(url)
            toArray.push(res.data);
            setPokemonType(res.data.types[0].type.name);
            setPokemonData(toArray);
            //console.log(res)
        }
        catch (e) {
            console.log(e)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setKeyIndex(keyIndex + 1)
    
        getRandomPokemon()
        getPokemon(whatPokemon)
    }

    return (
        <section className="w-full">
            <div className="max-w-screen-xl mx-auto px-2 py-5">
            <form
                    onSubmit={handleSubmit}
                    className="w-full flex justify-center p-2 gap-5"
                >
                    <button
                        onSubmit={handleSubmit}
                        className="w-full lg:w-2/4 py-2 px-5 text-2xl bg-yellowPrimary text-darkBluePrimary font-bold"
                    >
                        Pokemon Aleatorio
                    </button>
                </form>
                {pokemonData.map((data) => {
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
