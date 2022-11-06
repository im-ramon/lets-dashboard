import { createBrowserRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Dashboard from "../views/Dashboard";
import Messaging from "../views/Messaging";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/messaging" element={<Messaging />} />
        </Routes>
    );
}