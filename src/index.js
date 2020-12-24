import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './GlobalStyle';
import App from './App';

ReactDOM.render(
    <StrictMode>
        <GlobalStyle>
            <App />
        </GlobalStyle>
    </StrictMode>,
    document.getElementById('root')
);
