import react, { useState } from "react";

const trStyle= `w-full p-2 pb-5 flex gap-x-10 border-b-2 border-l-2 border-r-2 rounded-md border-pink-900 hover:border-yellowPrimary`

export function TableRandom(props) {
    

    return (
        <table className="border-collapse w-full sm:w-2/4 flex justify-center items-center z-10">
            <thead className="h-full w-full flex flex-col justify-center items-center gap-3">
                <tr className="text-center lg:text-3xl font-bold">
                    <th>{props.pokemonName.toUpperCase()}</th>
                </tr>
                <TRowType
                    thValue="Tipo:"
                    tdTypes={props.pokemonTypes}
                    tdValueOne={props.pokemonTypeOne}
                    tdValueTwo={props.pokemonTypeTwo}
                />
                <TRow
                    thValue="Altura"
                    tdValue={props.height}
                />
                <TRow
                    thValue="Peso"
                    tdValue={props.weight}
                />
                <TRow
                    thValue="Experiencia Base"
                    tdValue={props.baseExp}
                />
            </thead>
        </table>
    )
}
export function TablePokePage(props) {
    

    return (
        <table className="border-collapse w-full sm:min-w-[300px] md:w-2/3 md:order-1 order-2 lg:w-1/4 flex justify-center items-center z-10">
            <thead className="h-full w-full flex flex-col justify-center items-center gap-3">
                <TRowType
                    thValue="Tipo:"
                    tdTypes={props.pokemonTypes}
                    tdValueOne={props.pokemonTypeOne}
                    tdValueTwo={props.pokemonTypeTwo}
                />
                <TRow
                    thValue="Altura"
                    tdValue={props.height}
                />
                <TRow
                    thValue="Peso"
                    tdValue={props.weight}
                />
                <TRow
                    thValue="Experiencia Base"
                    tdValue={props.baseExp}
                />
            </thead>
        </table>
    )
}

export function TablePokePageSecond(props) {
    

    return (
        <table className="border-collapse w-full sm:min-w-[300px] md:w-2/3 md:order-3 order-3 lg:w-1/4 flex justify-center items-center z-10">
            <thead className="h-full w-full flex flex-col justify-center items-center gap-3">
                {props.stats.map((data, key) => {
                    return (
                        <TRow
                            key={key}
                            thValue={data.stat.name}
                            tdValue={data.base_stat}
                        />
                    )
                })}
            </thead>
        </table>
    )
}

export function TablePokemonTypes(props) {
    

    return (
        <table className="border-collapse w-full flex justify-center items-center z-10">
            <thead className="h-full w-full flex flex-col justify-center items-center gap-3">
                <tr className="text-center lg:text-3xl font-bold">
                    <th>{props.pokemonName.toUpperCase()}</th>
                </tr>
                <TRowType
                    thValue="Tipo:"
                    tdTypes={props.pokemonTypes}
                    tdValueOne={props.pokemonTypeOne}
                    tdValueTwo={props.pokemonTypeTwo}
                />
                <TRow
                    thValue="Altura"
                    tdValue={props.height}
                />
                <TRow
                    thValue="Peso"
                    tdValue={props.weight}
                />
                <TRow
                    thValue="Experiencia Base"
                    tdValue={props.baseExp}
                />
            </thead>
        </table>
    )
}


function TRow(props) { 
    return (
        <>
            <tr 
                className={trStyle}
            >
                <th
                    className={`w-2/4 font-bold text-center`}
                >
                    {props.thValue}
                </th>
                <td
                    className="w-2/4 text-center font-semibold"
                >
                    {props.tdValue}
                </td>
            </tr>
        </>
    )
}

function TRowType(props) {


    return (
        <>
            <tr
                className={trStyle}
            >
                <th
                    className={`text-center font-bold w-2/4`}
                >
                    {props.thValue}
                </th>
                <td
                    
                    className={`text-center font-semibold w-2/4 flex flex-col md:flex-row justify-center gap-2 `}
                >
                    {props.tdTypes.map((types, i) => {
                        const colorType = () => {
                            if ( types.type.name === 'fire') {
                                return 'bg-red-500'
                            } else if (types.type.name === 'electric') {
                                return 'bg-electricType text-darkBluePrimary'
                            } else if (types.type.name === 'ghost') {
                                return 'bg-ghostType'
                            } else if (types.type.name === 'fighting') {
                                return 'bg-fightType'
                            } else if (types.type.name === 'fairy') {
                                return 'bg-fairyType'
                            } else if (types.type.name === 'steel') {
                                return 'bg-steelType'
                            } else if (types.type.name === 'bug') {
                                return 'bg-bugType'
                            } else if (types.type.name === 'dragon') {
                                return 'bg-dragonType'
                            } else if (types.type.name === 'grass') {
                                return 'bg-grassType text-darkBluePrimary'
                            } else if (types.type.name === 'psychic') {
                                return 'bg-psychicType'
                            } else if (types.type.name === 'rock') {
                                return 'bg-rockType'
                            } else if (types.type.name === 'water') {
                                return 'bg-waterType'
                            } else if (types.type.name === 'poison') {
                                return 'bg-poisonType'
                            } else if (types.type.name === 'normal') {
                                return 'bg-normalType'
                            } else if (types.type.name === 'ice') {
                                return 'bg-iceType text-darkBluePrimary'
                            } else if (types.type.name === 'ground') {
                                return 'bg-groundType'
                            } else if (types.type.name === 'flying') {
                                return 'bg-flyingType'
                            } else if (types.type.name === 'dark') {
                                return 'bg-darkType'
                            }
                        }

                        return (
                            <span
                                key={i}
                                className={`${colorType()} px-2 py-1 rounded-lg`}
                            >
                                {types.type.name}
                            </span>
                        )
                    })}
                </td>
            </tr>
        </>
    )
}