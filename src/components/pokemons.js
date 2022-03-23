import react, { useState } from "react";
import axios from "axios";
import { Table } from "./table";

export function PokemonsBanner() {
    const [pokemonData, setPokemonData] = react.useState([])
    const [pokemonType, setPokemonType] = react.useState('')
    const [keyIndex, setKeyIndex] = react.useState(0)

    const [randomPokemon, setRandomPokemon] = react.useState([])
    const [whatPokemon, setWhatPokemon] = react.useState('')


    react.useEffect(() => {
        getRandomPokemon()
    },[])



    const getRandomPokemon = async () => {
        const randomIndice = Math.floor(Math.random() * 300);
        const toArray = []
        try {
            const url = `https://pokeapi.co/api/v2/pokemon?limit=300&offset=200`
            const res = await axios.get(url)
            toArray.push(res.data.results)
            setRandomPokemon(...toArray)
            setWhatPokemon(randomPokemon[randomIndice].name)
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
            console.log(res)
        }
        catch (e) {
            console.log(e)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setKeyIndex(keyIndex + 1)
        console.log(randomPokemon, 'aaaaaaaa')
        console.log(whatPokemon, 'aaaaaaaa')
        getRandomPokemon()
        getPokemon(whatPokemon)
    }

    return (
        <section className="w-full h-screen bg-red-400">
            <div className="max-w-screen-xl mx-auto px-2 py-5">
            <form
                    onSubmit={handleSubmit}
                    className="w-full flex justify-center p-2 gap-5"
                >
                    <button
                        onSubmit={handleSubmit}
                        className="w-2/4 py-2 px-5 bg-yellowPrimary text-darkBluePrimary font-bold"
                    >
                        Enviar
                    </button>
                </form>
                {pokemonData.map((data) => {
                    return (
                        <div
                            key={keyIndex}
                            className="w-3/4 flex mx-auto bg-gray-900 relative text-white">
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
        </section>
    )
}
