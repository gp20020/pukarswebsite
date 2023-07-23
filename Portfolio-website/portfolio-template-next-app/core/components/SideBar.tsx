import React from "react";
import Socials from "./Socials";

type Props = {
  showSideBar: boolean;
  activeTab: number;
};

export default function SideBar({ showSideBar, activeTab }: Props) {
  return (
    <div
      className={`md:hidden fixed top-0 right-0 w-60 bg-secondary   z-10 text-white  h-full ease-in-out duration-500 ${
        showSideBar ? "translate-x-0 " : "translate-x-full"
      }`}
      onFocus={(e) => {
        console.log("hiii");
      }}
    >
      <div className="flex flex-col items-center justify-">
        <ul className="flex flex-col gap-8 text-xl pt-20   justify-center items-center  cursor-pointer transition-all">
          <li className={`${activeTab === 0 && "active-nav-item"}  nav-item`}>
            <a href="#home">Home</a>
          </li>
          <li className={`${activeTab === 1 && "active-nav-item"}  nav-item`}>
            <a href="#about-me">About me</a>
          </li>
          <li className={`${activeTab === 2 && "active-nav-item"}  nav-item`}>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className={`${activeTab === 3 && "active-nav-item"} nav-item`}>
            <a href="#contact-me">Contact me</a>
          </li>
        </ul>
        <div className="pt-16" />
        <Socials />
      </div>
    </div>
  );
}
