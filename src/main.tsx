import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from "./pages/Home.tsx";

const router = createBrowserRouter([{
    path: '/',
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
        }
    ]
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
