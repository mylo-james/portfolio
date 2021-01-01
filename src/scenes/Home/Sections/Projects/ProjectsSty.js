import styled from 'styled-components';
import { front, accent } from '../../../../styles/themes';
const ProjectsSty = styled.div`
    height: calc(100vh - 50px);
    min-height: 500px;
    position: relative;
    border: white 1px solid;

    #projects {
        position: absolute;
        top: -51px;
    }

    .swiperWrapper {
        display: flex;
        align-items: center;
        height: 100%;
    }

    .swiper-slide {
        min-width: 200px;
        width: 30%;
    }

    .swiper-container {
        border: 1px white solid;
        height: 70%;
        width: 90%;
    }

    .swiper-button-prev,
    .swiper-button-next {
        color: ${front};
    }

    .swiper-button-prev:hover,
    .swiper-button-next:hover {
        color: ${accent};
    }
`;

export default ProjectsSty;
