import react from "react";
import { PokemonTypes } from "../src/components/PokemonsType";
import { BackHome } from "../src/components/formReport";


export default function PokemonTypePage() {
    return (
        <div className="bg-darkBluePrimary flex flex-col gap-5 h-fit min-h-full">
            <PokemonTypes/>
            <BackHome/>
        </div>
    )
}