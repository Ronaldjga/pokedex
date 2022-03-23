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
            <thead className="h-full w-full flex flex-col justify-center gap-2">
                <tr className="text-center text-3xl font-bold">
                    <th>{props.pokemonName.toUpperCase()}</th>
                </tr>
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
    

    const colorType = () => {
        if ( props.tdValue === 'fire') {
            return 'bg-red-500'
        } else if (props.tdValue === 'electric') {
            return 'bg-electricType text-darkBluePrimary'
        } else if (props.tdValue === 'ghost') {
            return 'bg-ghostType'
        } else if (props.tdValue === 'fighting') {
            return 'bg-fightType'
        } else if (props.tdValue === 'fairy') {
            return 'bg-fairyType'
        } else if (props.tdValue === 'steel') {
            return 'bg-steelType'
        } else if (props.tdValue === 'bug') {
            return 'bg-bugType'
        } else if (props.tdValue === 'dragon') {
            return 'bg-dragonType'
        } else if (props.tdValue === 'grass') {
            return 'bg-grassType text-darkBluePrimary'
        } else if (props.tdValue === 'psychic') {
            return 'bg-psychicType'
        } else if (props.tdValue === 'rock') {
            return 'bg-rockType'
        } else if (props.tdValue === 'water') {
            return 'bg-waterType'
        } else if (props.tdValue === 'poison') {
            return 'bg-poisonType'
        } else if (props.tdValue === 'normal') {
            return 'bg-normalType'
        } else if (props.tdValue === 'ice') {
            return 'bg-iceType text-darkBluePrimary'
        } else if (props.tdValue === 'ground') {
            return 'bg-groundType'
        } else if (props.tdValue === 'flying') {
            return 'bg-flyingType'
        } else if (props.tdValue === 'dark') {
            return 'bg-darkType'
        }
    }

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
                    className={`text-center font-semibold w-2/4 flex justify-center `}
                >
                    <span
                        className={`${colorType()} w-full px-2 py-1 rounded-lg`}
                    >
                        {props.tdValue.toUpperCase()}
                    </span>
                </td>
            </tr>
        </>
    )
}