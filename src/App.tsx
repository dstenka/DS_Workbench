import './App.css';
import ContentContainer from './components/contentContainer/ContentContainer';
import Sidebar from './components/sidebar/Sidebar';

function App() {
    return (
        <div className="flex">
            <Sidebar />
            <ContentContainer />
        </div>
    );
}

export default App;
