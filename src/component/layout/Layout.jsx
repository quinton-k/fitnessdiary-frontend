import React, { useState, useEffect } from 'react';
import useTheme from '../../hook/useTheme';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  const { theme } = useTheme();
  console.log('The selected theme is: ' + theme)
  return (
    <>
    <div className="h-full sm:h-full md:h-screen lg:h-screen xl:h-screen grid grid-cols-1 grid-rows-12 gap-0 bg-slate-200 dark:bg-slate-600 text-black dark:text-white">
      <div className=' dark:bg-slate-800 bg-slate-400'>
      <Header/>
      </div>
      <div className='grid grid-cols-1 grid-rows-1 gap-x-10 row-span-10 dark:bg-emerald-800 bg-slate-400'>
        <div className=' dark:bg-gray-700 bg-slate-400'>
            <Outlet />
        </div>
      </div>
      <div className=' dark:bg-black bg-slate-400'>
          Footer
      </div>
    </div>
    </>
  );
};

export default Layout;
