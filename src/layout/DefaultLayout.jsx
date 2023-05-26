import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const DefaultLayout = ({ children }) => {
  return (
    <div className="w-full py-5 bg-slate-200">
      <div className="bg-[white] w-[96%] mx-auto rounded-3xl shadow-2xl">
        <Navbar />
        {children}
      </div>
      <Sidebar />
    </div>
  );
};

export default DefaultLayout;
