import React from 'react';
import Specbar from './Specbar';
import { BsGithub, BsFileText } from 'react-icons/bs';
import { RiTeamFill } from 'react-icons/ri';

const Card = (props) => {
  const { project } = props;

  return (
    <div className="$swiper:w-[85%] w-[90%] mx-auto flex flex-row $swiper:flex-col rounded-lg border-2 border-[#182848]">
      <Specbar spec={project.spec} />
      <div className="p-2 w-[100%] mx-auto">
        <div className="w-[100%] flex justify-between">
          <p className="font-bold text-sm mobile-extra:text-base">
            <span className="hidden mobile-extra:inline mobile-extra:mr-1">
              Assignment
            </span>
            <span className="inline mr-1 mobile-extra:hidden">과제</span>
            {project.id}
          </p>
          <div className="flex">
            <a
              href={project.readme}
              target="_blank"
              rel="noreferrer"
              title="readme"
              className="mr-2 mobile-extra:mr-5"
            >
              <BsFileText size={30} />
            </a>
            <a
              href={project.repository}
              target="_blank"
              rel="noreferrer"
              title="개인 repository"
              className="mr-2 mobile-extra:mr-5"
            >
              <BsGithub size={30} />
            </a>
            <a
              href={project.organization}
              target="_blank"
              rel="noreferrer"
              title="organization repository"
            >
              <RiTeamFill size={30} />
            </a>
          </div>
        </div>

        <h1 className="py-1 text-lg mobile-extra:text-xl font-bold">
          {project.title}
        </h1>
        <p className="pb-1 text-sm mobile-extra:text-base">
          <span className="font-bold">성과 : </span> {project.achievement}
        </p>
        <p className="pb-1 text-sm mobile-extra:text-base">
          <span className="font-bold">기간 : </span>
          {project.start} ~ {project.deadline}
        </p>
        <p className="pb-1 text-sm mobile-extra:text-base font-bold">
          담당 파트 :{' '}
        </p>
        <ul className="pb-1 list-disc list-inside text-sm mobile-extra:text-base">
          {project.personalTask.length !== 0 ? (
            project.personalTask?.map((task, index) => {
              return <li key={index}>{task}</li>;
            })
          ) : (
            <li>없음</li>
          )}
        </ul>
        <p className="pb-1 text-sm mobile-extra:text-base font-bold">
          공통 파트 :
        </p>
        <ul className="pb-1 list-disc list-inside text-sm mobile-extra:text-base">
          {project.teamTask.length !== 0 ? (
            project.teamTask?.map((task, index) => {
              return <li key={index}>{task}</li>;
            })
          ) : (
            <li>없음</li>
          )}
        </ul>
        <p className="pb-1 text-sm mobile-extra:text-base font-bold">회고 :</p>
        <ul className="pb-1 list-disc list-inside text-sm mobile-extra:text-base">
          {project.lookBack.length !== 0 ? (
            project.lookBack?.map((task, index) => {
              return <li key={index}>{task}</li>;
            })
          ) : (
            <li>없음</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Card;
