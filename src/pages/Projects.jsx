import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Card from '../components/Card';
import projects from '../lib/projects';

const Projects = () => {
  SwiperCore.use([Navigation, Pagination]);

  return (
    <div name="projects" className="w-full h-auto">
      <div className="max-w-[1000px] h-full mx-auto pb-[50px] flex justify-center items-center flex-col">
        <div className="$midmobile:text-xl text-2xl tablet:text-4xl font-bold border-b-4 mt-12 mb-8 border-[#182848]">
          <h1>Projects</h1>
        </div>

        <Swiper
          style={{
            width: '90%',
            paddingBottom: '35px',
            zIndex: '0',
          }}
          autoHeight={true}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={{}}
          loop={true}
        >
          {projects.map((project) => {
            return (
              <SwiperSlide key={project.id}>
                <Card project={project} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
