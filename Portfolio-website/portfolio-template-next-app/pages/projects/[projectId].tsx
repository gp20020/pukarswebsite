import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import HeadlineTexts from "../../core/components/HeadlineText";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextImage from "../../core/components/NextImage";
import { PROJECTS } from "../../data/portfolio_data";

type Props = {};

export default function ProjectPage({}: Props) {
  const router = useRouter();
  let projectId = parseInt(router.query.projectId as string);
  const [project, setProject] = useState<any>();

  useEffect(() => {
    console.log("");

    let project = PROJECTS.filter((project) => project.id === projectId)[0];
    setProject(project);
  }, [router]);
  console.log("project ", project);
  console.log(router.basePath);

  if (project === undefined) return <div>Loading...</div>;
  return (
    <>
      <div className="relative">
        {/* <div onClick={(e) => router.back()}>
        <FiArrowLeft
          size={36}
          className="absolute cursor-pointer stroke-1  top-8 left-8 "
        />
      </div> */}
        <HeadlineTexts
          frontText={project.name}
          className={"py-4"}
          backText="Project"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 sm:flex-row gap-4 sm:gap-10 px-4 sm:px-20 py-4 sm:py-8 ">
          {/* Project images and Action buttons */}
          <div className="max-h-96 h-max">
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              arrows={false}
              autoplay={true}
              className={"w-full"}
            >
              {project.images.map((img: string, index: number) => (
                <NextImage
                  key={`${project.id}-${index}`}
                  imagePath={img}
                  className={"max-h-96"}
                  aspectRatio={4 / 2.6}
                  alt={`${project.name} ${index}`}
                />
              ))}
            </Slider>
            <div className="flex mt-10 w-full justify-between">
              {project["button1"] !== undefined && (
                <button className="btn-fill">{project["button1"].name}</button>
              )}
              {project["button2"] !== undefined && (
                <button className="btn">{project["button2"].name}</button>
              )}
            </div>
          </div>

          {/* Project info  */}
          <div className="w-full">
            <div className="h-96 ">
              <p className="font-medium text-xl -mt-0 sm:-mt-6 pt-4 masked-overflow">
                {project.des}
              </p>
            </div>

            {/* TAG  */}
            <div className="mt-4">
              {project.tags !== undefined &&
                Object.keys(project.tags).map((tagkey, i) => (
                  <div key={`${tagkey}${i}`}>
                    <h3 className="sub-headline-text ">{tagkey}</h3>
                    <div className="flex flex-wrap gap-4 my-4 ">
                      {project.tags[tagkey].map((tag: string, i: number) => (
                        <div
                          className="px-3 py-2 border-2 border-primary rounded-md "
                          key={`${tag}${i}`}
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// <Head>
//         <meta charSet="utf-8" />
//         <meta
//           name="viewport"
//           content="width=device-width, initial-scale=1,
//       shrink-to-fit=no"
//         />
//         <meta name="description" content={project.des} />
//         {/* open graph  */}
//         <meta name="og:title" content={`${project.name}`} />
//         <meta name="og:description" content={project.des} />
//         <meta name="keyword" content="portfolio, javascript, developer" />
//         <meta
//           property="og:image"
//           // content={`${originUrl}/_next/image?url=%2Fmeta-image.png&w=96&q=75`}
//           content="https://images.unsplash.com/photo-1579783483458-83d02161294e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=797&q=80"
//         />
//         {/* <meta property="og:url" content={originUrl} /> */}
//         <meta property="og:type" content="website" />

//         {/* twitter tag  */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="og:title" content={`${project.name}`} />
//         <meta name="og:description" content={project.des} />
//         <meta
//           name="twitter:image"
//           // content={`${originUrl}/_next/image?url=%2Fmeta-image.png&w=96&q=75`}
//           content="https://images.unsplash.com/photo-1579783483458-83d02161294e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=797&q=80"
//         />

//         <title> {project.name} </title>
//       </Head>
