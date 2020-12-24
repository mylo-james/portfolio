import { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
   ${reset}
`;

const GlobalStyleWrapper = ({ children }) => {
    const [mode, setMode] = useState('light');

    return (
        <ThemeProvider theme={{ mode, setMode }}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
};

export default GlobalStyleWrapper;
