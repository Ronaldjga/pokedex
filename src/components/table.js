import react, {useState} from "react";

export function Table(props) {
    

    return (
        <table className="border-collapse bg-yellowPrimary w-3/4">
            <thead>
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
    const [typeColor, setTypeColor] = react.useState('')
    

    return (
        <>
            <tr
                className=""
            >
                <th
                    className={`font-bold`}
                >
                    {props.thValue}
                </th>
                <td>
                    {props.tdValue}
                </td>
            </tr>
        </>
    )
}

function TRowType(props) {
    const [typeColor, setTypeColor] = react.useState('')
    const checaTipo = props.tdValue === 'fire' ? 'bg-red-500' : 'bg-green-500'

    return (
        <>
            <tr
                className=""
            >
                <th
                    className={`font-bold`}
                >
                    {props.thValue}
                </th>
                <td
                    className={`${checaTipo} text-center`}
                >
                    {props.tdValue}
                </td>
            </tr>
        </>
    )
}