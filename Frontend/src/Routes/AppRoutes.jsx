import { Routes, Route } from 'react-router-dom';
import RegisterPage from "../Pages/RegisterPage.jsx";


export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<RegisterPage/>} />
        </Routes>
    );
}
