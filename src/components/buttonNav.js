import react from "react";
import { useRouter } from "next/router";

export function ButtonNav(props) {
    const router = useRouter()
    return (
        <button
            className="py-2 px-5 bg-red-500 text-white"
            onClick={(e) => {
                e.preventDefault
                router.push(`/${props.href}`)
            }}
        >
            {props.value}
        </button>
    )
}