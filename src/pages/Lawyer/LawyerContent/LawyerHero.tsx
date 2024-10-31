import { FaWhatsapp } from "react-icons/fa";
import Container from "../../../components/shared/Container";
import lawyer_hero from "../../../assets/images/lawyer/lawyer-hero.png";
import { useEffect, useRef, useState } from "react";
import banner_img from "../../../assets/images/lawyer/lawyer_banner.png";
import banner_img_dark from "../../../assets/images/lawyer/lawyer_banner_dark.png";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const LawyerHero = () => {
  const [experience, setExperience] = useState(0);
  const [clients, setClients] = useState(0);
  const [cases, setCases] = useState(0);
  const hasScrolled = useRef(false);
  const { theme } = useTheme();

  const animateCounts = () => {
    animateCount(10, setExperience);
    animateCount(80, setClients);
    animateCount(98, setCases);
  };

  const animateCount = (
    target: number,
    setter: React.Dispatch<React.SetStateAction<number>>
  ) => {
    let count = 0;
    const interval = setInterval(() => {
      if (count < target) {
        count++;
        setter(count);
      } else {
        clearInterval(interval);
      }
    }, 50);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !hasScrolled.current) {
        hasScrolled.current = true;
        animateCounts();
      } else if (window.scrollY <= 100) {
        hasScrolled.current = false;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="  md:-mt-0 -mt-[27px] h-[560px]"
      style={{
        backgroundImage: `url(${
          theme === "dark" ? banner_img_dark : banner_img
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <div className="flex flex-col lg:flex-row items-center h-[560px] gap-10 justify-between">
          <div className="text-center md:text-left">
            <motion.h3
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="text-[14px] md:text-2xl font-medium text-[#E0E0E0] mt-6"
            >
              Personal Lawyer
            </motion.h3>
            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-[32px] md:text-[56px] md:leading-[67px] leading-[38px] font-semibold text-white"
            >
              Personalized Legal Care for Your Success
            </motion.h1>
            <motion.p
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-[12px] md:text-[16px] md:leading-[25px] leading-[19px] my-5 text-[#E0E0E0]"
            >
              We provide personalized legal consultations with a focus on expert
              guidance and dedicated support. Whether you need advice or
              solutions for complex matters, our team ensures you receive the
              care and attention your case deserves.
            </motion.p>
            <motion.button
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="flex mt-5 md:mx-0 mx-auto items-center justify-center gap-2 cursor-pointer bg-red-500 rounded-full py-2 px-3 md:px-6 md:py-4   transition-all text-[12px] text-white font-semibold"
            >
              Make an appointment <FaWhatsapp size={20} />
            </motion.button>
          </div>

          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            src={lawyer_hero}
            alt="Image"
            className=" md:hidden lg:block pl-3 md:mt-[200px] w-full md:w-auto"
          />
        </div>
        <div className="flex   items-center text-center xl:gap-10 md:gap-5 gap-2 md:mt-5 mt-[220px]">
          <div className="border-[#E84545] border-l h-20 w-2" />
          <div>
            <h1 className="text-3xl md:text-[56px] dark:text-black font-semibold">
              {experience}
            </h1>
            <p className="text-sm md:text-[16px] mt-2 text-[#938F99]">
              Years Experience
            </p>
          </div>
          <div>
            <h1 className="text-3xl md:text-[56px] dark:text-black font-semibold">
              {clients}+
            </h1>
            <p className="text-sm md:text-[16px] mt-2 text-[#938F99]">
              Satisfied Clients
            </p>
          </div>
          <div>
            <h1 className="text-3xl md:text-[56px] font-semibold dark:text-black">
              {cases}%
            </h1>
            <p className="text-sm md:text-[16px] mt-2 text-[#938F99]">
              Successful Cases
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LawyerHero;
