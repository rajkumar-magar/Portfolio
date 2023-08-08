import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <section name="contact" className=" bg-[#FBFCF8] h-screen ">
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.75, delay: 0.5, type:"spring"}}
        className="max-w-[75%] h-screen sm:w-screen sm:h-screen mx-auto  flex justify-evenly from-slate-950 "
      >
        <form
          method="POST"
          action="https://getform.io/f/20dec506-b59a-4c10-9d80-6edc67924343"
          className="max-w-[50%] sm:w-screen sm:h-screen  min-w-fit gap-6 top-0 py-8 mx-auto flex flex-col justify-center  "
        >
          <div className="mx-auto">
            <h1 className="text-4xl md:text-6xl font-sans tracking-wide font-bold mt-8 text-gray-700 ">
              CONTACT
            </h1>
          </div>
          <input
            className="p-2 bg-black-100 ring-2 ring-opacity-70 ring-cyan-900"
            type="text"
            placeholder="Name"
            name="name"
            required
          />
          <input
            className="my-4 p-2 ring-2 ring-opacity-70 ring-cyan-900"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <textarea
            className="p-2 ring-2 ring-opacity-70 ring-cyan-900"
            name="message"
            rows="8"
            placeholder="Message"
            required
          ></textarea>
          <button className="button sm:px-0 px-5 mx-[25%] my-4 bg-gradient-to-r from-[#3a7bd5] to-[#3a6073] rounded-md border-none box-border text-slate-200 cursor-pointer flex-shrink-0 text-base font-bold  w-fit 
                              sm:w-auto h-14 xl:w-auto xl:text-xl text-center shadow-lg hover:scale-110 transition-all duration-500 select-none">
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
