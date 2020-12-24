import { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { back, front } from './themes';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
   ${reset}
   html {
       scroll-behavior: smooth;
   }
   body a {
       color: ${front};
       text-decoration: none;
   }
   body a:visited {
       text-decoration: none;
       color: ${front}
   }
   body {
       background: ${back};
       height: 100vh;
       font-family: 'Rubik', sans-serif;
       color: ${front};
       font-size: calc(16px + 6 * ((100vw - 320px) / 680));

   }
`;

const GlobalStyleWrapper = ({ children }) => {
    const [mode, setMode] = useState('dark');

    return (
        <ThemeProvider theme={{ mode, setMode }}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
};

export default GlobalStyleWrapper;
