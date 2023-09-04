import {NavLink} from "react-router-dom";
import home from "../../assets/ic_outline-home.svg";

export function SearchBar(){
    return (
        <div className="bg-primary text-white flex justify-between items-center py-10 px-5 shadow-2xl">
            <div className="flex items-center text-lg">
                <p>Show</p>
                <input type="number" className="bg-white rounded-sm border-white mx-2 w-20 text-center"/>
                <p>entries</p>
            </div>
                <NavLink to="/" className="text-white flex items-center text-lg border border-secondary px-3 py-2 rounded-sm">
                <img src={home} alt="home" className="w-5 h-5 mr-3"/>
                    Home
                </NavLink>
            <div className={"flex items-center text-lg"}>
                <p>Search:</p>
                <input type="text" className="bg-white rounded-sm border-white mx-2 w-60 text-center"/>
            </div>
        </div>
    )
}