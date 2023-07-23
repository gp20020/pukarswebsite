import Link from "next/link";
import React, { useState } from "react";
import NextImage from "./NextImage";

type Props = {
  projectName: string;
  projectDes: string;
  imagePath: string;
  type: string;
  id: number;
};

export default function ProjectItem({
  projectName,
  projectDes,
  id,
  imagePath,
  type,
}: Props) {
  const [hover, setHover] = useState(false);
  return (
    <Link href={`/projects/${id}`} key={id}>
      <a
        className={`relative ${hover && "bg-primary bg-opacity-60"}`}
        onMouseEnter={(e) => setHover(true)}
        onMouseLeave={(e) => setHover(false)}
      >
        <div
          className={`transition-all ${
            hover && "bg-primary bg-opacity-30"
          } absolute top-0 bottom-0 left-0 right-0 z-[8]`}
        />
        <NextImage
          imagePath={imagePath}
          aspectRatio={4 / 2.6}
          priority={true}
          objectFit={"cover"}
          alt="Project photo"
        />
        {/* project type */}
        {type !== undefined && (
          <div className="text-md absolute top-2 right-2 bg-white z-[8] rounded-full px-4 py-2">
            {type.toUpperCase()}
          </div>
        )}
        <div
          className={`p-2 border-2  border-t-0 sm:border-none  sm:absolute sm:bottom-2 z- left-2 right-2 bg-secondary z-[9] ${
            hover ? "title-fade-in" : "title-fade-out"
          }`}
        >
          <h2 className="sub-headline-text ">{projectName}</h2>
          <div className="text-sm">{projectDes.substring(0, 100) + "..."}</div>
        </div>
      </a>
    </Link>
  );
}
