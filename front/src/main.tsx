import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from "./pages/Home.tsx";
import DropDown from "@redshark61/dropdown";
import Root from "./components/Root";
import EmployeeList from "./pages/EmployeeList/EmployeeList.tsx";

const router = createBrowserRouter([{
    path: '/',
    element: <Root/>,
    errorElement: <div>404</div>,
    children: [
        {
            path: '/',
            element: <Home/>,
            index: true,
        },
        {
            path: '/employee-list',
            element: <EmployeeList/>,
        },
        {
            path: '/dropdown',
            element: <DropDown
                id={"test"}
                label={"Test Label"}
                placeholder={"Test Button"}
                items={[
                    {id: "1", value: "Item 1"},
                    {id: "2", value: "Item 2"},
                    {id: "3", value: "Item 3"},
                    {id: "4", value: "Item 4"},
                ]}
                multiSelect={true}
                boxClass={"bg-[#eef0e5] w-52"}
                boxStyle={{border: "1px solid rgb(40, 25, 14, .2)"}}
                headerClass={"text-black text-opacity-50"}
                listClass={"bg-[#eef0e5] w-52"}
            />,
        }
    ]
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
            <RouterProvider router={router}/>
    </React.StrictMode>,
)
