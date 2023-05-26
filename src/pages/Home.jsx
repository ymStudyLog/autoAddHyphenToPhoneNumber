import React from 'react';
import { Link } from 'react-scroll';
import { BsCheck2, BsPaperclip, BsLink45Deg } from 'react-icons/bs';

const Home = () => {
  const [copy, setCopy] = React.useState(false);
  const onhandleClick = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopy(true);
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  }, [copy]);

  return (
    <div name="home" className="w-full h-screen">
      <div className="max-w-[1000px] h-full mx-auto flex flex-col justify-center items-center">
        <p className="mx-[40px] tablet:mx-auto text-lg mobile:text-xl tablet:text-2xl">
          Aim to build simple applications and to deliver a better experience
        </p>
        <h1 className="mx-[30px] tablet:mx-auto my-3 font-bold text-2xl mobile:text-4xl">
          React 개발자 이유미의 포트폴리오입니다.
        </h1>

        <div className="text-xl flex items-center mt-3">
          Email
          <span className="hidden mobile-extra:inline mr-2 ml-2 sm:m-0">
            : ylee585@gmail.com
          </span>
          <BsPaperclip
            size={30}
            className="cursor-pointer ml-2 mobile-extra:ml-0 rotate-45 relative after:absolute after:bg-white after:w-[10px] after:h-[10px]"
            onClick={() => {
              onhandleClick('ylee585@gmail.com');
            }}
          />
          {copy && <BsCheck2 size={30} className="ml-2 text-green-500" />}
        </div>

        <div className="text-xl flex items-center mt-3">
          velog
          <span className="hidden mobile-extra:inline ml-2 sm:m-0">: link</span>
          <a href="https://velog.io/@zldzhd9292" className="ml-2">
            <BsLink45Deg size={30} />
          </a>
        </div>

        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="mt-7 p-3 rounded-md border-2 border-[#182848] font-bold hover:text-white hover:bg-[#182848] duration-150 cursor-pointer animate-bounce"
        >
          둘러보기
        </Link>
      </div>
    </div>
  );
};

export default Home;
