import { Timeline } from "flowbite-react";
import { title } from "process";
import React from "react";
import { FiCalendar } from "react-icons/fi";

type Props = {
  title: string;
  desc: string;
  startYear: string;
  endYear?: string;
  icon: JSX.Element;
};

function TimelineItem({ title, desc, startYear, endYear, icon }: Props) {
  return (
    <div>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Title className="text-sm sm:text-lg">
            {title}
          </Timeline.Title>
          <Timeline.Body className="">{desc}</Timeline.Body>
          <Timeline.Time className="flex items-center gap-2">
            {icon}
            <p>
              {startYear} {endYear ? `- ${endYear}` : "more"}
            </p>
          </Timeline.Time>
        </Timeline.Content>
      </Timeline.Item>
    </div>
  );
}

export default TimelineItem;
