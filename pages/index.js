import react, { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";
import axios from "axios";
import Image from "next/image";
import { FormPokemon } from "../src/components/form";
import { PokemonsBanner } from "../src/components/pokemons";


export default function HomePage() {
    return (
        <div className="bg-darkBluePrimary flex flex-col gap-5 h-full">
            <FormPokemon />
            <PokemonsBanner/>
        </div>
    )
}