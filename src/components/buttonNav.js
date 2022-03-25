import react from "react";
import { useRouter } from "next/router";

export function NavHeader() {
    return (
        <>
            <header
                className="h-[100px] flex justify-center items-center bg-gray-700">
                <nav>
                    <ul className="flex justify-center items-center gap-2 text-white">
                        <li>
                            <ButtonNav
                                href="fireType"
                                value="Fire"
                            />
                        </li>
                        <li>
                            <ButtonNav
                                href="electricType"
                                value="Electric"
                            />
                        </li>
                        <li>
                            <ButtonNav
                                href="grassType"
                                value="Grass"
                            />
                        </li>
                        <li>
                            <ButtonNav
                                href="iceType"
                                value="Ice"
                            />
                        </li>
                        <li>
                            <ButtonNav
                                href="normalType"
                                value="Normal"
                            />
                        </li>
                        <li>
                            <ButtonNav
                                href="fairyType"
                                value="Fairy"
                            />
                        </li>
                        <li>
                            <ButtonNav
                                href="fightType"
                                value="Fight"
                            />
                        </li>
                        <li>
                            <ButtonNav
                                href="flyingType"
                                value="Flying"
                            />
                        </li>
                        <li>
                            <ButtonNav
                                href="ghostType"
                                value="Ghost"
                            />
                        </li>
                        <li>
                            <ButtonNav
                                href="bugType"
                                value="Bug"
                            />
                        </li>
                        <li>
                            <ButtonNav
                                href="groundType"
                                value="Ground"
                            />
                        </li>
                        <li>
                            <ButtonNav
                                href="darkType"
                                value="Dark"
                            />
                        </li>
                        <li>
                            <ButtonNav
                                href="dragonType"
                                value="Dragon"
                            />
                        </li>
                        <li>
                            <ButtonNav
                                href="poisonType"
                                value="Poison"
                            />
                        </li>
                        <li>
                            <ButtonNav
                                href="psychicType"
                                value="Psychic"
                            />
                        </li>
                        <li>
                            <ButtonNav
                                href="waterType"
                                value="Water"
                            />
                        </li>
                        <li>
                            <ButtonNav
                                href="steelType"
                                value="Steel"
                            />
                        </li>
                        <li>
                            <ButtonNav
                                href="rockType"
                                value="Rock"
                            />
                        </li>
                    </ul>
                </nav>
            </header>
            
        </>
    )
}


export function ButtonNav(props) {
    const router = useRouter()

    const colorType = () => {
        if ( props.value === 'Fire') {
            return 'border-red-500 hover:text-red-500'
        } else if (props.value === 'Electric') {
            return 'border-electricType hover:text-electricType'
        } else if (props.value === 'Ghost') {
            return 'border-ghostType hover:text-purple-500'
        } else if (props.value === 'Fight') {
            return 'border-fightType hover:text-red-700'
        } else if (props.value === 'Fairy') {
            return 'border-fairyType hover:text-fairyType'
        } else if (props.value === 'Steel') {
            return 'border-steelType hover:text-steelType'
        } else if (props.value === 'Bug') {
            return 'border-bugType hover:text-bugType'
        } else if (props.value === 'Dragon') {
            return 'border-dragonType hover:text-dragonType'
        } else if (props.value === 'Grass') {
            return 'border-grassType hover:text-grassType'
        } else if (props.value === 'Psychic') {
            return 'border-psychicType hover:text-psychicType'
        } else if (props.value === 'Rock') {
            return 'border-rockType hover:text-rockType'
        } else if (props.value === 'Water') {
            return 'border-waterType hover:text-waterType'
        } else if (props.value === 'Poison') {
            return 'border-poisonType hover:text-purple-400'
        } else if (props.value === 'Normal') {
            return 'border-normalType hover:text-normalType'
        } else if (props.value === 'Ice') {
            return 'border-iceType hover:text-iceType'
        } else if (props.value === 'Ground') {
            return 'border-groundType hover:text-groundType'
        } else if (props.value === 'Flying') {
            return 'border-flyingType hover:text-flyingType'
        } else if (props.value === 'Dark') {
            return 'border-darkType hover:text-gray-400'
        }
    }

    return (
        <button
            className={`${colorType()} bg-gray-900 py-1 rounded-xl px-5 border-2 hover:font-bold hover:border-white`}
            onClick={(e) => {
                e.preventDefault
                router.push(`/${props.href}`)
            }}
        >
            {props.value}
        </button>
    )
}