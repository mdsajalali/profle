import { useState } from "react";
import project_one from "../../../assets/images/project_one.png";
import project_two from "../../../assets/images/project_two.png";
import project_three from "../../../assets/images/project_three.png";
import project_four from "../../../assets/images/project_four.png";
import project_five from "../../../assets/images/project_five.png";
import project_six from "../../../assets/images/project_six.png";
import { CgArrowRight } from "react-icons/cg";
import { FiArrowUpRight } from "react-icons/fi";
import Container from "../../../components/shared/Container";
import ProjectCard from "../../../components/ProjectCard";
import { motion } from "framer-motion";

interface Project {
  id: number;
  img: string;
  title: string;
  desc: string;
  category: string;
}

const allProjects: Project[] = [
  {
    id: 1,
    img: project_one,
    title: "UI/UX Design for Streamlined Medical Consultations",
    desc: "The project delivers a user-centric UI/UX design",
    category: "UI/UX Design",
  },
  {
    id: 2,
    img: project_two,
    title: "User Experience for Personal Finance Management",
    desc: "FinTrack delivers a streamlined user experience for personal finance management",
    category: "UI/UX Design",
  },
  {
    id: 3,
    img: project_three,
    title: "Engaging User Experiences for Everyday Well-being",
    desc: "Designing engaging user experiences to enhance everyday well-being",
    category: "Front-End Development",
  },
  {
    id: 4,
    img: project_four,
    title: "Streamlining Business Solutions with Innovative UI/UX Design",
    desc: "Streamlining business operations with innovative UI/UX design",
    category: "Case Study",
  },
  {
    id: 5,
    img: project_five,
    title: "Revolutionizing Learning with Intuitive UI/UX Design",
    desc: "EduStream revolutionizes learning through intuitive UI/UX design",
    category: "UI/UX Design",
  },
  {
    id: 6,
    img: project_six,
    title: "Enhancing Nonprofit Missions with User-Centric UI/UX Solutions",
    desc: "ImpactfulDesign enhances nonprofit missions with user-centric solutions",
    category: "Full-Stack Development",
  },
];

const ProjectsTwo = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const filteredProjects = selectedCategory
    ? allProjects.filter((project) => project.category === selectedCategory)
    : allProjects;

  const filterProjects = (category: string) => {
    setSelectedCategory(category);
  };

  return (
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
            Worked Project
          </motion.h2>
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:text-[56px] text-2xl my-2 md:leading-[67.2px] leading-[28.8px] font-semibold text-secondary dark:text-white"
          >
            A Collection of Completed Projects
          </motion.h1>
          <motion.p
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:text-[16px] text-[12px] md:leading-[25.6px] leading-[19.2px] text-text_primary"
          >
            Explore my portfolio of completed projects, showcasing my expertise
            in web development and design. Each project highlights my ability to
            create engaging and functional digital experiences.
          </motion.p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-[10px] mt-5 justify-center">
          {[
            "UI/UX Design",
            "Front-End Development",
            "Full-Stack Development",
            "Case Study",
          ].map((category) => (
            <button
              key={category}
              className={` sm:py-4 sm:px-[10px] px-[5px] py-[10px] rounded-full transition border-text_primary border hover:bg-secondary dark:hover:bg-white dark:hover:text-black hover:text-white flex items-center justify-center ${
                selectedCategory === category
                  ? "bg-secondary dark:bg-white dark:text-black  text-white"
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-[50px] md:my-[60px] my-5">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex items-center pb-10 justify-center"
      >
        <button className="flex items-center gap-2 justify-center bg-white hover:bg-secondary hover:text-white transition-all text-black border border-secondary rounded-full py-4 px-7">
          See More <CgArrowRight size={20} />
        </button>
      </motion.div>
    </Container>
  );
};

export default ProjectsTwo;
