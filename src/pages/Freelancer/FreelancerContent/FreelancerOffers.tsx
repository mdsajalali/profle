import { useState } from "react";
import { CgArrowRight } from "react-icons/cg";
import { FiArrowUpRight } from "react-icons/fi";
import Container from "../../../components/shared/Container";
import freelancer_one from "../../../assets/images/freelancer/tag.svg";
import freelancer_two from "../../../assets/images/freelancer/contract.svg";
import freelancer_three from "../../../assets/images/freelancer/query_stats.svg";
import freelancer_four from "../../../assets/images/freelancer/captive_portal.svg";
import { useTheme } from "next-themes";
import {motion} from "framer-motion"

interface Project {
  id: number;
  img: string;
  title: string;
  category: string;
  desc: string;
}

const allProjects: Project[] = [
  {
    id: 1,
    img: freelancer_one,
    title: "Keyword Research",
    category: "SEO Optimization",
    desc: "I provide in-depth keyword research to identify high-traffic, relevant keywords that will boost your website's visibility and drive targeted traffic.",
  },
  {
    id: 2,
    img: freelancer_two,
    title: "Email Marketing",
    category: "On-Page Optim",
    desc: "On-Page Optimization focuses on enhancing your website's content, meta tags, and structure to improve search engine rankings and user experience.",
  },
  {
    id: 3,
    img: freelancer_three,
    title: "PPC Advertising",
    category: "Technical SEO",
    desc: "Technical SEO focuses on improving the technical aspects of your website to enhance its visibility in search engines.",
  },
  {
    id: 4,
    img: freelancer_four,
    title: "Brand Strategy",
    category: "Backlink Building",
    desc: "Backlink Building is crucial for improving your website's authority and rankings through quality backlinks.",
  },
];

const FreelancerOffers = () => {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProjects = selectedCategory
    ? allProjects.filter((project) => project.category === selectedCategory)
    : allProjects;

  const filterProjects = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="bg-[#ddd] dark:bg-dark_secondary pt-10">
      <Container>
        <div className="max-w-[988px] mx-auto" id="work">
          <div className="text-center">
            <motion.h2
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:text-[24px] text-[14px] font-medium text-text_primary dark:text-text_secondary"
            >
              Portfolio & Service
            </motion.h2>
            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:text-[56px] text-2xl my-2 md:leading-[67.2px] leading-[28.8px] font-semibold text-secondary dark:text-white"
            >
              Explore My Portfolio and Success Stories
            </motion.h1>
            <motion.p
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="md:text-[16px] text-[12px] md:leading-[25.6px] leading-[19.2px] text-text_primary"
            >
              As a skilled Digital Marketing freelancer, I’ve helped clients
              grow their brands through effective campaigns and strategies.
              Check out my portfolio to see how I can help your business
              succeed!
            </motion.p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-[10px] mt-5">
            {[
              "SEO Optimization",
              "On-Page Optim",
              "Technical SEO",
              "Backlink Building",
            ].map((category) => (
              <button
                key={category}
                className={`sm:py-4 sm:px-[10px] px-[5px] py-[10px] rounded-full transition border-text_primary border dark:hover:bg-white dark:hover:text-black  hover:bg-secondary hover:text-white flex items-center justify-center ${
                  selectedCategory === category
                    ? "bg-secondary dark:bg-white dark:text-black text-white"
                    : ""
                }`}
                onClick={() => filterProjects(category)}
              >
                <div className="flex items-center sm:text-[16px] text-[10px] gap-2">
                  {category} <FiArrowUpRight />
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] md:my-[60px] my-5">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-black py-10 px-5 rounded-lg"
            >
              <img
                src={project.img}
                alt={`offer ${project.id}`}
                className={`rounded-lg w-[42px] h-[48px] ${
                  theme === "dark" ? "filter invert" : "filter-none"
                }`}
              />
              <h1 className="my-[10px] dark:text-white text-secondary  text-[14px] md:text-[24px] font-semibold">
                {project.title}
              </h1>
              <p className="text-[#938F99] text-[16px]">{project.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center pb-10 justify-center">
          <motion.button
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex dark:border-white dark:text-white items-center gap-2 justify-center bg-transparent hover:bg-secondary hover:text-white transition-all text-black border dark:hover:bg-white dark:hover:text-black border-secondary rounded-full py-4 px-7"
          >
            Get In touch <CgArrowRight size={20} />
          </motion.button>
        </div>
      </Container>
    </div>
  );
};

export default FreelancerOffers;


