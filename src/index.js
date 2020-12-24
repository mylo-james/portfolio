import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/GlobalStyle';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <StrictMode>
        <BrowserRouter>
            <GlobalStyle>
                <App />
            </GlobalStyle>
        </BrowserRouter>
    </StrictMode>,
    document.getElementById('root')
);
