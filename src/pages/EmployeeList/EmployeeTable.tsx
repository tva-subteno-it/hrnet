import {useEffect, useState} from "react";
import {EmployeeInterface} from "../../@types";
import {states, departments} from "../../constants";

export function EmployeeTable(){
    const [employees, setEmployees] = useState<EmployeeInterface[]>([]);
    const [isDataSet, setIsDataSet] = useState<boolean>(false);

    useEffect(() => {
        const employeeList = JSON.parse(localStorage.getItem("employee") || "[]");
        setEmployees(employeeList);
        setIsDataSet(true);
    }, []);

    if (!employees.length && isDataSet) {
        return (
            <h2>No data</h2>
        )
    }

    return (
        <div className="bg-white shadow-sm mt-10 w-[70vw] mx-auto">
            <table className="w-full bg-[#FAFEEB]">
                <thead className="bg-primary text-white">
                <tr>
                    <th className="border border-secondary rounded-tl-sm py-5 px-5">Firstname</th>
                    <th className="border border-secondary py-5 px-5">Lastname</th>
                    <th className="border border-secondary py-5 px-5">Start date</th>
                    <th className="border border-secondary py-5 px-5">Department</th>
                    <th className="border border-secondary py-5 px-5">Date of birth</th>
                    <th className="border border-secondary py-5 px-5">Street</th>
                    <th className="border border-secondary py-5 px-5">City</th>
                    <th className="border border-secondary py-5 px-5">State</th>
                    <th className="border border-secondary py-5 px-5">Zip</th>
                </tr>
                </thead>
                <tbody>
                {employees.map((employee) => (
                    <tr key={`${employee.firstname}_${employee.lastname}`}>
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
    )
}