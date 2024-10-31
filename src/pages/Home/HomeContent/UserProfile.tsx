import user_profile from "../../../assets/images/user_profile.png";
import Container from "../../../components/shared/Container";
import CountDown from "../../../components/shared/CountDown";
import {motion} from "framer-motion"

const UserProfile = () => {
  return (
    <div className="bg-[#2B2E4A1A] dark:bg-dark_secondary" id="about">
      <Container>
        <div className="md:py-[80px] py-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-[30px] w-full">
            <div className="w-full md:w-1/2">
              <motion.h2
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-[14px] md:text-2xl mb-3 md:mb-5 font-medium text-text_primary dark:text-text_secondary"
              >
                Who I am
              </motion.h2>
              <motion.h1
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="text-2xl md:text-[56px] font-semibold md:leading-[67.2px] leading-[28.8px] text-secondary dark:text-white"
              >
                Crafting Seamless Digital Experiences
              </motion.h1>
            </div>
            <div className="w-full md:w-1/2">
              <motion.p
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-text_primary text-[12px] md:text-[16px]"
              >
                A skilled web developer with five years of experience,
                specializing in front-end development. Creates responsive,
                user-friendly websites using HTML, CSS, JavaScript, and React,
                delivering high-quality projects on time.
              </motion.p>
            </div>
          </div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:pt-[60px] pt-10 md:flex hidden"
          >
            <div>
              <img src={user_profile} alt="User Profile" />
            </div>
            <div className="-ml-12 relative">
              <div className="w-0 h-0 border-t-[25px] border-r-[48px] border-t-transparent border-r-[#3E4267]" />
              <div className="xl:w-[714px] lg:w-[600px] w-[450px] h-full flex text-white gap-5 items-center justify-center text-center bg-secondary dark:bg-primary">
                <CountDown textColor={"text_primary"} />
              </div>
              <div className="absolute -left-[37px] -bottom-[37px] w-0 h-0 border-t-[50px] border-r-[25px] border-t-[#3E4267] border-r-transparent transform rotate-90" />
            </div>
          </motion.div>

          {/* Mobile Code */}
          <div className="md:pt-[60px] pt-10 flex flex-col items-center justify-center md:hidden">
            <div>
              <img
                className="w-[307px] h-[254px]"
                src={user_profile}
                alt="User Profile"
              />
            </div>
            <div className="-mt-10 relative">
              <div className="w-0 h-0 border-t-[12px] border-r-[18px] border-t-transparent border-r-[#53354A]" />
              <div className="w-[343px] h-[143px] flex text-white md:gap-5 gap-4 items-center justify-center text-center bg-secondary">
                <CountDown textColor={"text_primary"} />
              </div>
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-l-[18px] border-t-transparent border-l-[#53354A]" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UserProfile;
