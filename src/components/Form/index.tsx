import Input from "../Inputs/Input.tsx";
import FormGroup from "../FormGroup";
import {departments, states} from "../../constants";
import Select from "../Inputs/Select.tsx";
import Button from "../Button";

export default function Form() {
    return (
        <form action="" className={"bg-white w-[45vw] mx-auto pb-10"}
        style={{boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}>
            <section className={"bg-primary h-32 flex items-center justify-center shadow-md"}>
                <h2 className={"text-xl font-playfair text-center text-white"}>Create Employee</h2>
            </section>
            <section className={"mt-20 mb-10 px-[5vw] w-full"}>
                <Button type={"link"} to={"employee-list"} label={"View Current Employee"} onClick={() => {
            }}/>
            </section>
            <section className={"px-[5vw]"}>
                <Input id={"firstname"} placeholder={"John"} value={""} onChange={() => {}}/>
                <Input id={"lastname"} placeholder={"Dupont"} value={""} onChange={() => {}}/>
                <Input id={"birth"} label={"Date of birth"} type={"date"} placeholder={"01/01/2001"} value={""} onChange={() => {}}/>
                <Input id={"start_date"} label={"Start date"} type={"date"} placeholder={"01/01/2001"} value={""} onChange={() => {}}/>
            </section>
            <FormGroup label={"Address"} className={"mt-14 mx-[5vw]"}>
                <>
                    <Input id={"address"} placeholder={"2 rue de la paix"} value={""} onChange={() => {}} groupClassName={"w-full"}/>
                    <Input id={"city"} placeholder={"Paris"} value={""} onChange={() => {}} groupClassName={"w-full"}/>
                    <Select id={"department"} placeholder={"Sales"} value={""} onSelect={() => {}} groupClassName={"w-full"} data={departments}/>
                    <Input id={"zip"} label={"ZIP"} type={"text"} placeholder={"35242"} value={""} onChange={() => {}} groupClassName={"w-full"}/>
                </>
            </FormGroup>
            <section className={"mt-14 px-[5vw]"}>
                <Select id={"department"} placeholder={"Sales"} value={""} onSelect={() => {}} groupClassName={"w-full"} data={states}/>
            </section>
            <section className={"mt-20 mb-10 px-[5vw] w-full"}>
                <Button type={"submit"} label={"Save"} onClick={() => {
            }}/>
            </section>
        </form>
    )
}