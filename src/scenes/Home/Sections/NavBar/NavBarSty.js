import styled from 'styled-components';
import { accent, front } from '../../../../styles/themes';

const NavBarSty = styled.nav`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 50px;
    background-color: ${accent};
    path {
        color: ${front};
    }
    svg {
        height: 40px;
        width: 40px;
        margin: 10px;
    }
    .sidebar {
        position: absolute;
        display: flex;
        flex-flow: column;
        justify-content: space-evenly;
        width: 100vw;
        height: 50px;
        background: black;
        bottom: -50px;
    }
`;

export default NavBarSty;
