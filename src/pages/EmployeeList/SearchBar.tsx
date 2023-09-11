import {NavLink} from "react-router-dom";
import home from "../../assets/ic_outline-home.svg";
import {useContext} from "react";
import AppContext, {AppContextInterface} from "../../context";

export function SearchBar() {
    const {entriesShown, searchQuery} = useContext(AppContext) as AppContextInterface;

    return (
        <div className="bg-primary text-white flex justify-between items-center py-10 px-5 shadow-2xl">
            <NavLink to="/"
                     className="text-secondary bg-white flex items-center text-lg border border-secondary px-3 py-2 rounded-sm hover:brightness-75 transition">
                <img src={home} alt="home" className="w-5 h-5 mr-3"/>
                Home
            </NavLink>
            <div className={"flex w-[40%] justify-between"}>
                <div className="flex items-center text-lg">
                    <p>Show</p>
                    <input type="number"
                           className="bg-white rounded-sm border-white mx-2 w-20 text-center text-secondary hover:brightness-75 transition"
                           value={entriesShown.get()}
                           onChange={(e) => entriesShown.set(parseInt(e.target.value))}
                    />
                    <p>entries</p>
                </div>
                <div className={"flex items-center text-lg"}>
                    <p>Search:</p>
                    <input type="text" value={searchQuery.get()}
                           className="bg-white rounded-sm border-white mx-2 w-60 text-center text-secondary hover:brightness-75 transition"
                           onChange={(e) => searchQuery.set(e.target.value)}/>
                </div>
            </div>
        </div>
    )
}