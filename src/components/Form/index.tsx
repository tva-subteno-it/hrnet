import Input from "../Inputs/Input.tsx";
import FormGroup from "../FormGroup";
import {departments, states} from "../../constants";
import Select from "../Inputs/Select.tsx";
import Button from "../Button";
import React, {useContext} from "react";
import AppContext, {AppContextInterface} from "../../context";

export default function Form() {
    const {setShowModal} = useContext(AppContext) as AppContextInterface;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Submitted")
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        // add data to local storage
        const oldData = JSON.parse(window.localStorage.getItem("employee") ?? "[]");
        window.localStorage.setItem("employee", JSON.stringify([...oldData, {...data, uid: Math.random().toString(36).substring(2, 9)}]));
        setShowModal(true);
    }

    return (
        <form action="" className={"bg-white w-[45vw] mx-auto pb-10"}
        style={{boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}} onSubmit={handleSubmit}>
            <section className={"bg-primary h-32 flex items-center justify-center shadow-md"}>
                <h2 className={"text-xl font-playfair text-center text-white"}>Create Employee</h2>
            </section>
            <section className={"mt-20 mb-10 px-[5vw] w-full"}>
                <Button type={"link"} to={"employee-list"} label={"View Current Employee"} className={"hover:bg-black/5 transition"}/>
            </section>
            <section className={"px-[5vw]"}>
                <Input id={"firstname"} placeholder={"John"}/>
                <Input id={"lastname"} placeholder={"Dupont"}/>
                <Input id={"birth"} label={"Date of birth"} type={"date"} placeholder={"01/01/2001"}/>
                <Input id={"startDate"} label={"Start date"} type={"date"} placeholder={"01/01/2001"}/>
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