import type { NextPage } from "next";
import NavBar from "../core/components/NavBar";

import { useEffect, useRef, useState } from "react";

// SVG IMPORT
import AboutMe from "../core/sections/AboutMe";
import Portfolio from "../core/sections/Portfolio";
import ContactMe from "../core/sections/ContactMe";
import ScrollMoreIcon from "../core/components/ScrollMoreIcon";
import Home from "../core/sections/Home";
import SideBar from "../core/components/SideBar";
import useLayout from "../utility/hooks/useLayout";
import emailjs from "@emailjs/browser";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "../data/email_js_config";
import { sendEmail } from "../utility/hooks/helper/send_email";

const MainPage: NextPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const [showScrollIcon, setScrollIcon] = useState(true);
  const [layout, _] = useLayout();
  const [YOffset, setYOffset] = useState(0);
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  const homeRef = useRef<any>(null);
  const aboutMeRef = useRef<any>(null);
  const portfolioRef = useRef<any>(null);
  const contactMeRef = useRef<any>(null);

  let homeOffset: number,
    aboutMeOffset: number,
    portfolioOffset: number,
    contactMeOffset: number;

  // Animated List

  const handleScroll = (Yoffset: number) => {
    // console.log("scroll event", e.tar);
    let windownscrollY = YOffset;
    let offset = 40;
    homeOffset = homeRef.current.offsetTop - offset;
    aboutMeOffset = aboutMeRef.current.offsetTop - offset;
    portfolioOffset = portfolioRef.current.offsetTop - offset;
    contactMeOffset = contactMeRef.current.offsetTop - offset;

    // show or hide scroll icon
    if (showScrollIcon && windownscrollY > 40) setScrollIcon(false);

    // animation the navbar active bar based on scroll offset
    if (windownscrollY >= homeOffset && windownscrollY < aboutMeOffset)
      setActiveTab(0);
    else if (
      windownscrollY >= aboutMeOffset &&
      windownscrollY < portfolioOffset
    )
      setActiveTab(1);
    else if (
      windownscrollY >= portfolioOffset &&
      windownscrollY < contactMeOffset
    )
      setActiveTab(2);
    else if (windownscrollY >= contactMeOffset) setActiveTab(3);
  };
  const onScroll = (e: any) => setYOffset(e.currentTarget.pageYOffset);

  useEffect(() => {
    console.log("homeOffset : ", homeOffset);

    if (typeof window !== "undefined") {
      window.removeEventListener("scroll", onScroll);
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    // Clean up
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Handle Change on Y offset
  useEffect(() => {
    handleScroll(YOffset);
  }, [YOffset]);

  // Close the side bar when click on any tab
  useEffect(() => {
    if (showSideBar) {
      setShowSideBar(false);
    }
  }, [activeTab]);

  // handle Layout changes
  useEffect(() => {
    if (showSideBar && layout !== "MOBILE") setShowSideBar(false);
  }, [layout]);

  return (
    <>
      <div>
        <NavBar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setShowSideBar={setShowSideBar}
          showSideBar={showSideBar}
        />

        <ScrollMoreIcon showScrollIcon={showScrollIcon} />
        {/* dark overlay over background  */}
        <div
          className={`absolute top-0 bottom-0 w-full  z-10 transition-all ease-in-out duration-500  ${
            showSideBar
              ? " bg-primary bg-opacity-30 backdrop-blur-md backdrop-saturate-100 "
              : "hidden"
          } `}
        />
        {/* // SIDE BAR */}
        <SideBar showSideBar={showSideBar} activeTab={activeTab} />
        {/* Main content  */}
        <div
          className={`sm:p-8 p-6  -mt-6 sm:-mt-0 ${
            showSideBar ? "overflow-hidden" : "overflow-auto"
          }`}
        >
          {/* HOME PAGE  */}
          <Home homeRef={homeRef} />
          {/* ABOUT ME  */}
          <AboutMe aboutMeRef={aboutMeRef} />
          {/* Portfolio  */}
          <Portfolio portfolioRef={portfolioRef} />
          {/* CONTACT ME  */}
          <ContactMe contactMeRef={contactMeRef} />
        </div>
        <footer className="bg-primary p-4 text-center">
          <p className="text-secondary">2022@nayanjagtap</p>
        </footer>
      </div>
    </>
  );
};

export default MainPage;
