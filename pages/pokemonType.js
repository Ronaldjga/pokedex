import react from "react";
import { PokemonTypes } from "../src/components/PokemonsType";
import { BackHome } from "../src/components/formReport";


export default function PokemonTypePage() {
    return (
        <>
            <section className="w-full flex flex-col bg-darkBluePrimary h-fit min-h-full">
                <PokemonTypes/>
                <BackHome/>
            </section>
        </>
    )
}