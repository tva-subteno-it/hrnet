import {createContext} from "react";

export interface AppContextInterface {
    showModal: boolean;
    setShowModal: (arg0: boolean) => void;
}

const AppContext = createContext<AppContextInterface | null>(null);

export default AppContext;