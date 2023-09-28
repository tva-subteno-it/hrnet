import {useContext} from "react";
import AppContext, {AppContextInterface} from "../../context";

export default function Modal() {
    const {showModal, setShowModal} = useContext(AppContext) as AppContextInterface;

    return (
        <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 ${showModal ? 'block' : 'hidden'}`}>
            <div className={"flex flex-col w-[40vw] h-[50vh] bg-white rounded-sm mx-auto my-20 p-4"}>
                <h1 className={"text-4xl font-playfair text-center py-10"}>Employee created</h1>
                <p className={"text-xl font-pt text-center"}>The employee has been created successfully</p>
                <button
                    onClick={() => setShowModal(false)}
                    className={"w-40 bg-secondary text-white mt-auto mb-3 mx-auto px-12 py-2 text-xl font-playfair block text-center rounded-sm"}>OK
                </button>
            </div>
        </div>
    )
}