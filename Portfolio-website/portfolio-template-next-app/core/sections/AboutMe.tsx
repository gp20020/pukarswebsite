import { Timeline } from "flowbite-react";
import React from "react";
import { FiCalendar } from "react-icons/fi";
import {
  CV_URL,
  EDUCATION_TIMELIME,
  SKILLS,
  WORK_EXPERIENCE_TIMELINE,
} from "../../data/about_me_data";

import HeadlineTexts from "../components/HeadlineText";
import SkillProgress from "../components/SkillProgress";
import TimelineItem from "../components/TimelineItem";

type Props = {
  aboutMeRef: React.LegacyRef<HTMLDivElement>;
};

export default function AboutMe({ aboutMeRef }: Props) {
  return (
    <div id="about-me" ref={aboutMeRef}>
      <HeadlineTexts frontText="About Me" backText="Resume" />
      <div className="sm:py-10 sm:px-24">
        <div className="flex flex-col sm:flex-row justify-between gap-4 sm:items-center">
          <div className="sm:w-1/3">
            <p className="sm:pb-10 pb-8 font-medium text-2xl sm:-ml-3 -ml-1">
              Education
            </p>

            <Timeline>
              {EDUCATION_TIMELIME.map((item, i) => (
                <TimelineItem
                  key={`education${i}`}
                  title={item.title}
                  desc={item.desc}
                  startYear={item.startYear}
                  endYear={item.endYear}
                  icon={<FiCalendar className="w-6" />}
                />
              ))}
            </Timeline>
          </div>

          {/* Experience  */}
          <div className="sm:w-1/3">
            <p className="sm:pb-10 pb-8 font-medium text-2xl sm:-ml-3 -ml-1">
              Experience
            </p>

            <Timeline>
              {WORK_EXPERIENCE_TIMELINE.map((item, i) => (
                <TimelineItem
                  key={`exprience${i}`}
                  title={item.title}
                  desc={item.desc}
                  startYear={item.startYear}
                  endYear={item.endYear}
                  icon={<FiCalendar className="w-6" />}
                />
              ))}
            </Timeline>
          </div>
        </div>
        {/* SKILLS  */}

        <div className="-mt-3 ">
          <h1 className="sub-headline-text py-8 text-start">Skill</h1>

          <div className="grid grid-cols-1 w-full flex-row sm:grid-cols-2 sm:gap-x-10 sm:gap-y-4 gap-4">
            {SKILLS.map((skill, i) => (
              <SkillProgress
                key={`skill ${i}`}
                progress={skill.progress}
                skill={skill.skill}
              />
            ))}
          </div>
          <div className="flex items-center justify-center py-4">
            <a href={CV_URL} target="_blank" className="btn text-center">
              Download <u>MY CV</u>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
