import clsx from 'clsx';
import React, { type FC } from 'react';
import { NavLink } from 'react-router';

interface NavItemsProps {
  text: string;
  link: string;
  classes?: string;
  borderRight?: boolean;
  borderLeft?: boolean;
}

const NavItems: FC<NavItemsProps> = ({ text, link, classes, borderRight, borderLeft }) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        clsx('h-full flex items-center w-[9rem] text-slate-400', classes, {
          'border-r border-r-slate-700': borderRight,
          'border-l border-l-slate-700': borderLeft,
          'border-b-2 border-b-amber-500': isActive, // only apply when active
        })
      }
    >
      <p>{text}</p>
    </NavLink>
  );
};

export default NavItems;
