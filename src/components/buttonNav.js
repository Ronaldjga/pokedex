import react from "react";
import { useRouter } from "next/router";

export function ButtonNav(props) {
    const router = useRouter()

    const colorType = () => {
        if ( props.value === 'Fire') {
            return 'bg-red-500'
        } else if (props.value === 'Electric') {
            return 'bg-electricType text-darkBluePrimary'
        } else if (props.value === 'Ghost') {
            return 'bg-ghostType'
        } else if (props.value === 'Fight') {
            return 'bg-fightType'
        } else if (props.value === 'Fairy') {
            return 'bg-fairyType'
        } else if (props.value === 'Steel') {
            return 'bg-steelType'
        } else if (props.value === 'Bug') {
            return 'bg-bugType'
        } else if (props.value === 'Dragon') {
            return 'bg-dragonType'
        } else if (props.value === 'Grass') {
            return 'bg-grassType text-darkBluePrimary'
        } else if (props.value === 'Psychic') {
            return 'bg-psychicType'
        } else if (props.value === 'Rock') {
            return 'bg-rockType'
        } else if (props.value === 'Water') {
            return 'bg-waterType'
        } else if (props.value === 'Poison') {
            return 'bg-poisonType'
        } else if (props.value === 'Normal') {
            return 'bg-normalType'
        } else if (props.value === 'Ice') {
            return 'bg-iceType text-darkBluePrimary'
        } else if (props.value === 'Ground') {
            return 'bg-groundType'
        } else if (props.value === 'Flying') {
            return 'bg-flyingType'
        } else if (props.value === 'Dark') {
            return 'bg-darkType'
        }
    }

    return (
        <button
            className={`${colorType()} w-2/4 mx-auto py-2 px-5 text-xl`}
            onClick={(e) => {
                e.preventDefault
                router.push(`/${props.href}`)
            }}
        >
            {props.value}
        </button>
    )
}