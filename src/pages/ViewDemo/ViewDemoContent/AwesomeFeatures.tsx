import Container from "../../../components/shared/Container";
import one from "../../../assets/images/viewdemo/dvr.svg";
import two from "../../../assets/images/viewdemo/insert_text.svg";
import three from "../../../assets/images/viewdemo/responsive_layout.svg";
import four from "../../../assets/images/viewdemo/settings_night_sight.svg";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    img: one,
    title: "Elementor Page Builder",
    desc: "Elementor is the best FREE WordPress Website Builder, Create beautiful sites and pages using a drag and drop interface.",
  },
  {
    id: 2,
    img: two,
    title: "Dark and Light Modes",
    desc: "Switch between Dark and Light Modes for a personalized viewing experience.",
  },
  {
    id: 3,
    img: three,
    title: "Fully Responsive Design",
    desc: "ensures your website adapts smoothly to all devices, providing an optimal experience across desktops, tablets, and smartphones.",
  },
  {
    id: 4,
    img: four,
    title: "Adaptable Google Fonts",
    desc: "A collection of Google fonts are integrated with the theme. You can use any of them that goes with your branding.",
  },
];

const AwesomeFeatures = () => {
  const { theme } = useTheme();
  
  return (
    <div className="py-10 md:py-14">
      <Container>
        <div className="text-center">
          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-[#938F99] text-[14px] md:text-[16px] font-medium"
          >
            Awesome Feature
          </motion.h2>
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-[20px] md:text-2xl font-semibold my-[10px]"
          >
            Powerful and Innovative Key Feature
          </motion.h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] mt-5 md:mt-[60px]">
          {features.map((feature) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: feature.id * 0.1 }}
              viewport={{ once: true }}
              key={feature.id}
              className="border rounded-md p-6 transition-all hover:scale-95"
            >
              <img
                src={feature.img}
                alt="img"
                className={`md:w-[64px] w-10 h-10 md:h-[64px] ${
                  theme === "dark" ? "filter invert" : "filter-none"
                }`}
              />
              <h1 className="my-2 text-[20px] md:text-2xl font-semibold">
                {feature.title}
              </h1>
              <p className="text-[14px] md:text-[16px] text-[#938F99]">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AwesomeFeatures;
