import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const BaseLayout = () => {
  return (
    <div className="h-[95%] w-[98%] bg-slate-900 border border-slate-700 rounded-lg">
      <Navbar />
      <main className="h-[90%] w-full overflow-y-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default BaseLayout;
