import React from "react";
import { motion, useInView, useAnimation, easeIn } from "framer-motion";
import { useEffect, useRef } from "react";
import imgAbt from "../assets/about.svg";
import { FaUser } from "react-icons/fa";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <section name="about" className="h-screen bg-gray-50">
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.75, delay: 0.5, ease: "easeIn" }}
        className="max-w-[75%] h-screen sm:w-screen lg:h-screen mx-auto flex flex-col justify-center "
      >
        <div className="lg:w-[40%] items-start sm:mt-[45%] xl:mt-[50%]  text-justify mt-[50%]  ">
          <h1 className="text-4xl lg:text-6xl lg:py-4 md:-mt-[20%] xl:-mt-[10%] font-sans tracking-widest font-bold text-gray-700">
            ABOUT
          </h1>

          <div className=" grid grid-flow-row md:grid-rows-2 lg:py-4 py-4 xl:py-6 text-justify justify-items-start ">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-sans h-[50px] tracking-wide font-medium text-gray-600">
              Background
            </h2>

            <div className=" lg:-my-2 my-4 xl:-my-6 sm:h-fit tracking-wide font-light leading-tight ">
              <div className="text-sm lg:text-base xl:text-2xl text-gray-900  inline-block">
                <p>
                  I graduated from <span className="font-bold">Coventry University / Softwarica College of IT and E-Commerce </span> after completing Bachelor in Information Technolgy (Hons) Computing.
                </p>
              </div>
            </div>
            <div className=" lg:my-8 my-4  lg:py-6 sm:h-fit tracking-wide font-light leading-tight">
              <div className="text-sm lg:text-base xl:text-2xl text-gray-900  inline-block">
                <p>
                 I enjoy creating web apps with a simplistic appraoch, minmal design and aesthetically pleasing interfaces.
                 My goal is to always design and build applications that provide efficeint and enagaging user experience.
                </p>
                <br />
              </div>
            </div>
          </div>
          <div className="lg:-mt-[10%]">
            <a href="https://drive.google.com/file/d/1kBWnTPKOX0jdnVAJ64YLdutDS4Zi_vhZ/view?usp=sharing"
            target="_blank">
              <button
                className="button flex sm:mx-0 justify-between items-center px-4 lg:px-6 bg-gradient-to-r from-red-500 to-indigo-800 rounded-md border-none box-border text-white cursor-pointer flex-shrink-0 text-base font-bold w-fit 
                           mx-auto sm:w-auto xl:w-[40%] md:text-base xl:text-xl h-14 text-center shadow-lg hover:scale-110 transition-all duration-500 select-none"
              >
                Resume <FaUser size={25} className="mx-2" />
              </button>
            </a>
          </div>
        </div>

        <div className="sm:w-[45%] md:mx-[55%] md:-bot-[60%] lg:-top-[60%] my-0 xl:w-[40%] xl:mx-[60%] xl:-top-[65%] hover:scale-105 transition-all duration-500 select-none justify-center shrink  relative">
          <img src={imgAbt} alt={`ImageAbout `} className="lg:h-full " />
        </div>
      </motion.div>
    </section>
  );
};

export default About;
