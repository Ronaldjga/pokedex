import react from "react";
import { Footer } from "../src/components/footer";
import { BackHome, FormReport } from "../src/components/formReport";

export default function Report() {
    return (
        <>
            <div className="w-full h-fit bg-darkBluePrimary flex flex-col items-center md:justify-center pt-16 gap-5">
                <div
                    className="flex flex-col items-center md:justify-center gap-5 px-4"
                >
                    <h1 className="text-white font-h1Title text-center text-5xl font-bold p-5">Reporte</h1>
                    <p className="max-w-screen-lg mx-auto text-white text-center">
                        Esse site sobre pokemon foi desenvolvido exclusivamente para reforçar conhecimentos e habilidades de desenvolvimento web, sendo assim, não tem fins lucrativos. Entretanto, você encontrou um erro? Reporte para que haja correção.
                    </p>
                    <FormReport></FormReport>
                </div>
                <BackHome />
                <Footer/>
            </div>
        </>
    )
}