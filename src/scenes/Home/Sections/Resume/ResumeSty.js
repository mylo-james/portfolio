import styled from 'styled-components';
import { front } from '../../../../styles/themes';

const ResumeSty = styled.div`
    border: 1px solid ${front};
    padding: 20px;

    .header {
        display: flex;
        justify-content: space-between;
    }
    #resume {
        position: relative;
        height: 1070px;
        padding: 20px;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
    }

    iframe {
        width: 748px;
        height: 1020px;
        padding: 0;
        margin: 0;
    }

    @media screen and (max-width: 760px) {
        #resume {
            display: none;
        }
    }
`;

export default ResumeSty;
