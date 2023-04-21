import { FaHashtag, FaMoon, FaSun } from 'react-icons/fa';
import useColorMode from './../../hooks/useColorMode';

const TopNavigation = () => {
    return (
        <div className="top-navigation">
            <HashtagIcon />
            <Title />
            <ThemeIcon />
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

const Title = () => <h5 className="title-text">tailwind-css</h5>;
const HashtagIcon = () => <FaHashtag size="20" className="title-hashtag" />;

export default TopNavigation;
