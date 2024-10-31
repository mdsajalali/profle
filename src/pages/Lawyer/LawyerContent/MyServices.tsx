import { FaArrowRight } from "react-icons/fa";
import Container from "../../../components/shared/Container";
import image_one from "../../../assets/images/lawyer/personal_injury.svg";
import image_three from "../../../assets/images/lawyer/family_home.svg";
import image_two from "../../../assets/images/lawyer/bar_chart.svg";
import image_four from "../../../assets/images/lawyer/apartment.svg";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    img: image_one,
    title: "Personal Injury Representation",
    desc: "Get expert legal support for accidents, injuries, and claims, ensuring you receive the compensation you deserve.",
  },
  {
    id: 2,
    img: image_two,
    title: "Business Legal Advisory",
    desc: "Benefit from tailored legal advice for business formation, contracts, and compliance to help your company thrive.",
  },
  {
    id: 3,
    img: image_three,
    title: "Family Law Services",
    desc: "Navigate sensitive matters like divorce, child custody, and support with compassionate and effective legal assistance.",
  },
  {
    id: 4,
    img: image_four,
    title: "Estate Planning and Probate",
    desc: "Plan your estate with confidence, including wills, trusts, and probate services, to secure your legacy and protect your family’s future.",
  },
];

const MyServices = () => {
  const { theme } = useTheme();

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:pt-[100px] pt-10">
        <div>
          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[14px] md:text-2xl font-medium text-center md:text-start text-[#938F99]"
          >
            My Service
          </motion.h2>
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl md:text-[46px] font-semibold leading-[28px] md:leading-[56px] text-center md:text-start"
          >
            Comprehensive Legal Services for Every Need
          </motion.h1>
        </div>
        <div>
          <motion.p
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-start text-[12px] md:text-[14px]  -mt-5 md:-mt-0"
          >
            As a skilled Digital Marketing freelancer, I’ve helped clients grow
            their brands through effective campaigns and strategies. Check out
            my portfolio to see how I can help your business succeed!
          </motion.p>
          <motion.button
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex hover:bg-[#2B2E4A] hover:text-white mx-auto md:mx-0 my-5  items-center justify-center gap-2 cursor-pointer rounded-full  transition-all md:text-[16px] md:py-4 md:px-[30px] dark:text-white p-[10px]  text-secondary text-[12px] border-secondary border font-semibold"
          >
            Get In Touch <FaArrowRight size={20} />
          </motion.button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:pt-10 pt-3 pb-[100px] md:grid-cols-3 lg:grid-cols-4 gap-[30px] w-full">
        {services?.map((service) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: service.id * 0.2 }}
            viewport={{ once: true }}
            key={service.id}
            className="border md:text-start text-center hover:scale-95 transition-all rounded-md p-6"
          >
            <img
              src={service.img}
              alt="Image"
              className={`md:w-[42px] mx-auto md:mx-0 w-[21px] h-[26px] md:h-[53px] ${
                theme === "dark" ? "filter invert" : "filter-none"
              }`}
            />
            <h1 className="py-2 text-[14px] md:text-2xl font-semibold">
              {service.title}
            </h1>
            <p className="text-[12px] md:text-[16px] text-[#938F99]">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

export default MyServices;
