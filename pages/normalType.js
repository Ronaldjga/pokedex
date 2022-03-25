import react, { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";
import Image from "next/image";
import { PokemonTypes } from "../src/components/PokemonsType";
import { BackHome } from "../src/components/formReport";



export default function NormalType() {
    return (
        <div className="bg-darkBluePrimary flex flex-col gap-5 h-fit min-h-full">
            <PokemonTypes
                type='normal'
                indiceType='0'
            />
            <BackHome/>
        </div>
    )
}