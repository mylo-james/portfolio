import styled from 'styled-components';
import { secondary } from '../../../../../../styles/themes';

const LineSty = styled.div`
    height: 101vh;
    width: 1px;
    z-index: 0;

    .dot {
        height: 2px;
        width: 2px;
        transform: translateY(101vh);
        background: ${secondary};
        border-radius: 50%;
        animation: fall ${(props) => props.duration}s linear
            ${(props) => props.delay}s infinite;
    }
`;

export default LineSty;
