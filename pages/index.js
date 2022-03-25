import react, { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";
import axios from "axios";
import Image from "next/image";
import { FormPokemon } from "../src/components/form";
import { PokemonsBanner } from "../src/components/pokemons";
import { ButtonNav, NavHeader } from "../src/components/buttonNav";
import { Introduction } from "../src/components/introduction";


export default function HomePage() {
    return (
        <div className="bg-darkBluePrimary flex flex-col gap-5 h-fit min-h-full">
            <NavHeader />
            <Introduction/>
            <FormPokemon />
            <PokemonsBanner />
        </div>
    )
}