import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import { motion, useInView, useAnimation, delay } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import imgDes from "../assets/img1.svg";
import imgDev from "../assets/img2.svg";

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const images = [imgDes, imgDev];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const updateImageIndex = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(updateImageIndex, 5150);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen " name="home">
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.75, delay: 0.75 }}
        className="max-w-[75%] h-screen sm:w-screen sm:h-screen mx-auto flex flex-col justify-center text-justify from-slate-950  "
      >
        <div className="md:w-[40%] items-start md:mt-[40%]  text-justify mt-[25%] ">
          <p className=" font-semibold text-2xl sm:text-3xl xl:text-5xl break-words tracking-wider leading-normal line">
            Hi, I'm Raj Kumar Magar.
          </p>
          <p className=" font-medium text-xl sm:text-3xl xl:text-5xl tracking-wider leading-normal">
            & i'm a Front-End
          </p>
          <span className=" font-extrabold text-4xl sm:text-6xl xl:text-8xl tracking-widest leading-normal">
            <Typewriter
              options={{
                strings: [
                  '<span style="color: #e33b3b; ">𝓓𝓮𝓼𝓲𝓰𝓷𝓮𝓻.</span>',
                  '<span style="color: #467043; ">𝙳𝚎𝚟𝚎𝚕𝚘𝚙𝚎𝚛.</span>',
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 0.25,
              }}
            />
          </span>

          <div className="py-8 ">
            <Link to="projects" smooth={true} duration={900}>
              <button
                className="button hover:scale-110 px-4 lg:px-6 bg-gradient-to-r from-blue-500 to-indigo-700 rounded-md border-none box-border text-white cursor-pointer flex-shrink-0 text-base font-bold w-fit 
                            sm:w-auto xl:w-[40%] xl:text-xl h-14 text-center  shadow-lg transition-all duration-500 select-none"
              >
                View Projects
              </button>
            </Link>
          </div>
        </div>

        <div className="relative sm:w-[45%]  md:-bot-[60%] md:mx-[55%] lg:-top-[40%] xl:w-[40%] xl:mx-[60%] xl:-top-[50%] shrink justify-center hover:scale-105 transition-all duration-500 select-none">
          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex}`}
            className="lg:h-full "

          />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
