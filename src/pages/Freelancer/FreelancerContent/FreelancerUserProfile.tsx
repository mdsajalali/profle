import Container from "../../../components/shared/Container";
import CountDown from "../../../components/shared/CountDown";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";

interface TUserProps {
  user_profile: string;
}

const FreelancerUserProfile = ({ user_profile }: TUserProps) => {
  return (
    <Container>
      <div className="flex   flex-wrap lg:justify-between justify-center gap-7 md:pt-16   md:pb-0  pb-10">
        <div className=" order-2 md:order-1 max-w-[625px]">
          <div className="flex  xl:mt-10 gap-5">
            <CountDown textColor={"text_primary"} />
          </div>
          <div>
            <motion.h2
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-5 mb-[10px] text-text_primary md:text-2xl text-[14px] font-medium"
            >
              Who I am
            </motion.h2>
            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-secondary dark:text-white md:text-[56px] font-semibold  text-[24px]"
            >
              Hi, I'm Samiul
            </motion.h1>
            <motion.h3
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-[#938F99] text-[24px] font-medium"
            >
              Digital Marketer and Content Creator!
            </motion.h3>
            <motion.p
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="mb-[30px]  text-text_primary text-[12px] md:text-[15px] md:leading-[25.6px] leading-[19.2px]"
            >
              A Digital Marketer and Content Creator. I help brands grow with
              engaging content and effective marketing strategies!
            </motion.p>
            <motion.button
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.4 }}
              viewport={{ once: true }}
              className="flex hover:bg-[#2B2E4A] dark:border dark:text-white hover:text-white items-center justify-center gap-2 cursor-pointer rounded-full  transition-all md:text-[16px] md:py-4 md:px-[30px]    p-[10px]  text-secondary text-[14px] border-secondary border md:mx-0 mx-auto font-semibold dark:hover:bg-white dark:hover:text-black"
            >
              Hire me <GoArrowUpRight size={18} />
            </motion.button>
          </div>
        </div>

        <div className="max-w-[626px] order-1 md:order-2 md:h-[645px] object-cover">
          <motion.a
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img src={user_profile} alt="User Profile" />
          </motion.a>
        </div>
      </div>
    </Container>
  );
};

export default FreelancerUserProfile;
