import styled from 'styled-components';

const NodeInfoSty = styled.div`
    position: absolute;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    height: 160px;
    width: 60vw;
    top: calc(-80px + ((30px + 6 * ((100vw - 320px) / 680)) / 2));
    left: calc(((30px + 6 * ((100vw - 320px) / 680))) + 10vw);
    border: white solid 4px;
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
        border: white solid 2px;
        border-radius: 4px;
    }
`;

export default NodeInfoSty;
