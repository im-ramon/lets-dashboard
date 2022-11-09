import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import './styles/index.scss'
import { RouterProvider, Route, BrowserRouter } from "react-router-dom";
import Aside from './components/Aside';
import Router from './routes/routes';
import { AppContext } from './contexts/appContext';
import { AppProvider } from './contexts/appContext';

function App() {
    const { } = useContext(AppContext)

    return (
        <AppProvider>
            <BrowserRouter>
                <Aside />
                <main>
                    <Router />
                </main>
            </BrowserRouter>
        </AppProvider>
    )
}

export default App
