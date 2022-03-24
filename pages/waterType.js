import react, { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";
import Image from "next/image";
import { PokemonTypes } from "../src/components/firePokemon";



export default function FireType() {
    return (
        <div className="bg-darkBluePrimary flex flex-col gap-5 h-fit min-h-full">
            <PokemonTypes
                type='water'
                indiceType='0'
            />
        </div>
    )
}