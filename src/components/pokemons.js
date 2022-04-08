import react, { useState } from "react";
import axios from "axios";
import { TableRandom } from "./table";
import Image from 'next/image'

export function PokemonsBanner() {
    const [pokemonData, setPokemonData] = react.useState([])
    
    const toArray = []

    react.useEffect(() => {
        getRandomPokemon()
    },[])



    const getRandomPokemon = () => {
        const randomIndice = Math.floor(Math.random() * 926);
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=927&offset=200`)
            .then(res => {
                toArray.push(res.data.results[randomIndice].name)
                const toArrayGetPokemon = [];
                axios.get(`https://pokeapi.co/api/v2/pokemon/${toArray}`)
                    .then(res => {
                        toArrayGetPokemon.push(res.data);
                        
                        setPokemonData(toArrayGetPokemon);
                        //console.log(res)
                    })
                    .catch(e => {
                        console.log(e)
                    })
            })
            .catch(e => {
                console.log(e)
            })
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        getRandomPokemon()
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
                {pokemonData.map((data, key) => {
                    return (
                        <div
                            key={key}
                            className="w-full md:w-5/6 flex flex-col sm:flex-row justify-center items-center p-2 mx-auto bg-gray-900 relative text-white border-2 rounded-md border-pink-900 gap-2">
                            {data.sprites.other['official-artwork'].front_default
                                ? (
                                    < div className="w-full sm:h-full sm:w-2/4 z-10 relative">
                                        <Image
                                            layout="responsive"
                                            width={'100%'}
                                            height={'100%'}
                                            key={data.id}
                                            src={data.sprites.other['official-artwork'].front_default}
                                            alt={data.id}
                                            priority
                                        />
                                    </div>
                                ) 
                                :(null)}
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
