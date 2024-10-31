import hero from "../../../assets/images/viewdemo/hero.png";
import Container from "../../../components/shared/Container";
import wordpress from "../../../assets/images/viewdemo/wordpress.png";
import elementor from "../../../assets/images/viewdemo/elementor.png";
import css from "../../../assets/images/viewdemo/css_3.png";
import html from "../../../assets/images/viewdemo/html_5.png";
import js from "../../../assets/images/viewdemo/js.png";
import monkey from "../../../assets/images/viewdemo/monkey.png";
import react from "../../../assets/images/viewdemo/react.png";
import play from "../../../assets/images/viewdemo/play_circle.svg";
import laptop from "../../../assets/images/viewdemo/laptop_mac.svg";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ViewDemoHero = () => {
  const [countUIElements, setCountUIElements] = useState(0);
  const [countDesignConcepts, setCountDesignConcepts] = useState(0);
  const [countPages, setCountPages] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  const values = {
    uiElements: 350,
    designConcepts: 6,
    pages: 12,
  };

  const handleScroll = () => {
    if (window.scrollY > 700 && !isCounting) {
      setIsCounting(true);

      const countTo = (
        setCount: React.Dispatch<React.SetStateAction<number>>,
        value: number
      ) => {
        let start = 0;
        const duration = 1000;
        const incrementTime = duration / value;

        const counter = setInterval(() => {
          start += 1;
          setCount(start);

          if (start === value) {
            clearInterval(counter);
          }
        }, incrementTime);
      };

      countTo(setCountUIElements, values.uiElements);
      countTo(setCountDesignConcepts, values.designConcepts);
      countTo(setCountPages, values.pages);
    } else if (window.scrollY <= 1000) {
      setIsCounting(false);
      setCountUIElements(0);
      setCountDesignConcepts(0);
      setCountPages(0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCounting]);
  return (
    <Container>
      <div className=" rounded-lg my-4">
        <div className="bg-gradient-to-b from-[#2B2E4A] to-white rounded-lg md:h-[743px] h-[500px] w-full">
          <div className="max-w-[600px] mx-auto text-center py-[83px] px-4 md:px-0 ">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white font-semibold md:text-[50px] text-[35px]"
            >
              Trusted Platform to Elevate Your Career
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="md:pb-10 md:pt-5 py-2 text-[14px] md:text-[16px] text-[#E0E0E0]"
            >
              Our platform is designed to provide trusted resources and
              opportunities to help you build and elevate your career. With
              expert guidance and a wealth of tools, we aim to support your
              journey toward lasting success in your professional growth.
            </motion.p>
            <div className="flex items-center justify-center gap-1 md:gap-2">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="flex md:mt-0 mt-5 items-center justify-center gap-2 cursor-pointer bg-white hover:bg-white border hover:text-black rounded-full px-4 md:px-8 py-3 md:py-4 transition-all text-[12px] text-black font-semibold group"
              >
                Explore NextUp
                <img
                  src={play}
                  alt="Play"
                  className="transition-all duration-200 ease-in-out group-hover:filter group-hover:brightness-0"
                />
              </motion.button>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="flex md:mt-0 mt-5 items-center justify-center gap-2 cursor-pointer bg-transparent hover:bg-white border hover:text-black rounded-full px-4 md:px-8 py-3 md:py-4 transition-all text-[12px] text-white font-semibold group"
              >
                One Page Demo
                <img
                  src={laptop}
                  alt="Img"
                  className="transition-all duration-200 ease-in-out group-hover:filter group-hover:brightness-0"
                />
              </motion.button>
            </div>
          </div>
        </div>

        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          viewport={{ once: true }}
          src={hero}
          alt="Image"
          className="w-full md:-mt-56 -mt-8 h-auto max-w-[1070px] mx-auto pb-20 px-4 object-cover rounded-md"
        />
      </div>
      <div className="flex items-center gap-5 sm:gap-10 md:gap-20 justify-center text-center">
        <div>
          <h1 className="text-[35px] md:text-[56px] font-semibold">
            {countUIElements}+
          </h1>
          <p className="text-[#777777] text-[14px] md:text-[16px]">
            UI Elements
          </p>
        </div>
        <div>
          <h1 className="text-[35px] md:text-[56px] font-semibold">
            {countDesignConcepts}
          </h1>
          <p className="text-[#777777] text-[14px] md:text-[16px]">
            Design Concepts
          </p>
        </div>
        <div>
          <h1 className="text-[35px] md:text-[56px] font-semibold">
            {countPages}+
          </h1>
          <p className="text-[#777777] text-[14px] md:text-[16px]">Pages</p>
        </div>
      </div>
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-[20px] md:text-2xl font-medium text-center my-3 md:my-5"
        >
          Save time and money by choosing Profle for your website.
        </motion.h1>
      </div>
      <div className="flex items-center flex-wrap justify-center gap-5 md:gap-10 my-10">
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src={react}
            alt="react"
            className="w-10 h-10 md:w-[60px] md:h-[60px] object-cover"
          />
        </motion.a>
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img
            src={wordpress}
            alt="wordpress"
            className="w-10 h-10 md:w-[60px] md:h-[60px] object-cover"
          />
        </motion.a>

        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <img
            src={elementor}
            alt="elementor"
            className="w-10 h-10 md:w-[60px] md:h-[60px] object-cover"
          />
        </motion.a>

        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <img
            src={js}
            alt="js"
            className="w-10 h-10 md:w-[60px] md:h-[60px] object-cover"
          />
        </motion.a>

        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={css}
            alt="css"
            className="w-10 h-10 md:w-[60px] md:h-[60px] object-cover"
          />
        </motion.a>

        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <img
            src={html}
            alt="html"
            className="w-10 h-10 md:w-[60px] md:h-[60px] object-cover"
          />
        </motion.a>
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={monkey}
            alt="monkey"
            className="w-10 h-10 md:w-[60px] md:h-[60px] object-cover"
          />
        </motion.a>
      </div>
    </Container>
  );
};

export default ViewDemoHero;
