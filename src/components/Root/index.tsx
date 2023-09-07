import {Outlet} from "react-router-dom";
import Modal from "../Modal";
import {useMemo, useState} from "react";
import AppContext from "../../context";

export default function Root() {
    const [showModal, setShowModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [entriesShown, setEntriesShown] = useState(5);
    const defaultContext = useMemo(() => ({
        showModal,
        setShowModal,
        currentPage,
        setCurrentPage,
        entriesShown,
        setEntriesShown,
    }), [showModal, setShowModal, currentPage, setCurrentPage, entriesShown, setEntriesShown]);

    return (
        <AppContext.Provider value={defaultContext}>
            <Modal/>
            <Outlet/>
        </AppContext.Provider>
    )
}