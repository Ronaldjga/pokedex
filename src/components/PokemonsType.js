import react, { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";
import axios from "axios";
import { TableRandom } from "./table";
import { useRouter } from "next/router";
import Image from 'next/image'
import nextConfig from "../../next.config";

export function PokemonTypes(props) {
    const [pokemons, setPokemons] = react.useState([])
    const [pokemonTypeOne, setPokemonTypeOne] = react.useState('')
    const [seachPokemon, setSeachPokemon] = react.useState('')

    const [pokemonData, setPokemonData] = react.useState([])
    const [start, setStart] = react.useState(0)

    const router = useRouter();
    const type = router.query.type

    const toArray = []
    const pegaNome = []
    const allPokemons = [pokemonData]

    react.useEffect(() => {
        if (type) {
            getPokemons()
        } else {
            return
        }
    }, [type])

    const getPokemons = async () => {
        if (start === 0) {
            setStart(2)
            await axios.get(`https://pokeapi.co/api/v2/type/${type}`)
                .then(res => {
                    toArray.push(res.data.pokemon)
                    toArray.forEach((pokeObj, i) => {
                        pokeObj.forEach((url, i) => {
                            const toArrayGetPokemon = [];
                            axios.get(url.pokemon.url)
                                .then(res => {
                                    pokemonData.push(res.data);
                                    setPokemonTypeOne(res.data.types[0].type.name);
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

    return (
        <>
            <div className="w-full flex flex-col gap-10 max-w-screen-xl mx-auto px-2 py-10">
                <form className="min-w-max w-full max-w-screen-xl mx-auto">
                    <input
                        type={'text'}
                        placeholder={`Pesquise pokemons de tipo ${type}`}
                        onChange={(e) => {
                            setSeachPokemon(e.target.value)
                        }}
                        className="w-full p-2 rounded-md"
                    />
                </form>
                <div
                    className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-16 sm:p-0 p-2"
                >
                    {pokemonData.filter((val) => {
                        if (seachPokemon === '') {
                            return val
                        } else if (val.name.toLowerCase().includes(seachPokemon.toLowerCase())) {
                            return val
                        }
                    }).map((data) => {
                        return (
                            <div
                                key={data.id}
                                className="w-full flex flex-col justify-center items-center p-4 mx-auto bg-gray-900 relative text-white border-b-2 border-l-2 border-r-2 rounded-xl border-yellowPrimary ">
                                {data.sprites.other['official-artwork'].front_default
                                    ? (
                                        <div className="w-[200px] h-[200px] relative">
                                            <Image
                                                className="w-full sm:w-2/3 z-10"
                                                layout="fill"
                                                key={data.id}
                                                src={data.sprites.other['official-artwork'].front_default}
                                                alt={data.id}
                                            />
                                        </div>
                                    )
                                    : (null)}
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
                
            </div>
        </>
    )
}