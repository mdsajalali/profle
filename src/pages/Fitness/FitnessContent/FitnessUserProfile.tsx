import Container from "../../../components/shared/Container";
import CountDown from "../../../components/shared/CountDown";
import user_profile from "../../../assets/images/fitness/fitness_user_profile.jpg";
import { FiArrowUpRight } from "react-icons/fi";
import {motion} from "framer-motion"

const FitnessUserProfile = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 md:pt-14  justify-items-center md:pb-0 pb-10">
        <div className="max-w-[626px]   md:h-[645px] object-cover">
          <motion.a
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >
            <img
              src={user_profile}
              alt="User Profile"
              className="rounded-lg h-[348px] md:h-[540px]"
            />
          </motion.a>
        </div>
        <div className="max-w-[625px]">
          <div className="flex  xl:mt-10 gap-5">
            <CountDown textColor={"text_primary"} />
          </div>
          <div>
            <motion.h2
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="mt-5 mb-[10px] text-text_primary md:text-2xl text-[14px] font-medium"
            >
              Who I am
            </motion.h2>
            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-secondary dark:text-white md:text-[56px] font-semibold  text-[24px]"
            >
              Designing Flawless Digital Experiences
            </motion.h1>
            <motion.p
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-[30px]  text-text_primary text-[12px] md:text-[15px] md:leading-[25.6px] leading-[19.2px]"
            >
              A skilled web developer with five years of experience,
              specializing in front-end development. Creates responsive,
              user-friendly websites using HTML, CSS, JavaScript, and React,
              delivering high-quality projects on time.
            </motion.p>
            <motion.button
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="flex items-center hover:bg-[#2B2E4A] hover:text-white justify-center gap-2 cursor-pointer rounded-full  transition-all md:text-[16px] md:py-5 md:px-[30px] dark:text-white p-[10px]  text-secondary text-[16px] border-secondary dark:hover:bg-white dark:hover:text-black border font-semibold"
            >
              Book a Schedule <FiArrowUpRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FitnessUserProfile;
