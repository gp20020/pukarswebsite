import React from "react";
type Props = {
  icon: JSX.Element;
  title: string;
  content: string;
};

export default function ContactInfoItem({ icon, title, content }: Props) {
  return (
    <div className="flex gap-2">
      {/* <FontAwesomeIcon icon={icon} /> */}
      {icon}

      <div className="">
        <h3 className="font-bold">{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}
