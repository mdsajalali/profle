import { FaWhatsapp } from "react-icons/fa";
import Container from "../../../components/shared/Container";
import fitness_img from "../../../assets/images/fitness/fitness_hero.jpg";
import { motion } from "framer-motion";

const FitnessHero = () => {
  return (
    <Container>
      <div className="md:pb-[60px] pb-5 md:pt-[120px] pt-[80px]">
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:text-2xl md:text-start text-center text-[14px] font-medium text-text_primary"
        >
          Fitness & Gym Trainer
        </motion.h2>
        <div className="flex flex-wrap md:text-start text-center items-center justify-between">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:text-[56px] dark:text-white text-[32px] leading-[38.4px] md:leading-[67.2px] font-semibold text-black max-w-[953px]"
          >
            Sculpt Your Dream Body with Personalized Guidance
          </motion.h1>
          <motion.button
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex dark:bg-white dark:text-black md:mt-0 mt-5 mx-auto items-center justify-center gap-2 cursor-pointer bg-black rounded-full px-1 w-[200px] md:w-[247px] md:py-4 py-2 transition-all   text-[12px] text-white font-semibold"
          >
            Chat Real-Time On <FaWhatsapp size={24} />
          </motion.button>
        </div>
        <div className="pt-5  w-full h-auto  object-cover">
          <motion.a
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 3 }}
            viewport={{ once: true }}
          >
            <img
              src={fitness_img}
              alt="Fitness"
              className="rounded-md h-[157px] md:h-[589px] w-full"
            />
          </motion.a>
        </div>
        <motion.p
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-[16px]  md:text-start text-center pt-5 leading-[25.6px] text-text_primary"
        >
          Unlock the path to achieving the body you've always dreamed of with a
          personalized transformation journey tailored specifically for your
          unique goals and lifestyle. Whether you're looking to build strength,
          shed unwanted pounds, or simply embrace a healthier version of
          yourself, this program is designed to help you reach your full
          potential. Through expert guidance, customized workout plans, and
          sustainable nutrition strategies, you can finally transform your body
          in a way that is lasting and rewarding. Start today and take the first
          step toward the best version of you!
        </motion.p>
      </div>
      <div className="border-b" />
    </Container>
  );
};

export default FitnessHero;
