import {Header} from "./Header.tsx";
import {SearchBar} from "./SearchBar.tsx";
import {EmployeeTable} from "./EmployeeTable.tsx";

export default function EmployeeList() {
    return (
        <>
            <Header/>
            <SearchBar/>
            <EmployeeTable/>
        </>
    )
}