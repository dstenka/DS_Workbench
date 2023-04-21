import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastProvider } from '../contexts/ToastContext';
import { ApiProvider } from '../contexts/ApiContext';
import 'react-toastify/dist/ReactToastify.min.css';
import AppContextProviders from '../contexts/AppContextProvider';

import PrivateRoutes from './PrivateRoutes';
import Signup from '../pages/auth/Signup';
import Login from '../pages/auth/Login';
import Dashboard from '../pages/dashboard/Dashboard';
import Settings from '../pages/settings/Settings';
import ForgotPassword from '../pages/auth/ForgotPassword';

import Sidebar from './sidebar/Sidebar';
import TopNavigation from './topNavigation/TopNavigation';

function App() {
    const providers = [ToastProvider, AuthProvider, ApiProvider];

    return (
        <>
            <Router>
                <AppContextProviders components={providers}>
                    <Routes>
                        <Route element={<PrivateRoutes />}>
                            <Route element={<Dashboard />} path="/" />
                            <Route element={<Settings />} path="settings" />
                        </Route>
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/forgot-password" element={<ForgotPassword />} />
                    </Routes>
                </AppContextProviders>
            </Router>
        </>
    );
}

export default App;
