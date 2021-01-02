import styled from 'styled-components';
import { back, primary, secondary } from '../../../../../../styles/themes';

const NodeInfoSty = styled.div`
    position: absolute;
    background: ${primary};
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    height: 160px;
    width: 60vw;
    top: calc(-80px + ((50px + 6 * ((100vw - 320px) / 680)) / 2));
    left: calc(((50px + 6 * ((100vw - 320px) / 680))) + 10vw);
    border: ${secondary} solid 4px;
    border-radius: 4px;
    padding: 20px;
    .content {
        font-size: 0.7em;
    }

    .line {
        position: absolute;
        top: 74px;
        left: -10vw;
        width: 10vw;
        border: ${secondary} solid 2px;
        border-radius: 4px;
    }

    .title {
        color: ${back};
`;

export default NodeInfoSty;
