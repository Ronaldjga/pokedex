import react, { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";
import axios from "axios";
import Image from "next/image";
import { FormPokemon } from "../src/components/form";
import { PokemonsBanner } from "../src/components/pokemons";
import { ButtonNav, NavHeader } from "../src/components/buttonNav";
import { Introduction } from "../src/components/introduction";
import { Footer } from "../src/components/footer";
import { ReportButton } from "../src/components/formReport";
import Head from "next/head";


export default function HomePage() {
    return (
        <div className="bg-darkBluePrimary flex flex-col gap-5 h-fit min-h-full">
            <Head>
                <title>Pokedex</title>
                <meta property="Description" content="pokédex" key="title" />
            </Head>
            <NavHeader />
            <Introduction/>
            <FormPokemon />
            <PokemonsBanner />
            <ReportButton/>
            <Footer/>
        </div>
    )
}