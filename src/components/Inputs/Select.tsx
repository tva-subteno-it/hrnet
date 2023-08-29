import {InputProps} from "./Input.tsx";

interface SelectProps extends Omit<InputProps, 'type' | 'onChange'> {
    data: {
        name: string;
        value: string;
    }[];
    onSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select({
                                   id,
                                   label,
                                   placeholder,
                                   value,
                                   onSelect,
                                   groupClassName = "",
                                   labelClassName = "",
                                   inputClassName = "",
                                   data
                               }: SelectProps) {
    if (!label){
        label = id.charAt(0).toUpperCase() + id.slice(1)
    }

    return (
        <div className={"flex flex-col mt-4 " + groupClassName}>
            <label htmlFor={id} className={"text-sm font-pt mb-2 " + labelClassName}>{label}</label>
            <select id={id} placeholder={placeholder} value={value} onSelect={onSelect}
                   className={"border border-secondary/20 rounded-sm p-2 bg-primary/10 " + inputClassName}>
                {data.map((item) => (
                    <option key={item.value} value={item.value}>{item.name}</option>
                ))}
            </select>
        </div>
    )
}