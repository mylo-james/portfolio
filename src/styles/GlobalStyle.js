import { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { back, front } from './themes';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
   ${reset}
   body {
       background: ${back};
       height: 100vh;
       font-family: 'Rubik', sans-serif;
       color: ${front}
   }
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
