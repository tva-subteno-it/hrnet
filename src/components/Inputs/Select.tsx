import DropDown from "../DropDown";

interface SelectProps {
    label: string;
    placeholder?: string;
    position?: "top" | "bottom";
    id: string;
    data: {
        id: string;
        value: string;
    }[];
}

export default function Select({
                                   label,
                                   data,
                                   id,
                                   placeholder,
                                   position = "bottom"
                               }: SelectProps) {

    return (
        <DropDown id={id} label={label} items={data} multiSelect={false} displayArrow={true}
                  dropdownClass={"mt-4 w-full"}
                  boxClass={"bg-primary bg-opacity-10"}
                  boxStyle={{border: "1px solid rgba(40, 25, 14, 0.20)"}}
                  headerClass={"text-black"}
                  listClass={"bg-[#eef0e5] w-full"}
                  placeholder={placeholder}
                  position={position}
        />
    )
}