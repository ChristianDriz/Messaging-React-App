import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider, Navigate } from 'react-router-dom';
import Signin from './pages/sign-in';
import Signup from './pages/sign-up';
import Messaging from './pages/messaging';
import './index.css';

const router = createHashRouter([
    {
        path: "/",
        element: <Navigate to="/sign-in"/>,
    },  
    {
        path: "/sign-in",
        element: <Signin/>,
    },
    {
        path: "/sign-up",
        element: <Signup/>
    },
    {
        path: "/messaging",
        element: <Messaging/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);
