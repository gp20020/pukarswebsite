import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
// import { HiMenuAlt4 } from "react-icons/hi";
import { Squash as Hamburger } from "hamburger-react";
import { YOUR_NAME } from "../../data/home_data";

type Props = {
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  showSideBar: boolean;
};

export default function NavBar({
  activeTab,
  setActiveTab,
  setShowSideBar,
  showSideBar,
}: Props) {
  const router = useRouter();
  // const [activeTab, setActiveTab] = useState<number>(0);

  const handleActiveTab = (hash: string) => {
    console.log("harsh ", hash);

    // if (hash.toLowerCase().includes("#home")) setActiveTab(0);
    // else if (hash.toLowerCase().includes("#about-me")) setActiveTab(1);
    // else if (hash.toLowerCase().includes("#portfolio")) setActiveTab(2);
    // else if (hash.toLowerCase().includes("#contact-me")) setActiveTab(3);
    // else setActiveTab(0);

    const html = document.querySelector("html");
    if (html) {
      html.style.scrollBehavior = "smooth";
    }
  };

  // const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const onWindowHashChange = () => handleActiveTab(window.location.hash);

    window.addEventListener("hashchange", onWindowHashChange);
    window.addEventListener("load", onWindowHashChange);
    return () => {
      window.removeEventListener("load", onWindowHashChange);
      window.removeEventListener("hashchange", onWindowHashChange);
    };
  }, [router.asPath, router.events]);
  // console.log("active tab : ", activeTab);

  return (
    <div className="flex justify-between items-center fixed left-0 right-0 py-1 px-4 md:py-6 md:px-8 top-0 z-20 border-slate-900/10 bg-white/70  filter backdrop-blur-xl backdrop-saturate-[180%]">
      <h2 className="font-pacifico text-lg sm:text-xl cursor-pointer">
        <a href="#home">{YOUR_NAME}</a>
      </h2>

      <div className="md:mr-8">
        <div className="z-20 md:hidden">
          <Hamburger toggled={showSideBar} toggle={setShowSideBar} size={18} />
        </div>

        <ul className="md:flex hidden gap-16 text-xl cursor-pointer transition-all">
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
      </div>
    </div>
  );
}
