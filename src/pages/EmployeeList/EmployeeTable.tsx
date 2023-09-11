import {useContext} from "react";
import {departments, states} from "../../constants";
import AppContext, {AppContextInterface} from "../../context";
import Pagination from "../../components/Pagination";
import {SortArrow} from "./SortArrow.tsx";

export function EmployeeTable() {
    const {employees} = useContext(AppContext) as AppContextInterface;

    if (!employees.get().length) {
        return (
            <h2>No data</h2>
        )
    }

    return (
        <div className={"w-fit mx-auto overflow-auto"}>
            <div className="shadow-sm mt-10 w-[80vw] max-w-[1200px] overflow-auto mx-auto">
                <table className="w-full min-w-[1000px] bg-[#FAFEEB]">
                    <thead className="bg-primary text-white">
                        <tr>
                            <th className="border border-secondary rounded-tl-sm py-5 px-5"><span className={"flex justify-center items-center"}>Firstname {<SortArrow column={'firstname'}/>}</span></th>
                            <th className="border border-secondary py-5 px-5"><span className={"flex justify-center items-center"}>Lastname {<SortArrow column={'lastname'}/>}</span></th>
                            <th className="border border-secondary py-5 px-5"><span className={"flex justify-center items-center"}>Start date {<SortArrow column={'startDate'}/>}</span></th>
                            <th className="border border-secondary py-5 px-5"><span className={"flex justify-center items-center"}>Department {<SortArrow column={"department"}/>}</span></th>
                            <th className="border border-secondary py-5 px-5"><span className={"flex justify-center items-center"}>Date of birth {<SortArrow column={"birth"}/>}</span></th>
                            <th className="border border-secondary py-5 px-5"><span className={"flex justify-center items-center"}>Street {<SortArrow column={"address"}/>}</span></th>
                            <th className="border border-secondary py-5 px-5"><span className={"flex justify-center items-center"}>City {<SortArrow column={"city"}/>}</span></th>
                            <th className="border border-secondary py-5 px-5"><span className={"flex justify-center items-center"}>State {<SortArrow column={"state"}/>}</span></th>
                            <th className="border border-secondary py-5 px-5"><span className={"flex justify-center items-center"}>Zip {<SortArrow column={"zip"}/>}</span></th>
                        </tr>
                    </thead>
                    <tbody>
                    {employees.get().map((employee) => (
                        <tr key={employee.uid}>
                            <td className="border border-secondary py-5 px-5">{employee.firstname}</td>
                            <td className="border border-secondary py-5 px-5">{employee.lastname}</td>
                            <td className="border border-secondary py-5 px-5">{employee.startDate}</td>
                            <td className="border border-secondary py-5 px-5">{departments.filter(item => item.id === employee.department)[0]?.value}</td>
                            <td className="border border-secondary py-5 px-5">{employee.birth}</td>
                            <td className="border border-secondary py-5 px-5">{employee.address}</td>
                            <td className="border border-secondary py-5 px-5">{employee.city}</td>
                            <td className="border border-secondary py-5 px-5">{states.filter(item => item.id === employee.state)[0]?.value}</td>
                            <td className="border border-secondary py-5 px-5">{employee.zip}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <Pagination/>
        </div>
    )
}