import react from "react";
import Image from "next/dist/client/image";
import pikachu from './img/pikachu.svg'
import pokemonLogo from './img/pokemonLogo.svg'

export function Introduction() {
    return (
        <main className="w-full max-w-screen-xl mx-auto flex flex-col justify-center items-center py-10 gap-5 px-5">
            <div className="w-[200px] md:hidden relative">
                <Image
                    layout="responsive"
                    src={pokemonLogo}
                    alt='pokemon logo'
                />
            </div>
            <div className="w-[200px] md:w-[300px] relative">
                <Image
                    layout="responsive"
                    src={pikachu}
                    alt='pikachu'
                />
            </div>
            <p
                className="text-white text-center md:w-3/4 text-xl">
                Este site e desenvolvido exclusivamente para pratica de habilidade e tecnologias de desenvolvimento web. Sendo assim não possuimos vinculo com a nitendo, ou seja, não possuimos fins lucrativos.
            </p>
        </main>
    )
}