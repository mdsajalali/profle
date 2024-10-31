import { CiFacebook } from "react-icons/ci";
import { FaBehance, FaWhatsapp } from "react-icons/fa";
import { RiLinkedinFill, RiTwitterXFill } from "react-icons/ri";
import Container from "../../../components/shared/Container";
import line_top from "../../../assets/images/freelancer/line-top.png";
import line_bottom from "../../../assets/images/freelancer/line-bottom.png";
import { motion } from "framer-motion";

const FreelancerHero = () => {
  return (
    <div className="relative pt-32 lg:pt-[180px] bg-gradient-to-l xl:h-[579px] from-[#E84545] dark:from-[#E84545] via-white dark:via-black to-[#2B2E4A] dark:to-[#000000] ">
      <motion.a
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img src={line_top} alt="Hero Img" className="absolute top-0 left-0" />
      </motion.a>

      <Container>
        <div className="flex text-center lg:text-start flex-col lg:flex-row  items-center justify-between md:space-x-10">
          <div className="md:w-[805px] pb-10 w-full">
            <motion.h4
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="text-[#938F99] text-[14px] md:text-2xl font-medium"
            >
              Freelancer
            </motion.h4>
            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-[32px] md:text-[70px] font-semibold"
            >
              Digital Marketer and Content Creator!
            </motion.h1>
            <motion.button
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex md:mt-0 mt-5 items-center justify-center gap-2 cursor-pointer bg-black rounded-full   md:w-[247px] px-3 md:py-4 py-2 mx-auto lg:mx-0 transition-all text-[12px] dark:bg-white dark:text-black text-white font-semibold"
            >
              Chat Real-Time On <FaWhatsapp size={24} />
            </motion.button>
          </div>
          <div className="xl:block lg:hidden md:block flex-1">
            <motion.p
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="md:text-[16px] text-[#938F99] text-[12px] mt-3 lg:mt-0"
            >
              A skilled Digital Marketer and Content Creator. I specialize in
              crafting engaging content and implementing effective marketing
              strategies that drive results. Whether you need to boost your
              online presence or create compelling campaigns, I’m here to help
              your brand thrive in the digital world!
            </motion.p>
            <div className="flex lg:justify-start  justify-center lg:mb-0 mb-32 gap-2 mt-4">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="hover:bg-black hover:dark:bg-white hover:dark:text-black dark:border-white border cursor-pointer transition-all hover:text-white border-black flex items-center justify-center rounded-full p-2"
              >
                <CiFacebook size={24} />
              </motion.div>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="hover:bg-black hover:dark:bg-white hover:dark:text-black dark:border-white border cursor-pointer transition-all hover:text-white border-black flex items-center justify-center rounded-full p-2"
              >
                <FaBehance size={24} />
              </motion.div>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="hover:bg-black hover:dark:bg-white hover:dark:text-black dark:border-white border cursor-pointer transition-all hover:text-white border-black flex items-center justify-center rounded-full p-2"
              >
                <RiTwitterXFill size={24} />
              </motion.div>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.4 }}
                viewport={{ once: true }}
                className="hover:bg-black hover:dark:bg-white hover:dark:text-black dark:border-white border cursor-pointer transition-all hover:text-white border-black flex items-center justify-center rounded-full p-2"
              >
                <RiLinkedinFill size={24} />
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
      <motion.a
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img
          src={line_bottom}
          alt="Hero Img"
          className="absolute bottom-0 right-0"
        />
      </motion.a>
    </div>
  );
};

export default FreelancerHero;
