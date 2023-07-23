import React, { useState } from "react";
import { FIRST_TAB, PROJECTS, TABS } from "../../data/portfolio_data";
import HeadlineTexts from "../components/HeadlineText";
import ProjectItem from "../components/ProjectItem";

type Props = {
  portfolioRef: React.LegacyRef<HTMLDivElement>;
};

export default function Portfolio({ portfolioRef }: Props) {
  const loadProjectNo = 4;
  const [projectSearchTag, setProjectSearchTag] = useState(FIRST_TAB);

  const [filterProjectList, setFilterProjectList] = useState<any[]>(PROJECTS);
  const [projectNo, setProjectNo] = useState<number>(
    filterProjectList.length > loadProjectNo
      ? loadProjectNo
      : filterProjectList.length
  );
  const loadMoreProject = () => {
    console.log("load more : ", projectNo);

    if (projectNo + loadProjectNo < filterProjectList.length) {
      setProjectNo(projectNo + loadProjectNo);
    } else {
      setProjectNo(filterProjectList.length);
    }
  };

  const handleProjectTab = (type: string) => {
    setProjectSearchTag(type);
    console.log("search tag : ", type);

    if (type != FIRST_TAB) {
      let filterList = PROJECTS.filter((project) => project.type === type);
      console.log("filter list : ", filterList);
      setProjectNo(
        filterList.length > loadProjectNo ? loadProjectNo : filterList.length
      );
      setFilterProjectList(filterList);
    } else {
      setProjectNo(
        PROJECTS.length > loadProjectNo ? loadProjectNo : PROJECTS.length
      );
      setFilterProjectList(PROJECTS);
    }
  };

  console.log("filter project list ", filterProjectList, projectNo);

  return (
    <div id="portfolio" ref={portfolioRef}>
      <HeadlineTexts frontText="Protfolio" backText="Work" />

      <div className="sm:py-10 sm:px-24">
        <ul className="flex justify-center sm:gap-16 ">
          <li
            className={`tab ${projectSearchTag === FIRST_TAB && "active-tab"}`}
            onClick={(e) => handleProjectTab(FIRST_TAB)}
          >
            {FIRST_TAB}
          </li>
          {TABS.map((t, i) => {
            let tab = t;
            return (
              <li
                key={`tab - ${i}`}
                className={`tab ${
                  projectSearchTag === TABS[i] && "active-tab"
                }`}
                onClick={(e) => handleProjectTab(TABS[i])}
              >
                {tab}
              </li>
            );
          })}
        </ul>

        {/* Animated project list  */}
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-4 sm:gap-y-10 sm:gap-x-10 sm:py-10 py-4 title-fade-in">
            {filterProjectList !== undefined &&
            filterProjectList.length == 0 ? (
              <div
                key={"no projects"}
                className="flex justify-center items-center col-span-2 sub-headline-text"
              >
                No Project added yet!
              </div>
            ) : (
              Array(projectNo)
                .fill(null)
                .map((_, i) => (
                  <ProjectItem
                    key={`portflio${filterProjectList[i].id}`}
                    id={filterProjectList[i].id}
                    type={filterProjectList[i].type}
                    projectName={filterProjectList[i].name}
                    projectDes={filterProjectList[i].des}
                    imagePath={filterProjectList[i].thumbNail as string}
                  />
                ))
            )}
          </div>

          {projectNo !== filterProjectList.length &&
            filterProjectList.length !== 0 && (
              <div className="flex items-center justify-center">
                <button className="btn" onClick={(_) => loadMoreProject()}>
                  Load more
                </button>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
