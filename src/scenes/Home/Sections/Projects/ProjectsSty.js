import styled from 'styled-components';
import { front, primary } from '../../../../styles/themes';

const slideHeight = '70%';

const ProjectsSty = styled.div`
    height: 700px;
    position: relative;
    border: ${front} 1px solid;
    padding: 20px;

    #projects {
        position: absolute;
        top: -51px;
    }

    .swiper-container {
        height: calc(100% - 70px);
        width: 100%;
        max-width: 1000px;
    }

    .swiper-slide {
        min-width: 300px;
        max-width: 300px;
        width: 30%;
        height: ${slideHeight};
        margin-top: calc(50% - (${slideHeight} / 2) - 100px);
    }

    .swiper-slide:hover {
        border: ${primary} 1px solid;
    }

    .swiper-button-prev,
    .swiper-button-next {
        color: ${front};
    }

    .swiper-button-prev:hover,
    .swiper-button-next:hover {
        color: ${primary};
    }
`;

export default ProjectsSty;
