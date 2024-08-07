/* eslint-disable react/prop-types */
import { toolsIcons } from "../Data";
export function Tools({ onRenderIcons }) {
  return (
    <>
      {/* TOOLS ICONS */}
      <div className="tools my-28 lg:my-32" >
        <h3 className="text-lightContent text-[35px] font-bold tracking-normal text-center">
          Tools
        </h3>
        <div className="tools-logos grid grid-cols-3 my-10 gap-y-14 lg:grid-cols-4 place-items-center">
          {onRenderIcons(toolsIcons)}
        </div>
      </div>
    </>
  );
}
