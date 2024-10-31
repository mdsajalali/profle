import { LiaFileDownloadSolid } from "react-icons/lia";
import Container from "../../../components/shared/Container";
import { Link } from "react-router-dom";
import hero_one from "../../../assets/images/hero_two/hero_one.png";
import hero_two from "../../../assets/images/hero_two/hero_two.png";
import { useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import banner_white from "../../../assets/images/hero_two/designer_banner.png";
import banner_dark from "../../../assets/images/hero_two/designer_banner_dark.png";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const DesignerHero = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { theme } = useTheme();
  return (
    <>
      <div
        className="h-[690px]"
        style={{
          backgroundImage: `url(${
            theme === "dark" ? banner_dark : banner_white
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex items-center justify-center flex-col max-w-[734px] mx-auto">
          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="md:text-2xl lg:pt-[56px] pt-[50px] dark:text-white text-[14px] font-medium text-text_primary"
          >
            Web Developer & Designer
          </motion.h2>
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:text-[80px] text-[32px] dark:text-white font-semibold text-secondary"
          >
            Aiden Walker.
          </motion.h1>
          <motion.p
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:text-[16px] text-[12px] leading-[19.2px] md:leading-[25.6px] text-text_primary text-center"
          >
            A skilled web developer with five years of front-end experience,
            specializing in responsive, user-friendly websites using HTML, CSS,
            JavaScript, and modern frameworks like React. Focuses on
            performance, cross-browser compatibility, and accessibility.
          </motion.p>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex hover:bg-white hover:text-black  md:mt-10 mt-5 cursor-pointer dark:bg-white items-center gap-1 border duration-300 bg-secondary text-white   md:px-[30px] px-[13px] py-[11px] md:py-[21px]  rounded-full"
          >
            <LiaFileDownloadSolid className="dark:text-black" />
            <button className="text-[12px] md:text-base dark:text-black">
              <Link to="/profle.pdf" download target="_blank">
                Download Resume
              </Link>
            </button>
          </motion.div>
        </div>
      </div>
      <Container>
        <div className="grid grid-cols-1 lg:-mt-56 md:-mt-64 -mt-[390px] place-items-center md:grid-cols-2 lg:grid-cols-3 gap-[30px] md:pb-20">
          {[hero_one, hero_two, hero_one].map((image, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              viewport={{ once: true }}
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={image}
                alt="Hero Image"
                className={`w-[407px] object-cover transition-opacity duration-300 ${
                  hoveredIndex === index ? " opacity-80" : "opacity-100"
                }`}
              />

              <div
                className={`absolute inset-0 flex  rounded-[20px] items-center justify-center transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="bg-[#1E1E1E80] size-[60px] rounded-full flex items-center justify-center cursor-pointer">
                  <MdOutlineArrowOutward className="text-white " size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default DesignerHero;
