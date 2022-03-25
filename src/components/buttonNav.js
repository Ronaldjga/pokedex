import react from "react";
import { useRouter } from "next/router";

export function NavHeader() {
    return (
        <>
            <header
                className="h-[100px] bg-slate-800">
                <nav>
                    <ul className="flex gap-2">
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
            className={`${colorType()} py-1 rounded-xl px-5 border border-transparent hover:border-white`}
            onClick={(e) => {
                e.preventDefault
                router.push(`/${props.href}`)
            }}
        >
            {props.value}
        </button>
    )
}