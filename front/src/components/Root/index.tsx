import {Outlet} from "react-router-dom";
import Modal from "../Modal";
import {useMemo, useState} from "react";
import AppContext from "../../context";
import {EmployeeInterface} from "../../@types";

export default function Root() {
    const [showModal, setShowModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [entriesShown, setEntriesShown] = useState(5);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortedColumn, setSortedColumn] = useState({});

    // memo to avoid re-rendering the method
    const defaultContext = useMemo(() => {

        const getEmployees = async () => {
            const employees = await fetch('http://localhost:3000/users',
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    }
                }).then((res) => res.json()) as EmployeeInterface[]
            let newEmployees = employees.filter((employee: EmployeeInterface) => {
                return Object.values(employee).some((value) => {
                    return value.toString().toLowerCase().includes(searchQuery?.toLowerCase() ?? "");
                })
            });
            for (const [key, value] of Object.entries<'asc' | 'desc' | '' | object>(sortedColumn)) {
                if (value === 'asc') {
                    newEmployees = newEmployees.sort((a, b) => {
                        if (a[key].toLowerCase() < b[key].toLowerCase()) {
                            return -1;
                        }
                        if (a[key].toLowerCase() > b[key].toLowerCase()) {
                            return 1;
                        }
                        return 0;
                    })
                } else if (value === 'desc') {
                    newEmployees = newEmployees.sort((a, b) => {
                        if (a[key].toLowerCase() > b[key].toLowerCase()) {
                            return -1;
                        }
                        if (a[key].toLowerCase() < b[key].toLowerCase()) {
                            return 1;
                        }
                        return 0;
                    })
                }
            }
            return newEmployees
        }

        return {
            showModal,
            setShowModal,
            currentPage,
            setCurrentPage,
            entriesShown: {
                get: () => entriesShown,
                set: setEntriesShown,
            },
            searchQuery: {
                get: () => searchQuery,
                set: (query: string) => {
                    setCurrentPage(1);
                    setSearchQuery(query)
                },
            },
            employees: {
                get: () => getEmployees().then((res) => res.slice((currentPage - 1) * entriesShown, currentPage * entriesShown)),
                set: ()=>{},
            },
            sortedColumn: {
                get: sortedColumn,
                set: setSortedColumn,
            },
            totalLength: {
                get: getEmployees().then((res) => res.length)
            }
        }
    }, [showModal, currentPage, sortedColumn, searchQuery, entriesShown]);

    return (
        <AppContext.Provider value={defaultContext}>
            <Modal/>
            <Outlet/>
        </AppContext.Provider>
    )
}
