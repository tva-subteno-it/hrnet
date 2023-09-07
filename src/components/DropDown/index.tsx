import React, {useEffect, useState} from "react";
import arrow from "../../assets/uil_arrow.svg";
import {createPortal} from "react-dom";

interface DropDownProps {
    items: {
        id: string;
        value: string;
    }[];
    id: string;
    multiSelect?: boolean;
    displayArrow?: boolean;
    onSelectionChange?: (selected: string[]) => void;
    boxClass?: string;
    boxStyle?: React.CSSProperties;
    headerClass?: string;
    headerStyle?: React.CSSProperties;
    listClass?: string;
    listStyle?: React.CSSProperties;
    itemClass?: string;
    itemStyle?: React.CSSProperties;
    displayLabel?: boolean;
    label?: string;
    dropdownClass?: string;
    dropdownStyle?: React.CSSProperties;
    placeholder?: string;
    displayReset?: boolean;
    position?: "top" | "bottom";
}

export default function DropDown({
                                     items,
                                     id,
                                     multiSelect,
                                     displayArrow = true,
                                     onSelectionChange,
                                     boxClass,
                                     headerClass,
                                     listClass,
                                     itemClass,
                                     boxStyle,
                                     headerStyle,
                                     listStyle,
                                     itemStyle,
                                     displayLabel = true,
                                     label,
                                     dropdownClass,
                                     dropdownStyle,
                                     placeholder,
                                     displayReset = true,
                                     position = "bottom"
                                 }: DropDownProps) {
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState<string[]>([]);
    const [displayTitle, setDisplayTitle] = useState(placeholder);

    if (displayLabel && !label) {
        throw new Error("Label is required when display_label is true")
    }


    const toggle = (item: string) => {
        if (selection.includes(item)) {
            setSelection(selection.filter(current => current !== item));
        } else if (multiSelect) {
            setSelection([...selection, item]);
        } else {
            setSelection([item]);
            setOpen(false)
        }
    }

    useEffect(() => {
        onSelectionChange?.(selection);
    }, [selection, onSelectionChange]);

    useEffect(() => {
        if (selection.length === 0) {
            setDisplayTitle(placeholder);
        } else if (selection.length === 1) {
            setDisplayTitle(items.find(item => item.id === selection[0])!.value);
        } else {
            setDisplayTitle(`${selection.length} selected`);
        }
    }, [selection, placeholder, items]);

    return (
        <>
            {createPortal(
                <div className={`dropdown_backdrop inset-0 ${open ? "fixed" : "hidden"}`}
                     onClick={() => setOpen(false)}/>, document.body)
            }
        <div className={`dropdown_container ${dropdownClass}`} style={dropdownStyle && {...dropdownStyle}}>
            <input id={id} name={id} type={"hidden"} value={selection.join(",")}/>
            {displayLabel && (
                <p className={"text-sm font-pt mb-2"}>{label}</p>
            )}
            <div
                className={`dropdown py-2 px-4 relative rounded-sm ${boxClass} hover:transition-colors hover:filter hover:bg-opacity-20`}
                style={boxStyle && {...boxStyle}}
            >
                <div
                    tabIndex={0}
                    className={`dropdown__header ${headerClass} flex justify-between ${selection.length > 0 ? 'opacity-1' : 'opacity-50'}`}
                    style={headerStyle && {...headerStyle}}
                    role="button"
                    onClick={() => setOpen(!open)}
                >
                    <p className="dropdown__header__title">{displayTitle}</p>
                    <span className="dropdown__header__icon">
                    <img src={arrow} alt="arrow" className={`${displayArrow ? "block" : "hidden"}`}/>
                </span>
                </div>
                {open && (
                    <ul className={`dropdown__list max-h-96 overflow-auto border border-secondary/10 mt-2 z-10 absolute left-0 ${listClass} ${position === "top" ? "bottom-full" : ""}`}
                        style={listStyle && {...listStyle}}>
                        {displayReset && (
                            <li className={`dropdown__list__item p-2 border-t-2 border-secondary/10 ${itemClass} hover:transition-colors hover:bg-opacity-10`}
                                key={"reset"} style={itemStyle && {...itemStyle}}>
                                <button type="button" onClick={() => {
                                    setSelection([]);
                                    setOpen(false)
                                }}
                                        className={"w-full h-full text-left"}>
                                    <span>-- Reset --</span>
                                </button>
                            </li>
                        )}
                        {items.map(item => (
                            <li className={`dropdown__list__item p-2 border-t-2 border-secondary/10 ${itemClass} hover:transition-colors hover:bg-black/10`}
                                key={item.id} style={itemStyle && {...itemStyle}}>
                                <button type="button" onClick={() => toggle(item.id)}
                                        className={"w-full h-full text-left"}>
                                    {multiSelect && (
                                        <input type="checkbox" className={"mr-3"}
                                               checked={selection.includes(item.id)}/>
                                    )}
                                    <span>{item.value}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
        </>
    )
}