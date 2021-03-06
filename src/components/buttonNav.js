import react from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import pokemonLogo from "../components/img/pokemonLogo.svg"
import { useEffect } from "react/cjs/react.production.min";
import Link from "next/link";

import openPokeboll from './img/pokebolaAberta.svg'
import closePokeboll from './img/closePokeboll.svg'

export function NavHeader() {
    const [menuButton, setMenuButton] = react.useState(false)
    const [listStatus, setListStatus] = react.useState('hidden')
    const [buttonValue, setButtonValue] = react.useState('MENU')
    


    return (
        <>
            <header
                className={`${listStatus} fixed z-20 h-screen md:relative md:w-full md:h-fit md:flex flex-col gap-5 justify-center md:justify-between items-center bg-gray-900 p-5`}>
                <div className="w-3/4 md:w-1/2 h-[120px] relative">
                    <Image
                        layout="fill"
                        src={pokemonLogo}
                        alt='pokemon Logo'
                    />
                </div>
                <nav className="w-5/6 md:w-3/6">
                    <ul className={`flex flex-wrap justify-center items-center gap-x-2 gap-y-5 text-white`}>
                        <li>
                            <ButtonNav
                                href="fire"
                                value="Fire"
                            />
                        </li>
                        <li>
                            <ButtonNav
                                href="electric"
                                value="Electric"
                            />
                        </li>
                        <li>
                            <ButtonNav
                                href="grass"
                                value="Grass"
                            />
                        </li>
                        <li>
                            <ButtonNav
                                href="ice"
                                value="Ice"
                            />
                        </li>
                        <li>
                            <ButtonNav
                                href="normal"
                                value="Normal"
                            />
                        </li>
                        <li>
                            <ButtonNav
                                href="fairy"
                                value="Fairy"
                            />
                        </li>
                        <li>
                            <ButtonNav
                                href="fighting"
                                value="Fight"
                            />
                        </li>
                        <li>
                            <ButtonNav
                                href="flying"
                                value="Flying"
                            />
                        </li>
                        <li>
                            <ButtonNav
                                href="ghost"
                                value="Ghost"
                            />
                        </li>
                        <li>
                            <ButtonNav
                                href="bug"
                                value="Bug"
                            />
                        </li>
                        <li>
                            <ButtonNav
                                href="ground"
                                value="Ground"
                            />
                        </li>
                        <li>
                            <ButtonNav
                                href="dark"
                                value="Dark"
                            />
                        </li>
                        <li>
                            <ButtonNav
                                href="dragon"
                                value="Dragon"
                            />
                        </li>
                        <li>
                            <ButtonNav
                                href="poison"
                                value="Poison"
                            />
                        </li>
                        <li>
                            <ButtonNav
                                href="psychic"
                                value="Psychic"
                            />
                        </li>
                        <li>
                            <ButtonNav
                                href="water"
                                value="Water"
                            />
                        </li>
                        <li>
                            <ButtonNav
                                href="steel"
                                value="Steel"
                            />
                        </li>
                        <li>
                            <ButtonNav
                                href="rock"
                                value="Rock"
                            />
                        </li>
                    </ul>
                </nav>
            </header>
                <MenuMobile
                    className={`md:hidden`}
                    setListStatus={setListStatus}
                    listStatus={listStatus}
                    setMenuButton={setMenuButton}
                    menuButton={menuButton}
                    setButtonValue={setButtonValue}
                    buttonValue={buttonValue}
                />
            
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
            return 'border-purple-800 hover:text-purple-500'
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
            return 'border-purple-400 hover:text-purple-400'
        } else if (props.value === 'Normal') {
            return 'border-normalType hover:text-normalType'
        } else if (props.value === 'Ice') {
            return 'border-iceType hover:text-iceType'
        } else if (props.value === 'Ground') {
            return 'border-groundType hover:text-groundType'
        } else if (props.value === 'Flying') {
            return 'border-flyingType hover:text-flyingType'
        } else if (props.value === 'Dark') {
            return 'border-slate-500 hover:text-gray-400'
        }
    }

    return (
        <Link
            href={`/pokemonType?type=${props.href}`}
        >
            <a className={`${colorType()} bg-gray-900 py-1 rounded-xl px-5 border-2 hover:font-bold hover:border-white`}>
                {props.value}
            </a>
        </Link>
    )
}


export function MenuMobile(props) {
    const handleMenu = props.menuButton === false ? closePokeboll : openPokeboll


    return (
        <div className="absolute top-0 left-0 z-50">
            <button
                className={`${props.className} h-[70px] w-[70px] rounded-full fixed z-50 right-5 top-5 font-bold
            
                sm:right-9 sm:top-9
                `}
                onClick={(e) => {
                    e.preventDefault
                    if (props.menuButton === false) {
                        props.setListStatus('')
                        props.setListStatus('flex')
                        props.setMenuButton(true)

                    } else {
                        props.setListStatus('')
                        props.setListStatus('hidden')
                        props.setMenuButton(false)
                    }
                }}
            >
                <Image layout="fill"
                    src={handleMenu}
                    alt='menu'
                />
            </button>

            
        </div>
    )
}