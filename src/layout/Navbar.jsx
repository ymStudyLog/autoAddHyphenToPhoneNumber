import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { Link } from 'react-scroll';

//TODO 햄버거 다른 요소에 겹쳐질 때 색상 바꾸는거
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const onhandleClick = () => setNav(!nav);

  return (
    <div className="fixed w-[96%] h-[50px] tablet:h-[80px] font-bold px-8 flex justify-between items-center rounded-3xl z-10">
      <div className="inline-block text-2xl tablet:text-3xl">YM</div>

      {/* Hamburger & close */}
      <div
        onClick={onhandleClick}
        className="tablet:hidden cursor-pointer z-10"
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30}/>}
      </div>

      {/* Mobile menu */}
      <div
        className={
          nav
            ? 'absolute top-0 left-0 w-full h-[95vh] rounded-3xl bg-white flex justify-center items-center'
            : 'hidden'
        }
      >
        <ul className="flex flex-col text-center">
          <Link
            onClick={onhandleClick}
            to="home"
            smooth={true}
            duration={500}
            offset={-20}
          >
            <li className="text-3xl mx-2 my-4 hover:border-[#182848] hover:bg-[#182848] hover:text-white duration-150 py-2 px-4 rounded-full cursor-pointer">
              Home
            </li>
          </Link>
          <Link
            onClick={onhandleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            <li className="my-4 text-3xl mx-2 hover:border-[#182848] hover:bg-[#182848] hover:text-white duration-150 py-2 px-4 rounded-full cursor-pointer">
              Projects
            </li>
          </Link>
          <Link
            onClick={onhandleClick}
            to="comment"
            smooth={true}
            duration={500}
            offset={20}
          >
            <li className="my-4 text-3xl mx-2 hover:border-[#182848] hover:bg-[#182848] hover:text-white duration-150 py-2 px-4 rounded-full cursor-pointer">
              Comment
            </li>
          </Link>
          <a
            href="https://github.com/ymStudyLog"
            className="flex hover:scale-125 duration-200"
          >
            <button className="rounded-full mx-auto my-3">
              <BsGithub size={40} className="hover:text-[#182848]" />
            </button>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
