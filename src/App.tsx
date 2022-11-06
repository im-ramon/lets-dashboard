import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './styles/index.scss'
import { RouterProvider, Route, BrowserRouter } from "react-router-dom";
import Aside from './components/Aside';
import Router from './routes/routes';

function App() {
    return (
        <BrowserRouter>
            <Aside />
            <main>
                <Router />
            </main>
        </BrowserRouter>
    )
}

export default App
