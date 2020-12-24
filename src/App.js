import styled from 'styled-components';
import * as theme from './themes.js';

const AppSty = styled.div`
    color: ${theme.primary};
`;
function App() {
    return (
        <>
            <AppSty>Hello from App</AppSty>
        </>
    );
}

export default App;
