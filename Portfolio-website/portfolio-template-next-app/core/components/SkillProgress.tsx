import { Progress } from "flowbite-react";
import React from "react";
import { intParser } from "../../utility/hooks/helper/intParser";

type Props = {
  progress: string;
  skill: string;
};

export default function SkillProgress({ progress, skill }: Props) {
  return (
    <div className="pb-8 ">
      <p className="pb-6 text-xl ">{skill}</p>
      <Progress
        progress={intParser(progress)}
        color="dark"
        labelProgress={true}
      />
    </div>
  );
}
