import react from "react";
import { BackHome, FormReport } from "../src/components/formReport";

export default function Report() {
    return (
        <>
            <div className="w-full h-full bg-darkBluePrimary flex flex-col items-center justify-center p-2 gap-5">
                <h1 className="text-white font-h1Title text-center text-5xl font-bold p-2">Reporte</h1>
                <p className="max-w-screen-lg mx-auto text-white">
                    Esse site sobre pokemon foi desenvolvivo exclusivamente para reforçar conhecimentos e habilidades de desenvolvimento web, sendo assim, não tem fins lucrativos. Entretanto, você encontrou um erro? Reporte para que haja correção.
                </p>
                <FormReport></FormReport>
                <BackHome/>
            </div>
        </>
    )
}