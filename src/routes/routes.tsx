import { createBrowserRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Dashboard from "../views/Dashboard";
import Messaging from "../views/Messaging";
import Aside from '../components/Aside';

export default function Router() {
    return (
        <BrowserRouter>
            <Aside />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/messaging" element={<Messaging />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}