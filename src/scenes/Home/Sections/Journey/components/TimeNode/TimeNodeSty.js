import styled from 'styled-components';
import { back } from '../../../../../../styles/themes';

const TimeNodeSty = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    height: 200px;
    overflow-x: hidden;

    .icon {
        position: relative;
        margin: 0 10vw;
    }

    svg {
        height: calc(30px + 6 * ((100vw - 320px) / 680));
        width: calc(30px + 6 * ((100vw - 320px) / 680));
    }

    .blocker {
        position: absolute;
        height: 160px;
        width: 70vw;
        top: calc(-80px + ((30px + 6 * ((100vw - 320px) / 680)) / 2));
        left: calc(((30px + 6 * ((100vw - 320px) / 680))));

        padding: 20px;
        background: ${back};
    }
`;

export default TimeNodeSty;
