/* eslint-disable react/prop-types */
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Project({
  title,
  image,
  description,
  techStack,
  previewLink,
  githubLink,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="project-cart rounded-2xl mt-2 overflow-hidden w-[300px] lg:w-[400px] md:w-[380px] shadow-lg shadow-purple-500/50"
    >
      <img src={image} alt="Project Image" />
      <div className="details bg-cart p-4">
        <h3 className="text-white title text-xl lg:text-[22px] font-bold">
          {title}
        </h3>
        <p className="text-gray-300 my-3 leading-7 text-[14px]">
          {description}
        </p>
        <p className="text-[12px] text-primary-title">
          Tech Stack: {techStack}
        </p>
        <div className="links my-3 flex items-center">
          <div className="live-preview">
            <FontAwesomeIcon icon={faLink} className="text-gray-100" />
            <span className="text-gray-100 underline mx-3 text-sm">
              <a href={previewLink} className="text-gray-100">
                Live Preview
              </a>
            </span>
          </div>
          <div className="github mx-2">
            <FontAwesomeIcon icon={faGithub} className="text-gray-100" />
            <span className="text-gray-100 underline mx-3 text-sm">
              <a href={githubLink} className="text-gray-100">
                View Code
              </a>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
