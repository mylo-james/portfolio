import { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { back, front } from './themes';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
   ${reset}
   html {
       scroll-behavior: smooth;
       width: 100vw;
   }
   .app a {
       color: ${front};
       text-decoration: none;
     
   }
   .app a:visited {
       text-decoration: none;
       color: ${front}
   }
   .app {
       background: ${back};
       width: 100vw;
       height: 100vh;
       box-sizing: border-box;
       font-family: 'Rubik', sans-serif;
       color: ${front};
       font-size: calc(16px + 6 * ((100vw - 320px) / 680));
       overflow-y: scroll;
       -webkit-overflow-scrolling: touch;
       overflow-x: hidden;

   }

   ::-webkit-scrollbar {
    width: 12px;
   }
 
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
  }
 
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
  }

  .app * {
    box-sizing: border-box;
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
