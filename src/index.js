import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Signin from './pages/sign-in';
import Signup from './pages/sign-up';
import Messaging from './pages/messaging';
import './index.css';

const router = createBrowserRouter([
    {
        path: "/Messaging-React-App",
        element: <Navigate to="/Messaging-React-App/sign-in"/>,
    },  
    {
        path: "/Messaging-React-App/sign-in",
        element: <Signin/>,
    },
    {
        path: "/Messaging-React-App/sign-up",
        element: <Signup/>
    },
    {
        path: "/Messaging-React-App/messaging",
        element: <Messaging/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);