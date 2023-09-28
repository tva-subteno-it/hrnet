import AppContext, {AppContextInterface} from "../../context";
import {useContext} from "react";

export default function Pagination() {
    const {entriesShown, totalLength: {get: totalLength}, currentPage, setCurrentPage} = useContext(AppContext) as AppContextInterface;
    const totalPage = Math.ceil(totalLength() / entriesShown.get());
    const start = (currentPage - 1) * entriesShown.get();
    const end = start + entriesShown.get() > totalLength() ? totalLength() : start + entriesShown.get();

    return (
        <div className="flex justify-between items-end py-5">
            <div>
                <p>Showing {start+1} to {end} out of {totalLength()} entries</p>
            </div>
            <div className="flex items-center gap-3">
                <button className="bg-white text-secondary px-5 py-2 rounded-sm enabled:hover:brightness-75 transition disabled:opacity-50"
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                >
                    Previous
                </button>
                {Array.from({length: totalPage}, (_, index) => index + 1).map((item) => (
                    <button key={item} className={`px-5 py-2 rounded-sm hover:brightness-75 transition ${item === currentPage ? "text-white bg-secondary" : "text-secondary bg-white"}`}
                            onClick={() => setCurrentPage(item)}
                    >
                        {item}
                    </button>
                ))}
                <button className="bg-white text-secondary px-5 py-2 rounded-sm enabled:hover:brightness-75 transition disabled:opacity-50"
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === Math.ceil(totalLength() / entriesShown.get())}
                >
                    Next
                </button>
            </div>
        </div>

    )
}