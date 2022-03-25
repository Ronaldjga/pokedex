import react, { useState } from "react";

const trStyle= `w-full p-2 flex`

export function Table(props) {
    

    return (
        <table className="border-collapse w-3/4 flex justify-center items-center z-10">
            <thead className="h-full w-full flex flex-col justify-center gap-2">
                <TRowType
                    thValue="Tipo:"
                    tdValue={props.pokemonType}
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

export function TableRandom(props) {
    

    return (
        <table className="border-collapse w-3/4 flex justify-center items-center z-10">
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
    const [typeColor, setTypeColor] = react.useState('')
    const [displayType, setDisplayType] = react.useState('')
    
    const verificaTwo = props.tdValueTwo

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
                    className={`text-center font-semibold w-2/4 flex justify-center gap-2 `}
                >
                    {props.tdTypes.map((types) => {
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
                                className={`${colorType()} w-full px-2 py-1 rounded-lg`}
                            >
                                {types.type.name}
                                {console.log(types.type.name)}
                            </span>
                        )
                    })}
                </td>
            </tr>
        </>
    )
}