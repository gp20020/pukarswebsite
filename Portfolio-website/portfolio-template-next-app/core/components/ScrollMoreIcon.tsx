import React from "react";

type Props = {
  showScrollIcon: boolean;
};

export default function ScrollMoreIcon({ showScrollIcon }: Props) {
  return (
    <div
      className={`icon-scroll duration-[2000]  border-primary border-2 border-opacity-70 before:bg-primary before:bg-opacity-70 animate-bounce-slow dura hidden sm:block ${
        !showScrollIcon && "title-fade-out"
      } `}
    />
  );
}
