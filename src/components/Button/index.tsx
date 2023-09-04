import {NavLink} from "react-router-dom";

interface ButtonProps {
    label: string;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "link";
    to?: string;
}

export default function Button({label, className = "", onClick, type="button", to}: ButtonProps){
    if (type === "link" && !to){
        throw new Error("You must provide a 'to' prop when using the 'link' type")
    }

    if (type === "link" && to) {
        return <NavLink to={to} className={"w-full border border-secondary px-12 text-xl font-playfair inline-block text-center rounded-sm" + className}>{label}</NavLink>
    }

    if (type !== "link") {
        return (
            <button type={type} onClick={onClick ?? (() => {})}
                    className={"w-96 mx-auto bg-secondary text-white px-12 py-2 text-xl font-playfair block text-center rounded-sm" + className}>{label}</button>
        )
    }
}