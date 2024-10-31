import { GoVerified } from "react-icons/go";
import Container from "../../../components/shared/Container";
import verify_elementor from "../../../assets/images/viewdemo/verify-elementor.png";
import banner from "../../../assets/images/viewdemo/elementor_banner.png";
import { motion } from "framer-motion";

const CustomizableElementor = () => {
  return (
    <div
      className="bg-gray-200  py-10 md:py-14"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 place-items-center md:gap-20">
          <div>
            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="text-[25px] md:text-[42px] dark:text-black font-semibold"
            >
              Completely customizable with Elementor
            </motion.h1>
            <motion.p
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-[#555555] text-[14px] md:text-[16px] my-2"
            >
              Get started with Elementor, and everything will feel familiar and
              intuitive. Plus, it's free to use.
            </motion.p>
            <div>
              <div className="flex items-center flex-wrap justify-between">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-1">
                    <GoVerified size={14} color="#555555" />
                    <span className="text-[#555555] text-[14px] md:text-[16px]">
                      Drag and Drop Editor
                    </span>
                  </div>
                  <div className="flex items-center gap-1 my-2">
                    <GoVerified size={14} color="#555555" />
                    <span className="text-[#555555] text-[14px] md:text-[16px]">
                      Motion Effects
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GoVerified size={14} color="#555555" />
                    <span className="text-[#555555] text-[14px] md:text-[16px]">
                      No Coding Required
                    </span>
                  </div>
                  <div className="flex items-center gap-1 my-2">
                    <GoVerified size={14} color="#555555" />
                    <span className="text-[#555555] text-[14px] md:text-[16px]">
                      Lightning-Fast Loading Speed
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GoVerified size={14} color="#555555" />
                    <span className="text-[#555555] text-[14px] md:text-[16px]">
                      Free & Pro Widgets
                    </span>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center sm:mt-0 mt-2 gap-1">
                    <GoVerified size={14} color="#555555" />
                    <span className="text-[#555555] text-[14px] md:text-[16px]">
                      Free & Pro Widgets
                    </span>
                  </div>
                  <div className="flex items-center gap-1 my-2">
                    <GoVerified size={14} color="#555555" />
                    <span className="text-[#555555] text-[14px] md:text-[16px]">
                      Effortless Customization
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GoVerified size={14} color="#555555" />
                    <span className="text-[#555555] text-[14px] md:text-[16px]">
                      Completely Free
                    </span>
                  </div>
                  <div className="flex items-center gap-1 my-2">
                    <GoVerified size={14} color="#555555" />
                    <span className="text-[#555555] text-[14px] md:text-[16px]">
                      Custom CSS
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GoVerified size={14} color="#555555" />
                    <span className="text-[#555555] text-[14px] md:text-[16px]">
                      Custom Counting
                    </span>
                  </div>
                </motion.div>
              </div>
              <motion.button
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
                className="flex md:mt-10 mt-5 items-center justify-center gap-2 cursor-pointer hover:bg-[#2B2E4A]  hover:text-white border border-[#938F99]   rounded-full px-4 md:px-8 py-3 md:py-4 transition-all text-[12px] text-black font-semibold group"
              >
                Purchase Now
              </motion.button>
            </div>
          </div>
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              viewport={{ once: true }}
              src={verify_elementor}
              alt="img"
            />
        </div>
      </Container>
    </div>
  );
};

export default CustomizableElementor;
