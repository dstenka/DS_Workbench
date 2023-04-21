import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Dashboard = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    async function handleLogout(): Promise<void> {
        try {
            await logout();
            navigate('/login');
        } catch (err) {
            showError(err);
        }
    }

    return (
        <div>
            Dashboard
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;
