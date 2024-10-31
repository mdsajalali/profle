import { useState } from "react";
import { CgArrowRight } from "react-icons/cg";
import { FiArrowUpRight } from "react-icons/fi";
import Container from "../../../components/shared/Container";
import offer_one from "../../../assets/images/fitness/offer_one.png";
import offer_two from "../../../assets/images/fitness/offer_two.jpg";
import { motion } from "framer-motion";

interface Project {
  id: number;
  img: string;
  title: string;
  category: string;
}

const allProjects: Project[] = [
  {
    id: 1,
    img: offer_one,
    title: "Personalized Fitness Plans",
    category: "Private Training",
  },
  {
    id: 2,
    img: offer_two,
    title: "One-on-One Coaching Sessions",
    category: "Private Training",
  },
  {
    id: 3,
    img: offer_one,
    title: "Nutritional Guidance",
    category: "Athletes Training",
  },
  {
    id: 4,
    img: offer_two,
    title: "Performance Assessment",
    category: "Group Training",
  },
];

const FitnessOffers = () => {
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
        <div className=" max-w-[988px] mx-auto" id="work">
          <div className="  text-center">
            <motion.h2
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="md:text-[24px] text-[14px] font-medium text-text_primary dark:text-text_secondary"
            >
              My Coaching Offers
            </motion.h2>
            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:text-[56px] text-2xl my-2 md:leading-[67.2px] leading-[28.8px] font-semibold text-secondary dark:text-white"
            >
              Discover the full range of services offered by my coaching.
            </motion.h1>
            <motion.p
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:text-[16px] text-[12px] md:leading-[25.6px] leading-[19.2px] text-text_primary"
            >
              My Coaching offers personalized fitness plans and expert guidance
              to help you reach your goals and boost your performance.
            </motion.p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-[10px] mt-5">
            {["Private Training", "Group Training", "Athletes Training"].map(
              (category) => (
                <button
                  key={category}
                  className={` sm:py-4 sm:px-[10px] px-[5px] py-[10px] rounded-full transition border-text_primary border hover:bg-secondary dark:hover:bg-white dark:hover:text-black hover:text-white flex items-center justify-center ${
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
              )
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center md:grid-cols-3 lg:grid-cols-4 gap-[30px]   md:my-[60px] my-5">
          {filteredProjects.map((project) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: project.id * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={project.img}
                alt={`offer ${project.id}`}
                className="rounded-lg h-[340px] object-cover"
              />
              <h1 className="my-[10px] dark:text-white text-secondary text-[14px] md:text-[16px] text-center font-medium">
                {project.title}
              </h1>
            </motion.div>
          ))}
        </div>
        <div className="flex items-center pb-10 justify-center">
          <motion.button
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex dark:border-white dark:text-white items-center gap-2 justify-center bg-transparent hover:bg-secondary  hover:text-white transition-all text-black border dark:hover:bg-white dark:hover:text-black border-secondary rounded-full py-4 px-7"
          >
            Get In touch <CgArrowRight size={20} />
          </motion.button>
        </div>
      </Container>
    </div>
  );
};

export default FitnessOffers;


