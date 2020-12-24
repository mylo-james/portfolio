import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

function ToggleThemeButton() {
    const { mode, setMode } = useContext(ThemeContext);
    const toggleTheme = () => {
        mode === 'light' ? setMode('dark') : setMode('light');
    };
    return (
        <button onClick={toggleTheme}>
            {mode === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
    );
}

export default ToggleThemeButton;
