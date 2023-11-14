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
        element: <Navigate to="/react-messaging-app/sign-in"/>,
    },  
    {
        path: "/react-messaging-app/sign-in",
        element: <Signin/>,
    },
    {
        path: "/react-messaging-app/sign-up",
        element: <Signup/>
    },
    {
        path: "/react-messaging-app/messaging",
        element: <Messaging/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);
