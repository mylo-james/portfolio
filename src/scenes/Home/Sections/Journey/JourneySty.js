import styled from 'styled-components';

const JourneySty = styled.div`
    position: relative;
    height: 1040px;
    border: 1px solid white;

    .anchor {
        position: absolute;
        top: -51px;
    }

    .waypoint {
        position: absolute;
        top: -51px;
    }

    .title {
        height: 30px;
        border: white 1px solid;
    }

    .timeline {
        height: calc(100% - 30px);
    }
`;

export default JourneySty;
