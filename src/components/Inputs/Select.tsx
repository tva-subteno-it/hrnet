import DropDown from "../DropDown";

interface SelectProps {
    label: string;
    placeholder?: string;
    data: {
        id: string;
        value: string;
    }[];
}

export default function Select({
                                   label,
                                   data,
                                   placeholder
                               }: SelectProps) {

    return (
        <DropDown label={label} items={data} multiSelect={false} displayArrow={true}
                  dropdownClass={"mt-4 w-full"}
                  boxClass={"bg-[#eef0e5]"}
                  boxStyle={{border: "1px solid rgba(40, 25, 14, 0.20)"}}
                  headerClass={"text-[#000000]"}
                  listClass={"bg-[#eef0e5] w-full"}
                  placeholder={placeholder}
        />
    )
}