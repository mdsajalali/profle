import Container from "../../../components/shared/Container";
import one from "../../../assets/images/viewdemo/one.png";
import two from "../../../assets/images/viewdemo/two.png";
import three from "../../../assets/images/viewdemo/three.png";
import four from "../../../assets/images/viewdemo/four.png";
import five from "../../../assets/images/viewdemo/five.png";
import six from "../../../assets/images/viewdemo/six.png";
import { GoArrowUpRight } from "react-icons/go";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const WebsitePreview = () => {
  const { theme, setTheme } = useTheme();

  const isToggled = theme === "dark";

  const handleToggle = () => {
    setTheme(isToggled ? "light" : "dark");
  };
  return (
    <div className="bg-[#2B2E4A1A] py-10 md:py-20">
      <Container>
        <div className="text-center max-w-screen-xl mx-auto px-4">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true }}
            className="text-[#999999] opacity-30 text-[36px] sm:text-[56px] md:text-[76px] lg:text-[86px] md:leading-[80px] leading-10 font-bold"
          >
            PRE-CRAFTED WEBSITE TEMPLATES
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-[24px] sm:text-[32px] md:text-[48px] lg:text-[56px] font-semibold lg:-mt-[84px] md:-mt-[65px] -mt-10 "
          >
            Fully customizable, Pre-built website demos designed to meet your
            specific needs.
          </motion.h2>
        </div>
        <div className="flex items-center justify-center gap-2 md:pt-[61px]">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            onClick={handleToggle}
            className={`flex md:mt-0 mt-5 items-center justify-center gap-2 cursor-pointer border border-[#938F99] rounded-full px-4 md:px-8 py-3 md:py-4 transition-all text-[12px] font-semibold group ${
              isToggled ? " bg-[#2B2E4A] text-white" : "bg-white text-black"
            }`}
          >
            Night Mode <GoArrowUpRight size={18} />
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            onClick={handleToggle}
            className={`flex md:mt-0 mt-5 items-center justify-center gap-2 cursor-pointer border border-[#938F99] rounded-full px-4 md:px-8 py-3 md:py-4 transition-all text-[12px] font-semibold group ${
              isToggled ? "bg-white text-black" : " bg-[#2B2E4A] text-white"
            }`}
          >
            Light Mode <GoArrowUpRight size={18} />
          </motion.button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-[60px] px-4">
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            viewport={{ once: true }}
            href="/home"
            className="bg-white p-5 w-full mx-auto rounded-lg"
          >
            <img
              src={one}
              alt="Img"
              className="md:w-[373px] md:h-[373px] w-full object-cover"
            />
            <h1 className="text-[16px] mt-5 dark:text-black">Developer</h1>
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            viewport={{ once: true }}
            href="/designer"
            className="bg-white p-5 w-full mx-auto rounded-lg"
          >
            <img
              src={two}
              alt="Img"
              className="md:w-[373px] md:h-[373px] w-full object-cover"
            />
            <h1 className="text-[16px] mt-5 dark:text-black">Designer</h1>
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            viewport={{ once: true }}
            href="/photography"
            className="bg-white p-5 w-full mx-auto rounded-lg"
          >
            <img
              src={three}
              alt="Img"
              className="md:w-[373px] md:h-[373px] w-full object-cover"
            />
            <h1 className="text-[16px] mt-5 dark:text-black">Photography</h1>
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.7 }}
            viewport={{ once: true }}
            href="/fitness"
            className="bg-white p-5 w-full mx-auto rounded-lg"
          >
            <img
              src={four}
              alt="Img"
              className="md:w-[373px] md:h-[373px] w-full object-cover"
            />
            <h1 className="text-[16px] mt-5 dark:text-black">Fitness</h1>
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            viewport={{ once: true }}
            href="/freelancer"
            className="bg-white p-5 w-full mx-auto rounded-lg"
          >
            <img
              src={five}
              alt="Img"
              className="md:w-[373px] md:h-[373px] w-full object-cover"
            />
            <h1 className="text-[16px] mt-5 dark:text-black">Freelancer</h1>
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.9 }}
            viewport={{ once: true }}
            href="/lawyer"
            className="bg-white p-5 w-full mx-auto rounded-lg"
          >
            <img
              src={six}
              alt="Img"
              className="md:w-[373px] md:h-[373px] w-full object-cover"
            />
            <h1 className="text-[16px] mt-5 dark:text-black">Lawyer</h1>
          </motion.a>
        </div>
      </Container>
    </div>
  );
};

export default WebsitePreview;
