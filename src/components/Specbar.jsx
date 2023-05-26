import React from 'react';

const Specbar = ({ spec }) => {
  return (
    <>
      <div className="hidden mobile-extra:flex justify-center items-center flex-col $swiper:flex-row $swiper:w-full $swiper:h-[60px] rounded-tl-lg rounded-bl-lg $swiper:rounded-bl-none $swiper:rounded-tr-lg p-2 gap-3 bg-slate-200">
        {spec?.map((item, index) => {
          return (
            <div
              key={index}
              className="$swiper:w-auto $swiper:h-[50px] w-[50px] min-h-[50px] p-1 bg-[#182848] rounded-lg flex justify-center items-center text-xs tablet:text-sm text-white break-all"
            >
              <span>{item}</span>
            </div>
          );
        })}
      </div>
      <p className="inline-block p-1 text-sm text-white bg-[#182848] mobile-extra:hidden">
        <span className="font-bold">스팩 : </span>
        {spec.join(', ')}
      </p>
    </>
  );
};

export default Specbar;
