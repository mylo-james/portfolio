import styled from 'styled-components';
import { primary, back, front } from '../../../../styles/themes';

const NavBarSty = styled.nav`
    position: sticky;
    z-index: 2;
    top: 0vh;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 50px;
    background-color: ${primary};

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
        width: 100%;
        height: 200px;
        background: ${back};
        bottom: -200px;
    }
`;

export default NavBarSty;
