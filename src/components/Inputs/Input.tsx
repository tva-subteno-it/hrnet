import React from "react";

export interface InputProps {
    label?: string;
    type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    id?: string;
    groupClassName?: React.HTMLAttributes<HTMLDivElement>["className"];
    labelClassName?: React.HTMLAttributes<HTMLLabelElement>["className"];
    inputClassName?: React.HTMLAttributes<HTMLInputElement>["className"];
    children?: React.ReactNode;
}

export default function Input({
                                  id,
                                  label,
                                  type = "text",
                                  placeholder = "",
                                  value,
                                  onChange,
                                  children,
                                  groupClassName = "",
                                  labelClassName = "",
                                  inputClassName = "",
                              }: InputProps) {
    const [inputValue, setInputValue] = React.useState(value ?? "");

    if (!label) {
        if (!id) {
            throw new Error("You must provide a label or children to the Input component")
        }
        label = id.charAt(0).toUpperCase() + id.slice(1)
    }

    return (
        <div className={"flex flex-col mt-6 " + groupClassName}>
            {label ?? <label htmlFor={id} className={"text-sm font-pt mb-2 " + labelClassName}>{label}</label>}
            {children ?? (<input name={id} type={type} id={id} placeholder={placeholder} value={inputValue}
                                 onChange={onChange ?? ((e) => setInputValue(e.target.value))}
                                 className={"border border-secondary/20 rounded-sm p-2 bg-primary bg-opacity-10 hover:filter hover:bg-opacity-20 transition" + inputClassName}/>
                )}
        </div>
    )
}