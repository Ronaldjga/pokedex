import react, { useState } from "react";
import axios from "axios";
import { Table, TableRandom } from "./table";
import Image from 'next/image'
import Link from 'next/link'

export function FormPokemon() {
    const [pokemon, setPokemon] = react.useState('');
    const [pokemonData, setPokemonData] = react.useState([])

    const getPokemon = () => {
        const toArray = [];
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then(res => {
                toArray.push(res.data);
                setPokemonData(toArray);
                //console.log(res)
            }).catch(e => {
            console.log(e)
        })
    }

    const handleChange = (e) => {
        setPokemon(e.target.value.toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (pokemon) {
            getPokemon()
        } else {return}
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
                {pokemonData.map((data, key) => {
                    return (
                        <Link href={`/pokePage?pokemon=${data.name}`} key={key}>
                            <div
                                className="w-full md:w-5/6 flex flex-col sm:flex-row justify-center items-center p-2 lg:p-5 mx-auto bg-gray-900 relative border-2 rounded-md border-pink-900 gap-2 cursor-pointer">
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
                        </Link>
                    )
                })}
            </div>
        </section>

    )
}