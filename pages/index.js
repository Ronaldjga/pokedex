import react, { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";
import axios from "axios";
import Image from "next/image";
import { FormPokemon } from "../src/components/form";
import { PokemonsBanner } from "../src/components/pokemons";
import { ButtonNav } from "../src/components/buttonNav";


export default function HomePage() {
    return (
        <div className="bg-darkBluePrimary flex flex-col gap-5 h-fit min-h-full">
            <FormPokemon />
            <PokemonsBanner />
            <ButtonNav
                href="fireType"
                value="Fire"
            />
        </div>
    )
}