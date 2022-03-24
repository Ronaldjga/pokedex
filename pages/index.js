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
            <ButtonNav
                href="electricType"
                value="Electric"
            />
            <ButtonNav
                href="grassType"
                value="Grass"
            />
            <ButtonNav
                href="iceType"
                value="Ice"
            />
            <ButtonNav
                href="normalType"
                value="Normal"
            />
            <ButtonNav
                href="fairyType"
                value="Fairy"
            />
            <ButtonNav
                href="fightType"
                value="Fight"
            />
            <ButtonNav
                href="flyingType"
                value="Flying"
            />
            <ButtonNav
                href="ghostType"
                value="Ghost"
            />
            <ButtonNav
                href="bugType"
                value="Bug"
            />
            <ButtonNav
                href="groundType"
                value="Ground"
            />
            <ButtonNav
                href="darkType"
                value="Dark"
            />
            <ButtonNav
                href="dragonType"
                value="Dragon"
            />
            <ButtonNav
                href="poisonType"
                value="Poison"
            />
            <ButtonNav
                href="psychicType"
                value="Psychic"
            />
            <ButtonNav
                href="waterType"
                value="Water"
            />
            <ButtonNav
                href="steelType"
                value="Steel"
            />
            <ButtonNav
                href="rockType"
                value="Rock"
            />
        </div>
    )
}