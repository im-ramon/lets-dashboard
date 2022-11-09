import { useState, useContext, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './styles/index.scss'
import { RouterProvider, Route, BrowserRouter } from "react-router-dom";
import Login from './views/Login';
import Router from './routes/routes';
import { AppContext } from './contexts/appContext';

function App() {
    const { user } = useContext(AppContext)

    useEffect(() => {
        console.log('user:', user)
    }, [])

    return (
        user.hasOwnProperty('token') ? <Router /> : <Login />
    )
}

export default App
