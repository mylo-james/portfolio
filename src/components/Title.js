import styled from 'styled-components';
import { accent } from '../styles/themes';

const TitleSty = styled.div`
    height: 50px;
    font-size: 1.5em;
    padding: 20px;
    color: ${accent};
`;

function Title({ title, id }) {
    return (
        <div>
            <div id={id} style={{ position: 'absolute', top: '-51px' }} />
            <TitleSty>{title}</TitleSty>
        </div>
    );
}

export default Title;
