import arrow_up from "../../assets/uil_arrow_up.svg";
import arrow_down from "../../assets/uil_arrow_down.svg";
import {useContext, useState} from "react";
import AppContext, {AppContextInterface} from "../../context";

interface SortArrowProps {
    column: string;
}

export function SortArrow({column}: SortArrowProps) {
    const [ascending, setAscending] = useState<boolean>(false);
    const [descending, setDescending] = useState<boolean>(false);
    const [click, setClick] = useState(0);
    const {sortedColumn} = useContext(AppContext) as AppContextInterface

    const handleClick = () => {
        switch (click) {
            case 0:
                sortedColumn.set((prev) => ({...prev, [column]: ""}));
                setAscending(false);
                setDescending(false);
                setClick(1);
                break;
            case 1:
                setAscending(true);
                setDescending(false);
                sortedColumn.set((prev) => ({...prev, [column]: "asc"}));
                setClick(2);
                break;
            case 2:
                setAscending(false);
                setDescending(true);
                sortedColumn.set((prev) => ({...prev, [column]: "desc"}));
                setClick(0);
                break;
        }
    }


    return <div className={"flex flex-col justify-center items-center"} onClick={handleClick}>
        <img src={arrow_up} alt="arrow" className={`h-[20px] w-[30px] min-w-[30px] min-h-[20px] mx-auto ${descending ? "opacity-50" : "opacity-1"}`}/>
        <img src={arrow_down} alt="arrow" className={`h-[20px] w-[30px] min-w-[30px]  min-h-[20px] mx-auto ${ascending ? "opacity-50" : "opacity-1"}`}/>
    </div>;
}