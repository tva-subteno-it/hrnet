import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from "./pages/Home.tsx";
import DropDown from "./components/DropDown";
import Root from "./components/Root";

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
            element: <div>Employee List</div>,
        },
        {
            path: '/dropdown',
            element: <DropDown
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
                boxStyle={{border: "1px solid rgba(40, 25, 14, 0.20)"}}
                headerClass={"text-[#00000066]"}
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
