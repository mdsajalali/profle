import user from "../../../assets/images/lawyer/user.png";
import Container from "../../../components/shared/Container";
import { GoArrowUpRight } from "react-icons/go";
import {motion} from "framer-motion"

const LawyerUserProfile = () => {
  return (
    <div className="bg-[#ddd] pt-40 ">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center py-[83px]">
          <div className="order-2 lg:order-1">
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              src={user}
              alt="Image"
            />
          </div>
          <div className="order-1 lg:order-2 md:mt-0 md:text-start text-center mt-20">
            <motion.h3
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-[14px] md:text-2xl font-medium text-[#938F99]"
            >
              Who I am
            </motion.h3>
            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl xl:text-[56px] font-semibold my-5 dark:text-black"
            >
              Hi, I'm Samiul
            </motion.h1>
            <motion.h2
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-[#938F99] text-[14px] md:text-2xl font-semibold"
            >
              Your Trusted Advocate for Personalized Legal Solutions
            </motion.h2>
            <motion.p
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="my-3 md:my-[30px] md:text-[16px] text-[12px] text-[#938F99]"
            >
              As your trusted advocate, we offer personalized legal solutions
              tailored to your needs. With expert guidance and dedicated
              representation, we work to protect your rights and achieve the
              best outcomes for you.
            </motion.p>
            <motion.button
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.4 }}
              viewport={{ once: true }}
              className="flex hover:bg-[#2B2E4A] hover:text-white items-center justify-center gap-2 cursor-pointer rounded-full  transition-all md:text-[16px] md:py-4 md:px-[30px] dark:text-black dark:hover:text-white p-[10px]  text-secondary text-[14px] border-secondary border md:mx-0 mx-auto font-semibold"
            >
              Hire me <GoArrowUpRight size={18} />
            </motion.button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LawyerUserProfile;
