import React from "react";
import Image from "next/image";
import { SOCIAL_LINKS } from "../../data/social_media_link";

type Props = {};

export default function Socials({}: Props) {
  return (
    <div className="flex flex-row justify-between w-full px-4  md:flex-col gap-2">
      {SOCIAL_LINKS.map((link, i) => (
        <a href={link.url} key={`SOCIAL-LINK-${i}`}>
          <Image
            src={link.logoPath}
            width={20}
            height={20}
            className="invert-[50%] hover:invert-0"
            alt={link.name}
          />
        </a>
      ))}
    </div>
  );
}
