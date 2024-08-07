import { personalDetails } from "../Data.js";

export function About() {
  const {  aboutMe, aboutMeImg } = personalDetails;
  return (
    <main
      className="container mx-auto w-full mt-[350px] lg:mt-[300px]"
      id="about"
    >
      <section className="project-header">
        <h3 className="text-[35px] font-bold tracking-normal text-primary-title text-center">
          About Me
        </h3>
        <div className="profile flex flex-col justify-center items-center lg:flex-row lg:justify-between mt-5">
          <img
            src={aboutMeImg}
            alt="Mohamed Ashraf"
            className="hidden lg:block w-[320px] mt-12"
          />

          <img
            src={aboutMeImg}
            alt="Mohamed Ashraf"
            className="block lg:hidden w-[320px] mt-12"
          />

          <article className="text-primary-title text-[16px] mt-14 leading-9 lg:mx-16 lg:text-[18px] w-full">
            {aboutMe}
          </article>
        </div>
      </section>
    </main>
  );
}
