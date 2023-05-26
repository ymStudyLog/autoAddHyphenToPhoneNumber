import React from 'react';
import { BsArrowUpCircle } from 'react-icons/bs';

const TopButton = () => {
  return (
    <button
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }}
    >
      <BsArrowUpCircle size={30} />
    </button>
  );
};

export default TopButton;
