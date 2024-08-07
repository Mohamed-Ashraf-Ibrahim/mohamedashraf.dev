/* eslint-disable react/no-unescaped-entities */
import { personalDetails } from "../Data.js";
import {  motion, useInView } from "framer-motion";
import { useRef } from "react";
export function Hero() {
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const aRef = useRef(null);
  const imgRef = useRef(null);

  const h1InView = useInView(h1Ref, { once: true });
  const pInView = useInView(pRef, { once: true });
  const aInView = useInView(aRef, { once: true });
  const imgInView = useInView(aRef, { once: true });
  const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.3,
      },
    }),
  };

  const { name, title, about, img, cvLink } = personalDetails;
  return (
    <section id="hero">
      <div className="container mx-auto my-[160px] lg:my-[200px] w-full flex flex-col lg:flex-row-reverse ">
        <motion.img
          ref={imgRef}
          initial="hidden"
          animate={imgInView ? "visible" : "hidden"}
          variants={itemVariants}
          custom={0.2}
          className="hidden lg:w-96 lg:block"
          src={img}
        ></motion.img>
        <motion.div></motion.div>
        <div className="flex flex-col items-center text-left lg:w-full justify-start lg:block">
          <motion.h1
            ref={h1Ref}
            initial="hidden"
            animate={h1InView ? "visible" : "hidden"}
            variants={itemVariants}
            custom={1.5}
            className="text-white text-[28px] md:text-[50px] w-full tracking-normal leading-relaxed font-bold mt-3 lg:text-5xl lg:tracking-normal lg:leading-snug"
          >
            Hi 👋, I'm
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent block font-extrabold">
              {name}
            </span>{" "}
            a {title}
          </motion.h1>
          <motion.p
            ref={pRef}
            initial="hidden"
            animate={pInView ? "visible" : "hidden"}
            variants={itemVariants}
            custom={1.6}
            className="text-primary-title tracking-wider leading-7 my-3 lg:text-[20px] text-[14.8px]"
          >
            {about}
          </motion.p>
          <div className="flex text-left">
            <motion.a
              ref={aRef}
              initial="hidden"
              animate={aInView ? "visible" : "hidden"}
              variants={itemVariants}
              custom={2}
              href={cvLink}
              target="_blank"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l hover:opacity-90 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-lg px-6 py-3  me-2 mb-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105  mt-4"
            >
              View CV
            </motion.a>
            <motion.a
              ref={aRef}
              initial="hidden"
              animate={aInView ? "visible" : "hidden"}
              variants={itemVariants}
              custom={2}
              href="#contacts"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l hover:opacity-90 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-lg px-6 py-3 text-left me-2 mb-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 inline-block mt-4 mx-5"
            >
              Hire Me
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
