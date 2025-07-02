import React from 'react';
import FooterItem from './FooterItem';

const Footer = () => {
  return (
    <footer className="h-[5%] w-full border-t border-slate-700 flex items-center justify-between">
      {/* left side */}
      <div className=" h-full flex items-center">
        <FooterItem link="" text="Find me in: " classes="justify-center w-[9rem]" borderRight />
        <FooterItem
          link="https://www.instagram.com/rajat16.rd"
          iconName="ri-instagram-line"
          classes="justify-center"
          borderRight
        />
        <FooterItem
          link="https://www.linkedin.com/in/rajatdash/"
          iconName="ri-linkedin-fill"
          classes="justify-center"
          borderRight
        />
      </div>
      <div className=" h-full flex items-center">
        <FooterItem
          link="https://github.com/DARKPROGRAMMER16"
          text="@DARKCOSMIC16"
          iconName="ri-github-fill"
          classes="justify-center px-5"
          borderLeft
        />
      </div>
    </footer>
  );
};

export default Footer;
