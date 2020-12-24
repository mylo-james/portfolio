import { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { back, front, accent, primary, gray } from './themes';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
   ${reset}
   body {
       background: ${back}
   }

   body *  {
       color: ${front};
       border: solid 1px ${primary};
       background: ${accent};
       box-shadow: 2px 3px ${gray}
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
