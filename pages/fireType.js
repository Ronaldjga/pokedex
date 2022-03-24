import react, { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";
import Image from "next/image";
import { FireTypes } from "../src/components/firePokemon";



export default function FireType() {
    return (
        <div className="bg-darkBluePrimary flex flex-col gap-5 h-fit min-h-full">
            <FireTypes/>
        </div>
    )
}