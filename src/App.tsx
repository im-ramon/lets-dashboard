import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './styles/index.scss'
import { RouterProvider, Route } from "react-router-dom";
import Aside from './components/Aside';
import { router } from './routes/routes';

function App() {

    return (
        <>
            <Aside />
            <RouterProvider router={router} />
        </>
    )
}

export default App
