import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Mongo from "../assets/mongo.png";
import GitHub from "../assets/github.png";
import Figma from "../assets/figma.png";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <section name="skills" className="bg-[#FBFCF8] h-screen">
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.75, delay: 0.25 }}
        className="max-w-[75%] h-screen sm:w-screen sm:h-screen mx-auto flex flex-col justify-center  from-slate-950"
      >
        <h1 className="text-4xl  md:text-6xl font-sans tracking-widest font-bold text-gray-700 ">
          SKILLS
        </h1>

        <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 text-center mt-8 py-8 place-content-evenly">
          <div className="shadow-md break-words shadow-[#dbe0e5] rounded-xl  ">
            <img className="w-10 sm:w-20 mx-auto " src={HTML} alt="HTML icon" />
            <p className="my-4 text-sm lg:text-lg text-bold">HTML</p>
          </div>
          <div className="shadow-md break-words shadow-[#dbe0e5] rounded-xl">
            <img className="w-10 sm:w-20  mx-auto " src={CSS} alt="CSS icon" />
            <p className="my-4 text-sm lg:text-lg text-bold">CSS</p>
          </div>
          <div className="shadow-md break-words shadow-[#dbe0e5] rounded-xl">
            <img
              className="w-10 sm:w-20  mx-auto "
              src={JavaScript}
              alt="Javascript icon"
            />
            <p className="my-4 text-sm lg:text-lg text-bold">JAVASCRIPT</p>
          </div>
          <div className="shadow-md break-words shadow-[#dbe0e5] rounded-xl ">
            <img
              className="w-10 sm:w-20  mx-auto "
              src={ReactImg}
              alt="React icon"
            />
            <p className="my-4 text-sm lg:text-lg text-bold">REACT</p>
          </div>
          <div className="shadow-md break-words shadow-[#dbe0e5] rounded-xl ">
            <img
              className="w-10 sm:w-20  mx-auto "
              src={Node}
              alt="Node icon"
            />
            <p className="my-4 text-sm lg:text-lg text-bold">NODE</p>
          </div>
          <div className="shadow-md break-words shadow-[#dbe0e5] rounded-xl ">
            <img
              className="w-10 sm:w-20  mx-auto "
              src={Mongo}
              alt="Mongo icon"
            />
            <p className="my-4 text-sm lg:text-lg text-bold">MONGO DB</p>
          </div>
          <div className="shadow-md break-words shadow-[#dbe0e5] rounded-xl ">
            <img
              className="w-10 sm:w-20  mx-auto "
              src={GitHub}
              alt="Github icon"
            />
            <p className="my-4 text-sm lg:text-lg text-bold">GITHUB</p>
          </div>
          <div className="shadow-md break-words shadow-[#dbe0e5] rounded-xl ">
            <img
              className="w-10 sm:w-20  mx-auto "
              src={Figma}
              alt="Figma icon"
            />
            <p className="my-4 text-sm lg:text-lg text-bold">FIGMA</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
