import { FaHashtag, FaMoon, FaSun } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';
import useColorMode from './../../hooks/useColorMode';
import { useAuth } from '../../contexts/AuthContext';

const TopNavigation = () => {
    return (
        <div className="top-navigation">
            <HashtagIcon />
            <Title />
            <ThemeIcon />
            <LogoutIcon />
        </div>
    );
};

const ThemeIcon = () => {
    const [colorMode, setColorMode] = useColorMode();
    const handleMode = () => setColorMode(colorMode === 'light' ? 'dark' : 'light');

    return (
        <span onClick={handleMode}>
            {colorMode ? (
                <FaSun size="24" className="top-navigation-icon" />
            ) : (
                <FaMoon size="24" className="top-navigation-icon" />
            )}
        </span>
    );
};

const LogoutIcon = () => {
    const { logout } = useAuth();

    return <BiLogOut size="24" className="top-navigation-icon" onClick={() => logout()} />;
};

const Title = () => <h5 className="title-text">tailwind-css</h5>;
const HashtagIcon = () => <FaHashtag size="20" className="title-hashtag" />;

export default TopNavigation;
