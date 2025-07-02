import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../shared/Navbar';

const BaseLayout = () => {
  return (
    <div className="h-[95%] w-[98%] bg-slate-900 border border-slate-700 rounded-lg">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default BaseLayout;
