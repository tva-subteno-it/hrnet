import {Outlet} from "react-router-dom";
import Modal from "../Modal";
import {useState} from "react";
import AppContext from "../../context";

export default function Root() {
    const [showModal, setShowModal] = useState(false);

    return (
        <AppContext.Provider value={{showModal, setShowModal}}>
            <Modal/>
            <Outlet/>
        </AppContext.Provider>
    )
}