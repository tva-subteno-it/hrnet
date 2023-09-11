import {createContext, Dispatch, SetStateAction} from "react";
import {EmployeeInterface} from "../@types";

export interface AppContextInterface {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
    entriesShown: {
        get: () => number,
        set: Dispatch<SetStateAction<number>>
    },
    currentPage: number,
    setCurrentPage: Dispatch<SetStateAction<number>>
    searchQuery: {
        get: () => string,
        set: (query: string) => void
    },
    employees: {
        get: () => EmployeeInterface[],
    },
    sortedColumn: {
        [key: string]: 'asc' | 'desc' | '' | object,
        set: Dispatch<SetStateAction<{ [key: string]: string }>>,
    }
    totalLength: {
        get: () => number,
        set: Dispatch<SetStateAction<number>>
    },
}

const AppContext = createContext<AppContextInterface | null>(null);

export default AppContext;