import {createContext} from "react";

export interface AppContextInterface {
    showModal: boolean;
    setShowModal: (arg0: boolean) => void;
    entriesShown: number,
    setEntriesShown: (arg0: number | ((previous: number) => number)) => void,
    currentPage: number,
    setCurrentPage: (arg0: number | ((previous: number) => number)) => void,
}

const AppContext = createContext<AppContextInterface | null>(null);

export default AppContext;