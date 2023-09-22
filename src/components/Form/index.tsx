import Input from "../Inputs/Input.tsx";
import FormGroup from "../FormGroup";
import {departments, states} from "../../constants";
import Select from "../Inputs/Select.tsx";
import Button from "../Button";
import React, {useContext, useState} from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import AppContext, {AppContextInterface} from "../../context";
import {EmployeeInterface} from "../../@types";

export default function Form() {
    const [startDate, setStartDate] = useState(new Date());
    const [birthDate, setBirthDate] = useState(new Date());
    const {setShowModal, employees} = useContext(AppContext) as AppContextInterface;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // get the data and format the date as well as generate a uid
        const formData = new FormData(e.currentTarget);
        const data = {
            ...Object.fromEntries(formData.entries()),
            startDate: startDate.toLocaleDateString(),
            birth: birthDate.toLocaleDateString(),
        } as EmployeeInterface;
        employees.set((prevState) => [...prevState, {...data, uid: Math.random().toString(36).substring(2, 9)}])
        setShowModal(true);
    }

    return (
        <form action="" className={"bg-white w-[45vw] mx-auto pb-10"}
              style={{boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}} onSubmit={handleSubmit}>
            <section className={"bg-primary h-32 flex items-center justify-center shadow-md"}>
                <h2 className={"text-xl font-playfair text-center text-white"}>Create Employee</h2>
            </section>
            <section className={"mt-20 mb-10 px-[5vw] w-full"}>
                <Button type={"link"} to={"employee-list"} label={"View Current Employee"}
                        className={"hover:bg-black/5 transition"}/>
            </section>
            <section className={"px-[5vw]"}>
                <Input id={"firstname"} placeholder={"John"}/>
                <Input id={"lastname"} placeholder={"Dupont"}/>
                <Input label={"Start Date"} id={"start"}>
                    <DatePicker id={"start"} dateFormat={"dd/MM/yyyy"} todayButton={"Today"} selected={startDate}
                                placeholderText={"Start date"}
                                onChange={(date: Date) => setStartDate(date)}
                                className={"w-full border border-secondary/20 rounded-sm p-2 bg-primary bg-opacity-10 hover:filter hover:bg-opacity-20 transition"}/>
                </Input>
                <Input label={"Birth Date"} id={"birth"}>
                    <DatePicker id={"birth"} dateFormat={"dd/MM/yyyy"} todayButton={"Today"} selected={birthDate}
                                placeholderText={"Birth date"}
                                onChange={(date: Date) => setBirthDate(date)}
                                className={"w-full border border-secondary/20 rounded-sm p-2 bg-primary bg-opacity-10 hover:filter hover:bg-opacity-20 transition"}/>
                </Input>
            </section>
            <FormGroup label={"Address"} className={"mt-14 mx-[5vw]"}>
                <>
                    <Input id={"address"} placeholder={"2 rue de la paix"} groupClassName={"w-full"}/>
                    <Input id={"city"} placeholder={"Paris"} groupClassName={"w-full"}/>
                    <Select id={"state"} label={"States"} data={states} placeholder={"Alabama"} position={"top"}/>
                    <Input id={"zip"} label={"ZIP"} type={"text"} placeholder={"35242"} groupClassName={"w-full"}/>
                </>
            </FormGroup>
            <section className={"mt-14 px-[5vw]"}>
                <Select id={"department"} label={"Department"} data={departments} placeholder={"Sales"}/>
            </section>
            <section className={"mt-20 mb-10 px-[5vw] w-full"}>
                <Button type={"submit"} label={"Save"} className={"hover:filter hover:opacity-90 transition"}/>
            </section>
        </form>
    )
}