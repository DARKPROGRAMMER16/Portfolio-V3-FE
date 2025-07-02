import React from 'react';
import NavItems from './NavItems';

const Navbar = () => {
  return (
    <nav className="h-[5%] w-full border-b border-slate-700 flex items-center justify-between">
      {/* left side */}
      <div className=" h-full flex items-center">
        <NavItems text="rajat-dash" link="/" classes="pl-5 w-[17rem]" borderRight />
        <NavItems text="_home" link="/home" classes="justify-center" borderRight />
        <NavItems text="_about" link="/about" classes="justify-center" borderRight />
        <NavItems text="_projects" link="/projects" classes="justify-center" borderRight />
      </div>
      {/* right side */}
      <div className="h-full flex items-center">
        <NavItems text="_contact-me" link="/contact" classes="justify-center" borderLeft />
      </div>
    </nav>
  );
};

export default Navbar;
