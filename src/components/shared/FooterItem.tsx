import clsx from 'clsx';
import React, { type FC } from 'react';
import { Link } from 'react-router';

interface FooterItemProps {
  text?: string;
  link: string;
  classes?: string;
  borderRight?: boolean;
  borderLeft?: boolean;
  iconName?: string;
}

const FooterItem: FC<FooterItemProps> = ({
  text,
  classes,
  borderLeft,
  borderRight,
  link,
  iconName,
}) => {
  return (
    <Link
      to={link}
      target="_blank"
      className={clsx('h-full flex items-center min-w-[4rem] text-slate-400', classes, {
        'border-r border-r-slate-700': borderRight,
        'border-l border-l-slate-700': borderLeft, // only apply when active
      })}
    >
      {text ?? <p>{text}</p>}

      <i className={`${iconName} ri-xl`}></i>
    </Link>
  );
};

export default FooterItem;
