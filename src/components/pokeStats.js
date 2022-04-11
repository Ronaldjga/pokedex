import react, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { TablePokePage, TablePokePageSecond } from "./table";
import Image from 'next/image'

export function PokeStats(props) {
    const [pokemon, setPokemon] = react.useState([])
    const pokemonName = props.pokemon

    react.useEffect(() => {
        if (pokemonName) {
            getPokemon()
        } else { return }

    }, [pokemonName])


    const getPokemon = async () => {
        const toArray = []
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(res => {
                toArray.push(res.data)
                setPokemon(toArray)
                //console.log(res)
            })
            .catch(e => console.log(e))
    }

    return (
        <div className="w-full mx-auto text-white pt-20 p-2 md:p-5 lg:p-0">
            {pokemon.map((data, key) => {
                return (
                    <div className="flex flex-col" key={key}>
                        <h2 className="order-1 lg:order-1 text-center text-3xl sm:text-4xl lg:text-5xl font-bold py-5">
                            {data.name.toUpperCase()}
                        </h2>
                        <div
                            className="order-3 lg:order-2 w-full flex flex-col lg:flex-row justify-center items-center p-2 lg:p-5 mx-auto  relative gap-10 md:gap-2">
                            <TablePokePage
                                pokemonTypes={data.types}
                                pokemonTypeOne={data.types[0].type.name}
                                pokemonTypeTwo={data.types.length > 1 ? data.types[1].type.name : ''}
                                height={`${Math.round(data.height * 10)} cm`}
                                weight={`${Math.round(data.weight / 10)} kg`}
                                baseExp={data.base_experience}
                            />

                            {data.sprites.other['official-artwork'].front_default
                                ? (
                                    < div className="order-1 md:order-2 w-full sm:h-full md:w-2/3 lg:w-2/5 z-10 relative">
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
                                : (null)}
                            <TablePokePageSecond
                                stats={data.stats}
                            />
                        </div>
                        <h3 className="order-2 lg:order-3 text-center text-3xl sm:text-4xl lg:text-5xl font-bold py-5">
                            Poder: {data.stats.map((value) => value.base_stat).reduce((prev, current) => prev + current)}
                        </h3>
                    </div>
                )
            })}
        </div>
    )
}