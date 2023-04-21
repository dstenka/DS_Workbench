import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

import Sidebar from './sidebar/Sidebar';
import TopNavigation from './topNavigation/TopNavigation';

export default function PrivateRoutes() {
    const { currentUser } = useAuth();

    return currentUser ? (
        <>
            <Sidebar />
            <div className="content-container">
                <TopNavigation />
                <div className="content">
                    <Outlet />
                </div>
            </div>
        </>
    ) : (
        <Navigate to="/login" />
    );
}
