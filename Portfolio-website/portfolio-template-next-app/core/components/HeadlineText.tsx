import React from "react";

type Props = { frontText: string; backText: string; className?: string };

export default function HeadlineTexts({
  frontText,
  backText,
  className,
}: Props) {
  return (
    <div className={className + " py-14  sm:py-16 "}>
      <div
        className={
          "uppercase relative text-center h-[4.5rem] md:h-28 flex items-center justify-center "
        }
      >
        <h1 className="headline-text  text-primary z-[1]">{frontText}</h1>
        <span className=" absolute top-1 font-extrabold text-6xl  md:text-8xl tracking-widest text-grey-shade">
          {backText}
        </span>
      </div>
    </div>
  );
}
