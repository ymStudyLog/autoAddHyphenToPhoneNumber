import React from 'react';
import TopButton from '../layout/TopButton';

const Comment = () => {
  return (
    <div name="comment" className="w-full h-screen">
      <div className="max-w-[600px] h-full mx-auto flex flex-col justify-center items-center pt-2">
        <div className="$midmobile:max-w-[80vw] max-w-[400px] tablet:max-w-[600px]">
          <div className="mb-4">
            <h1 className="$midmobile:text-xl text-2xl tablet:text-4xl font-bold border-b-4 border-[#182848] inline">
              Comment
            </h1>
          </div>
          <form
            method="POST"
            action="https://getform.io/f/3152d1b8-5d0a-463b-b4b8-b3455fd0cc23"
            className="flex flex-col tablet:grid tablet:grid-cols-3 gap-1"
          >
            <input
              type="text"
              name="name"
              placeholder="이름 / name"
              size={10}
              className="m-0"
            />
            <input
              type="email"
              name="email"
              placeholder="이메일 / email"
              size={40}
              className="m-0 col-span-2"
            />
            <textarea
              rows={8}
              cols={50}
              name="content"
              placeholder="의견을 자유롭게 보내주세요. / Please send your message"
              className="p-2 border-2 border-[#182848] rounded-lg col-span-3 resize-none"
            />
            <button className="p-2 font-bold border-2 rounded-lg border-[#182848] bg-[#182848] text-white col-end-4">
              submit
            </button>
          </form>
        </div>
      </div>
      <div className="tablet:hidden relative flex justify-center w-full h-[30px] bottom-[70px]">
        <TopButton />
      </div>
    </div>
  );
};

export default Comment;
