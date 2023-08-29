import React from "react";

interface FormGroupProps {
    label: string;
    className?: string;
    children: React.JSX.Element;
}

export default function FormGroup({label, children, className = ""}: FormGroupProps) {
    return (
        <section
            className={"relative flex flex-col mt-4 justify-center items-start border border-black rounded-sm py-2 pb-6 px-10 bg-white " + className}>
            <h3 className={"text-sm font-pt mb-2 absolute top-[-.8rem] left-3 bg-white p-1"}>{label}</h3>
            {children}
        </section>
    )
}