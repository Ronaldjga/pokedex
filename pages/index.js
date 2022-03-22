import react, { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";
import Image from "next/image";


export default function HomePage() {
    const [pokemon, setPokemon] = react.useState([])
    const [seachPokemon, setSeachPokemon] = react.useState('raichu')
    const [pokemonSprites, setPokemonSprites] = react.useState('')

    const pokeAPI = async () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
          };
          
          await fetch(`https://pokeapi.co/api/v2/pokemon/${seachPokemon}`, requestOptions)
              .then(response => response.json())
              .then(result => setPokemon(result))
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    

    return (
        <div className="bg-darkBluePrimary">
            <main className="max-w-screen-xl mx-auto text-white">
                <h1 className="text-5xl">Pokedex</h1>
                <div>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault()
                            pokeAPI()
                        }}
                    >
                        <input
                            type={"text"}
                            className={`p-2 w-2/4 text-black`}
                            value={seachPokemon}
                            onChange={(e) => {
                                setSeachPokemon(e.target.value.toLowerCase())
                            }}
                            placeholder="Qual Pokemon"
                        />
                    </form>
                    <div>
                        {console.log(pokemon.sprites.front_default)}
                        {/* {pokemon.sprites.front_default} */}
                    </div>
                </div>
            </main>
        </div>
    )
}