import './App.css';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/auth/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Settings from './pages/settings/Settings';

import Sidebar from './components/sidebar/Sidebar';
import TopNavigation from './components/topNavigation/TopNavigation';

function App() {
    return (
        <>
            <Sidebar />
            <div className="content-container">
                <TopNavigation />
                <div className="content">
                    <Routes>
                        <Route index element={<Dashboard />} />
                        <Route path="settings" element={<Settings />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default App;
