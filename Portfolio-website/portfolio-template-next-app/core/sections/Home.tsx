import React from "react";
import { TypeAnimation } from "react-type-animation";
import { generateSequence } from "../../utility/hooks/helper/generate_sequece";
import NextImage from "../components/NextImage";

import "../../public/social-media/instagram.svg";

import Socials from "../components/Socials";
import { useRouter } from "next/router";
import { EMAIL_ADDRESS } from "../../data/contact_data";
import { DESCRIPTION, PROFILE_IMAGE, TYPE_SPEED } from "../../data/home_data";

type Props = {
  homeRef: React.LegacyRef<HTMLDivElement>;
};

export default function Home({ homeRef }: Props) {
  const router = useRouter();

  const openMail = () => {
    if (typeof window !== "undefined")
      window.open("mailto:" + "nayanjagtap808790@gmail.com");
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    let contactElement = document.getElementById("contact-me");
    window.scrollTo({
      top: contactElement?.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div
      id="home"
      ref={homeRef}
      className="relative flex-col flex sm:flex-row gap-12 sm:gap-28 min-h-[calc(100vh-60px)] pt-16 sm:pt-10  sm:justify-center sm:items-center"
    >
      {/* Hovering Contact Info  */}
      <div className="fixed bottom-0 left-8  items-center hidden md:flex md:flex-col">
        <Socials />
        <div className="pt-4" />
        <div className="border-l-2 border-primary border-opacity-50 h-20" />
      </div>
      <div className="fixed bottom-0 right-8 hidden md:flex md:flex-col items-center">
        <h3
          className="w-min sideway-text cursor-pointer text-primary text-opacity-50 hover:text-opacity-100"
          onClick={(e) => openMail()}
        >
          {EMAIL_ADDRESS}
        </h3>
        <div className="pt-4" />
        <div className="border-l-2   border-primary border-opacity-50 h-20" />
      </div>
      <NextImage
        imagePath={PROFILE_IMAGE}
        alt="Profile Photo"
        className="sm:w-96 grayscale-[90%]"
        priority={true}
        aspectRatio={1}
        objectFit={"cover"}
        imageClassName="rounded-full  bg-animated-image"
      />
      <div className=" flex flex-col justify-center items-start sm:w-1/3 gap-5">
        <h2 className="text-xl font-light">Hi, there</h2>
        <h1 className="headline-text">
          I'M{" "}
          <TypeAnimation
            sequence={generateSequence()}
            wrapper="span"
            speed={TYPE_SPEED}
            cursor={false}
            repeat={Infinity}
          />
        </h1>

        {/* <h1 className="headline-text">I'M Developer</h1> */}
        <h4 className="">{DESCRIPTION}</h4>
        <button className="btn-rounded" onClick={handleClick}>
          {" "}
          Let's Talk
        </button>
      </div>
    </div>
  );
}
