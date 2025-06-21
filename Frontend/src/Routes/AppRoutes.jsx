import { Routes, Route } from 'react-router-dom';
import HomePage from "../Pages/HomePage.jsx";


export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
        </Routes>
    );
}
