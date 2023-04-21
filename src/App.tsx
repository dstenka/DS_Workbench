import './App.css';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import TopNavigation from './components/topNavigation/TopNavigation';

const Home = () => {
    return <div>Home</div>;
};

const Settings = () => {
    return <div>Settings</div>;
};

function App() {
    return (
        <>
            <Sidebar />
            <div className="content-container">
                <TopNavigation />
                <div className="content">
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="settings" element={<Settings />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default App;
