import { motion } from "framer-motion";
interface ProjectProps {
  id: number;
  img: string;
  title: string;
  desc: string;
}

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  const { id, img, title, desc } = project;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: id * 0.2 }}
      viewport={{ once: true }}
    >
      <img src={img} alt={`Project ${id}`} />
      <h1 className="mt-5 mb-[10px] text-secondary dark:text-white font-semibold  leading-[26px]">
        {title}
      </h1>
      <p className="text-[16px] text-text_primary dark:text-text_secondary leading-[25.6px]">
        {desc}
      </p>
    </motion.div>
  );
};

export default ProjectCard;
