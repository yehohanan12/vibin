import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes/AppRoutes.jsx';
import Layout from "./Components/Layout.jsx";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <AppRoutes />
            </Layout>
        </BrowserRouter>
    );
}
export default App;
