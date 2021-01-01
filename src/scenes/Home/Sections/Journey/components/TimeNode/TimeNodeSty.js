import styled from 'styled-components';
import { back } from '../../../../../../styles/themes';

const svgInitial = '50px';
const svgHeight = `calc(${svgInitial} + 6 * ((100vw - 320px) / 680));`;

const TimeNodeSty = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    height: 200px;
    width: calc(100% - 1px);
    overflow: hidden;

    .icon {
        position: relative;
        margin: 0 10vw;
    }

    svg {
        height: ${svgHeight}
        width: ${svgHeight}
    }

    .blocker {
        position: absolute;
        height: 100vh;
        width: 100vw;
        top: -200%;
        left: ${svgHeight};
        padding: 20px;
        background: ${back};
    }
`;

export default TimeNodeSty;
