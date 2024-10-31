import Container from "../../../components/shared/Container";
import { FaWhatsapp } from "react-icons/fa";
import CountDown from "../../../components/shared/CountDown";
import { LuMailMinus } from "react-icons/lu";
import { CgClose } from "react-icons/cg";
import { useState } from "react";
import { motion } from "framer-motion";

interface TUserProps {
  user_profile: string;
}

const UserProfileTwo = ({ user_profile }: TUserProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <div className="flex justify-between items-center xl:flex-row flex-col gap-7 md:pb-16 md:pt-10   pb-10">
        <div className=" order-2 md:order-1 max-w-[625px]">
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
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="flex items-center flex-wrap md:justify-start justify-center gap-3 md:gap-5"
            >
              <button className="flex hover:bg-secondary hover:text-white items-center justify-center dark:hover:bg-white  gap-2 cursor-pointer rounded-full  transition-all md:text-[16px] md:py-5 md:px-[30px] dark:text-white dark:hover:text-black dark:border dark:border-white p-[10px]  text-secondary text-[14px] border-secondary border font-semibold">
                Chat Real-Time On <FaWhatsapp size={24} />
              </button>
              <button className="flex hover:bg-secondary hover:text-white items-center justify-center dark:hover:bg-white  gap-2 cursor-pointer rounded-full  transition-all md:text-[16px] md:py-5 md:px-[30px] dark:text-white dark:hover:text-black dark:border dark:border-white p-[10px]  text-secondary text-[14px] border-secondary border font-semibold">
                ethanroks@emaple.com <LuMailMinus size={24} />
              </button>
            </motion.div>
          </div>
        </div>

        <div className="flex order-1 justify-center items-center">
          <motion.a
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={user_profile}
              alt="Open Modal"
              className="cursor-pointer"
              onClick={handleOpen}
            />
          </motion.a>

          {/* Modal */}
          {isOpen && (
            <div className="fixed inset-0  flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-black/10 rounded-lg p-4 relative w-[400px] md:max-w-[626px] md:w-full">
                <button
                  onClick={handleClose}
                  className="absolute top-2 right-2 z-[9999] text-white"
                >
                  <CgClose size={24} />
                </button>
                <iframe
                  className="w-[325px] md:w-[560px]"
                  height="315"
                  src="https://www.youtube.com/embed/R5HzwhTiqkk?si=_0QMPZzSX72AeMhj"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default UserProfileTwo;
