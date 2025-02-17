import { CiFacebook } from "react-icons/ci";
import { FaBehance, FaWhatsapp } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
import profile from "../../../assets/images/portfolio.png";
import Container from "../../../components/shared/Container";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Container>
      <div className=" lg:min-h-screen  xl:py-20 py-10 flex items-center xl:justify-between justify-center flex-wrap   ">
        <div className="max-w-[585px]">
          <div>
            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="md:text-[24px] text-[14px] font-semibold text-text_primary xl:mt-0 md:mt-20 mt-[60px] "
            >
              Web Developer & Designer
            </motion.h1>
            <motion.h2
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:text-[56px] text-[32px] font-semibold text-secondary dark:text-white"
            >
              Jaxon Reed
            </motion.h2>
            <motion.p
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:text-[16px] text-[12px] md:my-5 my-3 text-text_primary leading-[25.6px]"
            >
              A skilled web developer with five years of front-end experience,
              specializing in responsive, user-friendly websites using HTML,
              CSS, JavaScript, and modern frameworks like React. Focuses on
              performance, cross-browser compatibility, and accessibility.
            </motion.p>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="flex items-center justify-center gap-2 cursor-pointer bg-primary hover:bg-red-600 transition-all md:w-[247px] md:h-[64px] md:text-[16px] w-[173px] h-[50px] text-[12px] text-white font-semibold">
                Chat Real-Time On <FaWhatsapp size={24} />
              </p>
            </motion.div>
            <div className="flex gap-1 sm:gap-2 text-white">
              <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                href="#"
                aria-label="Github"
                className="  hover:text-white  md:size-[64px] size-[56px] flex items-center justify-center text-primary transition border  hover:bg-primary p-2 "
              >
                <FiGithub size={24} className="dark:text-white" />
              </motion.a>
              <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                href="#"
                aria-label="Facebook"
                className="hover:text-white  md:size-[64px] size-[56px] flex items-center justify-center text-primary transition border  hover:bg-primary p-2"
              >
                <CiFacebook size={24} className="dark:text-white" />
              </motion.a>
              <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                href="#"
                aria-label="Behance"
                className="hover:text-white md:size-[64px] size-[56px] flex items-center justify-center text-primary transition border  hover:bg-primary p-2"
              >
                <FaBehance size={24} className="dark:text-white" />
              </motion.a>
              <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                href="#"
                aria-label="Twitter"
                className="hover:text-white md:size-[64px] size-[56px] flex items-center justify-center text-primary transition border  hover:bg-primary p-2"
              >
                <RiTwitterXFill size={24} className="dark:text-white" />
              </motion.a>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-[522px] flex items-center justify-center lg:h-[620px] h-[330px] lg:my-[22px] mt-10 md:mt-[100px] xl:my-0"
        >
          <img
            src={profile}
            alt="Profile"
            className="absolute lg:w-[522px] w-[291px]  lg:z-[9999] "
          />
          {/* <div className="bg-primary xl:block hidden absolute top-0 right-0  w-[680px] h-[600px]" />
          <div className="bg-primary lg:hidden block  -mt-14 ml-10   w-[314px] h-[337px]" /> */}
        </motion.div>
      </div>
    </Container>
  );
};

export default Hero;
