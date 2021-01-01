import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
    Navigation,
    Autoplay,
    EffectCoverflow,
    A11y,
} from 'swiper';
import 'swiper/swiper-bundle.css';

import Title from '../../../../components/Title';
import ProjectsSty from './ProjectsSty';

import projects from '../../../../projects.json';
import ProjectItem from './components/ProjectItem';

SwiperCore.use([Navigation, Autoplay, EffectCoverflow, A11y]);

function Projects() {
    return (
        <ProjectsSty>
            <Title title={'Projects'} id={'projects'} />
            <div className='swiperWrapper'>
                <Swiper
                    effect='coverflow'
                    navigation
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView='auto'
                    autoplay={{ delay: 3000 }}
                    loop
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    scrollbar={{ draggable: true }}
                >
                    {projects.map((project) => (
                        <SwiperSlide key={`project-${project.id}`}>
                            <ProjectItem data={project} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </ProjectsSty>
    );
}

export default Projects;
