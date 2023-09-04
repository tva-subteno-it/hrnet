import React from "react";

export interface InputProps {
    label?: string;
    type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
    placeholder: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    id: string;
    groupClassName?: React.HTMLAttributes<HTMLDivElement>["className"];
    labelClassName?: React.HTMLAttributes<HTMLLabelElement>["className"];
    inputClassName?: React.HTMLAttributes<HTMLInputElement>["className"];
}

export default function Input({id, label, type="text", placeholder, value, onChange, groupClassName = "", labelClassName = "", inputClassName = ""}: InputProps) {
    const [inputValue, setInputValue] = React.useState(value ?? "");

    if (!label){
        label = id.charAt(0).toUpperCase() + id.slice(1)
    }

    return (
        <div className={"flex flex-col mt-4 " + groupClassName}>
            <label htmlFor={id} className={"text-sm font-pt mb-2 " + labelClassName}>{label}</label>
            <input type={type} id={id} placeholder={placeholder} value={inputValue} onChange={onChange ?? ((e) => setInputValue(e.target.value))}
                   className={"border border-secondary/20 rounded-sm p-2 bg-primary/10 " + inputClassName}/>
        </div>
    )
}