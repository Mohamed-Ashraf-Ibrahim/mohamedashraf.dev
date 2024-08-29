import { projectDetails } from "../Data";
import Project from "./Project";
/* eslint-disable react/prop-types */
export function Projects() {
  return (
    <main className="container mx-auto w-full mt-[200px] lg:mt-[150px]" id="projects">
      <section>
        <div className="project-header text-center my-10 ">
          <h2 className="text-[35px] font-bold tracking-normal text-primary-title">
            Projects
          </h2>
          <p className="my-2 text-[18px] lg:text-[23px] lg:tracking-wide text-primary-title">
            Things I’ve built so far
          </p>
        </div>
        <div className="grid gird-cols-1 lg:grid-cols-3 lg:gap-x-[16rem] gap-y-10 place-items-center md:grid-cols-1 md:gap-x-[8rem] md:gap-y-10">
          {projectDetails.map(
            ({
              title,
              image,
              description,
              techStack,
              previewLink,
              githubLink,
            }) => (
              <Project
                key={title}
                title={title}
                image={image}
                description={description}
                techStack={techStack}
                previewLink={previewLink}
                githubLink={githubLink}
              />
            )
          )}
        </div>
      </section>
    </main>
  );
}
