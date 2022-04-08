import react from "react";
import { useRouter } from "next/router";
import { PokeStats } from "../src/components/pokeStats";
import { BackHome } from "../src/components/formReport";

export default function pokePage() {
    const router = useRouter()
    const pokemon = router.query.pokemon

    return (
        <section className="bg-darkBluePrimary h-fit min-h-full flex justify-center items-center">
            <BackHome/>
            <PokeStats
                pokemon={pokemon}
            />
        </section>
    )
}