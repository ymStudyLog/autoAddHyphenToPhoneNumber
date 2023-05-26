import React from 'react';
import { Link } from 'react-scroll';
import {
  BsJournals,
  BsGithub,
  BsHouseDoor,
  BsArrowLeftCircle,
  BsPencilSquare,
} from 'react-icons/bs';

const Sidebar = () => {
  const [isOpenFull, setIsOpenFull] = React.useState(false); 
  const [isFixed, setIsFixed] = React.useState(false); 
  const [isClicked, setIsClicked] = React.useState({
    home: false,
    projects: false,
    comment: false,
  });

  //TODO map 만들어서 반복 로직 제거
  const tempFix = (props) => {
    return props
      ? `hidden tablet:flex w-[200px] flex-col items-start justify-center py-10 fixed top-[30%] right-0 bg-[#182848] rounded-3xl mr-[10px] `
      : `hidden tablet:flex w-[200px] flex-col items-start justify-center py-10 fixed top-[30%] right-0 bg-[#182848] rounded-3xl mr-[-140px] hover:mr-[10px] duration-500`;
  };

  const tempColor = (props) => {
    return props
      ? `mb-4 flex w-full cursor-pointer text-red-500`
      : `mb-4 flex w-full cursor-pointer text-white`;
  };

  const tempRotate = (props) => {
    return props
      ? 'hover:transition-all ease-in-out duration-500 rotate-180'
      : 'hover:transition-all ease-in-out duration-500 rotate-0';
  };

  const tempActivate = (props) => {
    return props
      ? 'w-1 rounded-tr-xl rounded-br-xl border-none bg-red-500 z-5'
      : 'w-1 rounded-tr-xl rounded-br-xl border-none bg-[#182848] z-5';
  };

  return (
    <div
      onMouseOver={(e) => {
        e.stopPropagation();
        setIsOpenFull(true);
      }}
      onMouseOut={(e) => {
        e.stopPropagation();
        if (isFixed === false) {
          setIsOpenFull(false);
        }
      }}
      className={tempFix(isFixed)}
    >
      <div className="mb-4 flex w-full cursor-pointer text-white">
        <a
          href="https://github.com/ymStudyLog"
          className="flex ml-4"
          onClick={() => {
            setIsClicked({
              home: false,
              projects: false,
              comment: false,
            });
          }}
        >
          <BsGithub size={30} />
          {isOpenFull && (
            <span className="text-xl text-center ml-4">Github</span>
          )}
        </a>
      </div>

      {/*TODO 반복되는 요소 컴포넌트화 하기*/}
      <div className={tempColor(isClicked.home)}>
        <span className={tempActivate(isClicked.home)}></span>
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-20}
          className="flex ml-3"
          onClick={() => {
            setIsClicked({
              home: true,
              projects: false,
              comment: false,
            });
          }}
        >
          <BsHouseDoor size={30} />
          {isOpenFull && <span className="text-xl text-center ml-4">Home</span>}
        </Link>
      </div>

      <div className={tempColor(isClicked.projects)}>
        <span className={tempActivate(isClicked.projects)}></span>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="flex ml-3"
          onClick={() => {
            setIsClicked({
              home: false,
              projects: true,
              comment: false,
            });
          }}
        >
          <BsJournals size={30} />
          {isOpenFull && (
            <span className="text-xl text-center ml-4">Projects</span>
          )}
        </Link>
      </div>

      <div className={tempColor(isClicked.comment)}>
        <span className={tempActivate(isClicked.comment)}></span>
        <Link
          to="comment"
          smooth={true}
          duration={500}
          offset={20}
          className="flex ml-3"
          onClick={() => {
            setIsClicked({
              home: false,
              projects: false,
              comment: true,
            });
          }}
        >
          <BsPencilSquare size={30} />
          {isOpenFull && (
            <span className="text-xl text-center ml-4">Comment</span>
          )}
        </Link>
      </div>

      <button
        className="mt-4 ml-4 flex text-white w-auto cursor-pointer"
        onClick={(e) => {
          e.stopPropagation(); //TODO 다른 리모컨 버튼을 클릭했을 때 클릭이벤트가 한번 씹힘
          setIsFixed(!isFixed);
        }}
      >
        <BsArrowLeftCircle size={30} className={tempRotate(isOpenFull)} />
      </button>
    </div>
  );
};

export default Sidebar;
