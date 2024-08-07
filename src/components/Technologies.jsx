/* eslint-disable react/prop-types */
import { techIcons } from "../Data";
export function Technologies({ onRenderIcons }) {
  return (
    <main className="container mx-auto w-full mt-28 lg:mt-60" id="tech-stack">
      <section>
        <div className="tech-stack-header text-center text-lightContent">
          {/* TECH STACK TITLE  */}
          <h2 className="text-[35px] font-bold tracking-normal">
            My Tech Stack
          </h2>
          <p className="my-2 text-[18px] lg:text-[23px] lg:tracking-wide">
            Technologies I’ve been working with recently
          </p>
        </div>
        <div className="technologies-logos my-12">
          {/* TECH ICONS */}
          <div className="tech-icons grid grid-cols-3 gap-y-16 my-10 lg:grid-cols-3 place-items-center">
            {onRenderIcons(techIcons)}
          </div>
        </div>
      </section>
    </main>
  );
}
